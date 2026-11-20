(function () {
  const $ = id => document.getElementById(id);
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const num = n => Number(n || 0).toLocaleString("en-US");
  const pct = (a, b) => b ? Math.round(a / b * 1000) / 10 : 0;
  const STATUSES = ["New", "Contacted", "Qualified", "Won", "Lost"];
  const PROOFS = ["assets/proof/p6.jpg", "assets/proof/p5.jpg", "assets/proof/p4.jpg", "assets/proof/p3.jpg", "assets/proof/p2.jpg", "assets/proof/p1.jpg"];
  let PW = "", LEADS = [], EVENTS = {}, CONTENT = null, D = null, range = 7, statusF = "All";

  function toast(t) { const el = $("toast"); el.textContent = t; el.classList.add("show"); clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove("show"), 2200); }
  const live = AEStore.live();
  $("modeNote").textContent = live ? "Connected to Google Sheets backend." : "Demo mode: data is stored in this browser until the backend is connected.";
  $("modeBadge").textContent = live ? "● Live: Google Sheets" : "● Demo mode (this browser only)";
  $("modeBadge").classList.toggle("live", live);

  /* ---------- auth ---------- */
  async function enter(pw) {
    await AEStore.login(pw);
    PW = pw; try { sessionStorage.setItem("ae2-admin", pw); } catch (e) {}
    $("login").hidden = true; $("app").hidden = false;
    await loadAll();
  }
  $("loginForm").onsubmit = async e => {
    e.preventDefault(); $("loginErr").textContent = "";
    try { await enter($("pw").value); } catch (err) { $("loginErr").textContent = "Wrong password. Try again."; }
  };
  $("logout").onclick = () => { try { sessionStorage.removeItem("ae2-admin"); } catch (e) {} location.reload(); };
  try { const s = sessionStorage.getItem("ae2-admin"); if (s) enter(s).catch(() => {}); } catch (e) {}

  async function loadAll() {
    [LEADS, EVENTS, CONTENT] = await Promise.all([AEStore.leads(PW), AEStore.events(PW), AEStore.getContent()]);
    D = JSON.parse(JSON.stringify(CONTENT));
    renderOverview(); renderLeads(); renderContent(); renderSettings();
  }

  /* ---------- nav ---------- */
  $("sideNav").querySelectorAll("button").forEach(b => b.onclick = () => {
    $("sideNav").querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
    document.querySelectorAll(".view").forEach(v => v.classList.toggle("on", v.id === "v-" + b.dataset.v));
    scrollTo(0, 0);
  });

  /* ---------- overview ---------- */
  $("range").querySelectorAll("button").forEach(b => b.onclick = () => { range = +b.dataset.d; $("range").querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b)); renderOverview(); });
  const inRange = iso => !range || (Date.now() - new Date(iso).getTime()) <= range * 864e5;
  function evSum(name) {
    let s = 0; for (const d in EVENTS) if (inRange(d + "T12:00:00")) s += EVENTS[d][name] || 0; return s;
  }
  function breakdown(el, key) {
    const m = {}; LEADS.filter(l => inRange(l.created)).forEach(l => String(l[key] || "Unknown").split(", ").forEach(v => m[v] = (m[v] || 0) + 1));
    const arr = Object.entries(m).sort((a, b) => b[1] - a[1]); const max = arr[0]?.[1] || 1;
    $(el).innerHTML = arr.length ? `<div class="brk">${arr.map(([k, v]) => `<div class="brk-row"><span>${esc(k)}</span><b>${v}</b><div class="b"><i style="width:${v / max * 100}%"></i></div></div>`).join("")}</div>` : `<p class="muted">No data yet.</p>`;
  }
  function renderOverview() {
    const leads = LEADS.filter(l => inRange(l.created));
    const visits = evSum("visit"), starts = evSum("form_start"), subs = Math.max(evSum("submit"), leads.length), wa = evSum("wa_click") + evSum("wa_click_thanks");
    const won = leads.filter(l => l.status === "Won").length, qual = leads.filter(l => ["Qualified", "Won"].includes(l.status)).length;
    $("kpis").innerHTML = [
      ["Visits", num(visits)], ["Form starts", num(starts)], ["Leads", num(leads.length), "hl"],
      ["Calls booked", num(leads.filter(l => l.type === "meeting").length)], ["Visit → lead", pct(subs, visits) + "%", "y"], ["WhatsApp clicks", num(wa)]
    ].map(([k, v, c]) => `<div class="kpi ${c || ""}"><span>${k}</span><b>${v}</b></div>`).join("");
    renderUpcoming();

    const steps = (CONTENT.form.steps || []).map((s, i) => [`Q${i + 1}: ${s.q.en}`, evSum("step_" + (i + 1))]);
    const fun = [["Visited", visits], ["Started form", starts], ...steps, ["Submitted", subs]];
    const top = Math.max(1, ...fun.map(f => f[1]));
    let worst = { i: -1, d: 0 };
    $("funnel").innerHTML = fun.map(([k, v], i) => {
      const prev = i ? fun[i - 1][1] : v; const drop = i && prev ? Math.round((1 - v / prev) * 100) : 0;
      if (i > 1 && drop > worst.d) worst = { i, d: drop };
      return `<div class="fn-row"><span title="${esc(k)}">${esc(k.length > 18 ? k.slice(0, 17) + "…" : k)}</span><div class="fn-bar"><i style="width:${v / top * 100}%"></i><em>${num(v)}</em></div><span class="drop ${drop > 40 ? "bad" : ""}">${i ? (drop > 0 ? "−" + drop + "%" : "0%") : ""}</span></div>`;
    }).join("");

    const days = range || 30, now = new Date(); const series = [];
    for (let i = days - 1; i >= 0; i--) { const d = new Date(now - i * 864e5).toISOString().slice(0, 10); series.push([d, LEADS.filter(l => l.created.slice(0, 10) === d).length]); }
    const mx = Math.max(1, ...series.map(s => s[1])); const W = 600, H = 200, bw = W / series.length;
    $("lpd").innerHTML = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="none">${series.map(([d, v], i) => `<rect x="${i * bw + bw * .18}" y="${H - 18 - (v / mx) * (H - 34)}" width="${bw * .64}" height="${Math.max(2, (v / mx) * (H - 34))}" rx="3" fill="${v ? "#2050A3" : "#E4E2DA"}"><title>${d}: ${v}</title></rect>`).join("")}<text x="0" y="${H - 2}" font-size="10" fill="#6B6B66">${series[0][0].slice(5)}</text><text x="${W}" y="${H - 2}" font-size="10" fill="#6B6B66" text-anchor="end">${series[series.length - 1][0].slice(5)}</text></svg>`;
    $("lpdNote").textContent = `Last ${days} days · max ${mx}/day`;
    breakdown("bInd", "industry"); breakdown("bBud", "budget"); breakdown("bSrc", "source");

    const tips = [];
    if (!visits) tips.push("No traffic recorded yet. Share the site link in Amr's Instagram bio and story highlights to start the data.");
    if (visits && pct(starts, visits) < 8) tips.push(`Only <b>${pct(starts, visits)}%</b> of visitors start the form. Test a stronger offer in the form title (for example "Free 15-minute ad review") or move a CTA higher.`);
    if (worst.i > 0) tips.push(`Biggest drop: <b>${esc(fun[worst.i][0])}</b> loses ${worst.d}% of people. Simplify that question or reduce its options.`);
    if (wa > subs && visits) tips.push(`WhatsApp gets more clicks (${wa}) than the form (${subs}). That's fine: reply fast, and log those chats as leads manually if needed.`);
    const newL = LEADS.filter(l => l.status === "New").length;
    if (newL) tips.push(`<b>${newL}</b> lead(s) still marked New. Replies inside 5 minutes convert far better than next-day replies.`);
    if (!tips.length) tips.push("Funnel looks healthy. Keep the case studies fresh: add your newest big campaign at the top in Site content → Case studies.");
    $("tips").innerHTML = tips.map(t => `<li>${t}</li>`).join("");
    $("newCount").textContent = newL || "";
  }

  /* ---------- meetings ---------- */
  const WDN = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  function meetLabel(k) {
    if (!k) return "";
    const [ds, ts] = k.split(" "); const [y, m, d] = ds.split("-").map(Number); let [h, mi] = ts.split(":").map(Number);
    const pm = h >= 12; const h12 = h % 12 || 12;
    return `${WDN[new Date(Date.UTC(y, m - 1, d)).getUTCDay()]} ${d} ${["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][m - 1]} · ${h12}:${String(mi).padStart(2, "0")} ${pm ? "PM" : "AM"}`;
  }
  function renderUpcoming() {
    let card = $("upcoming");
    if (!card) { card = document.createElement("div"); card.className = "card"; card.id = "upcoming"; card.style.marginTop = "16px"; document.querySelector("#v-overview .tips").before(card); }
    const nowKey = new Date().toLocaleString("sv-SE", { timeZone: "Africa/Cairo" }).slice(0, 16);
    const up = LEADS.filter(l => l.meeting && l.meeting >= nowKey && l.status !== "Lost").sort((a, b) => a.meeting.localeCompare(b.meeting));
    card.innerHTML = `<div class="card-h"><h3>Upcoming calls</h3><span class="muted">Cairo time · ${up.length} booked</span></div>` +
      (up.length ? `<div class="up-list">${up.slice(0, 8).map(l => `<div class="up"><b>${meetLabel(l.meeting)}</b><span>${esc(l.name)}</span><a class="wa-l" target="_blank" rel="noopener" href="https://wa.me/${esc(String(l.phone).replace(/\D/g, ""))}">💬 ${esc(l.phone)}</a></div>`).join("")}</div>` : `<p class="muted">No calls booked yet. Visitors book from the "Book a call" tab on the site.</p>`);
  }

  /* ---------- leads ---------- */
  $("q").oninput = renderLeads;
  $("refresh").onclick = async () => { LEADS = await AEStore.leads(PW); EVENTS = await AEStore.events(PW); renderLeads(); renderOverview(); toast("Updated"); };
  function renderLeads() {
    const counts = { All: LEADS.length, Calls: LEADS.filter(l => l.type === "meeting").length }; STATUSES.forEach(s => counts[s] = LEADS.filter(l => l.status === s).length);
    $("statusChips").innerHTML = ["All", "Calls", ...STATUSES].map(s => `<button class="${s === statusF ? "on" : ""}" data-s="${s}">${s === "Calls" ? "📅 Calls" : s}<span>${counts[s]}</span></button>`).join("");
    $("statusChips").querySelectorAll("button").forEach(b => b.onclick = () => { statusF = b.dataset.s; renderLeads(); });
    const q = $("q").value.trim().toLowerCase();
    const rows = LEADS.filter(l => (statusF === "All" || (statusF === "Calls" ? l.type === "meeting" : l.status === statusF)) && (!q || [l.name, l.phone, l.brand].join(" ").toLowerCase().includes(q)));
    $("leadEmpty").hidden = !!rows.length;
    $("leadTbl").innerHTML = rows.length ? `<thead><tr><th>Date</th><th>Name</th><th>Type</th><th>WhatsApp</th><th>Industry</th><th>Budget</th><th>Goal</th><th>Platforms</th><th>Status</th></tr></thead><tbody>${rows.map(l => `
      <tr data-id="${esc(l.id)}">
        <td>${new Date(l.created).toLocaleString("en-GB", { day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit" })}</td>
        <td class="nm"><b>${esc(l.name)}</b><span>${esc(l.brand || "")}</span></td>
        <td>${l.type === "meeting" ? `<span class="tag-call">📅 ${esc(meetLabel(l.meeting))}</span>` : `<span class="tag-form">📝 Form</span>`}</td>
        <td><a class="wa-l" href="https://wa.me/${esc(String(l.phone).replace(/\D/g, ""))}" target="_blank" rel="noopener" onclick="event.stopPropagation()">💬 ${esc(l.phone)}</a></td>
        <td>${esc(l.industry)}</td><td>${esc(l.budget)}</td><td>${esc(l.goal)}</td><td>${esc(l.platforms)}</td>
        <td><select class="st st-${esc(l.status)}" data-id="${esc(l.id)}" onclick="event.stopPropagation()">${STATUSES.map(s => `<option ${s === l.status ? "selected" : ""}>${s}</option>`).join("")}</select></td>
      </tr>`).join("")}</tbody>` : "";
    $("leadTbl").querySelectorAll("select.st").forEach(s => s.onchange = async () => { await setLead(s.dataset.id, { status: s.value }); });
    $("leadTbl").querySelectorAll("tbody tr").forEach(tr => tr.onclick = () => openLead(tr.dataset.id));
  }
  async function setLead(id, patch) {
    const l = LEADS.find(x => x.id === id); Object.assign(l, patch);
    await AEStore.updateLead(PW, id, patch); renderLeads(); renderOverview(); toast("Saved");
  }
  function openLead(id) {
    const l = LEADS.find(x => x.id === id); if (!l) return;
    const fields = [["Type", l.type === "meeting" ? "Call booking" : "Form"], ["Call time", l.meeting ? meetLabel(l.meeting) + " (Cairo)" : ""], ["Phone", l.phone], ["Brand", l.brand], ["Industry", l.industry], ["Platforms", l.platforms], ["Budget", l.budget], ["Goal", l.goal], ["Language", l.lang], ["Source", l.source], ["Campaign", l.campaign], ["Received", new Date(l.created).toLocaleString("en-GB")]];
    const msg = encodeURIComponent(`Hi ${l.name}, this is Amr Essam. Thanks for reaching out about your ads. When's a good time for a quick call?`);
    $("drawerIn").innerHTML = `
      <div class="d-top"><div><h3>${esc(l.name)}</h3><select class="st st-${esc(l.status)}" id="dSt">${STATUSES.map(s => `<option ${s === l.status ? "selected" : ""}>${s}</option>`).join("")}</select></div><button class="x" id="dX">×</button></div>
      <dl class="dl">${fields.map(([k, v]) => `<dt>${k}</dt><dd>${esc(v || "-")}</dd>`).join("")}</dl>
      <a class="btn btn-blue full" style="background:#0F7A40" target="_blank" rel="noopener" href="https://wa.me/${esc(String(l.phone).replace(/\D/g, ""))}?text=${msg}">Reply on WhatsApp</a>
      <label class="fld" style="margin-top:18px"><span>Notes</span><textarea id="dNotes" rows="5" placeholder="Call notes, offer sent, follow-up date...">${esc(l.notes || "")}</textarea></label>
      <div class="row" style="justify-content:space-between"><button class="btn btn-red btn-sm" id="dDel">Delete lead</button><button class="btn btn-blue" id="dSave">Save notes</button></div>`;
    $("drawer").hidden = false;
    $("dX").onclick = () => $("drawer").hidden = true;
    $("dSt").onchange = e => { e.target.className = "st st-" + e.target.value; setLead(id, { status: e.target.value }); };
    $("dSave").onclick = async () => { await setLead(id, { notes: $("dNotes").value }); $("drawer").hidden = true; };
    $("dDel").onclick = async () => { if (!confirm("Delete this lead permanently?")) return; await AEStore.deleteLead(PW, id); LEADS = LEADS.filter(x => x.id !== id); $("drawer").hidden = true; renderLeads(); renderOverview(); toast("Deleted"); };
  }
  $("drawer").onclick = e => { if (e.target.id === "drawer") $("drawer").hidden = true; };
  $("csv").onclick = () => {
    const cols = ["created", "type", "meeting", "name", "phone", "brand", "industry", "platforms", "budget", "goal", "status", "notes", "source", "campaign", "lang"];
    const csv = [cols.join(","), ...LEADS.map(l => cols.map(c => `"${String(l[c] ?? "").replace(/"/g, '""')}"`).join(","))].join("\n");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob(["﻿" + csv], { type: "text/csv" })); a.download = `amr-leads-${new Date().toISOString().slice(0, 10)}.csv`; a.click();
  };

  /* ---------- editor helpers ---------- */
  const getP = (o, p) => p.split(".").reduce((a, k) => a == null ? a : a[k], o);
  function setP(o, p, v) { const ks = p.split("."); let t = o; ks.slice(0, -1).forEach(k => { if (t[k] == null) t[k] = /^\d+$/.test(k) ? [] : {}; t = t[k]; }); t[ks.at(-1)] = v; }
  const f = (p, label, type = "text", extra = "") => {
    const v = getP(D, p);
    if (type === "textarea") return `<label class="fld"><span>${label}</span><textarea data-p="${p}" ${extra}>${esc(v)}</textarea></label>`;
    if (type === "check") return `<label class="tog"><input type="checkbox" data-p="${p}" ${(v === true || (v === undefined && !p.endsWith(".mw"))) ? "checked" : ""}> ${label}</label>`;
    return `<label class="fld"><span>${label}</span><input type="${type}" data-p="${p}" value="${esc(v)}" ${type === "number" ? 'step="any"' : ""} ${extra}></label>`;
  };
  const bi = (p, label, ta) => `<div><span class="lbl">${label}</span><div class="bi">${f(p + ".en", "English", ta ? "textarea" : "text")}${f(p + ".ar", "العربية", ta ? "textarea" : "text", 'dir="rtl"')}</div></div>`;
  const itemShell = (listP, i, title, body, n) => `<div class="item"><div class="item-h"><b>${title}</b><div class="item-act"><button data-act="up" data-l="${listP}" data-i="${i}" ${i === 0 ? "disabled" : ""} title="Move up">↑</button><button data-act="down" data-l="${listP}" data-i="${i}" ${i === n - 1 ? "disabled" : ""} title="Move down">↓</button><button class="del" data-act="del" data-l="${listP}" data-i="${i}" title="Delete">✕</button></div></div>${body}</div>`;
  const addBtn = (listP, label) => `<button class="add" data-act="add" data-l="${listP}">+ ${label}</button>`;
  const BLANK = {
    stats: () => ({ value: "0", label: { en: "", ar: "" } }),
    services: () => ({ color: "blue", icon: "target", title: { en: "", ar: "" }, desc: { en: "", ar: "" } }),
    cases: () => ({ visible: true, rank: 0, img: "", tag: { en: "", ar: "" }, title: { en: "New case", ar: "" }, body: { en: "", ar: "" }, stats: [{ v: "", l: { en: "", ar: "" } }, { v: "", l: { en: "", ar: "" } }, { v: "", l: { en: "", ar: "" } }] }),
    industries: () => ({ t: { en: "", ar: "" }, k: { en: "", ar: "" } }),
    method: () => ({ t: { en: "", ar: "" }, p: { en: "", ar: "" } }),
    "campaign.windows": () => ({ name: { en: "New window", ar: "" }, proof: "", total: { spend: 0, purchases: 0, value: 0, roas: 0, cpp: 0 }, rows: [] }),
    rows: () => ({ spend: 0, purchases: 0, value: 0, roas: 0, cpp: 0 }),
    "form.steps": () => ({ key: "q" + Date.now().toString(36), type: "choice", q: { en: "New question", ar: "" }, options: [{ en: "Option", ar: "" }] }),
    options: () => ({ en: "", ar: "" }),
    "clients.items": () => ({ name: "Brand", logo: "" })
  };
  const blankFor = p => (BLANK[p] || BLANK[p.split(".").pop()] || (() => ({})))();

  /* ---------- content ---------- */
  const CT = [["hero", "Hero"], ["stats", "Big numbers"], ["clients", "Client logos"], ["campaign", "Campaign highlight"], ["cases", "Case studies"], ["services", "Services"], ["industries", "Industries & method"], ["reels", "Reels"], ["form", "Lead form"], ["json", "Advanced (JSON)"]];
  let ctab = "hero", dirty = false;
  function markDirty() { dirty = true; }
  function renderContent() {
    $("cTabs").innerHTML = CT.map(([k, n]) => `<button class="${k === ctab ? "on" : ""}" data-k="${k}">${n}</button>`).join("");
    $("cTabs").querySelectorAll("button").forEach(b => b.onclick = () => { ctab = b.dataset.k; renderContent(); });
    const body = { hero: edHero, stats: edStats, clients: edClients, campaign: edCampaign, cases: edCases, services: edServices, industries: edInd, reels: edReels, form: edForm, json: edJson }[ctab]();
    $("cBody").innerHTML = `<div class="ed">${body}</div>`;
    bind($("cBody"), renderContent);
  }
  function bind(root, rerender) {
    root.querySelectorAll("[data-p]").forEach(el => {
      const ev = el.type === "checkbox" ? "change" : "input";
      el.addEventListener(ev, () => {
        let v = el.type === "checkbox" ? el.checked : el.value;
        if (el.type === "number") v = v === "" ? 0 : Number(v);
        setP(D, el.dataset.p, v); markDirty();
        if (el.dataset.re) rerender();
      });
    });
    root.querySelectorAll("[data-act]").forEach(b => b.onclick = () => {
      const arr = getP(D, b.dataset.l); const i = +b.dataset.i;
      if (b.dataset.act === "add") arr.push(blankFor(b.dataset.l.replace(/\.\d+\./g, ".")));
      if (b.dataset.act === "del") { if (!confirm("Delete this item?")) return; arr.splice(i, 1); }
      if (b.dataset.act === "up" && i > 0) [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
      if (b.dataset.act === "down" && i < arr.length - 1) [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
      markDirty(); rerender();
    });
    root.querySelectorAll("[data-sortcases]").forEach(b => b.onclick = () => { D.cases.sort((a, b) => (b.rank || 0) - (a.rank || 0)); markDirty(); rerender(); });
  }
  const edHero = () => `<div class="item">${bi("hero.badge", "Badge")}${bi("hero.title", "Headline")}${bi("hero.sub1", "Left paragraph", 1)}${bi("hero.sub2", "Right paragraph", 1)}${bi("hero.cta", "Button text")}</div>`;
  const edStats = () => D.stats.map((s, i) => itemShell("stats", i, `Number ${i + 1}`, `${f(`stats.${i}.value`, "Value (shown as typed, e.g. 2.21M)")}${bi(`stats.${i}.label`, "Label")}`, D.stats.length)).join("") + addBtn("stats", "Add number");
  function edCampaign() {
    const W = D.campaign.windows;
    return `<div class="item">${bi("campaign.title", "Title")}${bi("campaign.lede", "Intro", 1)}</div>
      <p class="note">Each window is a tab on the site (for example "Full run" and a date range). Rows are sorted by spend automatically on the site, biggest first.</p>
      ${W.map((w, i) => itemShell("campaign.windows", i, esc(w.name.en || "Window"), `
        ${bi(`campaign.windows.${i}.name`, "Tab name")}
        ${proofPicker(`campaign.windows.${i}.proof`)}
        <span class="lbl">Totals</span>
        <div class="g5">${["spend", "purchases", "value", "roas", "cpp"].map(k => f(`campaign.windows.${i}.total.${k}`, { spend: "Spent", purchases: "Purchases", value: "Revenue", roas: "ROAS", cpp: "Cost/purchase" }[k], "number")).join("")}</div>
        <span class="lbl" style="margin-top:14px">Ad set rows</span>
        <table class="rowtbl"><thead><tr><th>Spent</th><th>Purchases</th><th>Revenue</th><th>ROAS</th><th>Cost/purchase</th><th></th></tr></thead><tbody>
        ${w.rows.map((r, j) => `<tr>${["spend", "purchases", "value", "roas", "cpp"].map(k => `<td><input class="in" type="number" step="any" data-p="campaign.windows.${i}.rows.${j}.${k}" value="${r[k]}"></td>`).join("")}<td><div class="item-act"><button class="del" data-act="del" data-l="campaign.windows.${i}.rows" data-i="${j}">✕</button></div></td></tr>`).join("")}
        </tbody></table>
        <button class="add" style="margin-top:8px" data-act="add" data-l="campaign.windows.${i}.rows">+ Add row</button>`, W.length)).join("")}
      ${addBtn("campaign.windows", "Add window")}`;
  }
  function proofPicker(p) {
    const v = getP(D, p) || "";
    return `<div class="fld"><span>Screenshot (pick one, or paste an image URL)</span><select data-p="${p}" data-re="1"><option value="">None</option>${PROOFS.map(x => `<option ${x === v ? "selected" : ""} value="${x}">${x.split("/").pop()}</option>`).join("")}${v && !PROOFS.includes(v) ? `<option selected value="${esc(v)}">${esc(v)}</option>` : ""}</select><input class="in" style="margin-top:6px" placeholder="https://... (optional custom image URL)" data-p="${p}" value="${PROOFS.includes(v) ? "" : esc(v)}">${v ? `<img class="thumb" src="../${esc(v)}" onerror="this.src='${esc(v)}'" alt="">` : ""}</div>`;
  }
  function edCases() {
    return `<div class="note">The site shows cases sorted by <b>Sort value</b>, highest first (use the revenue or spend number). <button class="btn btn-ghost btn-sm" data-sortcases>Sort this list the same way</button></div>` +
      D.cases.map((c, i) => itemShell("cases", i, `${c.visible === false ? "🙈 " : ""}${esc(c.title.en || "Case")}`, `
        <div class="row" style="justify-content:space-between;margin-bottom:10px">${f(`cases.${i}.visible`, "Show on site", "check")}<div style="width:200px">${f(`cases.${i}.rank`, "Sort value (higher = first)", "number")}</div></div>
        ${bi(`cases.${i}.tag`, "Tag line")}${bi(`cases.${i}.title`, "Title")}${bi(`cases.${i}.body`, "Description", 1)}
        <span class="lbl">Three stats</span>
        ${(c.stats || []).map((s, j) => `<div class="g3">${f(`cases.${i}.stats.${j}.v`, "Value")}${f(`cases.${i}.stats.${j}.l.en`, "Label EN")}${f(`cases.${i}.stats.${j}.l.ar`, "Label AR", "text", 'dir="rtl"')}</div>`).join("")}
        ${proofPicker(`cases.${i}.img`)}`, D.cases.length)).join("") + addBtn("cases", "Add case study");
  }
  const ICONS = ["meta", "tiktok", "snap", "email", "sms", "target", "test", "track"], COLS = ["blue", "gray", "mint", "orange", "yellow", "lilac", "pink"];
  const edClients = () => `<div class="item">${bi("clients.title", "Section title")}<div style="max-width:260px">${f("clients.speed", "Scroll speed (seconds per logo set, lower = faster)", "number")}</div></div>
    <p class="note">The strip loops by itself. Upload logo files (PNG or SVG, transparent background) to assets/logos in the repo and type the path, e.g. <b>assets/logos/brand.png</b>, or paste a full image URL. Empty logo = a placeholder with the name.</p>` +
    (D.clients.items || []).map((x, i) => itemShell("clients.items", i, esc(x.name || "Logo"), `<div class="bi">${f(`clients.items.${i}.name`, "Brand name")}${f(`clients.items.${i}.logo`, "Logo path or URL")}</div>${x.logo ? `<img src="${/^https?:/.test(x.logo) ? esc(x.logo) : "../" + esc(x.logo)}" style="max-height:50px;margin-top:8px" alt="">` : ""}`, D.clients.items.length)).join("") + addBtn("clients.items", "Add logo");
  BLANK.services = () => ({ color: "blue", icon: "target", mw: false, title: { en: "", ar: "" }, desc: { en: "", ar: "" } });
  const sel = (p, opts) => `<label class="fld"><span>${p.split(".").pop()}</span><select data-p="${p}">${opts.map(o => `<option ${getP(D, p) === o ? "selected" : ""}>${o}</option>`).join("")}</select></label>`;
  const edServices = () => `<p class="note">On phones, tiles show 3 per row. Tick "Wide on mobile" for tiles that should sit 2 per row (the video appears right after the last wide pair).</p>` + D.services.map((s, i) => itemShell("services", i, esc(s.title.en || "Service"), `<div class="g3">${sel(`services.${i}.color`, COLS)}${sel(`services.${i}.icon`, ICONS)}<div style="padding-top:22px">${f(`services.${i}.mw`, "Wide on mobile", "check")}</div></div>${bi(`services.${i}.title`, "Title")}${bi(`services.${i}.desc`, "Short line")}`, D.services.length)).join("") + addBtn("services", "Add service");
  const edInd = () => `<h3 class="lbl" style="font-size:15px">Industries</h3>` + D.industries.map((x, i) => itemShell("industries", i, esc(x.t.en || "Industry"), `${bi(`industries.${i}.t`, "Name")}${bi(`industries.${i}.k`, "What we optimize")}`, D.industries.length)).join("") + addBtn("industries", "Add industry") +
    `<h3 class="lbl" style="font-size:15px;margin-top:18px">Method steps</h3>` + D.method.map((x, i) => itemShell("method", i, esc(x.t.en || "Step"), `${bi(`method.${i}.t`, "Step")}${bi(`method.${i}.p`, "Description")}`, D.method.length)).join("") + addBtn("method", "Add step");
  const edReels = () => `<p class="note">Turn reels on or off, reorder them, and give them titles (empty title = "Reel 01" etc.). To add new reels, upload the .mp4 and .jpg to assets/reels in the repo, then add the ID here.</p>` +
    D.reels.map((r, i) => itemShell("reels", i, esc(r.id), `<div class="row" style="align-items:flex-start;gap:14px"><img src="../assets/reels/${esc(r.id)}.jpg" style="width:70px;border-radius:10px" alt=""><div style="flex:1">${f(`reels.${i}.visible`, "Show on site", "check")}<div style="margin-top:10px">${f(`reels.${i}.id`, "File ID")}</div><div class="bi">${f(`reels.${i}.title.en`, "Title EN")}${f(`reels.${i}.title.ar`, "Title AR", "text", 'dir="rtl"')}</div></div></div>`, D.reels.length)).join("") +
    `<button class="add" data-act="add" data-l="reels">+ Add reel</button>`;
  BLANK.reels = () => ({ id: "r01", visible: true, title: { en: "", ar: "" } });
  const edForm = () => `<div class="item">${bi("form.title", "Section title")}${bi("form.lede", "Intro line", 1)}${bi("form.thanks", "Thank-you message", 1)}</div>
    <p class="note">Questions appear one per screen. "choice" = one tap and auto-advance, "multi" = pick several then Continue. Name + WhatsApp are always asked last.</p>` +
    D.form.steps.map((s, i) => itemShell("form.steps", i, `Q${i + 1}: ${esc(s.q.en)}`, `
      <div class="g3">${f(`form.steps.${i}.key`, "Field key (column name)")}${sel(`form.steps.${i}.type`, ["choice", "multi"])}</div>
      ${bi(`form.steps.${i}.q`, "Question")}
      <span class="lbl">Options</span>
      ${s.options.map((o, j) => `<div class="row" style="flex-wrap:nowrap;margin-bottom:6px"><input class="in" data-p="form.steps.${i}.options.${j}.en" value="${esc(o.en)}" placeholder="English"><input class="in" dir="rtl" data-p="form.steps.${i}.options.${j}.ar" value="${esc(o.ar)}" placeholder="العربية"><div class="item-act"><button class="del" data-act="del" data-l="form.steps.${i}.options" data-i="${j}">✕</button></div></div>`).join("")}
      <button class="add" data-act="add" data-l="form.steps.${i}.options">+ Add option</button>`, D.form.steps.length)).join("") + addBtn("form.steps", "Add question");
  function edJson() {
    setTimeout(() => { const t = $("jsonTa"); t.oninput = () => { try { D = JSON.parse(t.value); t.style.borderColor = ""; markDirty(); } catch (e) { t.style.borderColor = "#E5484D"; } }; });
    return `<p class="note">Full site content as JSON. Edit carefully; invalid JSON is not applied.</p><textarea class="code" id="jsonTa">${esc(JSON.stringify(D, null, 2))}</textarea>`;
  }
  async function save(label) {
    try { await AEStore.saveContent(PW, D); CONTENT = JSON.parse(JSON.stringify(D)); dirty = false; toast(label || "Saved. Live on the site."); renderOverview(); }
    catch (e) { toast("Save failed: " + e.message); }
  }
  $("saveC").onclick = () => save();
  $("resetC").onclick = async () => { if (!confirm("Reset all site content to the original version?")) return; await AEStore.resetContent(PW); CONTENT = await AEStore.getContent(); D = JSON.parse(JSON.stringify(CONTENT)); renderContent(); renderSettings(); toast("Reset to default"); };
  addEventListener("beforeunload", e => { if (dirty) { e.preventDefault(); e.returnValue = ""; } });

  /* ---------- settings ---------- */
  function renderSettings() {
    const secs = Object.keys(D.settings.sections || {});
    $("sBody").innerHTML = `<div class="ed">
      <div class="item"><div class="item-h"><b>WhatsApp</b></div>
        ${f("settings.whatsapp", "Number with country code, digits only (e.g. 201066784167)")}
        ${bi("settings.waMessage", "Pre-filled message when someone taps WhatsApp", 1)}
        ${bi("settings.waPopup", "Popup bubble text", 1)}
        <div style="max-width:240px">${f("settings.waDelay", "Popup appears after (seconds)", "number")}</div>
      </div>
      <div class="item"><div class="item-h"><b>Contact section</b></div>
        <div class="row" style="margin-bottom:12px">${f("settings.lockForms", "Lock “Book a call” and “Grow with us” (show only the link button)", "check")}</div>
        ${f("settings.linkUrl", "Link button URL (e.g. Linktree)")}
        ${bi("settings.linkLabel", "Link button title")}${bi("settings.linkSub", "Link button small line")}${bi("settings.linkLede", "Intro line above the buttons while locked", 1)}
        <p class="note">While locked, every CTA on the site scrolls to this link button. Untick to bring back call booking and the questions form. The WhatsApp button is not affected.</p>
      </div>
      <div class="item"><div class="item-h"><b>Call booking</b></div>
        <div class="row" style="gap:18px;margin-bottom:12px">${f("settings.meeting.enabled", "Show “Book a call” option", "check")}</div>
        ${sel("settings.meeting.defaultMode", ["book", "form"]).replace("<span>defaultMode</span>", "<span>Open first (book = call booking, form = questions)</span>")}
        <div class="g3">${f("settings.meeting.duration", "Call length (minutes)", "number")}${f("settings.meeting.start", "First slot (HH:MM)")}${f("settings.meeting.end", "Day ends (HH:MM)")}</div>
        <div class="g3" style="margin-top:10px">${f("settings.meeting.daysAhead", "Days shown", "number")}${f("settings.meeting.noticeHours", "Minimum notice (hours)", "number")}</div>
        <span class="lbl" style="margin-top:12px">Working days</span>
        <div class="row" style="gap:12px;margin-bottom:12px" id="wdBox">${["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => `<label class="tog"><input type="checkbox" data-wd="${i}" ${(D.settings.meeting.workDays || []).includes(i) ? "checked" : ""}> ${d}</label>`).join("")}</div>
        ${bi("settings.meeting.title", "Booking title")}${bi("settings.meeting.hint", "Booking hint")}
        ${f("settings.meeting.bookingUrl", "Optional: Calendly / Google booking link (replaces the built-in picker)")}
        <p class="note">Booked calls appear in Leads (📅 Calls) and on the Overview. Times are Cairo time; a booked slot disappears for other visitors once the Google Sheet is connected.</p>
      </div>
      <div class="item"><div class="item-h"><b>Links</b></div>${f("settings.instagram", "Instagram URL")}${f("settings.linkedin", "LinkedIn URL")}</div>
      <div class="item"><div class="item-h"><b>Sections on the site</b></div><div class="row" style="gap:18px">${secs.map(s => f(`settings.sections.${s}`, s[0].toUpperCase() + s.slice(1), "check")).join("")}</div></div>
      <div class="item"><div class="item-h"><b>Change password</b></div>
        <div class="bi"><label class="fld"><span>New password</span><input type="password" id="np1" autocomplete="new-password"></label><label class="fld"><span>Repeat</span><input type="password" id="np2" autocomplete="new-password"></label></div>
        <button class="btn btn-ghost" id="setPw">Update password</button>
      </div>
      <div class="item"><div class="item-h"><b>Backend</b></div><p class="note">${live ? "Connected to Google Sheets. Leads are stored in the sheet and emailed to the owner." : "Demo mode. Leads, stats and edits live in this browser only. Follow SETUP.md (5 minutes, free) to connect Google Sheets so leads from every visitor arrive here and by email."}</p></div>
    </div>`;
    bind($("sBody"), renderSettings);
    $("wdBox").querySelectorAll("[data-wd]").forEach(c => c.onchange = () => {
      D.settings.meeting.workDays = [...$("wdBox").querySelectorAll("[data-wd]:checked")].map(x => +x.dataset.wd); markDirty();
    });
    $("setPw").onclick = async () => {
      const a = $("np1").value, b = $("np2").value;
      if (a.length < 8) return toast("Use at least 8 characters");
      if (a !== b) return toast("Passwords don't match");
      try { await AEStore.setPassword(PW, a); PW = a; try { sessionStorage.setItem("ae2-admin", a); } catch (e) {} toast("Password updated"); $("np1").value = $("np2").value = ""; } catch (e) { toast("Failed: " + e.message); }
    };
  }
  $("saveS").onclick = () => save("Settings saved");
})();

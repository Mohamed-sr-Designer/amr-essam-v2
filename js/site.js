(async function () {
  const UI = {
    en: {
      "nav.results": "Results", "nav.cases": "Case studies", "nav.reels": "Reels",
      "k.campaign": "Campaign highlight", "k.cases": "Case studies", "k.ind": "Industries", "k.method": "How I work", "k.reels": "On camera",
      "cases.title": "Results In Action", "cases.lede": "Ranked from the biggest number down. Brand names stay private, the receipts don't.",
      "ind.title": "Different Markets. Same Obsession.", "method.title": "The Loop That Never Stops.", "reels.title": "Straight Talk On Ads.",
      "lf.private": "Private. No spam.", "lf.fast": "Reply within 24h", "foot.role": "Senior Performance Marketer · Meta Ads · TikTok Ads",
      "wa.online": "Online now", "wa.chat": "Chat on WhatsApp",
      spent: "Amount spent", purchases: "Purchases", value: "Purchase value", roas: "ROAS", cpp: "Cost / purchase",
      totSpent: "Total spent, EGP", totValue: "Revenue, EGP", totRoas: "Avg ROAS",
      bigSet: "Biggest ad set", bigSetP: "spent → returned", bestRoas: "Best ROAS in this run", bestRoasP: "on", receipt: "View Ads Manager receipt ↗",
      pick: "Pick one", pickMany: "Pick all that apply", cont: "Continue", back: "← Back",
      cName: "Almost done. Where should Amr reach you?", cHint: "Your details go to Amr only.", fName: "Your name", fPhone: "WhatsApp number", fBrand: "Brand or website (optional)",
      send: "Get my free ad review", sending: "Sending...", errReq: "Please add your name and a valid WhatsApp number.",
      thanksT: "You're in.", waNow: "Message Amr on WhatsApp now", vtag: "Amr Essam", vtag2: "Media buyer", reel: "Reel", watch: "Watch",
      "cta.book": "Book a free call", "cta.review": "Get a free ad review",
      "mode.book": "Book a call", "mode.bookS": "1 click · 30 min", "mode.form": "Grow with us", "mode.formS": "5 quick questions",
      today: "Today", tomorrow: "Tomorrow", noSlots: "No free times left this day. Try another day.", yourDetails: "Your details", pickFirst: "Pick a time above, then confirm.",
      confirm: "Confirm my call", booking: "Booking...", bookedT: "Your call is booked.", bookedP: "See you on WhatsApp,", addCal: "Add to Google Calendar", waConfirm: "Confirm on WhatsApp", min: "min"
    },
    ar: {
      "nav.results": "النتائج", "nav.cases": "دراسات حالة", "nav.reels": "الريلز",
      "k.campaign": "حملة مميزة", "k.cases": "دراسات حالة", "k.ind": "المجالات", "k.method": "طريقة الشغل", "k.reels": "قدام الكاميرا",
      "cases.title": "النتائج على أرض الواقع", "cases.lede": "مرتبة من الرقم الأكبر للأصغر. أسماء البراندات سرية، الإثباتات لأ.",
      "ind.title": "أسواق مختلفة. نفس الهوس.", "method.title": "الدايرة اللي مبتقفش.", "reels.title": "كلام صريح عن الإعلانات.",
      "lf.private": "بياناتك سرية", "lf.fast": "رد خلال 24 ساعة", "foot.role": "Senior Performance Marketer · Meta Ads · TikTok Ads",
      "wa.online": "متاح دلوقتي", "wa.chat": "كلمني على واتساب",
      spent: "المصروف", purchases: "المشتريات", value: "قيمة المشتريات", roas: "ROAS", cpp: "تكلفة الشراء",
      totSpent: "إجمالي الصرف، ج.م", totValue: "المبيعات، ج.م", totRoas: "متوسط ROAS",
      bigSet: "أكبر مجموعة إعلانية", bigSetP: "صرف ← رجّع", bestRoas: "أعلى ROAS في الفترة", bestRoasP: "على صرف", receipt: "شوف إثبات Ads Manager ↗",
      pick: "اختار واحدة", pickMany: "اختار كل اللي ينطبق", cont: "كمّل", back: "→ رجوع",
      cName: "خلاص قربنا. عمرو يكلمك فين؟", cHint: "بياناتك بتروح لعمرو بس.", fName: "اسمك", fPhone: "رقم الواتساب", fBrand: "البراند أو الموقع (اختياري)",
      send: "عايز مراجعة مجانية لإعلاناتي", sending: "بيتبعت...", errReq: "من فضلك اكتب اسمك ورقم واتساب صحيح.",
      thanksT: "وصلنا طلبك.", waNow: "كلّم عمرو على واتساب دلوقتي", vtag: "عمرو عصام", vtag2: "ميديا باير", reel: "ريل", watch: "اتفرج",
      "foot.role": "Senior Performance Marketer · Meta · TikTok · Snapchat · إيميل · SMS",
      "cta.book": "احجز مكالمة مجانية", "cta.review": "خد مراجعة مجانية لإعلاناتك",
      "mode.book": "احجز مكالمة", "mode.bookS": "ضغطة واحدة · 30 دقيقة", "mode.form": "اكبر معانا", "mode.formS": "5 أسئلة سريعة",
      today: "النهارده", tomorrow: "بكرة", noSlots: "مفيش مواعيد فاضية اليوم ده. جرّب يوم تاني.", yourDetails: "بياناتك", pickFirst: "اختار معاد من فوق وبعدين أكّد.",
      confirm: "أكّد المكالمة", booking: "بيتحجز...", bookedT: "مكالمتك اتحجزت.", bookedP: "عمرو هيكلمك على واتساب يوم", addCal: "ضيفها لـ Google Calendar", waConfirm: "أكّد على واتساب", min: "دقيقة"
    }
  };
  const ICONS = {
    meta: '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" fill="#1877F2"/><path fill="#fff" d="M26.6 38V26.8h3.8l.6-4.4h-4.4v-2.8c0-1.3.4-2.1 2.2-2.1h2.3v-3.9c-.4 0-1.8-.2-3.4-.2-3.3 0-5.6 2-5.6 5.8v3.2h-3.8v4.4h3.8V38h4.5z"/></svg>',
    tiktok: '<svg viewBox="0 0 48 48"><path fill="#25F4EE" d="M20 20.5v-1.6a12 12 0 0 0-1.7-.1 12.5 12.5 0 0 0-7 22.8 12.5 12.5 0 0 1 8.7-21.1z"/><path fill="#FE2C55" d="M20.3 37.6a5.7 5.7 0 0 0 5.7-5.5V5.6h4.9a9.3 9.3 0 0 1-.2-1.6h-6.6v26.6a5.7 5.7 0 0 1-8.3 5 5.7 5.7 0 0 0 4.5 2zM36.6 14.6v-1.5a9.3 9.3 0 0 1-5.1-1.5 9.3 9.3 0 0 0 5.1 3z"/><path fill="#111" d="M31.5 11.6a9.3 9.3 0 0 1-2.3-6H26v26.5a5.7 5.7 0 0 1-10.2 3.5A5.7 5.7 0 0 1 20 25V20.5a12.5 12.5 0 0 0-8.7 21.1 12.5 12.5 0 0 0 19.3-10.5V17.6a16 16 0 0 0 9.4 3v-6a9.4 9.4 0 0 1-8.5-3z"/></svg>',
    target: '<svg viewBox="0 0 48 48" fill="none" stroke="#111" stroke-width="3"><circle cx="24" cy="24" r="18"/><circle cx="24" cy="24" r="10"/><circle cx="24" cy="24" r="3" fill="#111"/></svg>',
    test: '<svg viewBox="0 0 48 48" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"><path d="M8 38l10-12 8 6 14-18"/><path d="M32 14h8v8"/></svg>',
    track: '<svg viewBox="0 0 48 48" fill="none" stroke="#111" stroke-width="3" stroke-linecap="round"><rect x="8" y="26" width="7" height="14" rx="2"/><rect x="20.5" y="18" width="7" height="22" rx="2"/><rect x="33" y="9" width="7" height="31" rx="2"/></svg>',
    snap: '<svg viewBox="0 0 48 48"><rect x="2" y="2" width="44" height="44" rx="12" fill="#FFFC00"/><path fill="#fff" stroke="#111" stroke-width="2" stroke-linejoin="round" d="M24 9.5c4.6 0 8.2 3.5 8.2 8.3v4.4c.9.4 2 .1 2.8-.3.9-.4 2 .6 1.2 1.5-.9.9-2.6 1.4-3.6 1.9.6 2.6 3 5.4 6 6.3.7.2.8 1.1.1 1.4-1.4.6-2.9.9-4.1 1.1-.3.6-.3 1.6-.7 2.1-.4.4-1.9 0-3.1.2-1.8.3-3.4 2.5-6.8 2.5s-5-2.2-6.8-2.5c-1.2-.2-2.7.2-3.1-.2-.4-.5-.4-1.5-.7-2.1-1.2-.2-2.7-.5-4.1-1.1-.7-.3-.6-1.2.1-1.4 3-.9 5.4-3.7 6-6.3-1-.5-2.7-1-3.6-1.9-.8-.9.3-1.9 1.2-1.5.8.4 1.9.7 2.8.3v-4.4c0-4.8 3.6-8.3 8.2-8.3z"/></svg>',
    email: '<svg viewBox="0 0 48 48" fill="none" stroke="#111" stroke-width="3" stroke-linejoin="round"><rect x="6" y="11" width="36" height="26" rx="5" fill="#fff"/><path d="M8 14l16 12 16-12" stroke-linecap="round"/></svg>',
    sms: '<svg viewBox="0 0 48 48" fill="none" stroke="#111" stroke-width="3" stroke-linejoin="round"><path d="M8 12a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H20l-9 7v-7h1a4 4 0 0 1-4-4z" fill="#fff"/><circle cx="17" cy="20" r="1.8" fill="#111" stroke="none"/><circle cx="24" cy="20" r="1.8" fill="#111" stroke="none"/><circle cx="31" cy="20" r="1.8" fill="#111" stroke="none"/></svg>'
  };
  const COLORS = ["blue", "gray", "mint", "orange", "yellow", "lilac", "pink"];

  const C = await AEStore.getContent();
  let lang = "en";
  try { lang = localStorage.getItem("ae2-lang") || (navigator.language || "").startsWith("ar") && "ar" || "en"; } catch (e) {}
  const L = o => (o && typeof o === "object") ? (o[lang] ?? o.en ?? "") : (o ?? "");
  const T = k => UI[lang][k] ?? UI.en[k] ?? k;
  const get = (obj, path) => path.split(".").reduce((a, k) => a && a[k], obj);
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const money = (n, d = 0) => Number(n).toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
  const short = n => n >= 1e6 ? (n / 1e6).toFixed(2).replace(/\.?0+$/, "") + "M" : n >= 1e3 ? (n / 1e3).toFixed(1).replace(/\.0$/, "") + "K" : String(n);
  const $ = id => document.getElementById(id);
  const waLink = (txt) => `https://wa.me/${(C.settings.whatsapp || "").replace(/\D/g, "")}?text=${encodeURIComponent(txt || L(C.settings.waMessage))}`;

  /* -------- render -------- */
  function renderStatic() {
    const ar = lang === "ar";
    document.documentElement.lang = ar ? "ar" : "en";
    document.documentElement.dir = ar ? "rtl" : "ltr";
    $("lang").textContent = ar ? "EN" : "عربي";
    document.querySelectorAll("[data-t]").forEach(el => el.textContent = T(el.dataset.t));
    document.querySelectorAll("[data-c]").forEach(el => el.textContent = L(get(C, el.dataset.c)));
    Object.entries(C.settings.sections || {}).forEach(([k, v]) => { const s = document.querySelector(`[data-sec="${k}"]`); if (s) s.hidden = !v; });
    $("fIg").href = C.settings.instagram; $("fIn").href = C.settings.linkedin; $("fWa").href = waLink();
  }

  function renderBento() {
    const s = C.services, n = s.length;
    // desktop: 4 columns, video spans 2 rows at column 3; the last tiles stretch to close the final row
    const cells = n + 2, rem = cells % 4, wideFrom = rem ? n - (4 - rem) : n;
    // mobile: video sits after the first "mw" (two-per-row) pair
    let lastMw = -1; s.forEach((x, i) => { if (x.mw) lastMw = i; });
    const vidOrder = (lastMw > -1 ? lastMw : Math.min(2, n - 1)) * 2 + 1;
    const tile = (x, i) => `<div class="tile t-${esc(x.color)} ${i >= wideFrom ? "wide" : ""} ${x.mw ? "mw" : ""}" style="--o:${i * 2}"><div class="tx"><h3>${esc(L(x.title))}</h3><p>${esc(L(x.desc))}</p></div><span class="ico">${ICONS[x.icon] || ICONS.track}</span></div>`;
    const vid = `<div class="tile vid" style="--o:${vidOrder}"><video src="assets/hero.mp4" poster="assets/reels/r03.jpg" autoplay muted loop playsinline></video><div class="vtag"><span><b>${T("vtag")}</b><br>${T("vtag2")}</span><span class="pulse"></span></div></div>`;
    const parts = s.map(tile);
    parts.splice(Math.min(2, parts.length), 0, vid);
    $("bento").innerHTML = parts.join("");
  }

  function renderClients() {
    const cl = C.clients || {}; const items = (cl.items || []).filter(x => x.name || x.logo);
    if (!items.length) { $("clients").hidden = true; return; }
    const one = items.map(x => `<div class="cl-item">${x.logo ? `<img src="${esc(x.logo)}" alt="${esc(x.name)}" loading="lazy">` : `<span class="cl-ph">${esc(x.name)}</span>`}</div>`).join("");
    let reps = 2; while (reps * items.length < 12) reps += 2;
    $("clTrack").innerHTML = Array(reps).fill(one).join("");
    $("clTrack").style.setProperty("--dur", Math.max(10, (+cl.speed || 30) * items.length * reps / 16) + "s");
  }

  function renderStats() {
    $("stats").innerHTML = C.stats.map(s => `<div class="stat rv"><b>${esc(s.value)}</b><span>${esc(L(s.label))}</span></div>`).join("");
  }

  let win = 0;
  function renderCampaign() {
    const W = C.campaign.windows || [];
    if (!W.length) return;
    $("winTabs").innerHTML = W.map((w, i) => `<button role="tab" class="${i === win ? "on" : ""}" data-i="${i}">${esc(L(w.name))}</button>`).join("");
    $("winTabs").querySelectorAll("button").forEach(b => b.onclick = () => { win = +b.dataset.i; renderCampaign(); });
    const w = W[win];
    const rows = [...w.rows].sort((a, b) => b.spend - a.spend);
    const maxV = Math.max(...rows.map(r => r.value));
    const best = [...rows].sort((a, b) => b.roas - a.roas)[0];
    const big = rows[0];
    $("camp").innerHTML = `
      <div class="camp-card">
        <div class="camp-total">
          <div><span>${T("totSpent")}</span><b>${money(w.total.spend)}</b></div>
          <div class="hl"><span>${T("totValue")}</span><b>${money(w.total.value)}</b></div>
          <div><span>${T("totRoas")}</span><b>${money(w.total.roas, 2)}x</b></div>
        </div>
        <table class="ctab">
          <thead><tr><th>#</th><th>${T("spent")}</th><th class="hide-m">${T("purchases")}</th><th>${T("value")}</th><th>${T("roas")}</th><th class="hide-m">${T("cpp")}</th></tr></thead>
          <tbody>${rows.map((r, i) => `<tr class="${i === 0 ? "top" : ""}">
            <td><span class="rk">${i + 1}</span></td>
            <td>${money(r.spend, 2)}</td>
            <td class="hide-m">${money(r.purchases)}</td>
            <td>${money(r.value, 2)}<div class="sbar"><i data-w="${(r.value / maxV * 100).toFixed(0)}"></i></div></td>
            <td class="roas ${r.roas >= 12 ? "hot" : ""}">${money(r.roas, 2)}x</td>
            <td class="hide-m">${money(r.cpp, 2)}</td></tr>`).join("")}
            <tr><td></td><td><b>${money(w.total.spend, 2)}</b></td><td class="hide-m"><b>${money(w.total.purchases)}</b></td><td><b>${money(w.total.value, 2)}</b></td><td class="roas"><b>${money(w.total.roas, 2)}x</b></td><td class="hide-m"><b>${money(w.total.cpp, 2)}</b></td></tr>
          </tbody>
        </table>
      </div>
      <div class="camp-side">
        <div class="big-card"><span>${T("bigSet")}</span><b>${short(big.spend)} → ${short(big.value)}</b><p>EGP · ${T("bigSetP")} · ${money(big.purchases)} ${T("purchases").toLowerCase()}</p></div>
        <div class="big-card y"><span>${T("bestRoas")}</span><b>${money(best.roas, 2)}x</b><p>${T("bestRoasP")} EGP ${money(best.spend)}</p></div>
        <button class="proof" data-img="${esc(w.proof)}"><img src="${esc(w.proof)}" alt="Ads Manager screenshot" loading="lazy"><span>${T("receipt")}</span></button>
      </div>`;
    $("camp").querySelectorAll(".proof").forEach(b => b.onclick = () => lightbox(`<img src="${b.dataset.img}" alt="">`));
    requestAnimationFrame(() => setTimeout(() => $("camp").querySelectorAll(".sbar i").forEach(i => i.style.transform = `scaleX(${i.dataset.w / 100})`), 60));
  }

  function renderCases() {
    const list = C.cases.filter(c => c.visible !== false).sort((a, b) => (b.rank || 0) - (a.rank || 0));
    $("caseList").innerHTML = list.map((c, i) => `
      <article class="case rv">
        <div class="case-rank">${String(i + 1).padStart(2, "0")}</div>
        <div>
          <span class="case-tag">${esc(L(c.tag))}</span>
          <h3>${esc(L(c.title))}</h3>
          <p>${esc(L(c.body))}</p>
          <div class="case-stats">${(c.stats || []).map(s => `<div><b>${esc(s.v)}</b><span>${esc(L(s.l))}</span></div>`).join("")}</div>
        </div>
        ${c.img ? `<button class="proof" data-img="${esc(c.img)}"><img src="${esc(c.img)}" alt="Results screenshot" loading="lazy"><span>${T("receipt")}</span></button>` : ""}
      </article>`).join("");
    $("caseList").querySelectorAll(".proof").forEach(b => b.onclick = () => lightbox(`<img src="${b.dataset.img}" alt="">`));
  }

  function renderInd() {
    $("indList").innerHTML = C.industries.map((x, i) => `<div class="ind-chip t-${COLORS[i % COLORS.length]} rv"><b>${esc(L(x.t))}</b><span>${esc(L(x.k))}</span></div>`).join("");
    $("stepList").innerHTML = C.method.map(x => `<li class="rv"><h3>${esc(L(x.t))}</h3><p>${esc(L(x.p))}</p></li>`).join("");
  }

  function renderReels() {
    const list = C.reels.filter(r => r.visible !== false);
    $("reelList").innerHTML = list.map((r, i) => `<div class="reel" data-id="${esc(r.id)}" role="button" tabindex="0"><img src="assets/reels/${esc(r.id)}.jpg" alt="" loading="lazy"><div class="rp"><span>${esc(L(r.title) || T("reel") + " " + String(i + 1).padStart(2, "0"))}</span><i>▶</i></div></div>`).join("");
    $("reelList").querySelectorAll(".reel").forEach(el => {
      let v;
      el.onmouseenter = () => {
        if (matchMedia("(hover:none)").matches) return;
        if (!v) { v = document.createElement("video"); Object.assign(v, { src: `assets/reels/${el.dataset.id}.mp4`, muted: true, loop: true, playsInline: true }); el.prepend(v); }
        v.play().then(() => el.classList.add("playing")).catch(() => {});
      };
      el.onmouseleave = () => { if (v) { v.pause(); el.classList.remove("playing"); } };
      const open = () => { lightbox(`<video src="assets/reels/${el.dataset.id}.mp4" controls autoplay playsinline></video>`); AEStore.track("reel_play"); };
      el.onclick = open; el.onkeydown = e => { if (e.key === "Enter") open(); };
    });
  }
  const scrollR = d => { const r = $("reelList"); const w = r.querySelector(".reel")?.offsetWidth || 240; r.scrollBy({ left: d * (w + 14) * 2 * (lang === "ar" ? -1 : 1), behavior: "smooth" }); };
  $("rn").onclick = () => scrollR(1); $("rp").onclick = () => scrollR(-1);

  /* -------- lead form -------- */
  const S = C.form.steps;
  const TOTAL = S.length + 1;
  let step = 0, started = false;
  const ans = {};
  const contact = { name: "", phone: "", brand: "" };

  function setProgress() {
    $("lfBar").style.transform = `scaleX(${Math.min(step, TOTAL) / TOTAL})`;
    $("lfCount").textContent = step >= TOTAL ? "✓" : `${step + 1} / ${TOTAL}`;
  }
  function swap(html, after) {
    const stage = $("lfStage"); const cur = stage.firstElementChild;
    const put = () => { stage.innerHTML = `<div class="q">${html}</div>`; after && after(); };
    if (cur) { cur.classList.add("out"); setTimeout(put, 220); } else put();
    setProgress();
  }
  function startTrack() { if (!started) { started = true; AEStore.track("form_start"); } }

  function renderStep() {
    if (step < S.length) {
      const s = S[step], multi = s.type === "multi";
      const sel = ans[s.key] || [];
      swap(`
        <h3>${esc(L(s.q))}</h3><p class="hint">${multi ? T("pickMany") : T("pick")}</p>
        <div class="opts">${s.options.map((o, i) => `<button type="button" class="opt ${sel.includes(o.en) ? "sel" : ""}" data-v="${esc(o.en)}"><kbd>${String.fromCharCode(65 + i)}</kbd>${esc(L(o))}</button>`).join("")}</div>
        <div class="q-nav">${step > 0 ? `<button type="button" class="back">${T("back")}</button>` : "<span></span>"}${multi ? `<button type="button" class="btn btn-blue cont" ${sel.length ? "" : "disabled style='opacity:.4'"}>${T("cont")}</button>` : ""}</div>`, () => {
        const stage = $("lfStage");
        stage.querySelectorAll(".opt").forEach(b => b.onclick = () => pickOpt(b, s));
        stage.querySelector(".back")?.addEventListener("click", () => { step--; renderStep(); });
        stage.querySelector(".cont")?.addEventListener("click", next);
      });
    } else if (step === S.length) {
      swap(`
        <h3>${T("cName")}</h3><p class="hint">${T("cHint")}</p>
        <form id="cForm" novalidate>
          <label class="fld"><span>${T("fName")}</span><input name="name" autocomplete="name" value="${esc(contact.name)}" required></label>
          <label class="fld"><span>${T("fPhone")}</span><div class="phone-row"><input class="cc" name="cc" value="+20" inputmode="tel" aria-label="Country code"><input name="phone" inputmode="tel" autocomplete="tel-national" placeholder="10 1234 5678" value="${esc(contact.phone)}" required></div></label>
          <label class="fld"><span>${T("fBrand")}</span><input name="brand" autocomplete="organization" value="${esc(contact.brand)}"></label>
          <p class="err" id="cErr"></p>
          <div class="q-nav"><button type="button" class="back">${T("back")}</button><button type="submit" class="btn btn-blue">${T("send")}</button></div>
        </form>`, () => {
        const f = $("cForm");
        setTimeout(() => f.name.focus({ preventScroll: true }), 300);
        f.querySelector(".back").onclick = () => { Object.assign(contact, { name: f.name.value, phone: f.phone.value, brand: f.brand.value }); step--; renderStep(); };
        f.onsubmit = submit;
      });
    } else {
      const summary = [`${L({ en: "Hi Amr, I just filled your form.", ar: "أهلًا عمرو، لسه مالي الفورم." })}`, ...S.map(s => `${L(s.q)} ${(ans[s.key] || []).join(", ")}`), `${contact.name}${contact.brand ? " · " + contact.brand : ""}`].join("\n");
      swap(`<div class="thanks"><div class="ok"><svg viewBox="0 0 40 40"><path d="M9 21l7 7 15-16"/></svg></div><h3>${T("thanksT")}</h3><p>${esc(L(C.form.thanks))}</p><a class="btn btn-wa" id="tyWa" target="_blank" rel="noopener" href="${waLink(summary)}">${T("waNow")} →</a></div>`, () => {
        $("tyWa").onclick = () => AEStore.track("wa_click_thanks");
      });
    }
  }
  function pickOpt(b, s) {
    startTrack();
    const v = b.dataset.v;
    if (s.type === "multi") {
      const a = new Set(ans[s.key] || []);
      if (v === "Not yet") a.clear();
      else a.delete("Not yet");
      a.has(v) ? a.delete(v) : a.add(v);
      ans[s.key] = [...a];
      b.parentElement.querySelectorAll(".opt").forEach(o => o.classList.toggle("sel", a.has(o.dataset.v)));
      const c = $("lfStage").querySelector(".cont"); if (c) { c.disabled = !a.size; c.style.opacity = a.size ? 1 : .4; }
    } else {
      ans[s.key] = [v];
      b.parentElement.querySelectorAll(".opt").forEach(o => o.classList.toggle("sel", o === b));
      setTimeout(next, 260);
    }
  }
  function next() { AEStore.track("step_" + (step + 1)); step++; renderStep(); }
  async function submit(e) {
    e.preventDefault();
    const f = e.target;
    const name = f.name.value.trim(); const digits = f.phone.value.replace(/\D/g, "").replace(/^0+/, "");
    const cc = f.cc.value.replace(/\D/g, "") || "20";
    f.name.classList.toggle("bad", !name); f.phone.classList.toggle("bad", digits.length < 8);
    if (!name || digits.length < 8) { $("cErr").textContent = T("errReq"); return; }
    const btn = f.querySelector("[type=submit]"); btn.textContent = T("sending"); btn.disabled = true;
    Object.assign(contact, { name, phone: "+" + cc + digits, brand: f.brand.value.trim() });
    const q = new URLSearchParams(location.search);
    await AEStore.submitLead({
      name, phone: contact.phone, brand: contact.brand, lang,
      industry: (ans.industry || []).join(", "), platforms: (ans.platforms || []).join(", "),
      budget: (ans.budget || []).join(", "), goal: (ans.goal || []).join(", "),
      answers: ans, source: q.get("utm_source") || (document.referrer ? new URL(document.referrer).hostname : "direct"), campaign: q.get("utm_campaign") || ""
    });
    AEStore.track("submit");
    step = TOTAL; renderStep();
  }
  /* -------- one-click booking -------- */
  const M = C.settings.meeting || {};
  const TZ = "Africa/Cairo";
  let mode = M.enabled === false ? "form" : (M.defaultMode || "book");
  let BUSY = [];
  const bk = { day: null, slot: null, started: false };
  const pad = n => String(n).padStart(2, "0");
  const cairoParts = d => Object.fromEntries(new Intl.DateTimeFormat("en-CA", { timeZone: TZ, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(d).map(p => [p.type, p.value]));
  const tzOff = d => { const p = cairoParts(d); return (Date.UTC(+p.year, p.month - 1, +p.day, +p.hour, +p.minute) - Math.floor(d.getTime() / 60000) * 60000) / 60000; };
  function slotUTC(key) {
    const [ds, ts] = key.split(" "); const [y, m, d] = ds.split("-").map(Number); const [h, mi] = ts.split(":").map(Number);
    const naive = Date.UTC(y, m - 1, d, h, mi); return new Date(naive - tzOff(new Date(naive)) * 60000);
  }
  const WD = { en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ar: ["الأحد", "الاتنين", "التلات", "الأربع", "الخميس", "الجمعة", "السبت"] };
  const MO = { en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ar: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"] };
  const tLabel = hm => { let [h, m] = hm.split(":").map(Number); const pm = h >= 12; h = h % 12 || 12; return `${h}:${pad(m)} ${lang === "ar" ? (pm ? "م" : "ص") : (pm ? "PM" : "AM")}`; };
  const dLabel = key => { const [y, m, d] = key.split("-").map(Number); const dow = new Date(Date.UTC(y, m - 1, d)).getUTCDay(); return `${WD[lang][dow]} ${d} ${MO[lang][m - 1]}`; };
  function bookDays() {
    const p = cairoParts(new Date()); const out = []; const wd = M.workDays || [0, 1, 2, 3, 4, 6];
    for (let i = 0; i < 40 && out.length < (+M.daysAhead || 7); i++) {
      const dt = new Date(Date.UTC(+p.year, p.month - 1, +p.day + i));
      const key = `${dt.getUTCFullYear()}-${pad(dt.getUTCMonth() + 1)}-${pad(dt.getUTCDate())}`;
      if (wd.includes(dt.getUTCDay()) && daySlots(key).length) out.push({ key, i, dow: dt.getUTCDay(), d: dt.getUTCDate(), m: dt.getUTCMonth() });
    }
    return out;
  }
  function daySlots(day) {
    const dur = +M.duration || 30; const [sh, sm] = (M.start || "11:00").split(":").map(Number); const [eh, em] = (M.end || "20:00").split(":").map(Number);
    const limit = Date.now() + (+M.noticeHours || 0) * 36e5; const out = [];
    for (let t = sh * 60 + sm; t + dur <= eh * 60 + em; t += dur) {
      const key = `${day} ${pad(Math.floor(t / 60))}:${pad(t % 60)}`;
      if (slotUTC(key).getTime() > limit && !BUSY.includes(key)) out.push(key);
    }
    return out;
  }
  function renderBook() {
    if (M.bookingUrl) {
      swap(`<h3>${esc(L(M.title))}</h3><p class="hint">${esc(L(M.hint))}</p><iframe class="cal-embed" src="${esc(M.bookingUrl)}" title="Booking calendar" loading="lazy"></iframe>`);
      return;
    }
    const days = bookDays();
    if (!bk.day || !days.find(d => d.key === bk.day)) bk.day = days[0]?.key || null;
    swap(`
      <h3>${esc(L(M.title))}</h3><p class="hint">${esc(L(M.hint))} · ${+M.duration || 30} ${T("min")}</p>
      <div class="days" id="bkDays">${days.map(d => `<button type="button" class="day ${d.key === bk.day ? "sel" : ""}" data-d="${d.key}"><em>${d.i === 0 ? T("today") : d.i === 1 ? T("tomorrow") : WD[lang][d.dow]}</em><b>${d.d}</b><span>${MO[lang][d.m]}</span></button>`).join("")}</div>
      <div class="slots" id="bkSlots"></div>
      <form id="bForm" class="bform ${bk.slot ? "open" : ""}" novalidate>
        <p class="lbl2" id="bkSel">${bk.slot ? "📅 " + dLabel(bk.slot.split(" ")[0]) + " · " + tLabel(bk.slot.split(" ")[1]) : T("pickFirst")}</p>
        <div class="bf-row">
          <label class="fld"><span>${T("fName")}</span><input name="name" autocomplete="name" value="${esc(contact.name)}"></label>
          <label class="fld"><span>${T("fPhone")}</span><div class="phone-row"><input class="cc" name="cc" value="+20" inputmode="tel" aria-label="Country code"><input name="phone" inputmode="tel" autocomplete="tel-national" placeholder="10 1234 5678" value="${esc(contact.phone.replace(/^\+20/, ""))}"></div></label>
        </div>
        <p class="err" id="bErr"></p>
        <button type="submit" class="btn btn-blue full" ${bk.slot ? "" : "disabled"}>${T("confirm")}</button>
      </form>`, () => {
      $("bkDays").querySelectorAll(".day").forEach(b => b.onclick = () => { bk.day = b.dataset.d; $("bkDays").querySelectorAll(".day").forEach(x => x.classList.toggle("sel", x === b)); drawSlots(); });
      $("bForm").onsubmit = bookSubmit;
      drawSlots();
    });
  }
  function drawSlots() {
    const list = bk.day ? daySlots(bk.day) : [];
    $("bkSlots").innerHTML = list.length ? list.map(k => `<button type="button" class="slot ${k === bk.slot ? "sel" : ""}" data-k="${k}">${tLabel(k.split(" ")[1])}</button>`).join("") : `<p class="muted-p">${T("noSlots")}</p>`;
    $("bkSlots").querySelectorAll(".slot").forEach(b => b.onclick = () => {
      if (!bk.started) { bk.started = true; AEStore.track("meeting_start"); }
      bk.slot = b.dataset.k;
      $("bkSlots").querySelectorAll(".slot").forEach(x => x.classList.toggle("sel", x === b));
      const f = $("bForm"); f.classList.add("open"); f.querySelector("[type=submit]").disabled = false;
      $("bkSel").textContent = "📅 " + dLabel(bk.slot.split(" ")[0]) + " · " + tLabel(bk.slot.split(" ")[1]);
      if (!f.name.value) setTimeout(() => f.name.focus({ preventScroll: true }), 250);
    });
  }
  async function bookSubmit(e) {
    e.preventDefault();
    const f = e.target; if (!bk.slot) { $("bErr").textContent = T("pickFirst"); return; }
    const name = f.name.value.trim(); const digits = f.phone.value.replace(/\D/g, "").replace(/^0+/, ""); const cc = f.cc.value.replace(/\D/g, "") || "20";
    f.name.classList.toggle("bad", !name); f.phone.classList.toggle("bad", digits.length < 8);
    if (!name || digits.length < 8) { $("bErr").textContent = T("errReq"); return; }
    const btn = f.querySelector("[type=submit]"); btn.textContent = T("booking"); btn.disabled = true;
    Object.assign(contact, { name, phone: "+" + cc + digits });
    const q = new URLSearchParams(location.search);
    await AEStore.submitLead({ type: "meeting", meeting: bk.slot, name, phone: contact.phone, brand: "", lang, goal: "Call booked",
      source: q.get("utm_source") || (document.referrer ? new URL(document.referrer).hostname : "direct"), campaign: q.get("utm_campaign") || "" });
    AEStore.track("meeting_booked"); BUSY.push(bk.slot);
    const start = slotUTC(bk.slot), end = new Date(start.getTime() + (+M.duration || 30) * 6e4);
    const gfmt = d => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const when = `${dLabel(bk.slot.split(" ")[0])} · ${tLabel(bk.slot.split(" ")[1])}`;
    const gcal = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Call with Amr Essam")}&dates=${gfmt(start)}/${gfmt(end)}&details=${encodeURIComponent("Free ads call. Amr will call you on WhatsApp: +" + (C.settings.whatsapp || ""))}`;
    const waTxt = L({ en: `Hi Amr, I just booked a call for ${when} (Cairo time). My name is ${name}.`, ar: `أهلًا عمرو، لسه حاجز مكالمة يوم ${when} (بتوقيت القاهرة). اسمي ${name}.` });
    const bookedSlot = bk.slot; bk.slot = null;
    swap(`<div class="thanks"><div class="ok"><svg viewBox="0 0 40 40"><path d="M9 21l7 7 15-16"/></svg></div><h3>${T("bookedT")}</h3><p>${T("bookedP")} <b>${esc(when)}</b></p>
      <div class="ty-btns"><a class="btn btn-wa" target="_blank" rel="noopener" href="${waLink(waTxt)}" id="bkWa">${T("waConfirm")} →</a><a class="btn btn-ghost" target="_blank" rel="noopener" href="${gcal}">📅 ${T("addCal")}</a></div></div>`, () => {
      $("bkWa").onclick = () => AEStore.track("wa_click_thanks");
    });
    $("lfBar").style.transform = "scaleX(1)"; $("lfCount").textContent = "✓";
    return bookedSlot;
  }
  function renderLead() {
    const on = M.enabled !== false;
    $("modes").hidden = !on; if (!on) mode = "form";
    $("modes").querySelectorAll("button").forEach(b => { b.classList.toggle("on", b.dataset.m === mode); b.setAttribute("aria-selected", b.dataset.m === mode); });
    $("lf").classList.toggle("is-book", mode === "book");
    if (mode === "book") renderBook(); else renderStep();
  }
  function setMode(m) { if (m === mode && $("lfStage").firstElementChild) return; mode = m; $("lfStage").innerHTML = ""; AEStore.track("mode_" + m); renderLead(); }
  $("modes").querySelectorAll("button").forEach(b => b.onclick = () => setMode(b.dataset.m));
  document.querySelectorAll("[data-goto]").forEach(a => a.addEventListener("click", () => setMode(a.dataset.goto)));

  document.addEventListener("keydown", e => {
    if (mode !== "form" || step >= S.length || e.target.matches("input,textarea") || e.metaKey || e.ctrlKey) return;
    const r = $("lf").getBoundingClientRect(); if (r.top > innerHeight || r.bottom < 0) return;
    const i = e.key.toUpperCase().charCodeAt(0) - 65;
    const opts = $("lfStage").querySelectorAll(".opt");
    if (e.key.length === 1 && i >= 0 && i < opts.length) opts[i].click();
    if (e.key === "Enter") $("lfStage").querySelector(".cont:not([disabled])")?.click();
  });

  /* -------- whatsapp -------- */
  function initWa() {
    $("waBtn").href = waLink(); $("waGo").href = waLink();
    $("waMsg").textContent = L(C.settings.waPopup);
    let closed = false; try { closed = sessionStorage.getItem("ae2-wa-closed") === "1"; } catch (e) {}
    const show = () => { if (!closed && $("waPop").hidden) { $("waPop").hidden = false; AEStore.track("wa_popup"); } };
    if (!closed && !initWa.timer) initWa.timer = setTimeout(show, (+C.settings.waDelay || 6) * 1000);
    $("waX").onclick = () => { $("waPop").hidden = true; closed = true; try { sessionStorage.setItem("ae2-wa-closed", "1"); } catch (e) {} };
    $("waBtn").onclick = () => AEStore.track("wa_click");
    $("waGo").onclick = () => AEStore.track("wa_click");
  }

  /* -------- misc -------- */
  const lb = $("lb");
  function lightbox(h) { $("lbIn").innerHTML = h; lb.hidden = false; document.body.style.overflow = "hidden"; }
  const closeLb = () => { lb.hidden = true; $("lbIn").innerHTML = ""; document.body.style.overflow = ""; };
  $("lbX").onclick = closeLb; lb.onclick = e => { if (e.target === lb) closeLb(); };
  addEventListener("keydown", e => { if (e.key === "Escape" && !lb.hidden) closeLb(); });

  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .15 });
  const reveal = () => document.querySelectorAll(".rv:not(.in)").forEach(el => io.observe(el));

  function renderAll() {
    renderStatic(); renderBento(); renderClients(); renderStats(); renderCampaign(); renderCases(); renderInd(); renderReels(); $("lfStage").innerHTML = ""; renderLead(); initWa(); reveal();
  }
  try { BUSY = await AEStore.busy(); } catch (e) { BUSY = []; }
  $("lang").onclick = () => { lang = lang === "ar" ? "en" : "ar"; try { localStorage.setItem("ae2-lang", lang); } catch (e) {} renderAll(); };

  try { if (!sessionStorage.getItem("ae2-v")) { sessionStorage.setItem("ae2-v", "1"); AEStore.track("visit"); } } catch (e) { AEStore.track("visit"); }
  renderAll();
})();

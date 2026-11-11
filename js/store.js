/* Shared data layer for the site and the dashboard.
   Live mode: Google Apps Script backend (window.AE_BACKEND).
   Demo mode: localStorage in the current browser. */
(function () {
  const B = () => (window.AE_BACKEND || "").trim();
  const LS = {
    get(k, d) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  const DEMO_PW_HASH = "55ef6ae97fcfcfdcbae2c4722b720f3975ee9c7554cfa70aa1fb999326004046";
  const today = () => new Date().toISOString().slice(0, 10);
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

  async function post(body) {
    const r = await fetch(B(), { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(body) });
    const j = await r.json();
    if (!j.ok) throw new Error(j.error || "Request failed");
    return j;
  }
  async function sha(s) {
    const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
    return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, "0")).join("");
  }
  function merge(base, over) {
    if (!over || typeof over !== "object") return base;
    if (Array.isArray(base)) return Array.isArray(over) ? over : base;
    const out = { ...base };
    for (const k in over) out[k] = (base && typeof base[k] === "object" && base[k] !== null && !Array.isArray(base[k])) ? merge(base[k], over[k]) : over[k];
    return out;
  }

  window.AEStore = {
    live: () => !!B(),
    async getContent() {
      const def = JSON.parse(JSON.stringify(window.AE_DEFAULT));
      if (B()) {
        try { const r = await fetch(B() + "?a=content"); const j = await r.json(); if (j.ok && j.content) return merge(def, j.content); } catch (e) {}
        return def;
      }
      return merge(def, LS.get("ae2-content", null));
    },
    async submitLead(lead) {
      lead = { id: uid(), created: new Date().toISOString(), status: "New", notes: "", ...lead };
      if (B()) { try { await post({ a: "lead", lead }); return lead; } catch (e) { /* fall through to local copy */ } }
      const all = LS.get("ae2-leads", []); all.unshift(lead); LS.set("ae2-leads", all);
      return lead;
    },
    track(name) {
      if (B()) { fetch(B(), { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ a: "event", name }), keepalive: true }).catch(() => {}); return; }
      const ev = LS.get("ae2-events", {}); const d = today();
      ev[d] = ev[d] || {}; ev[d][name] = (ev[d][name] || 0) + 1; LS.set("ae2-events", ev);
    },
    /* ---------- admin ---------- */
    async login(pw) {
      if (B()) { await post({ a: "login", pw }); return true; }
      const h = await sha(pw); const stored = LS.get("ae2-pwhash", DEMO_PW_HASH);
      if (h !== stored) throw new Error("Wrong password");
      return true;
    },
    async leads(pw) {
      if (B()) return (await post({ a: "leads", pw })).leads;
      return LS.get("ae2-leads", []);
    },
    async updateLead(pw, id, patch) {
      if (B()) return post({ a: "updateLead", pw, id, patch });
      const all = LS.get("ae2-leads", []); const i = all.findIndex(l => l.id === id);
      if (i > -1) { all[i] = { ...all[i], ...patch }; LS.set("ae2-leads", all); }
    },
    async deleteLead(pw, id) {
      if (B()) return post({ a: "deleteLead", pw, id });
      LS.set("ae2-leads", LS.get("ae2-leads", []).filter(l => l.id !== id));
    },
    async events(pw) {
      if (B()) return (await post({ a: "events", pw })).events;
      return LS.get("ae2-events", {});
    },
    async saveContent(pw, content) {
      if (B()) return post({ a: "saveContent", pw, content });
      LS.set("ae2-content", content);
    },
    async resetContent(pw) {
      if (B()) return post({ a: "saveContent", pw, content: null });
      localStorage.removeItem("ae2-content");
    },
    async setPassword(pw, newPw) {
      if (B()) return post({ a: "setPassword", pw, newPw });
      LS.set("ae2-pwhash", await sha(newPw));
    }
  };
})();

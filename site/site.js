// Menu toggle on small screens, and a search over search.json.
const menu = document.querySelector(".menu");
const nav = document.getElementById("nav");
menu.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});

const input = document.querySelector(".search");
const results = document.querySelector(".results");
const article = document.querySelector("article");
const pager = document.querySelector(".pager");
const base = input.dataset.base;
let index = null; // a promise, so every keystroke shares one fetch

const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);

input.addEventListener("input", async () => {
  const q = input.value.trim().toLowerCase();
  if (!q) { results.hidden = true; article.hidden = false; if (pager) pager.hidden = false; return; }
  index ??= fetch(`${base}/search.json`).then((r) => r.json());
  const pages = await index;
  if (input.value.trim().toLowerCase() !== q) return; // a later keystroke owns the results
  const words = q.split(/\s+/);
  const hits = pages
    .map((p) => {
      const hay = (p.title + " " + p.text).toLowerCase();
      if (!words.every((w) => hay.includes(w))) return null;
      const at = p.text.toLowerCase().indexOf(words[0]);
      const snippet = at < 0 ? p.text.slice(0, 140) : p.text.slice(Math.max(0, at - 50), at + 110);
      const score = words.filter((w) => p.title.toLowerCase().includes(w)).length;
      return { ...p, snippet, score };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score);
  results.innerHTML = hits.length
    ? `<p class="count">${hits.length} result${hits.length === 1 ? "" : "s"}</p>` +
      hits.map((h) => `<a class="hit" href="${base}/${h.url}"><strong>${esc(h.title)}</strong><span>…${esc(h.snippet)}…</span></a>`).join("")
    : `<p class="count">Nothing matches “${esc(input.value.trim())}”.</p>`;
  results.hidden = false;
  article.hidden = true;
  if (pager) pager.hidden = true;
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { input.value = ""; input.dispatchEvent(new Event("input")); }
  if (e.key === "Enter") results.querySelector(".hit")?.click();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "/" && document.activeElement !== input) { e.preventDefault(); input.focus(); }
});

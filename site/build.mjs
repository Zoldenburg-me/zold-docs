// Builds the docs into a static site in _site/, for hosting at docs.zoldhq.com.
// The Markdown stays GitBook-compatible: SUMMARY.md is the navigation and
// {% hint %} blocks become callouts. Run with `npm run build`.
import { readFileSync, writeFileSync, mkdirSync, rmSync, copyFileSync, cpSync, existsSync } from "node:fs";
import { dirname, join, posix } from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";
import { Marked } from "marked";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "_site");
// style.css and site.js are browser-cached for hours; a content hash in the URL makes a deploy take effect on the next page load.
const VERSION = Object.fromEntries(["style.css", "site.js"].map((f) => [f, createHash("sha256").update(readFileSync(join(ROOT, "site", f))).digest("hex").slice(0, 10)]));
const SITE_URL = "https://docs.zoldhq.com";
const APP_URL = "https://zoldhq.com";
const DEFAULT_DESCRIPTION = "How to use Zold: your euro account, IBAN, payments and invoices.";

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const slug = (s) => s.toLowerCase().replace(/<[^>]+>/g, "").replace(/&[a-z#0-9]+;/g, "").replace(/[^\p{L}\p{N}\s-]/gu, "").trim().replace(/\s+/g, "-");
const outPath = (md) => md.replace(/(^|\/)README\.md$/, "$1index.html").replace(/\.md$/, ".html");

// SUMMARY.md: "## Section" headings and "* [Title](path.md)" items, nested by indent.
function readSummary() {
  const sections = [];
  let current = { title: null, items: [] };
  sections.push(current);
  for (const line of readFileSync(join(ROOT, "SUMMARY.md"), "utf8").split("\n")) {
    const h = line.match(/^##\s+(.+)/);
    if (h) { current = { title: h[1].trim(), items: [] }; sections.push(current); continue; }
    const item = line.match(/^(\s*)[*-]\s+\[([^\]]+)\]\(([^)]+)\)/);
    if (item) current.items.push({ depth: Math.floor(item[1].length / 2), title: item[2], src: item[3] });
  }
  return sections.filter((s) => s.items.length);
}

const sections = readSummary();
const pages = sections.flatMap((s) => s.items);

function render(src) {
  const marked = new Marked({ gfm: true });
  marked.use({
    renderer: {
      heading({ tokens, depth }) {
        const text = this.parser.parseInline(tokens);
        const id = slug(text);
        return depth === 1
          ? `<h1>${text}</h1>\n`
          : `<h${depth} id="${id}"><a class="anchor" href="#${id}" aria-hidden="true">#</a>${text}</h${depth}>\n`;
      },
    },
  });
  // Hints are rendered on their own and swapped in for a placeholder paragraph,
  // so Markdown inside a hint is parsed and HTML around it is not.
  const hints = [];
  // GitBook front matter: the description shows under the title, as GitBook does.
  let description = null;
  const raw = readFileSync(join(ROOT, src), "utf8").replace(/^---\n([\s\S]*?)\n---\n/, (_, fm) => {
    description = (fm.match(/^description:\s*(.+)$/m) || [, null])[1]?.replace(/^(["'])(.*)\1$/, "$2") ?? null;
    return "";
  });
  const md = raw.replace(
    /\{%\s*hint\s+style="(\w+)"\s*%\}([\s\S]*?)\{%\s*endhint\s*%\}/g,
    (_, style, body) => { hints.push(`<div class="hint hint-${style}">${marked.parse(body.trim())}</div>`); return `\n\nZOLDHINT${hints.length - 1}\n\n`; },
  );
  let html = marked.parse(md)
    .replace(/<p>ZOLDHINT(\d+)<\/p>/g, (_, i) => hints[i])
    .replace(/src="((?:\.\.\/)*|\.\/)?\.gitbook\/assets\//g, 'src="$1assets/')
    .replace(/<img\b(?![^>]*\bloading=)/g, '<img loading="lazy"');
  if (description) html = html.replace(/<\/h1>\n/, `</h1>\n<p class="lead">${esc(description)}</p>\n`);
  // Links between pages point at the built .html files.
  html = html.replace(/href="(?![a-z]+:|#|\/)([^"#]*?)\.md(#[^"]*)?"/g, (_, p, hash = "") => `href="${outPath(p + ".md")}${hash}"`);
  const title = (md.match(/^#\s+(.+)$/m) || [, null])[1];
  const text = html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  return { html, title, text, description };
}

function nav(currentSrc) {
  const rel = (src) => posix.relative(posix.dirname(currentSrc), outPath(src)) || "index.html";
  return sections.map((s) => `
    <div class="nav-section">${s.title ? `<p class="nav-title">${esc(s.title)}</p>` : ""}
      <ul>${s.items.map((p) => `<li class="d${p.depth}"><a href="${rel(p.src)}"${p.src === currentSrc ? ' aria-current="page"' : ""}>${esc(p.title)}</a></li>`).join("")}</ul>
    </div>`).join("");
}

function page({ src, title, html, description, prev, next }) {
  const base = posix.relative(posix.dirname(src), ".") || ".";
  const rel = (s) => posix.relative(posix.dirname(src), outPath(s)) || "index.html";
  const section = sections.find((s) => s.items.some((p) => p.src === src))?.title;
  const pageTitle = src === "README.md" ? "Zold Docs" : `${title} · Zold Docs`;
  const canonical = `${SITE_URL}/${outPath(src).replace(/(^|\/)index\.html$/, "$1").replace(/\.html$/, "")}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(pageTitle)}</title>
<link rel="canonical" href="${canonical}">${description ? `\n<meta name="description" content="${esc(description)}">` : ""}
<meta property="og:type" content="website">
<meta property="og:site_name" content="Zold Docs">
<meta property="og:title" content="${esc(pageTitle)}">
<meta property="og:description" content="${esc(description || DEFAULT_DESCRIPTION)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${SITE_URL}/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="${base}/favicon.svg" type="image/svg+xml">
<link rel="stylesheet" href="${base}/style.css?v=${VERSION["style.css"]}">
</head>
<body>
<header class="top">
  <button class="menu" aria-label="Menu" aria-expanded="false" aria-controls="nav">☰</button>
  <a class="brand" href="${rel("README.md")}"><img src="${base}/favicon.svg" alt="" width="24" height="24">Zold <span>Docs</span></a>
  <input class="search" type="search" placeholder="Search" aria-label="Search the docs" data-base="${base}">
  <a class="app" href="${APP_URL}">Open Zold</a>
</header>
<div class="layout">
  <nav id="nav" class="nav">${nav(src)}</nav>
  <main>
    <div class="results" hidden></div>
    <article>
      ${section ? `<p class="crumb">${esc(section)}</p>` : ""}
      ${html}
    </article>
    <footer class="pager">
      ${prev ? `<a class="prev" href="${rel(prev.src)}"><small>Previous</small>${esc(prev.title)}</a>` : "<span></span>"}
      ${next ? `<a class="next" href="${rel(next.src)}"><small>Next</small>${esc(next.title)}</a>` : "<span></span>"}
    </footer>
    <p class="legal">© Zoldenburg · <a href="${APP_URL}">zoldhq.com</a></p>
  </main>
</div>
<script src="${base}/site.js?v=${VERSION["site.js"]}" defer></script>
</body>
</html>
`;
}

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
const index = [];
pages.forEach((p, i) => {
  if (!existsSync(join(ROOT, p.src))) throw new Error(`SUMMARY.md lists ${p.src}, which does not exist`);
  const { html, title, text, description } = render(p.src);
  const file = join(OUT, outPath(p.src));
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page({ src: p.src, title: title || p.title, html, description, prev: pages[i - 1], next: pages[i + 1] }));
  index.push({ url: outPath(p.src), title: p.title, text });
});
writeFileSync(join(OUT, "search.json"), JSON.stringify(index));
writeFileSync(join(OUT, "404.html"), page({ src: "404.md", title: "Page not found", html: `<h1>Page not found</h1><p>This page does not exist. Try the search, or start at <a href="/">the docs home</a>.</p>` }).replace(/href="(?![a-z]+:)(?:\.\/)?([^":#/][^"]*)"/g, 'href="/$1"').replace(/src="\.\//g, 'src="/').replace(/data-base="\."/, 'data-base=""'));
for (const f of ["style.css", "site.js", "favicon.svg", "og-image.png"]) copyFileSync(join(ROOT, "site", f), join(OUT, f));
const assets = join(ROOT, ".gitbook", "assets");
if (existsSync(assets)) cpSync(assets, join(OUT, "assets"), { recursive: true });
console.log(`Built ${pages.length} pages into _site/`);

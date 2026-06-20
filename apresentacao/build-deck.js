/* ============================================================================
   DS-MS — Apresentação para gestão (7 slides)
   Identidade DS-MS: azul #004F9F, Open Sans. Gera DS-MS-Apresentacao.pptx
   ============================================================================ */
const pptxgen = require("pptxgenjs");
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const ASSETS = path.join(ROOT, "assets");

// Paleta DS-MS
const C = {
  brand: "004F9F",
  brandDark: "002F5F",
  brand700: "002040",
  ice: "CCDCEC",
  ink: "212A31",
  mute: "545D64",
  white: "FFFFFF",
  bg: "F6F8FB",
  line: "D4D7D8",
  error: "DA1E28",
  errorSoft: "F6D3D5",
  success: "198038",
  successSoft: "E2F1E6",
};
const HEAD = "Open Sans";
const BODY = "Open Sans";
const TOTAL_SLIDES = 7;

// ---------- helpers de imagem ----------
async function rasterSvg(svgFile, hexColor, outName, widthPx = 600) {
  let svg = fs.readFileSync(path.join(ASSETS, svgFile), "utf8");
  svg = svg.replace(/currentColor/g, "#" + hexColor);
  const out = path.join(__dirname, outName);
  await sharp(Buffer.from(svg), { density: 300 })
    .resize({ width: widthPx })
    .png()
    .toFile(out);
  return out;
}

async function cropTop(srcRel, outName, ratio) {
  const src = path.join(ROOT, srcRel);
  const meta = await sharp(src).metadata();
  const cropH = Math.min(meta.height, Math.round(meta.width * ratio));
  const out = path.join(__dirname, outName);
  await sharp(src)
    .extract({ left: 0, top: 0, width: meta.width, height: cropH })
    .toFile(out);
  return { path: out, w: meta.width, h: cropH };
}

async function loadImage(srcRel) {
  const p = path.join(ROOT, srcRel);
  const meta = await sharp(p).metadata();
  return { path: p, w: meta.width, h: meta.height };
}

// ---------- componentes de layout ----------
function footer(slide, pres, n, dark) {
  const col = dark ? C.ice : C.mute;
  slide.addText(
    "SETDIG — Secretaria-Executiva de Transformação Digital · Governo de MS",
    { x: 0.5, y: 7.05, w: 9.5, h: 0.3, fontFace: BODY, fontSize: 9, color: col, align: "left", margin: 0 }
  );
  slide.addText(`${String(n).padStart(2, "0")} / ${TOTAL_SLIDES}`, {
    x: 12.1, y: 7.05, w: 0.8, h: 0.3, fontFace: BODY, fontSize: 9, color: col, align: "right", margin: 0,
  });
}

function leftBorder(slide, pres, hex) {
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.16, h: 7.5, fill: { color: hex } });
}

const W = 13.33, H = 7.5;

(async () => {
  // assets
  const dsLogoWhite = await rasterSvg("logo-ds-ms.svg", C.white, "ds-logo-white.png", 600);
  const setdigWhite = await rasterSvg("setdig-wordmark.svg", C.white, "setdig-white.png", 420);
  // Os PNGs crus (ds-visaogeral.png/ds-header.png) foram limpos do root;
  // os crops já gerados em sessão anterior sobrevivem em apresentacao/ — reaproveita.
  const imgHome = fs.existsSync(path.join(ROOT, "ds-visaogeral.png"))
    ? await cropTop("ds-visaogeral.png", "home-crop.png", 0.56)
    : await loadImage("apresentacao/home-crop.png");
  const imgHeader = fs.existsSync(path.join(ROOT, "ds-header.png"))
    ? await cropTop("ds-header.png", "header-crop.png", 0.72)
    : await loadImage("apresentacao/header-crop.png");
  const imgSegovAberto = await loadImage("docs/assets/segov-codesul/segov-codesul-aberto.png");
  const imgSegovDropdown = await loadImage("docs/assets/segov-codesul/segov-dropdown.png");

  const pres = new pptxgen();
  pres.defineLayout({ name: "DSMS", width: W, height: H });
  pres.layout = "DSMS";
  pres.author = "Fabio Ramos";
  pres.company = "SETDIG";
  pres.title = "Design System MS — do Figma ao código";

  const shadow = () => ({ type: "outer", color: "000000", blur: 7, offset: 3, angle: 135, opacity: 0.18 });

  // =====================================================================
  // SLIDE 1 — CAPA
  // =====================================================================
  let s = pres.addSlide();
  s.background = { color: C.brand };
  s.addShape(pres.shapes.RECTANGLE, { x: W - 2.3, y: 0, w: 2.3, h: H, fill: { color: C.brandDark } });
  s.addShape(pres.shapes.RECTANGLE, { x: W - 2.3, y: 0, w: 0.16, h: H, fill: { color: C.ice } });

  s.addImage({ path: dsLogoWhite, x: 0.85, y: 0.7, w: 2.0, h: 2.0 * (31.241 / 110.204) });
  s.addText("SGD · SETDIG   |   DS MS.GOV v2.0.0", {
    x: 0.85, y: 2.35, w: 9, h: 0.4, fontFace: BODY, fontSize: 13, color: C.ice, charSpacing: 2, margin: 0,
  });
  s.addText("Design System MS:\ndo Figma ao código", {
    x: 0.85, y: 2.8, w: 9.8, h: 1.9, fontFace: HEAD, fontSize: 46, bold: true, color: C.white, lineSpacingMultiple: 1.0, margin: 0,
  });
  s.addText("Como escalar a biblioteca de componentes para todos os times do Estado — PHP, Python e JS.", {
    x: 0.85, y: 4.85, w: 9.4, h: 0.9, fontFace: BODY, fontSize: 19, color: C.ice, margin: 0,
  });
  s.addText("Fabio Ramos · SETDIG · junho de 2026 · pacote já publicado no npm", {
    x: 0.85, y: 6.7, w: 9, h: 0.4, fontFace: BODY, fontSize: 12, color: C.ice, margin: 0,
  });
  s.addImage({ path: setdigWhite, x: W - 1.95, y: 6.55, w: 1.5, h: 1.5 * (12.565 / 53.929) });

  // =====================================================================
  // SLIDE 2 — O QUE JÁ TEMOS (DS-MS oficial)
  // =====================================================================
  s = pres.addSlide();
  s.background = { color: C.white };
  leftBorder(s, pres, C.brand);
  s.addText("O que já temos hoje", { x: 0.6, y: 0.45, w: 8, h: 0.7, fontFace: HEAD, fontSize: 34, bold: true, color: C.brand, margin: 0 });
  s.addText("DS MS.GOV v2.0.0 — maduro no design, mantido pela SGD/SETDIG.", {
    x: 0.62, y: 1.18, w: 8, h: 0.4, fontFace: BODY, fontSize: 15, color: C.mute, margin: 0,
  });

  const stats = [
    ["41", "componentes documentados"],
    ["35", "sites construídos"],
    ["8", "templates de página"],
    ["AAA", "nível WCAG (acessibilidade)"],
  ];
  const gx = 0.6, gy = 1.95, cw = 2.85, ch = 1.45, gap = 0.25;
  stats.forEach((st, i) => {
    const col = i % 2, row = Math.floor(i / 2);
    const x = gx + col * (cw + gap), y = gy + row * (ch + gap);
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: cw, h: ch, fill: { color: C.bg }, line: { color: C.line, width: 1 }, shadow: shadow() });
    s.addText(st[0], { x: x + 0.2, y: y + 0.18, w: cw - 0.4, h: 0.7, fontFace: HEAD, fontSize: 40, bold: true, color: C.brand, margin: 0 });
    s.addText(st[1], { x: x + 0.2, y: y + 0.92, w: cw - 0.4, h: 0.45, fontFace: BODY, fontSize: 12.5, color: C.ink, margin: 0 });
  });

  const iw2 = 5.6, ih2 = iw2 * (imgHome.h / imgHome.w);
  const ix2 = 6.9, iy2 = 1.95;
  s.addShape(pres.shapes.RECTANGLE, { x: ix2 - 0.06, y: iy2 - 0.06, w: iw2 + 0.12, h: ih2 + 0.12, fill: { color: C.white }, line: { color: C.line, width: 1 }, shadow: shadow() });
  s.addImage({ path: imgHome.path, x: ix2, y: iy2, w: iw2, h: ih2 });
  s.addText("designsystem.ms.gov.br — documentação pública", {
    x: ix2, y: iy2 + ih2 + 0.08, w: iw2, h: 0.3, fontFace: BODY, fontSize: 10.5, italic: true, color: C.mute, margin: 0,
  });

  s.addText("Base sólida. O problema não é o design — é como ele chega até o desenvolvedor.", {
    x: 0.6, y: 6.3, w: 6, h: 0.6, fontFace: BODY, fontSize: 14, bold: true, color: C.ink, margin: 0,
  });
  footer(s, pres, 2, false);

  // =====================================================================
  // SLIDE 3 — O GARGALO
  // =====================================================================
  s = pres.addSlide();
  s.background = { color: C.white };
  leftBorder(s, pres, C.error);
  s.addText("O gargalo: o design não vira código", { x: 0.6, y: 0.45, w: 12, h: 0.7, fontFace: HEAD, fontSize: 32, bold: true, color: C.ink, margin: 0 });

  const iw3 = 5.5, ih3 = iw3 * (imgHeader.h / imgHeader.w);
  const ix3 = 7.1, iy3 = 1.35;
  s.addShape(pres.shapes.RECTANGLE, { x: ix3 - 0.06, y: iy3 - 0.06, w: iw3 + 0.12, h: ih3 + 0.12, fill: { color: C.white }, line: { color: C.line, width: 1 }, shadow: shadow() });
  s.addImage({ path: imgHeader.path, x: ix3, y: iy3, w: iw3, h: ih3 });
  s.addText("Página do componente “Header”: anatomia em imagens e tabelas — nenhum trecho de código.", {
    x: ix3, y: iy3 + ih3 + 0.08, w: iw3, h: 0.5, fontFace: BODY, fontSize: 10.5, italic: true, color: C.mute, margin: 0,
  });

  const pains = [
    "A documentação mostra imagens, não código pronto para usar.",
    "Cada time (PHP, Python, JS) reimplementa o componente do zero a partir do Figma.",
    "Resultado: divergência visual (drift), retrabalho e acessibilidade inconsistente.",
    "Impossível corrigir “num lugar só” — passar o Figma para o dev não escala.",
  ];
  let py = 1.5;
  pains.forEach((t) => {
    s.addShape(pres.shapes.OVAL, { x: 0.65, y: py + 0.04, w: 0.28, h: 0.28, fill: { color: C.error } });
    s.addText("!", { x: 0.65, y: py + 0.02, w: 0.28, h: 0.3, fontFace: HEAD, fontSize: 14, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
    s.addText(t, { x: 1.1, y: py - 0.05, w: 5.7, h: 0.8, fontFace: BODY, fontSize: 14.5, color: C.ink, margin: 0, valign: "top" });
    py += 1.0;
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 5.9, w: 6.2, h: 0.95, fill: { color: C.errorSoft } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 5.9, w: 0.1, h: 0.95, fill: { color: C.error } });
  s.addText([
    { text: "Risco institucional: ", options: { bold: true } },
    { text: "a identidade visual do Estado se fragmenta entre os sistemas." },
  ], { x: 0.85, y: 5.9, w: 5.8, h: 0.95, fontFace: BODY, fontSize: 13, color: "7F161A", valign: "middle", margin: 0 });
  footer(s, pres, 3, false);

  // =====================================================================
  // SLIDE 4 — EVIDÊNCIA REAL: comparação com SEGOV/Codesul
  // =====================================================================
  s = pres.addSlide();
  s.background = { color: C.white };
  leftBorder(s, pres, C.error);
  s.addText("Não é teoria: já está acontecendo", { x: 0.6, y: 0.45, w: 12.3, h: 0.7, fontFace: HEAD, fontSize: 30, bold: true, color: C.ink, margin: 0 });
  s.addText("Inspeção real (DOM/CSS) do site da SEGOV — outra secretaria do mesmo governo, fora do DS-MS oficial.", {
    x: 0.62, y: 1.16, w: 11.8, h: 0.4, fontFace: BODY, fontSize: 13.5, color: C.mute, margin: 0,
  });

  const iw4 = 3.55, ih4a = iw4 * (imgSegovAberto.h / imgSegovAberto.w), ih4b = iw4 * (imgSegovDropdown.h / imgSegovDropdown.w);
  const ix4 = 0.62, iy4 = 1.75;
  s.addShape(pres.shapes.RECTANGLE, { x: ix4 - 0.05, y: iy4 - 0.05, w: iw4 + 0.1, h: ih4a + 0.1, fill: { color: C.white }, line: { color: C.line, width: 1 }, shadow: shadow() });
  s.addImage({ path: imgSegovAberto.path, x: ix4, y: iy4, w: iw4, h: ih4a });
  s.addText("Acordeão aberto (segov.ms.gov.br)", { x: ix4, y: iy4 + ih4a + 0.06, w: iw4, h: 0.3, fontFace: BODY, fontSize: 9.5, italic: true, color: C.mute, margin: 0 });

  const iy4b = iy4 + ih4a + 0.45;
  s.addShape(pres.shapes.RECTANGLE, { x: ix4 - 0.05, y: iy4b - 0.05, w: iw4 + 0.1, h: ih4b + 0.1, fill: { color: C.white }, line: { color: C.line, width: 1 }, shadow: shadow() });
  s.addImage({ path: imgSegovDropdown.path, x: ix4, y: iy4b, w: iw4, h: ih4b });
  s.addText("Mega-menu “Institucional” — padrão sem equivalente no DS-MS", { x: ix4, y: iy4b + ih4b + 0.06, w: iw4, h: 0.3, fontFace: BODY, fontSize: 9.5, italic: true, color: C.mute, margin: 0 });

  const findings = [
    [C.success, "Cor certa", "Faixa e acordeão usam #004F9F — exatamente o nosso token primário."],
    [C.error, "Falha de teclado", "Acordeão tem tabIndex=\"-1\": impossível abrir navegando só com Tab."],
    [C.error, "Falha de leitor de tela", "Sem role, aria-expanded ou aria-controls — leitor de tela não anuncia nada."],
    [C.error, "Tipografia divergente", "Usa a fonte padrão do sistema, não Open Sans/Roboto da marca."],
  ];
  let fy2 = 1.75;
  const fx2 = 4.55, fw2 = 8.2;
  findings.forEach((f) => {
    s.addShape(pres.shapes.OVAL, { x: fx2, y: fy2 + 0.03, w: 0.22, h: 0.22, fill: { color: f[0] } });
    s.addText(f[1], { x: fx2 + 0.35, y: fy2 - 0.06, w: fw2 - 0.35, h: 0.35, fontFace: HEAD, fontSize: 14, bold: true, color: C.ink, margin: 0 });
    s.addText(f[2], { x: fx2 + 0.35, y: fy2 + 0.3, w: fw2 - 0.35, h: 0.55, fontFace: BODY, fontSize: 12, color: C.mute, margin: 0 });
    fy2 += 1.0;
  });

  s.addShape(pres.shapes.RECTANGLE, { x: fx2, y: 5.85, w: fw2, h: 1.0, fill: { color: C.errorSoft } });
  s.addShape(pres.shapes.RECTANGLE, { x: fx2, y: 5.85, w: 0.1, h: 1.0, fill: { color: C.error } });
  s.addText([
    { text: "Argumento de negócio: ", options: { bold: true } },
    { text: "publicar o pacote não é só padronizar visual — é corrigir falhas de acessibilidade reais, hoje, em produção, em outro órgão do mesmo Estado." },
  ], { x: fx2 + 0.25, y: 5.85, w: fw2 - 0.4, h: 1.0, fontFace: BODY, fontSize: 12.5, color: "7F161A", valign: "middle", margin: 0 });
  footer(s, pres, 4, false);

  // =====================================================================
  // SLIDE 5 — A SOLUÇÃO
  // =====================================================================
  s = pres.addSlide();
  s.background = { color: C.white };
  leftBorder(s, pres, C.brand);
  s.addText("A solução: uma fonte única que gera código", { x: 0.6, y: 0.45, w: 12.3, h: 0.7, fontFace: HEAD, fontSize: 30, bold: true, color: C.brand, margin: 0 });

  const flow = [
    ["Figma", "Tokens Studio → JSON"],
    ["Style Dictionary", "gera automaticamente"],
    ["CSS · SCSS · JS\nPHP · Python", "uma saída por stack"],
    ["Storybook + npm/CDN", "doc viva + entrega"],
  ];
  const fb = 2.78, fh = 1.45, fy = 1.55, fgap = 0.42;
  let fx = 0.6;
  flow.forEach((b, i) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: fx, y: fy, w: fb, h: fh, rectRadius: 0.08, fill: { color: i === 2 ? C.brand : C.bg }, line: { color: i === 2 ? C.brand : C.line, width: 1 }, shadow: shadow() });
    s.addText(b[0], { x: fx + 0.12, y: fy + 0.28, w: fb - 0.24, h: 0.7, fontFace: HEAD, fontSize: 15, bold: true, color: i === 2 ? C.white : C.brand, align: "center", valign: "middle", margin: 0 });
    s.addText(b[1], { x: fx + 0.12, y: fy + 0.98, w: fb - 0.24, h: 0.35, fontFace: BODY, fontSize: 10.5, color: i === 2 ? C.ice : C.mute, align: "center", margin: 0 });
    if (i < flow.length - 1) {
      s.addText("›", { x: fx + fb, y: fy, w: fgap, h: fh, fontFace: HEAD, fontSize: 30, bold: true, color: C.brand, align: "center", valign: "middle", margin: 0 });
    }
    fx += fb + fgap;
  });

  const sols = [
    ["Multi-stack de verdade", "Os tokens viram CSS, SCSS, JS, PHP e Python a partir de um único arquivo."],
    ["Componentes híbridos", "Classe CSS+HTML para o grosso; Web Components (<ms-*>) nos interativos."],
    ["Documentação viva", "Storybook substitui as imagens; cada componente traz o código por linguagem."],
  ];
  const sw = 3.9, sy = 3.55, sgap = 0.3;
  let sx = 0.6;
  sols.forEach((b) => {
    s.addShape(pres.shapes.RECTANGLE, { x: sx, y: sy, w: sw, h: 1.7, fill: { color: C.white }, line: { color: C.line, width: 1 } });
    s.addShape(pres.shapes.RECTANGLE, { x: sx, y: sy, w: sw, h: 0.1, fill: { color: C.brand } });
    s.addText(b[0], { x: sx + 0.22, y: sy + 0.28, w: sw - 0.44, h: 0.4, fontFace: HEAD, fontSize: 15, bold: true, color: C.ink, margin: 0 });
    s.addText(b[1], { x: sx + 0.22, y: sy + 0.72, w: sw - 0.44, h: 0.9, fontFace: BODY, fontSize: 12.5, color: C.mute, margin: 0 });
    sx += sw + sgap;
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 5.6, w: 12.13, h: 0.95, fill: { color: C.successSoft } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 5.6, w: 0.1, h: 0.95, fill: { color: C.success } });
  s.addText([
    { text: "Já não é só prova de conceito: ", options: { bold: true } },
    { text: "10 componentes implementados, Web Component próprio e o pacote já publicado de verdade (próximo slide)." },
  ], { x: 0.85, y: 5.6, w: 11.7, h: 0.95, fontFace: BODY, fontSize: 13.5, color: "08210F", valign: "middle", margin: 0 });
  footer(s, pres, 5, false);

  // =====================================================================
  // SLIDE 6 — JÁ ESTÁ NO AR
  // =====================================================================
  s = pres.addSlide();
  s.background = { color: C.brand };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.16, h: H, fill: { color: C.ice } });
  s.addText("Já está no ar", { x: 0.6, y: 0.5, w: 11, h: 0.8, fontFace: HEAD, fontSize: 34, bold: true, color: C.white, margin: 0 });
  s.addText("Publicado e funcionando — não é mockup, é o link real.", {
    x: 0.62, y: 1.25, w: 11, h: 0.4, fontFace: BODY, fontSize: 14, color: C.ice, margin: 0,
  });

  const liveStats = [
    ["10 / 41", "componentes já no pacote"],
    ["R$ 0/mês", "custo de infraestrutura"],
    ["0.1.0", "primeira versão publicada"],
  ];
  const lgx = 0.6, lgy = 1.85, lgw = 3.85, lgh = 1.25, lggap = 0.25;
  liveStats.forEach((st, i) => {
    const x = lgx + i * (lgw + lggap);
    s.addShape(pres.shapes.RECTANGLE, { x, y: lgy, w: lgw, h: lgh, fill: { color: C.brandDark } });
    s.addText(st[0], { x: x + 0.2, y: lgy + 0.12, w: lgw - 0.4, h: 0.6, fontFace: HEAD, fontSize: 26, bold: true, color: C.white, margin: 0 });
    s.addText(st[1], { x: x + 0.2, y: lgy + 0.75, w: lgw - 0.4, h: 0.4, fontFace: BODY, fontSize: 11.5, color: C.ice, margin: 0 });
  });

  const links = [
    ["Pacote npm", "npmjs.com/package/@design-system-ms/ds-sis", "@design-system-ms/ds-sis instalável via npm i, hoje"],
    ["Documentação viva", "fabioramos-02.github.io/DS-MS-Design-System", "Storybook publicado via GitHub Pages — substitui as imagens"],
    ["Repositório", "github.com/fabioramos-02/DS-MS-Design-System", "Código aberto, CI automático a cada push"],
  ];
  let ly = 3.4;
  links.forEach((l) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: ly, w: 12.13, h: 0.95, fill: { color: C.white } });
    s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: ly, w: 0.1, h: 0.95, fill: { color: C.success } });
    s.addText(l[0], { x: 0.9, y: ly + 0.12, w: 3.2, h: 0.4, fontFace: HEAD, fontSize: 14, bold: true, color: C.brand, margin: 0 });
    s.addText(l[1], { x: 0.9, y: ly + 0.5, w: 9.8, h: 0.35, fontFace: BODY, fontSize: 11.5, color: C.ink, margin: 0 });
    s.addText(l[2], { x: 4.2, y: ly + 0.12, w: 8.4, h: 0.4, fontFace: BODY, fontSize: 11.5, italic: true, color: C.mute, margin: 0 });
    ly += 1.1;
  });
  footer(s, pres, 6, true);

  // =====================================================================
  // SLIDE 7 — PRÓXIMOS PASSOS
  // =====================================================================
  s = pres.addSlide();
  s.background = { color: C.white };
  leftBorder(s, pres, C.brand);
  s.addText("Próximos passos", { x: 0.6, y: 0.45, w: 11, h: 0.7, fontFace: HEAD, fontSize: 34, bold: true, color: C.brand, margin: 0 });

  const steps = [
    ["1", "Tokens do Figma oficial", "Hoje os tokens são transcritos à mão; falta o export real via Tokens Studio."],
    ["2", "31 componentes restantes", "Accordion, Breadcrumb, Dropdown, Menu, Table e outros — exigem acesso ao Figma."],
    ["3", "Gate de acessibilidade automático", "CI já builda; falta ligar axe-core como bloqueio de PR."],
    ["4", "Aval para virar o site oficial", "Storybook publicado pode substituir designsystem.ms.gov.br."],
  ];
  let ry = 1.55;
  steps.forEach((st) => {
    s.addShape(pres.shapes.OVAL, { x: 0.65, y: ry, w: 0.55, h: 0.55, fill: { color: C.brand } });
    s.addText(st[0], { x: 0.65, y: ry, w: 0.55, h: 0.55, fontFace: HEAD, fontSize: 22, bold: true, color: C.white, align: "center", valign: "middle", margin: 0 });
    s.addText(st[1], { x: 1.4, y: ry - 0.05, w: 5.6, h: 0.4, fontFace: HEAD, fontSize: 16, bold: true, color: C.ink, margin: 0 });
    s.addText(st[2], { x: 1.4, y: ry + 0.33, w: 5.8, h: 0.55, fontFace: BODY, fontSize: 12, color: C.mute, margin: 0 });
    ry += 1.05;
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 7.6, y: 1.55, w: 5.15, h: 3.1, fill: { color: C.bg }, line: { color: C.line, width: 1 }, shadow: shadow() });
  s.addShape(pres.shapes.RECTANGLE, { x: 7.6, y: 1.55, w: 5.15, h: 0.12, fill: { color: C.brand } });
  s.addText("Já não precisamos pedir", { x: 7.85, y: 1.8, w: 4.7, h: 0.4, fontFace: HEAD, fontSize: 16, bold: true, color: C.brand, margin: 0 });
  s.addText([
    { text: "Orçamento de infraestrutura — está em R$ 0/mês.", options: { bullet: true, breakLine: true } },
    { text: "Aprovar tecnologia — Storybook/npm já validados em produção.", options: { bullet: true } },
  ], { x: 7.85, y: 2.3, w: 4.7, h: 1.1, fontFace: BODY, fontSize: 12.5, color: C.ink, paraSpaceAfter: 8, margin: 0 });
  s.addText("O que precisamos", { x: 7.85, y: 3.55, w: 4.7, h: 0.4, fontFace: HEAD, fontSize: 16, bold: true, color: C.brand, margin: 0 });
  s.addText([
    { text: "Acesso ao Figma oficial do DS-MS (Tokens Studio).", options: { bullet: true, breakLine: true } },
    { text: "Aval para evoluir o pacote em piloto oficial da SETDIG.", options: { bullet: true } },
  ], { x: 7.85, y: 4.05, w: 4.7, h: 1.0, fontFace: BODY, fontSize: 12.5, color: C.ink, paraSpaceAfter: 8, margin: 0 });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 6.0, w: 12.13, h: 0.7, fill: { color: C.brand } });
  s.addText("Um passo pequeno agora evita um gargalo grande depois.", {
    x: 0.6, y: 6.0, w: 12.13, h: 0.7, fontFace: HEAD, fontSize: 16, bold: true, italic: true, color: C.white, align: "center", valign: "middle", margin: 0,
  });
  footer(s, pres, 7, false);

  await pres.writeFile({ fileName: path.join(__dirname, "DS-MS-Apresentacao.pptx") });
  console.log("OK: DS-MS-Apresentacao.pptx gerado (7 slides).");
})();

# DS-MS — Design System dos sistemas de Mato Grosso do Sul

> **Em uma frase:** Sistema de design oficial dos serviços digitais do governo de Mato Grosso do Sul (Brasil), mantido pela **SETDIG — Secretaria-Executiva de Transformação Digital**.

A entrega é um **design system público para sites e sistemas administrativos** com três foundations principais (Introdução, Fundamentos, Componentes) e templates para Desktop, Tablet e Mobile. O nome curto é **DS-MS**.

A documentação é escrita em **Português do Brasil (pt-BR)** — mantenha esse idioma em todo conteúdo que produzir.

---

## Fontes (sources of truth)

| Fonte                                                                 | Local                                                                                           |
|----------------------------------------------------------------------|--------------------------------------------------------------------------------------------------|
| Figma — "Template-Site-DS"                                            | Anexado neste projeto como sistema de arquivos virtual `.fig`. Páginas: Cover, Template-Baixa-Fidelidade, Template-Alta-Fidelidade, Template-Desktop (18 frames), Template-Tablet (13 frames), Template-Mobile (15 frames). |
| PDF — `Documentacao-Design-System-Figma.pdf`                          | `uploads/` — fornecido pelo usuário (PDF binário; não conseguimos extrair texto limpo)         |
| Site oficial / repositórios mencionados pelo header da doc           | "Repositório GitLab" + "Repositório TFS" + "Figma UI Kit" — links **não fornecidos** ao agente |

> **Sem URLs públicas do GitLab/TFS ou repositório npm `@dsms/ds-sis`** — todos os tokens foram derivados diretamente dos componentes do Figma (cores, tipos, espaçamentos, sombras).

---

## Produtos representados

Apesar do título "Design System de Mato Grosso do Sul", o que está documentado no Figma cobre **um único produto**: a própria **biblioteca DS-MS** (`@dsms/ds-sis`), que se manifesta em duas superfícies:

1. **Site de documentação** — onde o sistema é explicado (Boas-Vindas, Paleta de Cores, Tipografia, Espaçamento, Bordas, Sombras, Overlay, Componentes…). Responsivo: Desktop 1440, Tablet 768, Mobile 360.
2. **Componentes consumíveis** — botões, inputs, busca, selects, checkbox, header/footer governamentais — destinados a sistemas administrativos e públicos estaduais.

Não foram fornecidos screenshots, codebase de aplicações reais nem decks. Todas as recriações de UI partem **apenas** do Figma.

---

## Fundamentos de conteúdo (Content Fundamentals)

**Idioma:** Português do Brasil, sempre. Mantenha acentuação e cedilha.

**Pessoa & tom:** Voz institucional, mas calorosa. Usa **"nós"** quando fala do time / do governo ("Nós da equipe do Design System...") e **"você"** ao se dirigir a quem está construindo / consumindo ("Use as cores para...", "Para utilizar a paleta..."). Evita gírias. Imperativo educativo é comum em rótulos curtos ("Buscar", "Importe os Estilos", "Aplicação", "Uso e exemplo").

**Capitalização:** **Sentence case** em títulos e labels. Capitaliza substantivos próprios da marca: *Design System*, *DS-MS*, *SETDIG*, nomes de produtos. Headers de seção começam com maiúscula só na primeira palavra: "Paleta de Cores", "Importe os Estilos", "Cor Primária", "Dando Intenção para as Cores", "Uso e exemplo".

**Emojis:** **Nunca.** O sistema não usa emoji em nenhum lugar (rótulos, ícones ou cópia). Iconografia é sempre vetorial.

**Vibe:** Governamental brasileiro contemporâneo. Sério mas acessível; explica o "por que" antes do "como". A documentação é detalhada — definições antes de exemplos.

**Exemplos canônicos (do Figma):**

> "SETDIG Design System é nossa abordagem personalizada para criar experiências e produtos digitais abrangentes. Enraizado em uma base de princípios de design inclusivos, o Design System não é apenas um sistema, mas um ecossistema de código funcional, ferramentas práticas de design, recursos detalhados e diretrizes claras de interface humana."

> "Nós da equipe do Design System creditamos que as melhores ideias vêm de uma mistura diversificada de mentes e talentos, e promovemos ativamente uma comunidade onde contribuições, feedback e novos designs não são apenas bem-vindos, mas essenciais."

> "As cores no nosso design system desempenham um papel fundamental na criação de uma experiência visual coesa e atraente para os usuários."

> "Use as cores para criar experiências significativas, como, guiar a navegação do usuário, garantir consistência, enquanto, também, expressa hierarquia, estados."

Padrão observado em **micro-cópia**: parágrafos longos descritivos seguidos de uma frase imperativa curta ("Use … para …"). Em UI: rótulos de uma só palavra ("Buscar", "Botão", "Título", "Texto demonstrativo", "Texto de ajuda").

---

## Fundamentos visuais (Visual Foundations)

### Cores
Paleta governamental sóbria, **dominada por um único azul institucional `#004F9F`** (= Cor Primária 500 = `--color-primary-500`). É o azul de chrome de site governamental brasileiro, idêntico ao tom do escudo de Mato Grosso do Sul. A neutralidade (cinzas frios) ocupa a maior parte das superfícies; o azul é reservado para cabeçalho, rodapé, CTAs primários, links e estados ativos. Acentos só em feedback (erro vermelho `#DA1E28`, sucesso verde `#198038`, alerta laranja `#FF6200`, info azul-claro `#067BCC`). **Não há gradientes.** Surfaces são sólidas; o único "soft" é o azul tint `#CCDCEC` (primary-100).

### Tipografia
Duas fontes gratuitas, Google Fonts: **Open Sans** (display + headings + interações) e **Roboto** (body, captions, tags, código). Open Sans **Bold 700** é a voz visual da marca — não há decorativas. Para mono usa-se **Archivo** (rótulos de tokens em swatches), mas é coadjuvante. Escala generosa: display até 96px no desktop; body começa em 14px. Letter-spacing levemente negativo (-1px / -0.01em) só em Display.

### Espaçamento
Sistema **base-8 com nudges 2/4**: 2, 4, 8, 16, 24, 32, 40, 56, 64, 72, 88. **Não há valor "10"** — se você precisa de algo "perto de 10", arredonde para 8 ou 16. 32 é o gap padrão entre cards em layouts de documentação. 16 é o gap interno mais comum.

### Backgrounds / fundos
**Branco predominante** (`#FFFFFF`). Faixas inteiras de azul institucional `#004F9F` aparecem **apenas no header e no footer** (faixas de 96px de altura, da extremidade à extremidade). Cards usam fundo branco com borda de 1px (`#99B9D9` ou `#EFEFF0`). Não usa imagens full-bleed, nem padrões/texturas/grãos. Não usa ilustrações desenhadas à mão. A única "imagem" repetida é o logotipo institucional da SETDIG.

### Animação
**Mínima e funcional.** O Figma não documenta motion. Adote transições padrão de 120–150ms `ease` em hover/focus, sem bounces nem easing exuberante. Não há entrance animations. Reações táteis: `transform: translateY(1px)` em `:active`.

### Hover / Press states
- **Botão primário** (`.btn-primary`): hover → tom 600 (`#002F5F`, mais escuro). Active → 700.
- **Botão secundário**: hover → fundo `rgba(0,79,159,.06)` (tint suavíssimo).
- **Link / botão simples**: hover → tom 600 + sublinhado.
- **Cartões clicáveis**: hover → eleva via `shadow-4` + borda intensifica para azul-300.
- **Inputs**: hover → borda escurece (`#545D64`); focus → borda azul 500 + halo `0 0 0 2px rgba(0,79,159,.15)`.
- **Press**: leve translação Y; sem mudança de tamanho.

### Bordas
Larguras canônicas: **1px, 2px, 4px, 8px, 16px**. A maioria das bordas em UI é 1px. Botões usam 2px (também o estilo "outline" do secondary). Cor padrão: `#A9AEB1` (border-default). Em foco/active: `#004F9F`. Em erro: `#DA1E28`.

### Cantos (Border radius)
**Escala discreta** — não usa o "pill" indiscriminadamente:
- `2px` — inputs de texto, busca (sutilíssimo, quase reto)
- `4px` — botões, checkbox, tags
- `8px` — cards, blocos de código
- `16px / 24px / 32px` — superfícies maiores
- `9999px` — só para avatares circulares e toggles

### Sombras
Quatro sombras nomeadas. Direção idêntica (offset positivo Y, sem X), cor única **`rgba(0,32,64,0.30)`** (preto-azulado, não preto puro): 
- `shadow-4`  → blur 8  (default, cards em hover)
- `shadow-6`  → blur 12
- `shadow-12` → blur 24 (modais, popovers)
- `shadow-24` → blur 48 (overlays grandes)

**Não há inner shadows** documentadas. Não há "glow" colorido.

### Transparência / blur
- **Overlay scrim**: `rgba(1, 15, 30, 0.5)` (azul-preto bem escuro, 50%). Usado para escurecer atrás de modais.
- Tints com alpha apenas em hover (ex.: `rgba(0,79,159,.06)`).
- **Não há backdrop-filter / blur** documentado. Não há vidro fosco.

### Layout / grid
Documentação desktop em **container 800px** centralizado em viewport 1440. Header e footer ocupam viewport inteiro (1440). Menu lateral fixo à esquerda (172px de largura). Mini-menu de navegação local à direita (176px de largura). Espaçamento padrão `gap: 32px` ou `64px` entre seções.

### Iconografia
Ver seção **ICONOGRAPHY** abaixo.

### Imagens
Não há fotografias documentadas. O design system não comunica calor com fotos — comunica seriedade com chrome azul + iconografia limpa.

---

## ICONOGRAPHY

**Estilo:** Outline + filled mix; traço médio (~1.5px equivalente). Tamanho padrão **16px** (em UI compacta, header) ou **24px** (cards, headings). Pintados com `currentColor` na maioria dos casos — herdam a cor do contexto (texto azul → ícone azul).

**Sistema usado:** O Figma referencia ícones pelos nomes da convenção **[Iconify](https://iconify.design/)** (ex.: `ion:book-outline`, `bi:clipboard`, `uil:search`, `logos:figma`, `logos:gitlab`). Não há fonte de ícone proprietária; cada ícone é um SVG individual extraído do conjunto correspondente do Iconify.

**Coleções referenciadas no Figma:**
| Prefixo Iconify | Coleção                | Uso                              |
|------------------|-------------------------|----------------------------------|
| `ion:`           | Ionicons                | Navegação (`book-outline`)       |
| `bi:`            | Bootstrap Icons         | UI utilitário (`clipboard`)       |
| `uil:`           | Unicons (line)          | Busca (`search`)                  |
| `logos:`         | SVG Logos               | Marcas de terceiros (`figma`, `gitlab`) |

**Como usar neste design system:**
- Para ícones genéricos, importe via CDN do Iconify (ex.: `<span class="iconify" data-icon="ion:book-outline"></span>`). Veja `ui_kits/docs-site/index.html` para o exemplo.
- Logos próprios (DS-MS, SETDIG, governo MS) estão em `assets/` como SVGs limpos.
- **Não há ícone-fonte proprietário** (não há `dsms-icons.ttf` ou similar) — sempre SVG.
- **Emoji nunca é usado.** Unicode-as-icon nunca é usado. Sempre SVG.

**Substituição declarada:** Não fizemos substituição — o sistema Iconify é gratuito e carregado por CDN.

---

## Index (manifesto da raiz)

| Arquivo                          | O que é                                                    |
|----------------------------------|------------------------------------------------------------|
| `README.md`                      | Este arquivo — visão geral, foundations, índice            |
| `SKILL.md`                       | Front-matter para Claude Code / Agent Skills               |
| `colors_and_type.css`            | Tokens de cor + tipo + spacing + radius + shadow           |
| `components.css`                 | Botões, inputs, busca, cards, header/footer, code-block    |
| `assets/`                        | Logos SVG (DS-MS, SETDIG, escudo), `logo-tfs.png`          |
| `preview/`                       | Cards individuais que populam a aba **Design System**       |
| `ui_kits/docs-site/`             | Recriação do site de documentação DS-MS (Desktop 1440)     |
| `ui_kits/admin-template/`        | Template de login administrativo + página interna           |

### UI kits

- **`ui_kits/docs-site/`** — Site público de documentação. Telas: Boas-Vindas / Visão Geral, Paleta de Cores, Tipografia, Componentes (estados de botão e input). Navegação por links.
- **`ui_kits/admin-template/`** — Telas administrativas do governo construídas com o DS: Login Administrativo, Página Interna com Data Table, Página de Erro.

### Preview cards (Design System tab)

Cada arquivo em `preview/*.html` é um card individual (~700px). São renderizações independentes dos tokens — paleta primária, neutra, feedback; specimens de display/heading/body; spacing scale; raios; sombras; e estados de cada componente.

---

## Notas e cautelas

- Os hex dos níveis 700/800/900 da primary foram **inferidos por progressão** a partir dos 100/200/600 declarados no Figma — pode haver pequena variação para o valor oficial publicado.
- A documentação fala em `@dsms/ds-sis` e cita `import '@dsms/ds-sis/lib/styles.css'`, mas **não temos acesso ao pacote real**. As classes em `components.css` reconstroem o comportamento descrito; nomes batem com os exemplos do Figma (`.display-large`, `.heading-xx-large`, `.body-medium`, `.shadow-4`).
- Iconify é carregado via CDN nos protótipos — se o repositório oficial usa um sprite local, troque os `<span class="iconify">` por `<svg><use href="#...">`.
- Não recebemos slides — `slides/` não foi criado.

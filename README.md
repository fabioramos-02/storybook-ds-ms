# DS-MS — Design System de Mato Grosso do Sul

> Sistematização do design system oficial do Governo do Estado de Mato Grosso do Sul: tirar os componentes do "só Figma + imagens" e publicá-los como **código real, multi-stack** (PHP, Python, JS), mantido pela **SETDIG — Secretaria-Executiva de Transformação Digital**.

[![npm](https://img.shields.io/npm/v/@design-system-ms/ds-sis?label=npm)](https://www.npmjs.com/package/@design-system-ms/ds-sis)

## Links ao vivo

| O quê | Onde |
|---|---|
| **Pacote npm** | [npmjs.com/package/@design-system-ms/ds-sis](https://www.npmjs.com/package/@design-system-ms/ds-sis) — `npm install @design-system-ms/ds-sis` |
| **Documentação viva (Storybook)** | [fabioramos-02.github.io/DS-MS-Design-System](https://fabioramos-02.github.io/DS-MS-Design-System/) |
| **Exemplo de consumo real** | [fabioramos-02.github.io/DS-MS-Design-System/exemplo-consumo](https://fabioramos-02.github.io/DS-MS-Design-System/exemplo-consumo/) — instala o pacote publicado via `npm install`, não é mock |
| **Repositório** | [github.com/fabioramos-02/DS-MS-Design-System](https://github.com/fabioramos-02/DS-MS-Design-System) |

## O problema que este repositório resolve

O site oficial [designsystem.ms.gov.br](https://www.designsystem.ms.gov.br/) documenta os componentes do DS-MS apenas em **imagens** (anatomia, variações, anti-padrões) — zero código pronto para usar. Cada time do Estado (PHP, Python, JS) reimplementa o mesmo componente do zero a partir do Figma, gerando divergência visual, retrabalho e acessibilidade inconsistente. Já existe **evidência real desse drift** num site de outra secretaria do mesmo governo — ver [`docs/09-comparacao-segov-codesul.md`](docs/09-comparacao-segov-codesul.md).

A solução aqui: uma **fonte única de tokens** (JSON) que gera CSS/SCSS/JS/PHP/Python automaticamente, componentes entregues como CSS+HTML (modelo USWDS/gov.uk) ou Web Components nos interativos, documentados ao vivo no Storybook e publicados de verdade no npm. Contexto completo, decisões e arquitetura em [`docs/`](docs/).

## Status atual

**10 de 41 componentes** oficiais do DS-MS implementados e publicados (`v0.1.0`): Button, Input, Search, Selection (checkbox/radio/toggle), Link, Card, Tag, Notification, Footer, e Header como **Web Component** (`<ms-header>`). Os 31 restantes (Accordion, Breadcrumb, Dropdown, Menu, Table, etc.) exigem acesso ao Figma oficial — não foram inventados sem fonte fiel. Detalhe completo do que falta e por quê: [`docs/08-proximos-passos.md`](docs/08-proximos-passos.md).

Custo de infraestrutura hoje: **R$ 0/mês** (npm público + jsDelivr + GitHub Actions/Pages, todos nos planos gratuitos) — ver [`docs/10-custos-publicacao-pacote.md`](docs/10-custos-publicacao-pacote.md).

## Estrutura do repositório

| Caminho | O que é |
|---|---|
| [`docs/`](docs/) | Planejamento, arquitetura, pesquisa e decisões — comece pelo [índice](docs/README.md) |
| [`poc/`](poc/) | Implementação real: tokens (Style Dictionary), os 10 componentes, Storybook, build publicável (`dist/`) |
| [`exemplo-consumo/`](exemplo-consumo/) | Página que instala `@design-system-ms/ds-sis` via `npm install` de verdade — prova que o pacote publicado funciona |
| [`apresentacao/`](apresentacao/) | Gerador (`pptxgenjs`) do deck de apresentação para a gestão |
| [`.github/workflows/`](.github/workflows/) | CI (`ci.yml`), deploy do Storybook+exemplo no GitHub Pages (`pages.yml`), publish no npm em tag semver (`publish-npm.yml`) |
| `colors_and_type.css` | Tokens de cor/tipografia/espaçamento/raio/sombra extraídos do Figma — fonte que `poc/tokens/*.json` espelha |
| `components.css` | CSS dos componentes (botão, input, busca, card, header/footer) — fonte que `poc/src/components/*` espelha |
| `assets/` | Logos oficiais (DS-MS, SETDIG, brasão) em SVG |
| `preview/` | Cards HTML isolados, um por token/componente, para inspeção visual rápida sem montar o Storybook |
| `ui_kits/` | Recriações React (JSX) do site de documentação e de um template administrativo, como referência visual |
| `uploads/` | PDF original da documentação Figma, fornecido como fonte |
| `SKILL.md` | Front-matter de Agent Skill (Claude Code) para gerar artefatos com a identidade do DS-MS |

## Usar o pacote

```bash
npm install @design-system-ms/ds-sis
```

```html
<link rel="stylesheet" href="node_modules/@design-system-ms/ds-sis/dist/css/ds-sis.css">
<script type="module" src="node_modules/@design-system-ms/ds-sis/dist/js/ds-sis.js"></script>

<button class="btn btn-primary btn-md">Salvar</button>
<ms-header secretaria="SETDIG"></ms-header>
```

Sem Node no projeto (PHP/Python via CDN), ou snippets prontos por stack (Blade, Jinja, React): ver [`docs/04-multistack.md`](docs/04-multistack.md).

## Desenvolver localmente

```bash
cd poc
npm install
npm run storybook        # Storybook local, http://localhost:6006
npm run build             # gera dist/css/ds-sis.css + dist/js/ds-sis.js (o que é publicado)
```

Guia completo de componentes, tokens e estrutura: [`poc/README.md`](poc/README.md).

## Fundamentos visuais (resumo)

- **Cor primária:** `#004F9F` (`--color-primary-500`) — azul institucional do Estado, reservado para header/footer, CTAs, links e estados ativos. Sem gradientes.
- **Tipografia:** Open Sans (display/headings/interações) + Roboto (body/captions/código), via Google Fonts.
- **Espaçamento:** escala base-8 (2, 4, 8, 16, 24, 32, 40, 56, 64, 72, 88).
- **Raio:** 2px (inputs) · 4px (botões/tags) · 8px (cards) · 16/24/32px (superfícies grandes) · `9999px` (avatares/toggles).
- **Sombra:** quatro níveis (`shadow-4/6/12/24`), cor única `rgba(0,32,64,0.30)`.
- **Ícones:** sempre SVG (convenção [Iconify](https://iconify.design/)) — nunca emoji, nunca ícone-fonte proprietário.

Detalhamento completo (hover/press, bordas, iconografia, voz e tom da marca) está versionado em `colors_and_type.css` e `components.css` — leia o código-fonte, é a referência viva. Arquitetura de tokens e como eles chegam a cada linguagem: [`docs/01-arquitetura.md`](docs/01-arquitetura.md).

## Documentação completa

Todo o raciocínio por trás das decisões — pesquisa de Storybook, ecossistema de CI/CD, comparação com outro site do governo, custos, roadmap — está em [`docs/`](docs/README.md).

## Mantido por

**SGD** (Superintendência de Governo Digital) / **SETDIG** — Secretaria-Executiva de Transformação Digital, Governo do Estado de Mato Grosso do Sul.

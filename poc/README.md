# DS-MS — Design System de Mato Grosso do Sul

Tokens de design (cor, tipografia, espaçamento) gerados a partir de uma fonte única em
JSON, distribuídos como CSS/SCSS/JS/PHP/Python, e componentes documentados ao vivo no
Storybook.

```
tokens/*.json  ──Style Dictionary──►  dist/{css,scss,js,php,python,json}
                                              │
                          componentes (css/web components) consomem os tokens
                                              │
                                  Storybook (docs + a11y)
```

**Storybook publicado:** https://fabioramos-02.github.io/DS-MS-Design-System/
**Pacote:** [`@design-system-ms/ds-sis`](https://www.npmjs.com/package/@design-system-ms/ds-sis) (npm) ·
`@fabioramos-02/ds-sis` (GitHub Packages)

## Componentes (28)

- **23 em `Componentes/`** — elementos de interface (Button, Input, Card, Header, Menu,
  Carousel, Table, Accordion, etc.). Header, Menu e Carousel são Web Components (Lit);
  os demais são classe CSS + HTML semântico.
- **5 em `Diretrizes de design/`** — padrões de conteúdo (Títulos/Hierarquia, Listas,
  Parágrafos, Citações, Formulários), alinhados a [designsystem.ms.gov.br](https://www.designsystem.ms.gov.br/).

Cada componente tem `<nome>.css`, `<nome>.stories.js` e `<nome>.mdx` (uso + acessibilidade
eMAG/WCAG 2.1 AA).

## Pré-requisitos

Node.js 18+ e npm.

## Rodar localmente

```bash
cd poc
npm install

npm run tokens            # gera dist/{css,scss,js,php,python,json} a partir de tokens/*.json
npm run storybook         # http://localhost:6006 — documentação viva + painel de acessibilidade
npm run build             # gera o bundle publicável: dist/css/ds-sis.css + dist/js/ds-sis.js
npm run build-storybook   # gera o site estático de docs em storybook-static/
```

## Estrutura

```
poc/
  package.json                 nome do pacote, versão, scripts
  style-dictionary.config.js   formatos de saída dos tokens (css/scss/js/php/python/json)
  scripts/build-css.js         concatena tokens.css + CSS de cada componente -> dist/css/ds-sis.css
  vite.lib.config.js           empacota src/index.js -> dist/js/ds-sis.js (Lit bundlado)
  tokens/*.json                fonte única dos tokens (cor, tipografia, espaçamento, por componente)
  src/components/<nome>/       <nome>.css, <nome>.stories.js, <nome>.mdx (e ms-<nome>.js quando é Web Component)
  .storybook/                  main.js + preview.js (web-components-vite + addon-a11y)
```

Pipeline de CI/CD em [`../.github/workflows/`](../.github/workflows/).

## Publicação

Versionamento via tag (`vX.Y.Z`) + GitHub Release. Nada é publicado manualmente — os
workflows fazem o build e o publish:

| Gatilho | Workflow | Resultado |
|---|---|---|
| Push em `main` | `ci.yml` | Build + validação |
| Push em `main` | `pages.yml` | Storybook publicado no GitHub Pages |
| Tag `vX.Y.Z` | `publish-npm.yml` | Publica `@design-system-ms/ds-sis` no npm |
| Release publicada | `publish-gpr.yml` | Publica `@fabioramos-02/ds-sis` no GitHub Packages |

Fluxo de release:

```bash
git checkout -b chore/bump-X.Y.Z
npm version X.Y.Z --no-git-tag-version   # dentro de poc/
git commit -am "chore(poc): bump version <atual> -> X.Y.Z"
git push -u origin chore/bump-X.Y.Z
gh pr create --fill && gh pr merge --squash --delete-branch

git checkout main && git pull
gh release create vX.Y.Z --title vX.Y.Z --notes "..."
```

## Consumo via CDN

Após o primeiro publish no npm, o jsDelivr funciona automaticamente, sem configuração:

```
https://cdn.jsdelivr.net/npm/@design-system-ms/ds-sis/dist/css/ds-sis.css
https://cdn.jsdelivr.net/npm/@design-system-ms/ds-sis/dist/js/ds-sis.js
```

## Notas

- `dist/` e `storybook-static/` são gerados (estão no `.gitignore`).
- O formato de token é o nativo do Style Dictionary; Figma + Tokens Studio exportam W3C
  DTCG (`$value`/`$type`), também suportado pelo Style Dictionary v4.
- Web Components (Header, Menu, Carousel) usam light DOM — esperam herdar `ds-sis.css` já
  carregado na página, não encapsulam o próprio estilo.

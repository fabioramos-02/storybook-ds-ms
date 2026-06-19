# POC — DS-MS ponta-a-ponta (button)

Prova de conceito do plano em [`../docs/`](../docs/). Demonstra a tese central:

> **Uma fonte única de tokens (JSON) gera código para CSS, SCSS, JS, PHP e Python**,
> e o componente é documentado vivo no Storybook com snippets por stack.

```
tokens/*.json  ──Style Dictionary──►  dist/{css,scss,js,php,python,json}
                                              │
                                  button.css consome os tokens
                                              │
                                  Storybook (web-components + a11y)
                                              │
                          snippets HTML / Blade / Jinja / React
```

## Pré-requisitos
- Node.js 18+ e npm.

## Rodar

```bash
cd poc
npm install

# 1) Gera os tokens para TODAS as linguagens (núcleo da prova)
npm run tokens

# 2) Sobe o Storybook (documentação viva + painel de acessibilidade)
npm run storybook        # http://localhost:6006

# 3) Gera o site estático de docs (o que iria pro deploy)
npm run build-storybook  # saída em storybook-static/
```

## O que conferir (verificação)

Após `npm run tokens`, o mesmo token sai em cada linguagem:

| Arquivo gerado | Trecho esperado |
|---|---|
| `dist/css/tokens.css` | `--color-primary-500: #004F9F;` |
| `dist/scss/_tokens.scss` | `$color-primary-500: #004F9F;` |
| `dist/js/tokens.js` | `export const ColorPrimary500 = "#004F9F";` |
| `dist/php/Tokens.php` | `const COLOR_PRIMARY_500 = "#004F9F";` |
| `dist/python/tokens.py` | `COLOR_PRIMARY_500 = "#004F9F"` |

→ É a prova do **"uma fonte, várias linguagens"** que resolve a dor multi-stack.

No Storybook (`npm run storybook`):
- Story **Componentes/Button** renderiza variantes/tamanhos/estados.
- Painel **Accessibility** (axe) sem violações.
- Página **Acessibilidade & uso** com a tabela de testes (eMAG/WCAG) e os snippets por stack.

## Estrutura

```
poc/
  package.json                 scripts: tokens, storybook, build-storybook
  style-dictionary.config.js   formatos css/scss/js/php/python/json (+ PHP/Python custom)
  tokens/
    color.json                 paleta (seed de colors_and_type.css da raiz)
    button.json                tokens do componente (referenciam color.*)
  src/components/button/
    button.css                 consome dist/css/tokens.css (gerado)
    button.stories.js          stories (HTML render via lit-html)
    button.mdx                 docs + acessibilidade + snippets
    snippets/                  html / blade / jinja / react
  .storybook/                  main.js + preview.js (web-components-vite + a11y)
  .gitlab-ci.yml               pipeline de referência
```

## Notas
- O formato de token aqui é o **nativo do Style Dictionary** (robusto e estável).
  Em produção, o Figma + **Tokens Studio** exporta **W3C DTCG** (`$value`/`$type`),
  também suportado pelo Style Dictionary v4. Ver [`../docs/01-arquitetura.md`](../docs/01-arquitetura.md).
- `dist/` é **gerado** (está no `.gitignore`) — rode `npm run tokens` para criá-lo.
- O `.gitlab-ci.yml` é referência; rodar de verdade exige um runner GitLab.

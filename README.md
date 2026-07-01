# Storybook — Design System MS (SETDIG)

Documentação viva de componentes, tokens e padrões visuais do **Design System do Governo de Mato Grosso do Sul**, mantido pela **Secretaria-Executiva de Transformação Digital (SETDIG)**.

Ambiente construído com **Storybook + Vite**, em HTML/CSS/JavaScript puros — sem framework de UI, sem dependência de WordPress.

> **Storybook publicado:** https://fabioramos-02.github.io/storybook-ds-ms/

---

## Aviso de migração

Este repositório foi refatorado a partir do antigo `DS-MS-Design-System` (que publicava o pacote npm `@design-system-ms/ds-sis`).

- O pacote npm foi **descontinuado**. Novos consumos devem ser feitos copiando os componentes deste Storybook ou clonando o repositório.
- O repositório será renomeado para `storybook-ds-ms` após o merge deste refactor.
- Web Components (`<ms-header>`, `<ms-menu>`, `<ms-carousel>`) foram substituídos por funções JS que retornam HTML.

---

## Objetivo

Centralizar a documentação visual e técnica do Design System MS para uso em portais, sistemas e aplicações do Estado, garantindo padrão único de identidade, acessibilidade e reuso.

## Tecnologias

- Storybook 10 (`@storybook/html-vite`)
- Vite 7
- HTML5, CSS puro (custom properties com prefixo `--ds-`), JavaScript ES modules
- PrismJS + prism-themes (highlight de snippets nas stories)

---

## Instalação

```bash
npm install
```

## Scripts

| Script | O que faz |
|---|---|
| `npm run storybook` | Roda Storybook em `http://localhost:6006` |
| `npm run build-storybook` | Gera Storybook estático em `storybook-static/` |
| `npm run dev` | Roda Vite em `http://localhost:5173` |
| `npm run build` | Build Vite |
| `npm run lint:css` | Roda Stylelint em `src/**/*.css` |

---

## Estrutura

```text
storybook-ds-ms/
├── .storybook/         Configuração do Storybook
├── public/             Favicons, ícones SVG
├── src/
│   ├── styles/         Tokens CSS globais (--ds-*)
│   ├── components/     Componentes reutilizáveis
│   ├── docs/           Páginas institucionais (introdução, tokens)
│   ├── utils/          Helpers (CodePreview)
│   ├── assets/         Imagens usadas em stories
│   ├── main.js         Entry Vite
│   └── main.css        Import de tokens + componentes
├── package.json
├── vite.config.js
└── .github/workflows/  CI/CD (deploy Pages, PR CI, PR preview)
```

---

## Padrão de nomenclatura

- **CSS:** classes com prefixo `.ds-` (`.ds-button`, `.ds-card`, `.ds-alert`).
- **Custom properties:** prefixo `--ds-` (`--ds-color-primary-600`, `--ds-spacing-16`).
- **Componentes JS:** função nomeada em PascalCase que retorna HTML string.
- **Stories:** arquivo `component.stories.js` com `export default { title: 'Componentes/Nome' }`.

---

## Tokens disponíveis

Tokens em `src/styles/`, todos com prefixo `--ds-`:

| Categoria | Arquivo | Exemplos |
|---|---|---|
| Cores | `variables.css` | `--ds-color-brand-skyline`, `--ds-color-primary-600`, `--ds-color-text-primary` |
| Tipografia | `typography.css` | `--ds-heading-1-font-size`, `--ds-body-md-font-size`, `--ds-font-weight-bold` |
| Espaçamento | `spacing.css` | `--ds-spacing-4`, `--ds-spacing-16`, `--ds-spacing-32` |
| Radius | `radius.css` | `--ds-radius-sm`, `--ds-radius-md`, `--ds-radius-huge` |
| Sombras | `shadows.css` | `--ds-shadow-card-sm`, `--ds-shadow-md` |
| Grid | `grid.css` | `--ds-grid-desktop-columns`, `--ds-breakpoint-desktop` |

---

## Como criar um novo componente

Exemplo para um componente `alert`:

```text
src/components/alert/
├── alert.css
├── alert.js
└── alert.stories.js
```

### 1. CSS

```css
.ds-alert {
    padding: var(--ds-spacing-16);
    border-radius: var(--ds-radius-md);
    background: var(--ds-color-background);
    color: var(--ds-color-text-primary);
}
```

### 2. JS

```js
import './alert.css';

export function Alert({ title = 'Título', description = 'Mensagem.' } = {}) {
    return `
        <div class="ds-alert">
            <strong>${title}</strong>
            <p>${description}</p>
        </div>
    `;
}
```

### 3. Story

```js
import { Alert } from './alert';

export default { title: 'Componentes/Alert' };

export const Default = {
    args: { title: 'Alerta', description: 'Mensagem de exemplo.' },
    render: (args) => Alert(args),
};
```

### 4. Registrar no CSS principal

Em `src/main.css`:

```css
@import "./components/alert/alert.css";
```

---

## Boas práticas

- Sempre usar tokens `--ds-*`, nunca valores hardcoded.
- Toda classe com prefixo `.ds-`.
- Cada componente em pasta própria com `component.{css,js,stories.js}`.
- Criar variações no Storybook para cada estado relevante (default, hover, disabled, error).
- Zero dependência de framework externo (React/Vue/Bootstrap).
- Acessibilidade: seguir WCAG 2.1 AA e eMAG — contraste, foco visível, semântica correta, teclado.
- Semver: mudanças em nome de token/classe são breaking (major); adição é minor; correção interna é patch.

---

## Governança

- **Mantido por:** SETDIG — Secretaria-Executiva de Transformação Digital (SEGOV/MS).
- **Base legal:** Lei nº 6.035/2022; Decreto nº 16.166/2023.
- **Site:** https://www.setdig.ms.gov.br/
- **Contribuição:** abrir PR na branch `main` com descrição clara do componente/token adicionado, screenshots das variações e checklist de acessibilidade.
- **Revisão:** obrigatória antes do merge.

---

## CI/CD

3 workflows em `.github/workflows/`:

- **`deploy-pages.yml`** — push em `main` → build + deploy no GitHub Pages.
- **`ci.yml`** — pull request → `npm ci`, `lint:css`, `build-storybook`.
- **`pr-preview.yml`** — pull request → deploy preview em subpath por PR.

---

## Licença

MIT

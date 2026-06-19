# 03 — Storybook (pesquisa aplicada)

## O que é e por que resolve a dor

Storybook é um ambiente de **documentação viva** de componentes: cada componente vira uma "story" renderizada de verdade no navegador, com seus estados e variações, ao lado da documentação escrita. Como as stories são **código**, a documentação **nunca fica desatualizada** — ela é o próprio componente rodando.

É o que substitui as **imagens estáticas** do site atual: em vez de um PNG da anatomia do header, o dev vê o header real, interage, e copia o código.

> Usado para documentar design systems de referência: Shopify Polaris, IBM Carbon, Salesforce Lightning, GitHub Primer.

## Renderer escolhido: `@storybook/web-components-vite`

Combina com o **modelo híbrido** da [arquitetura](01-arquitetura.md):

- Renderiza **HTML cru** → stories das classes CSS (`<button class="btn btn-primary">`).
- Renderiza **Web Components Lit** → stories de `<ms-header>`, `<ms-search>`.
- Usa **Vite** (build rápido, padrão atual do Storybook).

Assim, um único Storybook documenta as duas formas de entrega sem precisar de React.

## Como cada componente é documentado

1. **`*.stories.js`** — as variações renderizadas (tipo, tamanho, estados: hover/focus/disabled).
2. **`*.mdx`** — a página de docs: quando usar, anatomia, do/don't, e **notas de acessibilidade**.
3. **Tabela de propriedades** — gerada automaticamente a partir dos `argTypes` (ou dos tipos do Web Component).
4. **Snippets multi-stack** — cada componente expõe abas de código **HTML / PHP-Blade / Python-Jinja / JS-React**. O dev copia o do seu stack. (Na POC os snippets ficam em `src/components/button/snippets/`.)

## Addons essenciais

| Addon | Para quê |
|---|---|
| `@storybook/addon-a11y` | Roda **axe-core** em cada story e mostra violações de acessibilidade no painel. |
| `@storybook/addon-docs` | Páginas MDX + tabela de props automática. |
| `@storybook/test-runner` | Roda os testes de acessibilidade no **CI** (gate — ver [05](05-pipeline-gitlab-ci.md)). |

## Acessibilidade — eMAG + WCAG

Por ser governo brasileiro, o gate de acessibilidade cobre **eMAG** (Modelo de Acessibilidade em Governo Eletrônico, obrigatório) e **WCAG 2.1 AA**. Cada componente ganha uma **página de testes de acessibilidade** nos moldes do [USWDS](https://designsystem.digital.gov/components/button/accessibility-tests/) — a referência que motivou esta iniciativa:

- Testes manuais por categoria: **geral** (contraste, tamanho), **zoom** (200%), **teclado** (Tab, foco visível), **leitor de tela** (papel anunciado).
- Ferramentas: ANDI / Color Contrast Analyzer para contraste; VoiceOver/NVDA/Narrator para leitor de tela.
- Resultado documentado por componente, público.

## Regressão visual

**Chromatic** (ou snapshots via Playwright) tira um "retrato" de cada story e, a cada Merge Request, mostra o **diff visual**. Impede que uma mudança de token quebre silenciosamente um componente. Roda no stage `test` do CI.

## Saída

`npm run build-storybook` gera um **site estático**. É esse site que vai para o deploy (GitLab Pages / hosting) e se torna o novo `designsystem.ms.gov.br` — documentação viva no lugar das imagens.

# 07 — Roadmap incremental

A ideia **não** é parar o mundo e reescrever tudo. É provar o pipeline com 1 componente e crescer por fatias, cada fase entregando valor.

## Fase 0 — POC (esta entrega) ✅

**Objetivo:** provar o caminho ponta-a-ponta com o **button**.

- `tokens/*.json` → Style Dictionary → `dist/{css,scss,js,php,python}`.
- Storybook renderizando o button (variantes + estados + painel a11y).
- Snippets HTML / Blade / Jinja / React.
- `.gitlab-ci.yml` de referência.

**Saída:** `poc/` rodável. Prova para a liderança de que "uma fonte → várias linguagens" funciona.

## Fase 1 — Tokens completos do Figma

- Configurar **Tokens Studio** no Figma e exportar **todos** os tokens (cor, tipo, spacing, radius, shadow) para JSON.
- `colors_and_type.css` deixa de ser escrito à mão e passa a ser **gerado** pelo Style Dictionary.
- Validar que os valores gerados batem com o Figma atual.

## Fase 2 — Top 5 componentes

Migrar, na ordem de uso: **button → input → search → card → header**.

- Button, input, card: CSS classes + HTML (reaproveitam `components.css`).
- **Header**: primeiro **Web Component** (`<ms-header>`) — tem menu mobile e busca (interativo).
- Cada componente entra com story + docs MDX + snippets + página de acessibilidade.

## Fase 3 — CI/CD GitLab + qualidade

- Subir o repositório no GitLab e ativar o `.gitlab-ci.yml`.
- Ligar o gate de **acessibilidade** (test-runner + axe) e **regressão visual** (Chromatic/Playwright).
- Primeiro `npm publish` (ou GitLab Package Registry) → versão `1.0.0`.

## Fase 4 — Publicar o site (Storybook)

- Deploy do Storybook como o novo `designsystem.ms.gov.br`.
- **Aposentar as imagens estáticas**: cada página de componente passa a ter o componente vivo + código copiável.

## Fase 5 — Adoção pelos times

- Onboarding dos times PHP/Python/JS (cada um pelo seu canal: npm ou CDN).
- Acompanhar **métricas de adoção** (ver [06](06-governanca-acessibilidade.md)).
- Política: **novos produtos** do estado nascem consumindo o DS-MS.

## Visão de prazo (sugestão, ajustável)

| Fase | Esforço aproximado |
|---|---|
| 0 — POC | Feito |
| 1 — Tokens | 1–2 semanas |
| 2 — Top 5 componentes | 3–5 semanas |
| 3 — CI/CD + qualidade | 1–2 semanas |
| 4 — Site | 1 semana |
| 5 — Adoção | contínuo |

> Os prazos são estimativas para dimensionar a conversa com a liderança — não um compromisso. Dependem de quantas pessoas a SETDIG aloca e do acesso ao Figma/GitLab.

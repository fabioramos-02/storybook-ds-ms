# DS-MS — Planejamento de sistematização (Figma → código multi-stack)

> Pasta de planejamento e POC para tirar o **Design System de Mato Grosso do Sul (DS-MS)** do estado "só Figma + imagens" e transformá-lo em uma **fonte única de verdade que gera código** para os times do estado (PHP, Python, JS), com documentação viva (Storybook) e pipeline automatizado (GitLab CI).
>
> Mantido pela **SETDIG — Secretaria-Executiva de Transformação Digital**.

## Por que esta pasta existe

O site oficial (`https://www.designsystem.ms.gov.br/`) hoje documenta os componentes em **imagens** — anatomia, variações, anti-padrões — mas **não entrega código**. Um desenvolvedor recebe um link do Figma e reimplementa cada componente do zero, cada time do seu jeito. Isso gera divergência visual (*drift*), retrabalho e impossibilita "atualizar num lugar só". O site está em standby.

Esta pasta levanta a **POC, o planejamento e a ideia** de como começar a resolver essa dor.

## Índice

| Arquivo | Conteúdo |
|---|---|
| [00-visao-geral.md](00-visao-geral.md) | Problema, dor, objetivo, escopo, glossário |
| [01-arquitetura.md](01-arquitetura.md) | As 3 camadas: tokens, componentes (híbrido), distribuição |
| [02-ecossistema-e-fluxo.md](02-ecossistema-e-fluxo.md) | Diagrama do pipeline Figma → consumidores e papéis |
| [03-storybook.md](03-storybook.md) | Pesquisa aplicada: por que Storybook, renderer, addons, docs |
| [04-multistack.md](04-multistack.md) | Como PHP / Python / JS consomem (com exemplos) |
| [05-pipeline-gitlab-ci.md](05-pipeline-gitlab-ci.md) | Stages do `.gitlab-ci.yml` comentados |
| [06-governanca-acessibilidade.md](06-governanca-acessibilidade.md) | Semver, contribution, eMAG + WCAG 2.1 AA |
| [07-roadmap.md](07-roadmap.md) | Fases incrementais de adoção |

## POC rodável

A prova de conceito de 1 componente ponta-a-ponta está em [`../poc/`](../poc/). Ela demonstra: **token JSON → Style Dictionary → CSS/SCSS/JS/PHP/Python → Storybook → snippets por stack**. Veja [`../poc/README.md`](../poc/README.md).

## Decisões já tomadas

1. **Componentes**: modelo **híbrido** — CSS classes + HTML (estilo gov.uk/USWDS) para o grosso; **Web Components** (`<ms-...>`) só nos interativos.
2. **CI**: **GitLab CI**.
3. **Tokens**: fonte única em JSON (W3C DTCG), gerados a partir do Figma; `colors_and_type.css` vira artefato **gerado**, não escrito à mão.

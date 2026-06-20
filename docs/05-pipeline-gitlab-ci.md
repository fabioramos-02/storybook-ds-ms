# 05 — Pipeline GitLab CI

> **Atualização:** o projeto pivotou para **GitHub** (repositório real: `fabioramos-02/DS-MS-Design-System`). O pipeline que **roda de verdade hoje** está em `.github/workflows/` (`ci.yml`, `pages.yml`, `publish-npm.yml`), publicando em **npm público + jsDelivr + GitHub Pages** — não GitLab. Este documento permanece como **referência histórica** do desenho original: os 4 estágios conceituais abaixo (tokens → test → build → publish) foram preservados na implementação real, só a plataforma de CI mudou. `poc/.gitlab-ci.yml` foi removido do repositório por estar superado.

O `.gitlab-ci.yml` automatiza o caminho **mudança → publicação**. Quatro stages.

```yaml
# .gitlab-ci.yml  (exemplo de referência — ver poc/.gitlab-ci.yml)
stages: [tokens, test, build, publish]

default:
  image: node:20-alpine
  cache:
    paths: [.npm/, node_modules/]

# 1) Gera todas as saídas de token a partir do JSON (fonte única)
tokens:
  stage: tokens
  script:
    - npm ci --cache .npm --prefer-offline
    - npm run tokens          # Style Dictionary → dist/{css,scss,js,php,python}
  artifacts:
    paths: [dist/]            # passa o dist/ para os próximos stages

# 2) Qualidade: acessibilidade + regressão visual + lint
test:
  stage: test
  script:
    - npm run build-storybook        # gera o Storybook estático
    - npm run test:a11y              # @storybook/test-runner + axe (eMAG/WCAG)
    - npm run lint
  # (regressão visual: Chromatic ou snapshots Playwright neste stage)

# 3) Build do pacote distribuível e do site de docs
build:
  stage: build
  script:
    - npm run build                  # empacota @design-system-ms/ds-sis (css + web components)
    - npm run build-storybook -- --output-dir public   # site → public/
  artifacts:
    paths: [dist/, public/]

# 4) Publica versão e o site — só em tag semver na branch principal
publish:
  stage: publish
  rules:
    - if: '$CI_COMMIT_TAG =~ /^v\\d+\\.\\d+\\.\\d+$/'
  script:
    - npm publish                    # npm público OU GitLab Package Registry
  # GitLab Pages serve o conteúdo de public/ → designsystem.ms.gov.br
  pages: true
```

## O que cada stage garante

| Stage | Garante |
|---|---|
| **tokens** | Que CSS/SCSS/JS/PHP/Python saíram do **mesmo** JSON — multi-stack consistente. |
| **test** | Que nenhum componente entra com violação de **acessibilidade** (eMAG/WCAG) nem com regressão visual. É o **gate**. |
| **build** | Pacote e site de docs prontos como artefatos. |
| **publish** | Só publica em **tag semver** (`v1.2.0`) — release controlado, rastreável. |

## Gatilhos

- **Merge Request** → roda `tokens` + `test` + `build` (valida antes do merge; não publica).
- **Tag `vX.Y.Z`** na branch principal → roda tudo e **publica** + faz deploy do site.

## Publicação por linguagem

O `npm publish` sobe o pacote com **todas** as saídas (`dist/css`, `dist/js`, `dist/php`, `dist/python`). A partir do npm, a **CDN jsDelivr** serve automaticamente para os times PHP/Python. Alternativa interna: **GitLab Package Registry** (npm privado) + Pages como CDN, se o pacote não for público.

## Observação sobre a POC

Na POC, o `.gitlab-ci.yml` é entregue **comentado e validado por leitura** (não executado aqui) — provar o pipeline real exige o runner do GitLab. O que roda localmente são os scripts `npm run tokens` e `npm run build-storybook` (ver [verificação da POC](../poc/README.md)).

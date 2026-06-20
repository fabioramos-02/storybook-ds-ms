# 10 — Custos para publicar o pacote `@design-system-ms/ds-sis`

Preços pesquisados em junho/2026. Valores em USD nas fontes originais (referência de câmbio: ~R$ 5,40/USD — ajustar na hora de orçar oficialmente). Este documento orça **a infraestrutura**, não a hora de desenvolvimento.

> **Atualização:** o repositório vive no **GitHub** (`fabioramos-02/DS-MS-Design-System`), não GitLab. O cenário recomendado abaixo foi atualizado para **GitHub Actions + GitHub Pages**; as linhas de GitLab ficam como alternativa histórica (caso a SETDIG opte por migrar pra um GitLab institucional no futuro).

## Resumo executivo

> **O caminho mais barato (essencialmente R$ 0/mês) é tecnicamente viável**: npm público + jsDelivr (CDN gratuita) + GitHub Actions (grátis/ilimitado em repo público) + GitHub Pages (Storybook gratuito). O custo só aparece se a SETDIG quiser **recursos premium** (regressão visual automatizada em escala, registro privado, CI com mais minutos em repo privado).

## 1. Registro do pacote (onde o `npm install` busca o pacote)

| Opção | Custo | Observação |
|---|---|---|
| **npm público** (`npmjs.com`, pacote aberto) | **Grátis** | Qualquer um pode `npm install @design-system-ms/ds-sis`. Exige que o código seja público — adequado, já que é um *design system de governo* (sem segredo a proteger). |
| **npm privado** | **US$ 7/usuário/mês** | Só necessário se quisermos o pacote fechado. Não recomendado: não há razão de negócio pra esconder tokens de cor e CSS de um órgão público. |
| **GitLab Package Registry** (dentro do próprio GitLab institucional) | **Incluso no GitLab Free** | Suporta npm, e ainda PyPI, Maven, Composer (útil se PHP/Python quiserem consumir via gerenciador de pacote nativo, não só CDN). Limite de armazenamento compartilhado de 5GB/namespace no plano Free — folgado para um design system (poucos MB por versão). |
| **GitHub Packages** | **Grátis até 500MB** (free), 2GB no Pro | Alternativa se o código for hospedado no GitHub em vez do GitLab. Overage: US$ 0,008/GB/dia além da cota. |

**Recomendação (decisão real):** **npm público** (`@design-system-ms/ds-sis`), publicado via GitHub Actions em tag semver. Zero custo. GitLab Package Registry/GitHub Packages ficam como espelho futuro opcional, não necessários agora.

## 2. CDN (para times PHP/Python que não usam Node, via `<link>`/`<script>`)

| Opção | Custo | Observação |
|---|---|---|
| **jsDelivr** | **Grátis, sem limite de banda publicado** | Serve automaticamente qualquer pacote do npm público. Política de uso justo informal (~100TB/mês por pacote antes de qualquer revisão manual) — um design system de governo estadual fica muito abaixo disso. |
| **unpkg** | Grátis | Alternativa equivalente ao jsDelivr. |
| **CDN próprio (Cloudflare/AWS CloudFront)** | Variável, ~US$ 0,02–0,08/GB de saída | Só justificável se exigirem hospedagem 100% em infraestrutura do Estado (política de soberania de dados) — improvável para CSS/JS público e sem dado sensível. |

**Recomendação:** **jsDelivr**, custo zero. Reavaliar só se política de TI do Estado exigir CDN nacional/soberana.

## 3. CI/CD (build de tokens, testes de acessibilidade, publish)

| Opção | Custo | Observação |
|---|---|---|
| **GitHub Actions, repositório público** | **Grátis e ilimitado** em runners padrão (confirmado em pesquisa de mercado 2026) | É o cenário real do DS-MS: repo público, sem motivo de negócio pra ser privado. `.github/workflows/{ci,pages,publish-npm}.yml` rodam sem custo algum. |
| **GitHub Actions, repositório privado** | Cota gratuita limitada (varia por plano), overage cobrado por minuto | Só relevante se decidirem tornar o repo privado — não é o caso aqui. |
| *(histórico)* GitLab Free | Grátis, 400 min/mês de pipeline compartilhado | Alternativa caso migrem pra GitLab institucional no futuro. |

**Recomendação (decisão real):** **GitHub Actions em repositório público** — grátis, sem limite de minutos, zero configuração extra de billing.

## 4. Documentação viva (Storybook publicado)

| Opção | Custo | Observação |
|---|---|---|
| **GitHub Pages** | **Grátis**, incluso em qualquer plano GitHub | Hospeda o `storybook-static/` via `actions/deploy-pages` (workflow `pages.yml`). Suporta domínio próprio (`designsystem.ms.gov.br` apontando pra lá, via CNAME) se decidirem substituir o site atual. |
| *(histórico)* GitLab Pages | Grátis, incluso em qualquer plano GitLab | Alternativa caso migrem pra GitLab institucional no futuro. |
| **Vercel/Netlify (free tier)** | Grátis com limites de banda generosos | Alternativa fora do GitHub, não necessária hoje. |

**Recomendação (decisão real):** **GitHub Pages** — já está no mesmo fluxo de Actions, sem serviço extra pra gerenciar.

## 5. Regressão visual (testar se um componente mudou visualmente sem querer)

| Opção | Custo | Observação |
|---|---|---|
| **Sem regressão visual automatizada** | **Grátis** | Confia no painel de acessibilidade (axe) + revisão manual no Storybook a cada MR. Funciona bem em baixo volume de componentes (10–40). |
| **Chromatic — free tier** | **Grátis até 5.000 snapshots/mês** | Cada story × cada PR gera snapshots. Com 10 componentes × ~3 variantes cada × algumas dezenas de PRs/mês, fica **dentro do free tier** com folga. Tier gratuito ilimitado também existe para projetos **open source** (um design system de governo pode se qualificar). |
| **Chromatic — pago** | **A partir de US$ 149/mês** (35.000 snapshots) | Só necessário se o catálogo crescer muito (41 componentes documentados no DS-MS oficial, múltiplas variantes, CI rodando em todo PR) — recalcular quando todos os 41 componentes estiverem implementados. |

**Recomendação imediata:** **Chromatic free tier** (ou nem ligar regressão visual ainda, e decidir depois de medir consumo real com os 10 componentes da POC). Reavaliar custo só na Fase 3 do roadmap (CI/CD completo).

## Tabela consolidada — cenário recomendado (decisão real, GitHub)

| Item | Serviço | Custo mensal | Custo anual |
|---|---|---|---|
| Registro do pacote | npm público (`@design-system-ms/ds-sis`) | R$ 0 | R$ 0 |
| CDN | jsDelivr (automático, zero config) | R$ 0 | R$ 0 |
| CI/CD | GitHub Actions (repo público, ilimitado) | R$ 0 | R$ 0 |
| Documentação (Storybook) | GitHub Pages | R$ 0 | R$ 0 |
| Regressão visual | Chromatic free tier (não ligado ainda) | R$ 0 | R$ 0 |
| **Total de infraestrutura** | | **R$ 0/mês** | **R$ 0/ano** |

## Cenário com upgrade (se crescer muito)

Se o catálogo crescer para os 41 componentes oficiais com alto volume de PRs e a equipe quiser CI mais rápido + regressão visual maior escala:

| Item | Serviço | Custo mensal aproximado (BRL, cotação ~R$5,40) |
|---|---|---|
| CI/CD ampliado | GitLab Premium (por usuário) | ~R$ 157/usuário/mês |
| Regressão visual ampliada | Chromatic (35k snapshots) | ~R$ 805/mês |

Mesmo neste cenário expandido, o custo é **operacional e previsível** — nenhum item exige licenciamento complexo ou contrato de fornecedor, ao contrário de soluções proprietárias de design system (ex.: Zeroheight, Supernova pagos por assento).

## O que isso significa para o pitch

O argumento de custo trabalha **a favor** da proposta: a sistematização do DS-MS pode começar e rodar em produção **sem pedir orçamento novo** — só a decisão institucional de criar/usar um namespace no GitLab e publicar no npm. O investimento real está no **tempo de implementação dos componentes restantes** (trabalho humano, não infraestrutura), coberto em [`08-proximos-passos.md`](08-proximos-passos.md).

## Fontes
- npm planos pagos: [npm Docs — Upgrading to a paid organization plan](https://docs.npmjs.com/upgrading-to-a-paid-organization-plan/)
- GitHub Packages storage por plano: pesquisa de mercado (GitHub Pricing 2026)
- Chromatic free tier e planos pagos: pesquisa de mercado (Chromatic Pricing 2026)
- GitLab Premium e Package Registry no Free tier: documentação GitLab (`docs.gitlab.com`) e pesquisa de mercado (GitLab Pricing 2026)
- jsDelivr gratuidade e política de uso justo: [jsDelivr — About](https://www.jsdelivr.com/about)

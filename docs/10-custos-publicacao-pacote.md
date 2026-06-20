# 10 — Custos para publicar o pacote `@dsms/ds-sis`

Preços pesquisados em junho/2026. Valores em USD nas fontes originais (referência de câmbio: ~R$ 5,40/USD — ajustar na hora de orçar oficialmente). Este documento orça **a infraestrutura**, não a hora de desenvolvimento.

## Resumo executivo

> **O caminho mais barato (essencialmente R$ 0/mês) é tecnicamente viável**: GitLab Free (Package Registry incluso) + jsDelivr (CDN gratuita) + GitLab Pages (Storybook gratuito). O custo só aparece se a SETDIG quiser **recursos premium** (regressão visual automatizada em escala, registro privado fora do GitLab, CI com mais minutos).

## 1. Registro do pacote (onde o `npm install` busca o pacote)

| Opção | Custo | Observação |
|---|---|---|
| **npm público** (`npmjs.com`, pacote aberto) | **Grátis** | Qualquer um pode `npm install @dsms/ds-sis`. Exige que o código seja público — adequado, já que é um *design system de governo* (sem segredo a proteger). |
| **npm privado** | **US$ 7/usuário/mês** | Só necessário se quisermos o pacote fechado. Não recomendado: não há razão de negócio pra esconder tokens de cor e CSS de um órgão público. |
| **GitLab Package Registry** (dentro do próprio GitLab institucional) | **Incluso no GitLab Free** | Suporta npm, e ainda PyPI, Maven, Composer (útil se PHP/Python quiserem consumir via gerenciador de pacote nativo, não só CDN). Limite de armazenamento compartilhado de 5GB/namespace no plano Free — folgado para um design system (poucos MB por versão). |
| **GitHub Packages** | **Grátis até 500MB** (free), 2GB no Pro | Alternativa se o código for hospedado no GitHub em vez do GitLab. Overage: US$ 0,008/GB/dia além da cota. |

**Recomendação:** **npm público + espelhado no GitLab Package Registry**. Zero custo, e o GitLab institucional já teria o pacote disponível internamente mesmo se o npm público ficar fora do ar.

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
| **GitLab Free** (CI/CD compartilhado) | **Grátis**, 400 min/mês de pipeline compartilhado | Suficiente para um repositório de design system (builds são rápidos — a POC local rodou em ~10-15s). |
| **GitLab Premium** | **US$ 29/usuário/mês** (cobrado anual, ~US$ 348/usuário/ano) | Daria 10.000 min/mês de CI + aprovação de MR + scanning de qualidade. **Não necessário** só para este projeto — só se a SETDIG já for migrar a organização toda pra Premium por outros motivos. |
| **Runner próprio (self-hosted)** | Custo de servidor (variável) | Se a SETDIG já tem infraestrutura on-premise/OpenShift (mencionado no vault para outros projetos), pode rodar runner próprio sem custo de licença adicional — só consumo de máquina já existente. |

**Recomendação:** **GitLab Free com runners compartilhados** ou runner próprio se já existir infraestrutura disponível (a SETDIG já usa Red Hat OpenShift em outros projetos, segundo o vault — reaproveitável).

## 4. Documentação viva (Storybook publicado)

| Opção | Custo | Observação |
|---|---|---|
| **GitLab Pages** | **Grátis**, incluso em qualquer plano GitLab | Hospeda o `storybook-static/` gerado pelo `npm run build-storybook`. Pode até ter domínio próprio (`designsystem.ms.gov.br` apontando pra lá). |
| **Vercel/Netlify (free tier)** | Grátis com limites de banda generosos | Alternativa se preferirem hospedagem fora do GitLab. |

**Recomendação:** **GitLab Pages** — já está dentro do mesmo fluxo de CI, sem serviço extra pra gerenciar.

## 5. Regressão visual (testar se um componente mudou visualmente sem querer)

| Opção | Custo | Observação |
|---|---|---|
| **Sem regressão visual automatizada** | **Grátis** | Confia no painel de acessibilidade (axe) + revisão manual no Storybook a cada MR. Funciona bem em baixo volume de componentes (10–40). |
| **Chromatic — free tier** | **Grátis até 5.000 snapshots/mês** | Cada story × cada PR gera snapshots. Com 10 componentes × ~3 variantes cada × algumas dezenas de PRs/mês, fica **dentro do free tier** com folga. Tier gratuito ilimitado também existe para projetos **open source** (um design system de governo pode se qualificar). |
| **Chromatic — pago** | **A partir de US$ 149/mês** (35.000 snapshots) | Só necessário se o catálogo crescer muito (41 componentes documentados no DS-MS oficial, múltiplas variantes, CI rodando em todo PR) — recalcular quando todos os 41 componentes estiverem implementados. |

**Recomendação imediata:** **Chromatic free tier** (ou nem ligar regressão visual ainda, e decidir depois de medir consumo real com os 10 componentes da POC). Reavaliar custo só na Fase 3 do roadmap (CI/CD completo).

## Tabela consolidada — cenário recomendado

| Item | Serviço | Custo mensal | Custo anual |
|---|---|---|---|
| Registro do pacote | npm público + GitLab Package Registry | R$ 0 | R$ 0 |
| CDN | jsDelivr | R$ 0 | R$ 0 |
| CI/CD | GitLab Free (ou runner próprio) | R$ 0 | R$ 0 |
| Documentação (Storybook) | GitLab Pages | R$ 0 | R$ 0 |
| Regressão visual | Chromatic free tier | R$ 0 | R$ 0 |
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

---
tags: [design-system, ms, tokens, figma, migracao]
status: concluido
data: 2026-06-23
branch: feat/tokens-figma-sync
destino-vault: 10-conhecimento/design-system-ms/migracao-tokens-figma-2026-06-23.md
---

# Migração tokens DS-MS → fidelidade Figma

> Obsidian app fechado nas duas tentativas de escrita — nota fica aqui até
> conseguir transferir pro vault. Mover pra `10-conhecimento/design-system-ms/`
> e apagar esse arquivo/pasta depois.

Motivo: tokens/*.json tinham paleta antiga (#004F9F antigo/#EAEBEC etc) totalmente
desconectada dos valores reais usados nos componentes (que foram corrigidos manualmente
contra o Figma ao longo da sessão). CSS de componente usava hex/px literal, nunca var(--token).

## Paleta real (Figma get_variable_defs, node 77:135181)

primary: 100 #e6edf5, 500 #3372b2, 600 #004f9f (marca), 700 #003f7f, 900 #002040, 1000 #001020
secondary: 100 #ccedd8, 600 #007f31, 700 #006024, 900 #00210c
tertiary: 100 #fff8cc, 500 #ffd500, 600 #ccac00, 900 #332c00
red: 300 #eda8ab, 600 #da1e28, 700 #a91e23
neutral: 0 #fff, 100 #f9f9f9, 200 #d5d5d5, 400 #8e8e8e, 500 #8e8e8d, 800 #565654, 900 #30302e, 1000 #1d1d1b
alpha/brand: 4 .04, 8 .08, 24 .24 (base #004f9f)
alpha/dark: 2/4/8% (base #0a0909)
alpha/neutral900 (criado por mim — Table usa base diferente #232323): 4/12/24%
error/success/warning/info = aliases pra red/secondary/tertiary/primary (Figma não tem escala própria)

## Estrutura nova em poc/tokens/

- color.json — reescrito completo
- spacing.json, radius.json, typography.json — novos (não existiam)
- accordion.json, breadcrumb.json, table.json — tokens reescritos pra bater com CSS já fiel ao Figma
- demais *.json — só corrigidas refs quebradas pra escala nova (neutral 600/700/800→900, 300→400; primary 200/300→100)

## Checklist migração CSS → var(--token)

- [x] Lote 1: accordion, breadcrumb, table (commit f86dead)
- [x] Lote 2: button, link, card
- [x] Lote 3: footer, tiles, search, menu
- [x] Lote 4: navbar, header, topmenu, logo-mask (commit f0b1997)
- [x] Lote 5: tag, notification, dropdown, selection, input, label, segment-button, carousel (commit 8e6168e)

## Migração CSS → var() completa (41/41 componentes)

Lote 5 achou bug real: input.css/label.css/carousel.css referenciavam
`var(--color-neutral-700)` e `var(--color-neutral-300)`, que nunca existiram
na escala neutral gerada (0/100/200/400/500/800/900/1000) — custom property
indefinida, regra ignorada silenciosamente. Corrigido pro step mais próximo
existente (800 texto, 500 placeholder/disabled).

## Comandos úteis

```
cd poc
rtk proxy "npm run tokens"          # rebuild dist/css/tokens.css
rtk proxy "npm run build-storybook" # valida build não quebrou
```

## Branch

feat/tokens-figma-sync (a partir de main). Commits:
- cc966ae fix(table): fidelidade ao Figma (node 280:45414)
- 02127fc refactor(tokens): reescreve paleta de cores e cria spacing/radius/typography
- f86dead refactor(tokens): migra accordion/breadcrumb/table pra consumir var(--token)

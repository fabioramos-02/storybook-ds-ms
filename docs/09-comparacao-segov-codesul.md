# 09 — Comparação real: SEGOV/Codesul vs. DS-MS

Capturado via Playwright (MCP) em `https://www.segov.ms.gov.br/orgaos_colegiados/codesul/`, com inspeção de CSS computado e atributos de acessibilidade — não é leitura visual, é o DOM/CSS real renderizado pelo navegador.

> Por que este site: é uma secretaria do mesmo governo (SEGOV), construída **fora** do DS-MS oficial. É exatamente o cenário que motivou este projeto — **prova viva do "drift"** descrito em [`00-visao-geral.md`](00-visao-geral.md).

## Screenshots capturados

| Arquivo | O que mostra |
|---|---|
| [`assets/segov-codesul/segov-codesul-full.png`](assets/segov-codesul/segov-codesul-full.png) | Página completa, acordeões fechados (estado padrão) |
| [`assets/segov-codesul/segov-codesul-aberto.png`](assets/segov-codesul/segov-codesul-aberto.png) | Acordeão "O que é" aberto |
| [`assets/segov-codesul/segov-dropdown.png`](assets/segov-codesul/segov-dropdown.png) | Mega-menu "Institucional" aberto, com submenu aninhado |

## Componente: Acordeão (`acordion-container` do WordPress)

| Aspecto | SEGOV/Codesul (capturado) | DS-MS (nosso) | Veredito |
|---|---|---|---|
| Cor do título | `rgb(0, 79, 159)` = **`#004F9F`** | `--color-primary-500` = `#004F9F` | ✅ Idêntico — mesma marca institucional |
| `border-radius` | `6px` | Escala `2/4/8/16/24/32px` | ⚠️ **6px não existe na nossa escala** — valor "solto" |
| Ícone (seta) | `background-image: url(.../cosmos-icon-chevron-right.png)` rotacionado via `transform: matrix(-1,0,0,-1,0,0)` (180°) | Convenção Iconify/SVG (ver `README.md` raiz, seção Iconografia) | ❌ Divergente — PNG bitmap rotacionado, não SVG |
| Transição do ícone | `0.8s` | Padrão DS-MS: `120–150ms ease` (ver `README.md` raiz) | ⚠️ 0.8s é **5x mais lento** que o padrão documentado |
| `tabIndex` do título clicável | **`-1`** | — (nosso `<button>` nativo tem tabindex 0 implícito) | ❌ **Falha de acessibilidade real**: o acordeão **não é alcançável por teclado** |
| `role` / `aria-expanded` / `aria-controls` | **nenhum** (`role=null`, sem `aria-*`) — só `class="active"` + `data-opened="true"` | Nosso padrão (`ms-header`, inputs): `aria-expanded`, `aria-controls`, `aria-label` | ❌ Leitor de tela não anuncia que é expansível, nem seu estado |
| Animação de abertura | `display: none ↔ block` direto (sem slide/fade) | Não implementado ainda (não temos Accordion) | — |

**Conclusão prática:** o acordeão do SEGOV usa a cor certa (prova que `#004F9F` é de fato o azul institucional do Estado, reforça nosso token), mas a implementação **não é acessível por teclado nem por leitor de tela** — exatamente o tipo de inconsistência que um Accordion oficial do DS-MS (com Web Component fiel, `aria-expanded` real) eliminaria se todo o governo consumisse o mesmo pacote.

## Componente: Header / faixa institucional

| Aspecto | SEGOV (capturado) | DS-MS (nosso) |
|---|---|---|
| Cor da faixa (`section.banner-azul-topo`) | `rgb(0, 79, 159)` = `#004F9F` | `--color-primary-500` = `#004F9F` ✅ idêntico |
| Tipografia do corpo | `system-ui, -apple-system, "Segoe UI", Roboto, ...` (pilha padrão do navegador) | `Open Sans` (headings/interações) + `Roboto` (body), via Google Fonts — ver `colors_and_type.css` | ❌ **SEGOV não carrega as fontes da marca** — usa a fonte default do sistema operacional do visitante |
| Cor de link/breadcrumb | `rgb(0, 79, 159)` = `#004F9F` | `--content-link` = `#004F9F`/`#0D99F7` conforme contexto | ✅ Compatível |

**Conclusão prática:** a cor de marca está certa porque provavelmente foi copiada manualmente do mesmo manual de identidade visual do Estado — mas a **tipografia não é a oficial**. Isso é o "drift" do jeito mais visível: duas secretarias do mesmo governo, mesma cor, fontes diferentes. Um pacote `@dsms/ds-sis` consumido via `<link>` resolveria isso automaticamente.

## Componente: Menu dropdown / mega-menu

O menu "Institucional" abre um painel com itens e **submenus aninhados** (seta `›` em "Secretarias-Executivas" e "Órgãos Colegiados"). Esse é um padrão de **Dropdown/Menu multinível** que:

- **Não existe hoje em `components.css`** da raiz do DS-MS.
- Está listado no vault (`fundamentos-e-componentes.md`) como componente documentado no Figma oficial (Dropdown, Menu), mas **fora do escopo da POC atual** (ver [`08-proximos-passos.md`](08-proximos-passos.md), item "componentes sem origem no repositório").

**Conclusão prática:** este é um caso real e visível de gap que já está mapeado — o SEGOV precisou implementar esse padrão por conta própria porque o DS-MS ainda não publica um Menu/Dropdown oficial.

## Resumo — o que essa comparação prova

1. **A cor institucional `#004F9F` é respeitada** mesmo fora do DS-MS oficial — confirma que o token está certo e é reconhecido informalmente como "a cor do governo".
2. **Tudo o que não é cor diverge**: tipografia, raio de borda, timing de animação, ícone (PNG vs SVG), e principalmente **acessibilidade** (teclado e leitor de tela falham no acordeão do SEGOV).
3. **Sem um pacote único para consumir**, cada secretaria reimplementa os mesmos padrões (acordeão, menu) com qualidade desigual — exatamente a dor descrita em [`00-visao-geral.md`](00-visao-geral.md), agora com evidência de um site real do próprio governo de MS.
4. **Argumento de negócio:** publicar `@dsms/ds-sis` não é só "manter consistência visual" — é **corrigir falhas de acessibilidade que hoje existem em produção** em outro órgão do mesmo Estado.

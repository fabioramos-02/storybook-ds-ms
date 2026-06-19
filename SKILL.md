---
name: ds-ms-design
description: Use this skill to generate well-branded interfaces and assets for DS-MS (Design System dos sistemas de Mato Grosso do Sul / Governo do Estado de MS, mantido pela SETDIG), either for production or throwaway prototypes/mocks. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping. All content authored in Português do Brasil.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. The two CSS files (`colors_and_type.css` + `components.css`) are the single source of truth for tokens — link them, don't restate them.

If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design (em português, se eles começarem em português), ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference

- **Primary blue**: `#004F9F` (`--color-primary-500`). Reserved for header/footer chrome, primary CTAs, links, active states. Never gradients.
- **Fonts**: Open Sans Bold (display/heading/interactions) + Roboto (body/captions/code). Google Fonts. Archivo for mono labels.
- **Radius**: 2 (inputs), 4 (buttons/checkbox/tags), 8 (cards/code), 16/24/32, full.
- **Shadow**: `0px {N}px {2N}px 0px rgba(0,32,64,0.30)` — N ∈ {4, 6, 12, 24}.
- **Voice**: pt-BR, institutional but warm. "Nós" for the team, "você" for the consumer. Sentence case. Never emoji. Iconify-style SVG icons only.
- **Two UI kits**: `ui_kits/docs-site/` (public docs site) and `ui_kits/admin-template/` (login + dashboard + error).
- **Preview cards** in `preview/` exemplify every token and component state.

When in doubt, look at the figma reference (if attached) or default to the existing components in `components.css`.

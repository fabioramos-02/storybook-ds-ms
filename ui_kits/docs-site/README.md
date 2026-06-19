# UI Kit · Docs Site

Recriação de alta fidelidade do **site público de documentação do DS-MS**.

## Telas
- **Boas-vindas** (`index.html#welcome`) — landing / introdução, lockup azul, três cards de recursos
- **Paleta de Cores** (`index.html#colors`) — swatches da primária, neutra, feedback
- **Tipografia** (`index.html#type`) — escala display/heading/body com specs
- **Componentes** (`index.html#components`) — botões em todos os estados, inputs, busca

## Componentes
- `DSHeader.jsx` — chrome azul 96px com nav, busca e versão
- `DSFooter.jsx` — barra inferior com lockup SETDIG
- `Sidebar.jsx` — menu lateral fixo com seções Introdução/Fundamentos/Componentes/Templates
- `RightNav.jsx` — "Nesta página" + sub-links
- `Swatch.jsx` — círculo de cor com nome + hex (clone do componente Item do Figma)
- `CodeBlock.jsx` — bloco escuro com tabs React/Angular e botão clipboard

## Como navegar
`index.html` carrega o site com hash-routing. As setas/links na sidebar trocam de tela sem reload.

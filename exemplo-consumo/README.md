# Exemplo de consumo — `@design-system-ms/ds-sis`

Página estática que **instala o pacote publicado de verdade** via `npm install` (não copia arquivos do `poc/`, não usa CDN) — prova que o que está hoje em [npmjs.com/package/@design-system-ms/ds-sis](https://www.npmjs.com/package/@design-system-ms/ds-sis) funciona pra qualquer consumidor, do zero.

**No ar:** https://fabioramos-02.github.io/DS-MS-Design-System/exemplo-consumo/
(`.github/workflows/pages.yml` roda `npm ci` aqui a cada push em `main` e publica o resultado real — não é mock.)

## Rodar

```bash
cd exemplo-consumo
npm install      # baixa @design-system-ms/ds-sis do registry público
npm start        # serve a pasta em http://localhost:5500
```

`index.html` carrega direto de `node_modules/@design-system-ms/ds-sis/dist/`:
- `dist/css/ds-sis.css` — tokens + os 10 componentes
- `dist/js/ds-sis.js` — registra o Web Component `<ms-header>`

## O que a página mostra
Button, Input, Selection (checkbox/radio/toggle), Tag, Notification, Card, Link e o Web Component `<ms-header>` — todos vindos do pacote instalado, sem nenhuma cópia local de CSS/JS.

> Precisa de servidor HTTP (não abrir o `.html` direto com `file://`) porque `<script type="module">` bloqueia import de módulo em origem `file://`. `npm start` resolve isso via `npx serve`.

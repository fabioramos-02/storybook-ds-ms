# 04 — Multi-stack: como PHP, Python e JS consomem

O ponto-chave: **os componentes são agnósticos de framework**. Os tokens são gerados para cada linguagem, e os componentes são entregues como CSS+HTML (todos consomem) e Web Components (qualquer um que renderize HTML).

## Resumo

| Stack | Tokens | Componentes | Como puxa |
|---|---|---|---|
| **JS / React / Vue** | `import` de `dist/js/tokens.js` | classes CSS **ou** Web Components | `npm i @dsms/ds-sis` |
| **PHP** (Laravel/Blade, WordPress) | `dist/php/Tokens.php` | `<link>` CSS + classes / `<ms-*>` | CDN ou Composer/asset |
| **Python** (Django/Flask Jinja) | `dist/python/tokens.py` | `<link>` CSS + classes / `<ms-*>` | CDN ou pacote estático |

## JS / React

```bash
npm i @dsms/ds-sis
```
```jsx
import '@dsms/ds-sis/dist/css/ds-sis.css';
import { tokens } from '@dsms/ds-sis/dist/js/tokens.js';

export function Salvar() {
  return <button className="btn btn-primary btn-md">Salvar</button>;
}
// tokens.color.primary[500]  →  "#004F9F"  (usável em JS quando precisar)
```

## PHP — Laravel (Blade)

Sem Node no projeto: puxa o CSS/JS por **CDN** (ou copia para `public/`).

```blade
{{-- layout.blade.php --}}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@dsms/ds-sis/dist/css/ds-sis.css">
<script type="module" src="https://cdn.jsdelivr.net/npm/@dsms/ds-sis/dist/js/ds-sis.js"></script>

{{-- uso: classe CSS --}}
<button class="btn btn-primary btn-md">{{ __('Salvar') }}</button>

{{-- uso: Web Component --}}
<ms-header secretaria="SETDIG"></ms-header>
```

Token nativo no back-end PHP, quando precisar gerar e-mail/PDF com a cor da marca:

```php
require 'vendor/dsms/Tokens.php';
echo \DSMS\Tokens::COLOR_PRIMARY_500; // "#004F9F"
```

## Python — Django / Flask (Jinja)

```jinja
{# base.html #}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@dsms/ds-sis/dist/css/ds-sis.css">
<script type="module" src="https://cdn.jsdelivr.net/npm/@dsms/ds-sis/dist/js/ds-sis.js"></script>

<button class="btn btn-primary btn-md">Salvar</button>
<ms-header secretaria="SETDIG"></ms-header>
```

Token nativo no back-end Python:

```python
from dsms.tokens import COLOR_PRIMARY_500
print(COLOR_PRIMARY_500)  # "#004F9F"
```

## Por que isso funciona

- **Tokens**: um único `tokens/*.json` → o Style Dictionary gera `Tokens.php` e `tokens.py` com os mesmos valores. Nenhuma linguagem "mede no olho".
- **CSS classes**: HTML é universal — PHP, Python e JS todos cospem HTML.
- **Web Components**: são padrão do navegador; o servidor (qualquer linguagem) só precisa entregar a tag `<ms-*>` e o `<script>` do bundle.

## O que cada time NÃO precisa fazer

- Não precisa de React para usar o DS.
- Não precisa reimplementar o botão/header.
- Não precisa copiar valores de cor/espaçamento do Figma.
- Para atualizar: **sobe a versão** do pacote/CDN. Só.

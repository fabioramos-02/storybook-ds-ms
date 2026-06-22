/* ============================================================================
   <ms-menu> — Web Component (Lit) do DS-MS.
   2º componente do modelo híbrido a usar Web Component (depois de ms-header):
   barra de navegação com submenu e toggle mobile centralizados aqui. Light DOM
   (createRenderRoot retorna this) para herdar o CSS global, mesma decisão do
   ms-header (ver docs/01-arquitetura.md e header.mdx).
   ============================================================================ */
import { LitElement, html } from 'lit';
import './menu.css';

export class MsMenu extends LitElement {
  static properties = {
    forceMobile: { type: Boolean, attribute: 'force-mobile' },
    open: { type: Boolean, state: true },
  };

  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.forceMobile = false;
    this.open = false;
    this.items = [
      { label: 'Institucional', href: '#' },
      {
        label: 'Serviços',
        href: '#',
        children: [
          { label: 'Saúde', href: '#' },
          { label: 'Educação', href: '#' },
        ],
      },
      { label: 'Notícias', href: '#' },
      { label: 'Contato', href: '#' },
    ];
  }

  _toggle() {
    this.open = !this.open;
  }

  render() {
    const cls = this.forceMobile ? 'ds-menu is-mobile' : 'ds-menu';
    return html`
      <nav class="${cls}" aria-label="Menu principal">
        <ul class="${this.open ? 'is-open' : ''}" id="ms-menu-list">
          ${this.items.map(
            (item) => html`
              <li class="${item.children ? 'has-submenu' : ''}">
                <a href="${item.href}">${item.label}</a>
                ${item.children
                  ? html`
                      <ul class="submenu">
                        ${item.children.map(
                          (child) => html`<li><a href="${child.href}">${child.label}</a></li>`
                        )}
                      </ul>
                    `
                  : ''}
              </li>
            `
          )}
        </ul>
        <button
          class="menu-toggle"
          type="button"
          aria-expanded=${this.open}
          aria-controls="ms-menu-list"
          aria-label=${this.open ? 'Fechar menu' : 'Abrir menu'}
          @click=${() => this._toggle()}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </nav>
    `;
  }
}

if (!customElements.get('ms-menu')) {
  customElements.define('ms-menu', MsMenu);
}

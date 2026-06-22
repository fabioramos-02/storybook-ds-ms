import { html } from 'lit';
import './ms-menu.js';
import './menu.css';

const chevron = html`<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

/**
 * <ms-menu> — 2º Web Component da POC (depois do Header), pelo mesmo
 * critério: submenu e toggle mobile são comportamento real, não dá pra
 * cobrir só com CSS+HTML.
 */
export default { title: 'Componentes/Menu', tags: ['autodocs'] };

export const Desktop = {
  render: () => html`<ms-menu></ms-menu>`,
};

export const MobileFechado = {
  render: () => html`
    <div style="max-width:375px; border:1px solid #D4D7D8;">
      <ms-menu force-mobile></ms-menu>
    </div>
  `,
};

export const MobileAberto = {
  render: () => html`
    <div style="max-width:375px; border:1px solid #D4D7D8;">
      <ms-menu force-mobile open></ms-menu>
    </div>
  `,
};

/** Dropdown — fiel ao Figma (node 77:155582), cartão de lista flutuante. */
export const Dropdown = {
  render: () => html`
    <div class="ds-dropdown">
      ${Array.from({ length: 6 }).map(
        () => html`<button class="ds-dropdown-item"><span class="label">Item</span>${chevron}</button>`
      )}
    </div>
  `,
};

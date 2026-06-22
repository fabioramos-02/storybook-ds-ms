import { html } from 'lit';
import './ms-menu.js';

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

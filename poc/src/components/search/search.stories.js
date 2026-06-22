import { html } from 'lit';
import './search.css';

const magnifier = html`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
  <path d="M21 21l-4.3-4.3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`;
const close = html`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>`;

export default { title: 'Componentes/Search-global', tags: ['autodocs'] };

export const Default = {
  render: () => html`
    <button class="ds-search ds-search-default" aria-label="Buscar">
      <span class="ds-search-icon-btn">${magnifier}</span>
    </button>
  `,
};

export const Actived = {
  render: () => html`
    <button class="ds-search ds-search-actived">
      <span class="ds-search-text">Buscar na página</span>
      <span class="ds-search-icon-btn">${magnifier}</span>
    </button>
  `,
};

export const Focused = {
  render: () => html`
    <div class="ds-search ds-search-focused">
      <input class="ds-search-input" value="Ser" autofocus />
      <button class="ds-search-clear" aria-label="Limpar busca">${close}</button>
      <span class="ds-search-icon-btn">${magnifier}</span>
    </div>
  `,
};

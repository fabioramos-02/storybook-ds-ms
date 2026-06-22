import { html } from 'lit';
import './icons-social.css';

/**
 * Ícones de redes sociais (Figma node 2609:468671). SVGs simplificados —
 * trocar pelos assets oficiais exportados do Figma quando publicar (ver
 * `download_assets` no MCP).
 */
const icons = {
  Whatsapp: html`<svg class="ds-social-icon" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true"><path d="M12 2a10 10 0 00-8.5 15.2L2 22l4.9-1.5A10 10 0 1012 2z"/></svg>`,
  Telegram: html`<svg class="ds-social-icon" viewBox="0 0 24 24" fill="#229ED9" aria-hidden="true"><path d="M2 12a10 10 0 1120 0 10 10 0 01-20 0z"/></svg>`,
  Facebook: html`<svg class="ds-social-icon" viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true"><path d="M2 12a10 10 0 1111.6 9.9v-7h2.2l.4-2.7h-2.6V10.4c0-.8.3-1.4 1.5-1.4h1.3V6.6a13 13 0 00-1.9-.1c-2 0-3.3 1.2-3.3 3.4v1.9H8.9v2.7h2.3v7A10 10 0 012 12z"/></svg>`,
  Youtube: html`<svg class="ds-social-icon" viewBox="0 0 24 24" fill="#FF0000" aria-hidden="true"><rect x="2" y="6" width="20" height="12" rx="3"/><path d="M10 9l5 3-5 3z" fill="#fff"/></svg>`,
  Instagram: html`<svg class="ds-social-icon" viewBox="0 0 24 24" fill="none" stroke="#E1306C" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>`,
  X: html`<svg class="ds-social-icon" viewBox="0 0 24 24" fill="#000000" aria-hidden="true"><path d="M4 4l16 16M20 4L4 20" stroke="#000" stroke-width="2"/></svg>`,
};

export default {
  title: 'Componentes/Icons-Social',
  tags: ['autodocs'],
  argTypes: { social: { control: { type: 'select' }, options: Object.keys(icons) } },
  args: { social: 'Whatsapp' },
  render: ({ social }) => icons[social],
};

export const Padrao = {};

export const Todos = {
  render: () => html`<div style="display:flex; gap:12px;">${Object.values(icons)}</div>`,
};

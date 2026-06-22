import { html } from 'lit';
import './card.css';
import '../button/button.css';

const star = html`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" stroke="currentColor" stroke-width="1.5"/></svg>`;
const globe = html`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/><path d="M3 12h18M12 3a14 14 0 010 18 14 14 0 010-18" stroke="currentColor" stroke-width="1.5"/></svg>`;
const arrow = html`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const render = ({ title, hovered, accent }) => html`
  <a class="ds-card ${hovered ? 'is-hovered' : ''}" href="#" style="--ds-card-accent: ${accent}">
    <div class="ds-card-faixa"></div>
    <div class="ds-card-body">
      <div class="ds-card-title-row">
        <h3 class="ds-card-title">${title}</h3>
        <span class="ds-card-action">${arrow}</span>
      </div>
      <div class="ds-card-tags">
        <span class="ds-tag ds-tag-services">SEGOV</span>
        <span class="ds-tag ds-tag-category">Tecnologia</span>
        <span class="ds-tag ds-tag-profile">Servidor público</span>
      </div>
      <div class="ds-card-footer">
        <div class="ds-card-actions">
          <button class="btn btn-neutral btn-tertiary btn-sm">Acessar serviço</button>
          <button class="ds-card-icon-btn" aria-label="Favoritar">${star}</button>
          <button class="ds-card-icon-btn" aria-label="Acessar site">${globe}</button>
        </div>
      </div>
    </div>
  </a>
`;

export default {
  title: 'Componentes/Card',
  tags: ['autodocs'],
  render,
  argTypes: {
    title: { control: 'text' },
    hovered: { control: 'boolean' },
    accent: { control: 'color' },
  },
  args: { title: 'Title card', hovered: false, accent: '#007f31' },
};

export const Idle = {};
export const Hovered = { args: { hovered: true } };
export const AccentAzul = { args: { accent: '#004f9f', title: 'Serviço de protocolo' } };

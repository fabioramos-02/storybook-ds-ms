import { html } from 'lit';
import './breadcrumb.css';

const back = html`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 12H5M5 12l7-7M5 12l7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export default { title: 'Componentes/Breadcrumb', tags: ['autodocs'] };

export const Desktop = {
  render: () => html`
    <nav class="ds-breadcrumb" aria-label="breadcrumb" style="width:100%">
      <button class="ds-breadcrumb-back" aria-label="Voltar">${back}</button>
      <ol class="ds-breadcrumb-list">
        <li><a href="#">Início</a><span class="ds-breadcrumb-sep">›</span></li>
        <li><a href="#">Lista de Órgãos</a><span class="ds-breadcrumb-sep">›</span></li>
        <li><span class="ds-breadcrumb-current" aria-current="page">Secretaria de Estado de Governo e Gestão Estratégica</span></li>
      </ol>
    </nav>
  `,
};

export const Mobile = {
  render: () => html`
    <div style="max-width:320px; border:1px solid #D4D7D8;">
      <nav class="ds-breadcrumb" aria-label="breadcrumb">
        <button class="ds-breadcrumb-back" aria-label="Voltar">${back}</button>
        <ol class="ds-breadcrumb-list">
          <li><a href="#">Início</a><span class="ds-breadcrumb-sep">›</span></li>
          <li><span class="ds-breadcrumb-current" aria-current="page">Secretaria de Estado de Governo e Gestão Estratégica</span></li>
        </ol>
      </nav>
    </div>
  `,
};

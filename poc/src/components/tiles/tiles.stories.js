import { html } from 'lit';
import './tiles.css';

export default { title: 'Componentes/Tiles', tags: ['autodocs'] };

const icon = html`
  <svg class="tile-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
  </svg>
`;

export const Grade = {
  render: () => html`
    <div class="tiles-grid" style="max-width:680px">
      <a class="tile" href="#">
        ${icon}
        <span class="tile-label">Cartas de serviço</span>
        <p class="tile-description">Mapeamento da maturidade digital por órgão.</p>
      </a>
      <a class="tile tile-primary" href="#">
        ${icon}
        <span class="tile-label">Painel SETDIG</span>
        <p class="tile-description">Indicadores consolidados do governo.</p>
      </a>
      <a class="tile tile-linked" href="#">
        ${icon}
        <span class="tile-label">Documentação</span>
        <p class="tile-description">Guia de uso do Design System.</p>
      </a>
    </div>
  `,
};

export const Horizontal = {
  render: () => html`
    <a class="tile tile-horizontal" href="#" style="max-width:320px">
      ${icon}
      <span>
        <span class="tile-label" style="display:block">Relatórios</span>
        <p class="tile-description">Exportar dados em CSV/PDF.</p>
      </span>
    </a>
  `,
};

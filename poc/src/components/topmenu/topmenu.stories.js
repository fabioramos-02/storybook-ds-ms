import { html } from 'lit';
import './topmenu.css';
import '../icons-social/icons-social.css';

const accessIcon = html`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/></svg>`;

export default { title: 'Componentes/Topmenu', tags: ['autodocs'] };

export const Desktop = {
  render: () => html`
    <div class="ds-topmenu">
      <div class="ds-topmenu-logo">ms.gov.br</div>
      <div class="ds-topmenu-links">
        <a href="#conteudo">IR PARA CONTEÚDO</a>
        <a href="#nav">IR PARA NAVEGAÇÃO</a>
        <a href="#busca">IR PARA BUSCA</a>
        <button aria-label="Acessibilidade">${accessIcon}</button>
        <button aria-label="Libras">${accessIcon}</button>
      </div>
      <div class="ds-topmenu-right">
        <a href="#ouvidoria">OUVIDORIA</a>
        <a href="#transparencia">TRANSPARÊNCIA</a>
      </div>
      <div class="ds-topmenu-social">
        <span class="ds-topmenu-social-label">Siga MS.GOV</span>
        <div class="ds-topmenu-social-icons">
          <svg class="ds-social-icon" width="20" height="20" viewBox="0 0 24 24" fill="#1877F2" aria-hidden="true"><circle cx="12" cy="12" r="10"/></svg>
          <svg class="ds-social-icon" width="20" height="20" viewBox="0 0 24 24" fill="#000" aria-hidden="true"><circle cx="12" cy="12" r="10"/></svg>
          <svg class="ds-social-icon" width="20" height="20" viewBox="0 0 24 24" fill="#E1306C" aria-hidden="true"><circle cx="12" cy="12" r="10"/></svg>
          <svg class="ds-social-icon" width="20" height="20" viewBox="0 0 24 24" fill="#000" aria-hidden="true"><circle cx="12" cy="12" r="10"/></svg>
          <svg class="ds-social-icon" width="20" height="20" viewBox="0 0 24 24" fill="#FF0000" aria-hidden="true"><circle cx="12" cy="12" r="10"/></svg>
        </div>
      </div>
    </div>
  `,
};

export const Mobile = {
  render: () => html`
    <div style="max-width:360px; border:1px solid #D4D7D8;">
      <div class="ds-topmenu is-mobile">
        <button class="ds-topmenu-toggle" aria-label="Mais opções">⋮</button>
        <div class="ds-topmenu-logo">ms.gov.br</div>
        <button class="ds-topmenu-toggle" aria-label="Acessibilidade">${accessIcon}</button>
      </div>
    </div>
  `,
};

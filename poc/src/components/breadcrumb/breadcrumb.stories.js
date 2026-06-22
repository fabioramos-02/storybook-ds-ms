import { html } from 'lit';
import './breadcrumb.css';

export default { title: 'Componentes/Breadcrumb', tags: ['autodocs'] };

export const Basico = {
  render: () => html`
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li><a href="#">Início</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Saúde</a></li>
        <li><span class="is-current" aria-current="page">Agendar consulta</span></li>
      </ol>
    </nav>
  `,
};

export const DoisNiveis = {
  render: () => html`
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li><a href="#">Início</a></li>
        <li><span class="is-current" aria-current="page">Contato</span></li>
      </ol>
    </nav>
  `,
};

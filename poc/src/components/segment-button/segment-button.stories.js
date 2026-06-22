import { html } from 'lit';
import './segment-button.css';

export default { title: 'Componentes/Segment Button', tags: ['autodocs'] };

export const ViewToggle = {
  render: () => html`
    <div class="segment-button" role="group" aria-label="Modo de visualização">
      <input type="radio" name="view" id="view-list" checked>
      <label for="view-list">Lista</label>
      <input type="radio" name="view" id="view-grid">
      <label for="view-grid">Grade</label>
    </div>
  `,
};

export const FiltroRapido = {
  render: () => html`
    <div class="segment-button" role="group" aria-label="Filtro de status">
      <input type="radio" name="status" id="status-all" checked>
      <label for="status-all">Todos</label>
      <input type="radio" name="status" id="status-active">
      <label for="status-active">Ativos</label>
      <input type="radio" name="status" id="status-inactive">
      <label for="status-inactive">Inativos</label>
    </div>
  `,
};

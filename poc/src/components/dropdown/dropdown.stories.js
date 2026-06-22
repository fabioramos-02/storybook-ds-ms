import { html } from 'lit';
import './dropdown.css';
import '../input/input.css';

export default { title: 'Componentes/Dropdown', tags: ['autodocs'] };

export const SelectSimples = {
  render: () => html`
    <div class="field" style="max-width:280px">
      <label class="field-label" for="select-orgao">Órgão</label>
      <select class="field-select" id="select-orgao">
        <option>IAGRO</option>
        <option>DETRAN</option>
        <option>SETDIG</option>
      </select>
    </div>
  `,
};

export const MenuDeAcoes = {
  render: () => html`
    <details class="dropdown">
      <summary>Ações</summary>
      <div class="dropdown-menu" role="menu">
        <a href="#" role="menuitem">Visualizar</a>
        <button type="button" role="menuitem">Editar</button>
        <button type="button" role="menuitem">Excluir</button>
      </div>
    </details>
  `,
};

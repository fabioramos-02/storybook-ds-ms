import { html } from 'lit';
import './table.css';
import '../tag/tag.css';
import '../selection/selection.css';

export default { title: 'Componentes/Table', tags: ['autodocs'] };

export const Simples = {
  render: () => html`
    <table class="table">
      <caption>Cartas de serviço — IAGRO</caption>
      <thead>
        <tr><th>Serviço</th><th>Nível</th><th>Status</th></tr>
      </thead>
      <tbody>
        <tr><td>Emissão de licença</td><td>3</td><td><span class="tag tag-success">Digital</span></td></tr>
        <tr><td>Vistoria presencial</td><td>1</td><td><span class="tag tag-warning">Em progresso</span></td></tr>
        <tr><td>Cadastro de propriedade</td><td>0</td><td><span class="tag tag-error">Presencial</span></td></tr>
      </tbody>
    </table>
  `,
};

export const ComSelecaoEAcoes = {
  render: () => html`
    <table class="table table-striped table-compact">
      <thead>
        <tr>
          <th class="col-select"><input class="checkbox" type="checkbox" aria-label="Selecionar todos"></th>
          <th>Serviço</th>
          <th>Status</th>
          <th class="col-actions">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="col-select"><input class="checkbox" type="checkbox" aria-label="Selecionar Emissão de licença"></td>
          <td>Emissão de licença</td>
          <td><span class="tag tag-success">Digital</span></td>
          <td class="col-actions"><button type="button">Editar</button></td>
        </tr>
        <tr>
          <td class="col-select"><input class="checkbox" type="checkbox" aria-label="Selecionar Vistoria presencial"></td>
          <td>Vistoria presencial</td>
          <td><span class="tag tag-warning">Em progresso</span></td>
          <td class="col-actions"><button type="button">Editar</button></td>
        </tr>
      </tbody>
    </table>
  `,
};

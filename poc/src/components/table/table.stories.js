import { html } from 'lit';
import './table.css';
import '../tag/tag.css';
import '../selection/selection.css';

export default { title: 'Componentes/Table', tags: ['autodocs'] };

/** Fiel literal ao Figma (node 280:45414) — só thead + linhas simples, sem zebra. */
export const Tipografia = {
  render: () => html`
    <div class="ds-table-wrap">
      <table class="ds-table">
        <thead>
          <tr><th>Tipografia</th><th>Espaçamento</th></tr>
        </thead>
        <tbody>
          <tr><td>Display → subtítulos</td><td>$spacing-8</td></tr>
          <tr><td>H1 → parágrafos</td><td>$spacing-8</td></tr>
          <tr><td>H2 → parágrafos</td><td>$spacing-16</td></tr>
          <tr><td>H3 → parágrafos</td><td>$spacing-24</td></tr>
          <tr><td>H4 → parágrafos</td><td>$spacing-16</td></tr>
          <tr><td>H5 → parágrafos</td><td>$spacing-16</td></tr>
          <tr><td>H6 → parágrafos</td><td>$spacing-16</td></tr>
          <tr><td>parágrafos → parágrafos</td><td>$spacing-16</td></tr>
        </tbody>
      </table>
    </div>
  `,
};

export const Simples = {
  render: () => html`
    <div class="ds-table-wrap">
      <table class="ds-table">
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
    </div>
  `,
};

export const ComSelecaoEAcoes = {
  render: () => html`
    <div class="ds-table-wrap">
      <table class="ds-table ds-table-striped ds-table-compact">
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
    </div>
  `,
};

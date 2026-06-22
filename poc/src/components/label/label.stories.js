import { html } from 'lit';
import './label.css';

export default { title: 'Componentes/Label', tags: ['autodocs'] };

export const Basico = {
  render: () => html`<span class="label">Nome completo</span>`,
};

export const Obrigatorio = {
  render: () => html`<span class="label">CPF<span class="required" aria-hidden="true">*</span></span>`,
};

export const Desabilitado = {
  render: () => html`<span class="label is-disabled">Campo indisponível</span>`,
};

import { html } from 'lit';
import './accordion.css';

export default { title: 'Componentes/Accordion', tags: ['autodocs'] };

export const Basico = {
  render: () => html`
    <details class="accordion">
      <summary>Title</summary>
      <div class="accordion-body">
        Answer the frequently asked question in a simple sentence, a longish paragraph, or even
        in a list.
      </div>
    </details>
  `,
};

export const Aberto = {
  render: () => html`
    <details class="accordion" open>
      <summary>Title</summary>
      <div class="accordion-body">
        Answer the frequently asked question in a simple sentence, a longish paragraph, or even
        in a list.
      </div>
    </details>
  `,
};

export const MultiplosFAQ = {
  render: () => html`
    <details class="accordion">
      <summary>Pergunta 1</summary>
      <div class="accordion-body">Resposta 1.</div>
    </details>
    <details class="accordion">
      <summary>Pergunta 2</summary>
      <div class="accordion-body">Resposta 2.</div>
    </details>
    <details class="accordion is-disabled">
      <summary>Pergunta desabilitada</summary>
      <div class="accordion-body">Não interativo.</div>
    </details>
  `,
};

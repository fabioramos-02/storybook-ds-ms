import { html } from 'lit';
import './accordion.css';

export default { title: 'Componentes/Accordion', tags: ['autodocs'] };

export const Basico = {
  render: () => html`
    <details class="accordion">
      <summary>Como funciona a maturidade digital?</summary>
      <div class="accordion-body">
        Cada carta de serviço é avaliada numa régua de 0 a 4, de totalmente presencial a 100%
        digital.
      </div>
    </details>
  `,
};

export const Aberto = {
  render: () => html`
    <details class="accordion" open>
      <summary>Pergunta já expandida</summary>
      <div class="accordion-body">Conteúdo visível por padrão (atributo <code>open</code>).</div>
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

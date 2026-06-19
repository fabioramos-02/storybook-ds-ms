import { html } from 'lit';
import './button.css';

/**
 * Button do DS-MS (POC).
 * Renderiza a entrega "CSS classes + HTML" (modelo USWDS/gov.uk):
 * o consumidor aplica `.btn` + variante + tamanho num <button> nativo.
 */
const render = ({ variant, size, label, disabled }) => html`
  <button class="btn btn-${variant} btn-${size}" ?disabled=${disabled}>${label}</button>
`;

export default {
  title: 'Componentes/Button',
  tags: ['autodocs'],
  render,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'simple', 'danger'],
      description: 'Variante visual do botão',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho (sm 32px · md 40px · lg 48px)',
    },
    label: { control: 'text', description: 'Texto do botão' },
    disabled: { control: 'boolean', description: 'Estado desabilitado' },
  },
  args: { variant: 'primary', size: 'md', label: 'Botão', disabled: false },
};

export const Primary = {};
export const Secondary = { args: { variant: 'secondary' } };
export const Simple = { args: { variant: 'simple', label: 'Saiba mais' } };
export const Danger = { args: { variant: 'danger', label: 'Excluir' } };
export const Disabled = { args: { disabled: true, label: 'Indisponível' } };

/** Todos os tamanhos lado a lado + estado desabilitado. */
export const Tamanhos = {
  render: () => html`
    <div style="display:flex; gap:12px; align-items:center;">
      <button class="btn btn-primary btn-lg">Large</button>
      <button class="btn btn-primary btn-md">Medium</button>
      <button class="btn btn-primary btn-sm">Small</button>
      <button class="btn btn-primary btn-md" disabled>Disabled</button>
    </div>
  `,
};

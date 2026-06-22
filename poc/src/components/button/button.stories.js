import { html } from 'lit';
import './button.css';

/**
 * Button do DS-MS — fiel ao Figma (node 77:136152).
 * Dois eixos: `styled` (paleta: neutral/primary/secondary/tertiary) x
 * `type` (estilo: primary=filled, secondary=outline, tertiary=texto/ghost).
 */
const STYLED_CLASS = {
  neutral: 'btn-neutral',
  primary: 'btn-primary-palette',
  secondary: 'btn-secondary-palette',
  tertiary: 'btn-tertiary-palette',
};

const render = ({ styled, type, size, label, disabled }) => html`
  <button class="btn ${STYLED_CLASS[styled]} btn-${type} btn-${size}" ?disabled=${disabled}>${label}</button>
`;

export default {
  title: 'Componentes/Button',
  tags: ['autodocs'],
  render,
  argTypes: {
    styled: {
      control: { type: 'select' },
      options: ['neutral', 'primary', 'secondary', 'tertiary'],
      description: 'Paleta de cor do botão',
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Estilo visual: primary=preenchido, secondary=contornado, tertiary=texto',
    },
    size: {
      control: { type: 'select' },
      options: ['md', 'sm'],
      description: 'Tamanho (md 48px · sm 32px)',
    },
    label: { control: 'text', description: 'Texto do botão' },
    disabled: { control: 'boolean', description: 'Estado desabilitado' },
  },
  args: { styled: 'primary', type: 'primary', size: 'md', label: 'Acessar serviço', disabled: false },
};

export const Primary = {};
export const Secondary = { args: { type: 'secondary' } };
export const Tertiary = { args: { type: 'tertiary' } };
export const Neutral = { args: { styled: 'neutral' } };
export const SecondaryPalette = { args: { styled: 'secondary', label: 'Confirmar' } };
export const TertiaryPalette = { args: { styled: 'tertiary', label: 'Atenção' } };
export const Disabled = { args: { disabled: true, label: 'Indisponível' } };

/** Matriz completa: todas as combinações styled x type, tamanho md. */
export const Matriz = {
  render: () => html`
    <div style="display:flex; flex-direction:column; gap:12px;">
      ${['neutral', 'primary', 'secondary', 'tertiary'].map(
        (styled) => html`
          <div style="display:flex; gap:12px; align-items:center;">
            ${['primary', 'secondary', 'tertiary'].map(
              (type) => html`
                <button class="btn ${STYLED_CLASS[styled]} btn-${type} btn-md">${styled}/${type}</button>
              `
            )}
          </div>
        `
      )}
    </div>
  `,
};

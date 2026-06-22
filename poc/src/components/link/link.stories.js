import { html } from 'lit';
import './link.css';

const icon = html`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
  <path d="M5 19L19 5M19 5H9M19 5v10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

const render = ({ style, label, withIcon }) => html`
  <a class="ds-link ds-link-${style}" href="#">${label} ${withIcon ? icon : ''}</a>
`;

export default {
  title: 'Componentes/Link',
  tags: ['autodocs'],
  render,
  argTypes: {
    style: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'negative', 'light', 'dark'],
    },
    label: { control: 'text' },
    withIcon: { control: 'boolean' },
  },
  args: { style: 'primary', label: 'Acessar serviço', withIcon: false },
};

export const Primary = {};
export const Secondary = { args: { style: 'secondary' } };
export const Tertiary = { args: { style: 'tertiary' } };
export const Negative = { args: { style: 'negative', label: 'Excluir item' } };
export const Light = {
  args: { style: 'light' },
  render: (args) => html`<div style="background:#003f7f; padding:12px; display:inline-block;">${render(args)}</div>`,
};
export const Dark = { args: { style: 'dark' } };
export const ComIcone = { args: { withIcon: true } };

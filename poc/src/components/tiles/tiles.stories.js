import { html } from 'lit';
import './tiles.css';

const star = html`<svg class="tile-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" stroke="currentColor" stroke-width="1.5"/></svg>`;

export default { title: 'Componentes/Tile', tags: ['autodocs'] };

export const VerticalNeutral = {
  render: () => html`
    <a class="tile tile-vertical" href="#">
      ${star}
      <span class="tile-label">Label</span>
      <p class="tile-description">Label</p>
    </a>
  `,
};

export const VerticalPrimary = {
  render: () => html`
    <a class="tile tile-vertical tile-primary" href="#">
      ${star}
      <span class="tile-label">Label</span>
      <p class="tile-description">Label</p>
    </a>
  `,
};

export const HorizontalNeutral = {
  render: () => html`
    <a class="tile tile-horizontal" href="#">
      ${star}
      <span class="tile-content">
        <span class="tile-label">Label</span>
        <p class="tile-description">Label</p>
        <a class="tile-link" href="#">Acessar instituição</a>
      </span>
    </a>
  `,
};

export const HorizontalPrimary = {
  render: () => html`
    <a class="tile tile-horizontal tile-primary" href="#">
      ${star}
      <span class="tile-content">
        <span class="tile-label">Label</span>
        <p class="tile-description">Label</p>
        <a class="tile-link" href="#">Acessar instituição</a>
      </span>
    </a>
  `,
};

/** Grade com as 4 combinações lado a lado. */
export const Grade = {
  render: () => html`
    <div style="display:flex; flex-wrap:wrap; gap:16px;">
      ${VerticalNeutral.render()} ${VerticalPrimary.render()}
      ${HorizontalNeutral.render()} ${HorizontalPrimary.render()}
    </div>
  `,
};

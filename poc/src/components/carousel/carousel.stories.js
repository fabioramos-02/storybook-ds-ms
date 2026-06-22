import { html } from 'lit';
import './ms-carousel.js';

/**
 * <ms-carousel> — 3º Web Component da POC. Autoplay pausável, controles e
 * navegação por teclado exigem JS real, mesmo critério do Header/Menu.
 */
export default { title: 'Componentes/Carousel', tags: ['autodocs'] };

export const Manual = {
  render: () => html`<ms-carousel></ms-carousel>`,
};

export const Autoplay = {
  render: () => html`<ms-carousel autoplay interval="3000"></ms-carousel>`,
};

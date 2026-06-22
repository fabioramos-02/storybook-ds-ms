/* ============================================================================
   <ms-carousel> — Web Component (Lit) do DS-MS.
   3º Web Component do modelo híbrido: autoplay pausável, controles
   prev/next, dots e navegação por teclado (setas) são comportamento real —
   mesmo critério do ms-header/ms-menu. Light DOM (createRenderRoot retorna
   this), igual aos outros dois (ver docs/01-arquitetura.md).
   ============================================================================ */
import { LitElement, html } from 'lit';
import './carousel.css';

export class MsCarousel extends LitElement {
  static properties = {
    autoplay: { type: Boolean },
    interval: { type: Number },
    index: { type: Number, state: true },
    paused: { type: Boolean, state: true },
  };

  createRenderRoot() {
    return this;
  }

  constructor() {
    super();
    this.autoplay = false;
    this.interval = 4000;
    this.index = 0;
    this.paused = false;
    this.slides = [
      { title: 'Campanha de vacinação', body: 'Postos abertos em todo o estado até o fim do mês.' },
      { title: 'Edital de concurso', body: 'Inscrições abertas para a Secretaria de Educação.' },
      { title: 'Novo portal de serviços', body: 'Mais de 200 serviços digitais em um só lugar.' },
    ];
    this._timer = null;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.autoplay) this._startAutoplay();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._stopAutoplay();
  }

  _startAutoplay() {
    this._stopAutoplay();
    this._timer = setInterval(() => {
      if (!this.paused) this._go(this.index + 1);
    }, this.interval);
  }

  _stopAutoplay() {
    if (this._timer) clearInterval(this._timer);
  }

  _go(i) {
    this.index = (i + this.slides.length) % this.slides.length;
  }

  _onKeydown(e) {
    if (e.key === 'ArrowLeft') this._go(this.index - 1);
    if (e.key === 'ArrowRight') this._go(this.index + 1);
  }

  render() {
    return html`
      <div
        class="ds-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Destaques"
        tabindex="0"
        @mouseenter=${() => (this.paused = true)}
        @mouseleave=${() => (this.paused = false)}
        @keydown=${(e) => this._onKeydown(e)}
      >
        <div class="carousel-track" style="transform: translateX(-${this.index * 100}%)">
          ${this.slides.map(
            (s, i) => html`
              <div
                class="carousel-slide"
                role="group"
                aria-roledescription="slide"
                aria-label="${i + 1} de ${this.slides.length}"
                aria-hidden=${i !== this.index}
              >
                <div>
                  <h3>${s.title}</h3>
                  <p>${s.body}</p>
                </div>
              </div>
            `
          )}
        </div>
        <button class="carousel-control prev" type="button" aria-label="Slide anterior" @click=${() => this._go(this.index - 1)}>‹</button>
        <button class="carousel-control next" type="button" aria-label="Próximo slide" @click=${() => this._go(this.index + 1)}>›</button>
        <div class="carousel-dots">
          ${this.slides.map(
            (_, i) => html`
              <button aria-label="Ir para slide ${i + 1}" aria-current=${i === this.index} @click=${() => this._go(i)}></button>
            `
          )}
        </div>
      </div>
    `;
  }
}

if (!customElements.get('ms-carousel')) {
  customElements.define('ms-carousel', MsCarousel);
}

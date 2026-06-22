import { html } from 'lit';
import './footer.css';

const pin = html`<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"/></svg>`;
const facebook = html`<svg viewBox="0 0 24 24" fill="#1877F2"><circle cx="12" cy="12" r="10"/></svg>`;
const instagram = html`<svg viewBox="0 0 24 24" fill="none" stroke="#E1306C" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/></svg>`;
const x = html`<svg viewBox="0 0 24 24" fill="#000"><path d="M4 4l16 16M20 4L4 20" stroke="#000" stroke-width="2"/></svg>`;
const tiktok = html`<svg viewBox="0 0 24 24" fill="#000"><circle cx="12" cy="12" r="10"/></svg>`;
const youtube = html`<svg viewBox="0 0 24 24" fill="#FF0000"><circle cx="12" cy="12" r="10"/></svg>`;

const categorias = [
  { titulo: 'SOBRE O MS.GOV.BR', links: ['Saiba Mais', 'Perguntas Frequentes', 'Avalie o Portal'] },
  { titulo: 'INFORMAÇÕES', links: ['Agência de Notícias', 'Imprensa', 'Diário Oficial', 'Transparência', 'Acesso à Informação'] },
  { titulo: 'CONCURSOS', links: ['Concursos Públicos', 'Compras Públicas'] },
  { titulo: 'NAVEGAÇÃO', links: ['Acessibilidade', 'Mapa do site', 'LGPD'] },
  { titulo: 'CONHEÇA MS', links: ['Terra de Riquezas', 'História', 'Turismo', 'Bioparque Pantanal'] },
];

export default { title: 'Componentes/Footer', tags: ['autodocs'] };

export const Desktop = {
  render: () => html`
    <footer class="ds-footer" role="contentinfo">
      <div class="ds-footer-links">
        <div class="ds-footer-grid">
          ${categorias.map(
            (c) => html`
              <div class="ds-footer-category">
                <h3>${c.titulo}</h3>
                <ul>
                  ${c.links.map((l) => html`<li><a href="#">${l}</a></li>`)}
                </ul>
              </div>
            `
          )}
        </div>
      </div>

      <div class="ds-footer-info">
        <div class="ds-footer-address">
          <h2>Governadoria do Estado de Mato Grosso do Sul</h2>
          <p>Av. do Poeta Manoel de Barros, Bloco 8</p>
          <p>Parque dos Poderes Governador Pedro Pedrossian</p>
          <p>Campo Grande - MS</p>
          <p>CEP: 79031-350</p>
          <p>Endereço: <a href="#">Mapa ${pin}</a></p>
        </div>

        <div class="ds-footer-social">
          <h2>Redes sociais</h2>
          <ul>
            <li>${facebook}<a href="#">Facebook</a></li>
            <li>${instagram}<a href="#">Instagram</a></li>
            <li>${x}<a href="#">X (Twitter)</a></li>
            <li>${tiktok}<a href="#">Tiktok</a></li>
            <li>${youtube}<a href="#">Youtube</a></li>
          </ul>
        </div>

        <div class="ds-footer-logos">
          <span class="ds-footer-subsetor"><strong>SEGOV</strong><span>Secretaria de Estado de Governo e Gestão Estratégica</span></span>
          <div style="width:120px; height:60px; background:#004f9f; border-radius:4px;" aria-hidden="true"></div>
        </div>
      </div>

      <div class="ds-footer-copyright">
        <span>SETDIG | Secretaria-Executiva de Transformação Digital</span>
        <span>Termos de Uso | Política de Privacidade</span>
      </div>
    </footer>
  `,
};

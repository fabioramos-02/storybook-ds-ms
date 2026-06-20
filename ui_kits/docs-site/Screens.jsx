// Screens.jsx — the four documented surfaces

/* ─── Welcome ────────────────────────────────────────────────────────── */
function WelcomeScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 64, maxWidth: 800 }}>
      <section>
        <h1 className="heading-x-large" style={{ margin: 0 }}>Boas-vindas</h1>
        <p className="body-small" style={{ marginTop: 16, color: '#212A31' }}>
          SETDIG Design System é nossa abordagem personalizada para criar experiências e produtos digitais abrangentes. Enraizado em uma base de princípios de design inclusivos, o Design System não é apenas um sistema, mas um ecossistema de código funcional, ferramentas práticas de design, recursos detalhados e diretrizes claras de interface humana.
        </p>
        <p className="body-small" style={{ marginTop: 16, color: '#212A31' }}>
          Nós da equipe do Design System creditamos que as melhores ideias vêm de uma mistura diversificada de mentes e talentos, e promovemos ativamente uma comunidade onde contribuições, feedback e novos designs não são apenas bem-vindos, mas essenciais.
        </p>
      </section>

      <section>
        <h2 className="heading-large" style={{ margin: 0 }}>O que é um Design System</h2>
        <p className="body-small" style={{ marginTop: 16 }}>
          Um Design System ou DS, é um conjunto abrangente de diretrizes, padrões, elementos visuais, componentes de interface e princípios de design que trabalham em harmonia para proporcionar uma experiência consistente e coesa em produtos e serviços. Ele oferece uma estrutura organizada para a criação e implementação dos elementos, garantindo eficiência, coerência e qualidade na comunicação da marca.
        </p>
      </section>

      <section>
        <h2 className="heading-large" style={{ margin: 0 }}>Recursos</h2>
        <p className="body-small" style={{ marginTop: 16, marginBottom: 24 }}>
          As bibliotecas de componentes oferecem aos designs e aos desenvolvedores uma coleção de componentes reutilizáveis para a construção de sites e interfaces.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28 }}>
          <a className="card-link" href="#">
            <div style={{ width: 32, height: 32, display: 'grid', placeItems: 'center' }}>
              <svg width="22" height="32" viewBox="0 0 200 300" fill="none">
                <path d="M50 0h100a50 50 0 0 1 0 100h-50V0z" fill="#0acf83" />
                <path d="M50 100h100a50 50 0 0 1 0 100H50a50 50 0 0 1 0-100z" fill="#a259ff" />
                <path d="M0 200h50a50 50 0 0 1 0 100A50 50 0 0 1 0 250v-50z" fill="#f24e1e" />
                <path d="M0 100h50v100H50A50 50 0 0 1 0 150v-50z" fill="#ff7262" />
                <path d="M0 0h50v100H50A50 50 0 0 1 0 50V0z" fill="#1abcfe" />
              </svg>
            </div>
            <div>
              <div className="card-link-title">Figma UI Kit</div>
              <div className="card-link-body">Estilos e componentes customizáveis para ajudar a projetar o seu design.</div>
            </div>
          </a>
          <a className="card-link" href="#">
            <div style={{ width: 32, height: 32, display: 'grid', placeItems: 'center' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="#FC6D26"><path d="M22.65 14.39 20.85 7.4c-.07-.27-.32-.43-.6-.43h-3.51l-1.04-3.18c-.16-.5-.87-.5-1.04 0L13.62 6.97H10.38L9.35 3.79c-.16-.5-.87-.5-1.04 0L7.27 6.97H3.76c-.28 0-.53.16-.6.43L1.35 14.39c-.1.39.05.79.4 1.05L12 22.87l10.25-7.43c.34-.26.5-.66.4-1.05z" /></svg>
            </div>
            <div>
              <div className="card-link-title">Repositório GitLab</div>
              <div className="card-link-body">Código e documentação para desenvolvimento Web.</div>
            </div>
          </a>
          <a className="card-link" href="#">
            <div style={{ width: 52, height: 32, display: 'grid', placeItems: 'center', background: '#054385', color: '#fff', borderRadius: 4, fontFamily: 'Open Sans', fontWeight: 700, fontSize: 11 }}>TFS</div>
            <div>
              <div className="card-link-title">Repositório TFS</div>
              <div className="card-link-body">Código e documentação para desenvolvimento Web.</div>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}

/* ─── Colors ─────────────────────────────────────────────────────────── */
const PRIMARY = [
  { name: '100', hex: '#CCDCEC', dark: true },
  { name: '200', hex: '#99B9D9', dark: true },
  { name: '300', hex: '#6695C5', dark: false },
  { name: '400', hex: '#3372B2' },
  { name: 'P',   hex: '#004F9F' },
  { name: '600', hex: '#002F5F' },
  { name: '700', hex: '#002040' },
  { name: '800', hex: '#001020' },
  { name: '900', hex: '#000A14' },
];
const NEUTRAL = [
  { name: '100', hex: '#EAEBEC', dark: true },
  { name: '200', hex: '#D4D7D8', dark: true },
  { name: '300', hex: '#A9AEB1', dark: true },
  { name: '400', hex: '#6E757A' },
  { name: '500', hex: '#545D64' },
  { name: '600', hex: '#29353D' },
  { name: '700', hex: '#212A31' },
  { name: '800', hex: '#192025' },
  { name: '900', hex: '#101518' },
  { name: '950', hex: '#080B0C' },
  { name: '1000', hex: '#0A0909' },
];
const ERROR = [
  { name: '100', hex: '#F6D3D5', dark: true },
  { name: '200', hex: '#EDA8AB', dark: true },
  { name: '300', hex: '#BD5458' },
  { name: '400', hex: '#C83D42' },
  { name: 'E',   hex: '#DA1E28' },
  { name: '600', hex: '#7F161A' },
  { name: '700', hex: '#540F12' },
  { name: '800', hex: '#2A0709' },
];

function ColorRow({ swatches, primaryIdx }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      {swatches.map((s, i) => (
        <Swatch key={i} {...s} large={i === primaryIdx} />
      ))}
    </div>
  );
}

function ColorsScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 64, maxWidth: 800 }}>
      <section>
        <h1 className="heading-x-large" style={{ margin: 0 }}>Paleta de Cores</h1>
        <p className="body-small" style={{ marginTop: 16 }}>
          As cores no nosso design system desempenham um papel fundamental na criação de uma experiência visual coesa e atraente para os usuários. Elas são cuidadosamente selecionadas e organizadas para transmitir uma identidade visual única e facilitar a compreensão e navegação na interface.
        </p>
        <p className="body-small" style={{ marginTop: 16 }}>
          Use as cores para criar experiências significativas, como, guiar a navegação do usuário, garantir consistência, enquanto, também, expressa hierarquia, estados. Tornando cada interação visualmente impactante e alinhada com a identidade da marca.
        </p>
      </section>

      <section>
        <h2 className="heading-large" style={{ margin: 0 }}>Importe os Estilos</h2>
        <p className="body-small" style={{ marginTop: 16, marginBottom: 8 }}>
          Para utilizar a paleta de cores do Design System em seu projeto é necessário importar dos estilos.
        </p>
        <CodeBlock code={`import '@design-system-ms/ds-sis/lib/styles.css'`} languages={['JavaScript']} />
      </section>

      <section>
        <h2 className="heading-large" style={{ margin: 0 }}>Cor Primária</h2>
        <p className="body-small" style={{ marginTop: 16, marginBottom: 16, fontFamily: 'Open Sans' }}>
          A paleta de cores primárias é usada em todos os elementos interativos, como CTAs, links, entradas, estados ativos, etc.
        </p>
        <ColorRow swatches={PRIMARY} primaryIdx={4} />
      </section>

      <section>
        <h2 className="heading-large" style={{ margin: 0 }}>Cor Neutra</h2>
        <p className="body-small" style={{ marginTop: 16, marginBottom: 16, fontFamily: 'Open Sans' }}>
          Esta escala é usada como suporte para as cores primárias, como cores de texto, separadores, contornos, etc.
        </p>
        <ColorRow swatches={NEUTRAL} primaryIdx={-1} />
      </section>

      <section>
        <h2 className="heading-large" style={{ margin: 0 }}>Cor Feedback Erro</h2>
        <p className="body-small" style={{ marginTop: 16, marginBottom: 16, fontFamily: 'Open Sans' }}>
          Usado para validação, ações destrutivas e mensagens de erro.
        </p>
        <ColorRow swatches={ERROR} primaryIdx={4} />
      </section>
    </div>
  );
}

/* ─── Typography ────────────────────────────────────────────────────── */
function TypeScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 64, maxWidth: 800 }}>
      <section>
        <h1 className="heading-x-large" style={{ margin: 0 }}>Tipografia</h1>
        <p className="body-small" style={{ marginTop: 16 }}>
          Um design system para tipografia é um conjunto organizado de estilos, tamanhos, pesos e outras propriedades tipográficas, acompanhado de diretrizes para uso consistente em toda a interface de usuário, proporcionando uma experiência de usuário visualmente harmoniosa e funcional.
        </p>
        <p className="body-small" style={{ marginTop: 16 }}>
          Use a tipografia para harmonizar e apresentar os elementos visuais de maneira mais clara e eficiente possível.
        </p>
      </section>

      <section>
        <h2 className="heading-large" style={{ margin: 0 }}>Font Family</h2>
        <p className="body-small" style={{ marginTop: 16, marginBottom: 16 }}>
          A escolha de font family foi baseada em fontes gratuitas, que tivessem um alcance maior de dispositivos.
        </p>
        <div style={{ display: 'flex', gap: 32 }}>
          {[
            { name: 'Open Sans', token: '--font-family-open-sans', family: 'Open Sans, sans-serif' },
            { name: 'Roboto', token: '--font-family-roboto', family: 'Roboto, sans-serif' },
          ].map(f => (
            <div key={f.name} style={{
              width: 176, height: 155, borderRadius: 6,
              border: '1px solid #EFEFF0',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12,
              padding: '16px 48px',
            }}>
              <div style={{ fontFamily: f.family, fontWeight: 700, fontSize: 48, lineHeight: 1.2, color: '#19191C' }}>Aa</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: f.family, fontWeight: 500, fontSize: 16 }}>{f.name}</div>
                <div style={{ fontFamily: f.family, fontSize: 14, color: '#68686E' }}>{f.token}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="heading-large" style={{ margin: 0 }}>Display</h2>
        <p className="body-small" style={{ marginTop: 16, marginBottom: 16 }}>
          Como o maior texto na tela, estilos de Display são reservados para textos ou números curtos e importantes.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
          <div className="display-large" style={{ fontSize: 64 }}>Display Large</div>
          <div className="display-medium" style={{ fontSize: 48 }}>Display Medium</div>
          <div className="display-small" style={{ fontSize: 36 }}>Display Small</div>
          <div className="display-x-small">Display XSmall</div>
        </div>
        <div style={{ marginTop: 24 }}>
          <CodeBlock code={`<h1 class="display-large">Display Large</h1>
<h1 class="display-medium">Display Medium</h1>
<h1 class="display-small">Display Small</h1>
<h1 class="display-x-small">Display X Small</h1>`} />
        </div>
      </section>

      <section>
        <h2 className="heading-large" style={{ margin: 0 }}>Heading</h2>
        <p className="body-small" style={{ marginTop: 16, marginBottom: 16 }}>
          Heading são mais adequadas para textos curtos e de grande destaque em telas menores.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div className="heading-xx-large">Heading XX Large</div>
          <div className="heading-x-large">Heading X Large</div>
          <div className="heading-large">Heading Large</div>
          <div className="heading-medium">Heading Medium</div>
          <div className="heading-small">Heading Small</div>
          <div className="heading-x-small">Heading X Small</div>
        </div>
      </section>

      <section>
        <h2 className="heading-large" style={{ margin: 0 }}>Body</h2>
        <p className="body-small" style={{ marginTop: 16, marginBottom: 24 }}>
          Estilos de corpo de texto são usados para passagens mais longas. Body são estilos utilitários, usados para elementos como o texto dentro de componentes ou para texto muito pequeno, como legendas (captions).
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <p className="body-large" style={{ margin: 0 }}>Body Large — Use a tipografia para harmonizar e apresentar os elementos visuais.</p>
          <p className="body-medium" style={{ margin: 0 }}>Body Medium — Use a tipografia para harmonizar e apresentar os elementos visuais.</p>
          <p className="body-small" style={{ margin: 0 }}>Body Small — Use a tipografia para harmonizar e apresentar os elementos visuais.</p>
          <p className="body-x-small" style={{ margin: 0 }}>Body X Small — Use a tipografia para harmonizar e apresentar os elementos visuais.</p>
          <p className="caption-small" style={{ margin: 0 }}>Caption Small — Use a tipografia para harmonizar e apresentar os elementos visuais.</p>
        </div>
      </section>
    </div>
  );
}

/* ─── Components ────────────────────────────────────────────────────── */
function ComponentsScreen() {
  const [text, setText] = React.useState('');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 64, maxWidth: 800 }}>
      <section>
        <h1 className="heading-x-large" style={{ margin: 0 }}>Componentes</h1>
        <p className="body-small" style={{ marginTop: 16 }}>
          Bibliotecas de componentes oferecem aos designs e aos desenvolvedores uma coleção de componentes reutilizáveis para a construção de sites e interfaces. Use estes componentes como ponto de partida e mantenha-se fiel aos estados documentados.
        </p>
      </section>

      <section>
        <h2 className="heading-large" style={{ margin: 0 }}>Botões</h2>
        <p className="body-small" style={{ marginTop: 16, marginBottom: 24 }}>
          Botões expressam a ação primária de uma tela. Use somente um botão primário por tela; secundários e simples completam a hierarquia.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div>
            <div className="caption-small" style={{ marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.05em' }}>Primary</div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="btn btn-primary btn-lg">Botão</button>
              <button className="btn btn-primary btn-md">Botão</button>
              <button className="btn btn-primary btn-sm">Botão</button>
              <button className="btn btn-primary btn-md" disabled>Disabled</button>
            </div>
          </div>
          <div>
            <div className="caption-small" style={{ marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.05em' }}>Secondary</div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="btn btn-secondary btn-lg">Botão</button>
              <button className="btn btn-secondary btn-md">Botão</button>
              <button className="btn btn-secondary btn-sm">Botão</button>
            </div>
          </div>
          <div>
            <div className="caption-small" style={{ marginBottom: 8, textTransform: 'uppercase', letterSpacing: '.05em' }}>Simple / Link</div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="btn btn-simple btn-lg">Link →</button>
              <button className="btn btn-simple btn-md">Link →</button>
              <button className="btn btn-simple btn-sm">Link →</button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="heading-large" style={{ margin: 0 }}>Input de Texto</h2>
        <p className="body-small" style={{ marginTop: 16, marginBottom: 24 }}>
          Campos de texto coletam entradas curtas. O label fica sempre acima do campo e o texto de ajuda abaixo.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, maxWidth: 640 }}>
          <div className="field">
            <label className="field-label">Nome completo</label>
            <input className="field-input" placeholder="Digite seu nome" value={text} onChange={e => setText(e.target.value)} />
            <div className="field-helper">Texto de ajuda</div>
          </div>
          <div className="field">
            <label className="field-label">E-mail</label>
            <input className="field-input is-error" defaultValue="email@invalido" />
            <div className="field-helper is-error">Endereço de e-mail inválido</div>
          </div>
          <div className="field">
            <label className="field-label">Senha</label>
            <input className="field-input" type="password" defaultValue="********" />
            <div className="field-helper">Mínimo 8 caracteres</div>
          </div>
          <div className="field">
            <label className="field-label" style={{ color: '#A9AEB1' }}>CPF</label>
            <input className="field-input" defaultValue="000.000.000-00" disabled />
            <div className="field-helper">Campo bloqueado</div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="heading-large" style={{ margin: 0 }}>Seleção</h2>
        <p className="body-small" style={{ marginTop: 16, marginBottom: 24 }}>
          Controles de seleção: checkbox múltiplo, radio único, toggle binário.
        </p>
        <div style={{ display: 'flex', gap: 48 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <label style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14 }}><input className="checkbox" type="checkbox" defaultChecked /> Aceito os termos</label>
            <label style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14 }}><input className="checkbox" type="checkbox" /> Quero receber novidades</label>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <label style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14 }}><input className="radio" type="radio" name="x" defaultChecked /> Servidor</label>
            <label style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14 }}><input className="radio" type="radio" name="x" /> Cidadão</label>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <label style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14 }}><input className="toggle" type="checkbox" defaultChecked /> Notificações</label>
            <label style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14 }}><input className="toggle" type="checkbox" /> Modo escuro</label>
          </div>
        </div>
      </section>
    </div>
  );
}

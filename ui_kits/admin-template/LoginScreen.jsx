// LoginScreen.jsx — login administrativo
function LoginScreen({ onLogin }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin?.(email || 'maria.silva@ms.gov.br'); }, 700);
  };
  return (
    <div style={{
      minHeight: '100vh',
      background: '#F9F9F9',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
    }} data-screen-label="Admin · Login">
      {/* left brand panel */}
      <div style={{
        background: '#004F9F',
        color: '#fff',
        padding: '64px 80px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <img src="../../assets/logo-ds-ms.svg" alt="DS-MS" style={{ height: 40, filter: 'brightness(0) invert(1)' }} />
        <div>
          <div className="display-x-small" style={{ color: '#fff', marginBottom: 16 }}>Painel administrativo</div>
          <p className="body-medium" style={{ color: '#CCDCEC', maxWidth: 360 }}>
            Acesso restrito aos servidores credenciados dos sistemas digitais do Governo de Mato Grosso do Sul.
          </p>
        </div>
        <div className="caption-small" style={{ color: '#99B9D9' }}>
          SETDIG — Secretaria-Executiva de Transformação Digital
        </div>
      </div>

      {/* right form */}
      <div style={{ display: 'grid', placeItems: 'center', padding: 32 }}>
        <form onSubmit={submit} style={{ width: 400, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div>
            <div className="heading-x-large" style={{ marginBottom: 8 }}>Entrar</div>
            <div className="body-small" style={{ color: '#6E757A' }}>
              Use sua conta institucional para acessar.
            </div>
          </div>

          <div className="field">
            <label className="field-label">E-mail institucional</label>
            <input className="field-input" placeholder="seu.nome@ms.gov.br"
              value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div className="field">
            <label className="field-label">Senha</label>
            <input className="field-input" type="password" placeholder="••••••••"
              value={password} onChange={e => setPassword(e.target.value)} />
            <a className="link" style={{ fontSize: 12, marginTop: 4 }} href="#">Esqueci minha senha</a>
          </div>

          <label style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14 }}>
            <input className="checkbox" type="checkbox" /> Manter conectado neste dispositivo
          </label>

          <button className="btn btn-primary btn-lg" type="submit" disabled={loading}>
            {loading ? 'Entrando…' : 'Entrar'}
          </button>

          <div style={{ textAlign: 'center', fontSize: 12, color: '#6E757A' }}>
            Precisa de ajuda? <a className="link" href="#">Fale com o suporte</a>
          </div>
        </form>
      </div>
    </div>
  );
}

// ErrorScreen.jsx — "Página de Erro" template
function ErrorScreen({ onBack }) {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 32,
      textAlign: 'center',
    }} data-screen-label="Admin · 404">
      <div style={{
        fontFamily: 'Open Sans',
        fontWeight: 700,
        fontSize: 160,
        lineHeight: 1,
        color: '#004F9F',
        letterSpacing: -4,
      }}>404</div>
      <h1 className="heading-xx-large" style={{ marginTop: 16, marginBottom: 12 }}>Página não encontrada</h1>
      <p className="body-medium" style={{ color: '#6E757A', maxWidth: 480, margin: 0 }}>
        O endereço que você acessou não existe ou foi removido. Verifique o link ou volte para o painel principal.
      </p>
      <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
        <button className="btn btn-secondary btn-md" onClick={() => history.back()}>
          ← Voltar
        </button>
        <button className="btn btn-primary btn-md" onClick={onBack}>
          Ir para o painel
        </button>
      </div>
    </div>
  );
}

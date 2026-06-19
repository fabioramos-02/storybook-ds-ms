// DSHeader.jsx — DS-MS top chrome (azul-500, 96px)
function DSHeader({ active = 'docs' }) {
  return (
    <header className="ds-header">
      <a href="#welcome" className="brand" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
        <img src="../../assets/logo-ds-ms.svg" alt="DS-MS" className="ds-ms-logo" />
        <div className="brand-sub">{`Design System dos sistemas\nde Mato Grosso do Sul`}</div>
      </a>
      <nav>
        <a href="#welcome" style={{ opacity: active === 'docs' ? 1 : .8 }}>Documentação</a>
        <a href="#examples" style={{ opacity: active === 'examples' ? 1 : .8 }}>Exemplos</a>
      </nav>
      <div className="right">
        <div className="search" style={{ width: 280, background: '#fff' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          <input placeholder="Buscar" />
        </div>
        <a href="#" aria-label="GitHub" style={{ color: '#fff' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.1-.4-.6-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.3v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
          </svg>
        </a>
        <a href="#" aria-label="GitLab" style={{ color: '#fff' }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.65 14.39L20.85 7.4c-.07-.27-.32-.43-.6-.43h-3.51l-1.04-3.18c-.16-.5-.87-.5-1.04 0L13.62 6.97H10.38L9.35 3.79c-.16-.5-.87-.5-1.04 0L7.27 6.97H3.76c-.28 0-.53.16-.6.43L1.35 14.39c-.1.39.05.79.4 1.05l10.25 7.43.04.03.04-.03 10.18-7.43c.34-.26.5-.66.39-1.05" />
          </svg>
        </a>
        <div className="divider"></div>
        <div className="version">
          v1.0
          <svg width="10" height="6" viewBox="0 0 10 6" fill="currentColor"><path d="M0 0h10L5 6z" /></svg>
        </div>
      </div>
    </header>
  );
}

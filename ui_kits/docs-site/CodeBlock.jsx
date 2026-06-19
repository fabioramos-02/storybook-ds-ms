// CodeBlock.jsx — dark code block with React/Angular tabs + clipboard
function CodeBlock({ code, languages = ['HTML', 'React', 'Angular'] }) {
  const [active, setActive] = React.useState(0);
  const [copied, setCopied] = React.useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="code-block">
      <div className="code-block-tabs">
        {languages.map((l, i) => (
          <div key={l} className={`tab ${active === i ? 'is-active' : ''}`} onClick={() => setActive(i)}>{l}</div>
        ))}
        <button onClick={copy} aria-label="Copiar"
          style={{
            marginLeft: 'auto', background: 'transparent', border: 'none', cursor: 'pointer',
            color: '#0A0909', fontFamily: 'Roboto', fontSize: 12, display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>
          <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor">
            <path d="M4 0v2H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6 14H2V4h2v6a2 2 0 0 0 2 2h4z" />
          </svg>
          {copied ? 'Copiado!' : 'Copiar'}
        </button>
      </div>
      <pre><code>{code}</code></pre>
    </div>
  );
}

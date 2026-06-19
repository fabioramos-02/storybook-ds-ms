// Sidebar.jsx — fixed left navigation (172px wide column)
function SidebarSection({ icon, title, items, current, onSelect }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 12,
        color: '#004F9F', fontFamily: 'Open Sans', fontWeight: 700, fontSize: 16, lineHeight: 1.4,
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
        {title}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, marginTop: 12, paddingLeft: 28 }}>
        {items.map(it => {
          const isActive = current === it.id;
          return (
            <a key={it.id} href={`#${it.id}`}
              onClick={(e) => { e.preventDefault(); onSelect(it.id); }}
              style={{
                fontFamily: 'Roboto',
                fontSize: 14,
                lineHeight: 1.4,
                textDecoration: 'none',
                color: isActive ? '#004F9F' : '#212A31',
                fontWeight: isActive ? 700 : 400,
                padding: '4px 0',
              }}>
              {it.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}

const bookIcon = <><path d="M4 4v16a1 1 0 0 0 1.5.9L12 18l6.5 2.9A1 1 0 0 0 20 20V4a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1z" /></>;

function Sidebar({ current, onSelect }) {
  return (
    <aside style={{ width: 172, flex: 'none', padding: '40px 0' }}>
      <SidebarSection icon={bookIcon} title="Introdução"
        current={current} onSelect={onSelect}
        items={[
          { id: 'welcome',       label: 'Boas-vindas' },
          { id: 'vision',        label: 'Nossa Visão' },
          { id: 'designers',     label: 'Para Designers' },
          { id: 'devs',          label: 'Para Desenvolvedores' },
          { id: 'a11y',          label: 'Acessibilidade' },
        ]} />
      <SidebarSection icon={bookIcon} title="Fundamentos"
        current={current} onSelect={onSelect}
        items={[
          { id: 'colors',       label: 'Paleta de Cores' },
          { id: 'type',         label: 'Tipografia' },
          { id: 'spacing',      label: 'Espaçamentos' },
          { id: 'borders',      label: 'Bordas' },
          { id: 'shadows',      label: 'Sombras' },
          { id: 'overlay',      label: 'Overlay' },
        ]} />
      <SidebarSection icon={bookIcon} title="Componentes"
        current={current} onSelect={onSelect}
        items={[
          { id: 'components',   label: 'Botões' },
          { id: 'inputs',       label: 'Input de Texto' },
          { id: 'select',       label: 'Seleção' },
          { id: 'search-cmp',   label: 'Busca' },
        ]} />
    </aside>
  );
}

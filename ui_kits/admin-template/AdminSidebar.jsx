// AdminSidebar.jsx — fixed left nav for admin screens
const adminNav = [
  { id: 'overview',  label: 'Visão geral',        icon: 'home' },
  { id: 'citizens',  label: 'Cidadãos',           icon: 'users' },
  { id: 'services',  label: 'Serviços',           icon: 'grid' },
  { id: 'requests',  label: 'Solicitações',       icon: 'inbox' },
  { id: 'reports',   label: 'Relatórios',         icon: 'chart' },
  { id: 'settings',  label: 'Configurações',      icon: 'cog' },
];

const ICONS = {
  home:  <path d="M3 12l9-9 9 9M5 10v10h14V10" />,
  users: <><circle cx="9" cy="8" r="4" /><path d="M2 21a7 7 0 0 1 14 0" /><circle cx="18" cy="8" r="3" /><path d="M22 21a5 5 0 0 0-7-4.6" /></>,
  grid:  <><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></>,
  inbox: <><path d="M22 12h-6l-2 3h-4l-2-3H2" /><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></>,
  chart: <path d="M3 3v18h18M7 14l4-4 4 4 5-5" />,
  cog:   <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></>,
};

function AdminSidebar({ current, onSelect }) {
  return (
    <aside style={{
      width: 240,
      flex: 'none',
      background: '#FFFFFF',
      borderRight: '1px solid #EAEBEC',
      padding: '24px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    }}>
      {adminNav.map(it => {
        const isActive = current === it.id;
        return (
          <a key={it.id} href="#"
            onClick={(e) => { e.preventDefault(); onSelect(it.id); }}
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              padding: '10px 24px',
              margin: '0 12px',
              borderRadius: 4,
              fontFamily: 'Roboto',
              fontSize: 14,
              fontWeight: isActive ? 700 : 500,
              color: isActive ? '#004F9F' : '#212A31',
              background: isActive ? '#CCDCEC' : 'transparent',
              textDecoration: 'none',
              borderLeft: isActive ? '3px solid #004F9F' : '3px solid transparent',
              paddingLeft: isActive ? 21 : 24,
            }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {ICONS[it.icon]}
            </svg>
            {it.label}
          </a>
        );
      })}
    </aside>
  );
}

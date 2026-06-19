// DashboardScreen.jsx — admin internal page (Página Interna)
function StatCard({ label, value, delta, deltaColor = '#198038' }) {
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #EAEBEC',
      borderRadius: 8,
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
    }}>
      <div className="caption-small" style={{ textTransform: 'uppercase', letterSpacing: '.05em' }}>{label}</div>
      <div style={{ fontFamily: 'Open Sans', fontWeight: 700, fontSize: 32, color: '#19191C', lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 12, color: deltaColor }}>{delta}</div>
    </div>
  );
}

function DashboardScreen({ user, onLogout }) {
  const [current, setCurrent] = React.useState('citizens');
  const [filter, setFilter] = React.useState('');
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F9F9F9' }} data-screen-label="Admin · Dashboard">
      {/* top bar */}
      <header style={{
        height: 64,
        background: '#fff',
        borderBottom: '1px solid #EAEBEC',
        display: 'flex',
        alignItems: 'center',
        padding: '0 32px',
        gap: 24,
      }}>
        <img src="../../assets/logo-ds-ms.svg" alt="DS-MS" style={{ height: 28, filter: 'brightness(0) saturate(100%) invert(18%) sepia(74%) saturate(2600%) hue-rotate(202deg)' }} />
        <div style={{ width: 1, height: 24, background: '#EAEBEC' }}></div>
        <div className="heading-x-small" style={{ color: '#19191C' }}>Painel administrativo</div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 16, alignItems: 'center' }}>
          <div className="search" style={{ width: 280 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
            <input placeholder="Buscar em todo o sistema" />
          </div>
          <button className="btn btn-icon btn-md btn-secondary" aria-label="Notificações">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingLeft: 16, borderLeft: '1px solid #EAEBEC' }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#004F9F', color: '#fff', display: 'grid', placeItems: 'center', fontFamily: 'Open Sans', fontWeight: 700, fontSize: 14 }}>
              {user?.[0]?.toUpperCase() || 'M'}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#19191C' }}>{user || 'Maria Silva'}</div>
              <a className="link" style={{ fontSize: 11 }} href="#" onClick={(e) => { e.preventDefault(); onLogout?.(); }}>Sair</a>
            </div>
          </div>
        </div>
      </header>

      <div style={{ display: 'flex', flex: 1 }}>
        <AdminSidebar current={current} onSelect={setCurrent} />

        <main style={{ flex: 1, padding: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Breadcrumb */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#6E757A' }}>
            <a className="link" href="#" style={{ fontSize: 12 }}>Início</a>
            <span>›</span>
            <span>Cidadãos</span>
            <span>›</span>
            <span style={{ color: '#19191C', fontWeight: 700 }}>Solicitações</span>
          </nav>

          {/* Title + actions */}
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16 }}>
            <div style={{ flex: 1 }}>
              <h1 className="heading-x-large" style={{ margin: 0 }}>Cidadãos atendidos</h1>
              <p className="body-small" style={{ margin: '8px 0 0', color: '#6E757A' }}>
                Visão consolidada das solicitações ativas e concluídas no estado de Mato Grosso do Sul.
              </p>
            </div>
            <button className="btn btn-secondary btn-md">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></svg>
              Exportar
            </button>
            <button className="btn btn-primary btn-md">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
              Novo cidadão
            </button>
          </div>

          {/* Inline notification */}
          <div className="notification">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
            <div>3 solicitações estão aguardando sua revisão há mais de 24 horas. <a className="link" href="#" style={{ marginLeft: 4 }}>Ver lista →</a></div>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            <StatCard label="Total no mês" value="1.284" delta="+12% vs. abr/26" />
            <StatCard label="Em análise" value="47" delta="−3 desde ontem" deltaColor="#198038" />
            <StatCard label="Tempo médio" value="2,4d" delta="Meta: ≤ 3 dias" deltaColor="#6E757A" />
            <StatCard label="Rejeitadas" value="9" delta="+2 esta semana" deltaColor="#DA1E28" />
          </div>

          {/* Table filters */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div className="search" style={{ width: 320 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>
              <input placeholder="Buscar por nome ou CPF" value={filter} onChange={e => setFilter(e.target.value)} />
            </div>
            <span className="tag">Todos os status</span>
            <span className="tag tag-success">Concluído</span>
            <span className="tag tag-warning">Em análise</span>
            <span className="tag tag-error">Rejeitado</span>
            <div style={{ marginLeft: 'auto', fontSize: 12, color: '#6E757A' }}>{CITIZEN_DATA.length} resultados</div>
          </div>

          <DataTable filter={filter} />
        </main>
      </div>
    </div>
  );
}

// DataTable.jsx — table with status tags + row actions
const CITIZEN_DATA = [
  { name: 'Mariana Souza Almeida',   cpf: '123.456.789-01', city: 'Campo Grande', service: 'Carteira de Identidade', status: 'completed', date: '12/05/2026' },
  { name: 'João Pedro Ferreira',     cpf: '234.567.890-12', city: 'Dourados',     service: 'Alvará comercial',       status: 'pending',   date: '11/05/2026' },
  { name: 'Carlos Eduardo Ribeiro',  cpf: '345.678.901-23', city: 'Três Lagoas',  service: 'IPVA',                  status: 'completed', date: '10/05/2026' },
  { name: 'Luana Vieira Costa',      cpf: '456.789.012-34', city: 'Corumbá',      service: 'Habilitação',            status: 'error',     date: '09/05/2026' },
  { name: 'Patrícia Lima Nogueira',  cpf: '567.890.123-45', city: 'Ponta Porã',   service: 'ITCD',                   status: 'pending',   date: '09/05/2026' },
  { name: 'Roberto Carvalho Silva',  cpf: '678.901.234-56', city: 'Naviraí',      service: 'Carteira de Identidade', status: 'completed', date: '08/05/2026' },
  { name: 'Aline Marques Pereira',   cpf: '789.012.345-67', city: 'Aquidauana',   service: 'Alvará comercial',       status: 'completed', date: '07/05/2026' },
];

const STATUS_LABEL = {
  completed: { tag: 'tag-success', label: 'Concluído' },
  pending:   { tag: 'tag-warning', label: 'Em análise' },
  error:     { tag: 'tag-error',   label: 'Rejeitado' },
};

function DataTable({ filter }) {
  const rows = filter
    ? CITIZEN_DATA.filter(r => r.name.toLowerCase().includes(filter.toLowerCase()) || r.cpf.includes(filter))
    : CITIZEN_DATA;
  return (
    <div style={{ border: '1px solid #EAEBEC', borderRadius: 8, overflow: 'hidden', background: '#fff' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Roboto' }}>
        <thead>
          <tr style={{ background: '#F9F9F9', borderBottom: '1px solid #EAEBEC' }}>
            {['Cidadão', 'CPF', 'Município', 'Serviço solicitado', 'Status', 'Solicitado em', ''].map(h => (
              <th key={h} style={{
                textAlign: 'left',
                padding: '12px 16px',
                fontSize: 12,
                fontWeight: 700,
                color: '#545D64',
                letterSpacing: '.02em',
                textTransform: 'uppercase',
              }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const status = STATUS_LABEL[r.status];
            return (
              <tr key={i} style={{ borderBottom: i === rows.length - 1 ? 'none' : '1px solid #EAEBEC' }}>
                <td style={{ padding: '14px 16px', fontSize: 14, fontWeight: 500, color: '#212A31' }}>{r.name}</td>
                <td style={{ padding: '14px 16px', fontSize: 13, fontFamily: 'Archivo, monospace', color: '#545D64' }}>{r.cpf}</td>
                <td style={{ padding: '14px 16px', fontSize: 14, color: '#212A31' }}>{r.city}</td>
                <td style={{ padding: '14px 16px', fontSize: 14, color: '#212A31' }}>{r.service}</td>
                <td style={{ padding: '14px 16px' }}><span className={`tag ${status.tag}`}>{status.label}</span></td>
                <td style={{ padding: '14px 16px', fontSize: 13, color: '#6E757A' }}>{r.date}</td>
                <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                  <button className="btn btn-simple btn-sm">Detalhes →</button>
                </td>
              </tr>
            );
          })}
          {rows.length === 0 && (
            <tr><td colSpan="7" style={{ padding: '40px 16px', textAlign: 'center', color: '#6E757A', fontSize: 14 }}>Nenhum cidadão encontrado para "{filter}".</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

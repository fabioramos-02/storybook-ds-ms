// DS-MS Button — React
import '@dsms/ds-sis/dist/css/ds-sis.css';
import { ColorPrimary500 } from '@dsms/ds-sis/dist/js/tokens.js';

export function Acoes() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <button className="btn btn-primary btn-md">Salvar</button>
      <button className="btn btn-secondary btn-md">Cancelar</button>
      <button className="btn btn-primary btn-md" disabled>Indisponível</button>
      {/* token em JS, quando precisar: */}
      <span style={{ color: ColorPrimary500 }}>Cor da marca</span>
    </div>
  );
}

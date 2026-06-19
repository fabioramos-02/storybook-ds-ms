// Swatch.jsx — circular color chip with name + hex (mirrors Figma "Item" component)
function Swatch({ name, hex, large = false, dark = false }) {
  const size = large ? 72 : 60;
  return (
    <div style={{
      width: size, height: size,
      borderRadius: '50%',
      background: hex,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: dark ? '#0A0909' : '#fff',
      flex: 'none',
    }}>
      <div style={{ fontFamily: 'Inter, Roboto', fontSize: 18, fontWeight: 500 }}>{name}</div>
      <div style={{ fontFamily: 'Inter, Roboto', fontSize: 10, opacity: .75 }}>{hex}</div>
    </div>
  );
}

function SwatchRow({ swatches, primary }) {
  // mirrors figma layout: small chips on the sides, big primary chip in the middle
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 0' }}>
      {swatches.map((s, i) => (
        <React.Fragment key={i}>
          {primary === i && <div style={{ width: 4 }} />}
          <Swatch {...s} large={primary === i} />
          {primary === i && <div style={{ width: 4 }} />}
        </React.Fragment>
      ))}
    </div>
  );
}

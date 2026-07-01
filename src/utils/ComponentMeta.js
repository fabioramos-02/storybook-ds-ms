export function ComponentMeta({
    id = '',
    status = 'Não informado',
    version = '1.0.0',
    category = 'Components',
    updated = '',
} = {}) {
    if (!id) {
        return '';
    }

    return `
        <div style="
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 16px;
        ">
            <span style="padding: 6px 10px; border-radius: 999px; background: var(--ds-color-background-muted);">
                ID: <code>${id}</code>
            </span>

            <span style="padding: 6px 10px; border-radius: 999px; background: var(--ds-color-background-muted);">
                Status: ${status}
            </span>

            <span style="padding: 6px 10px; border-radius: 999px; background: var(--ds-color-background-muted);">
                Versão: ${version}
            </span>

            <span style="padding: 6px 10px; border-radius: 999px; background: var(--ds-color-background-muted);">
                Categoria: ${category}
            </span>

            ${updated ? `
                <span style="padding: 6px 10px; border-radius: 999px; background: var(--ds-color-background-muted);">
                    Atualizado: ${updated}
                </span>
            ` : ''}
        </div>
    `;
}
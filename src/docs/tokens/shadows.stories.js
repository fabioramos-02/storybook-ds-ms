export default {
    title: 'Tokens/Sombras',
};

const shadows = [
    [
        'Card SM',
        '--ds-shadow-card-sm',
        '0 2px 4px rgba(0, 15, 30, 0.02)',
        'Sombra leve para cards e superfícies simples.',
    ],
    [
        'Shadow SM',
        '--ds-shadow-sm',
        '0 2px 4px rgba(29, 29, 27, 0.08)',
        'Sombra pequena para elementos elevados.',
    ],
    [
        'Shadow MD',
        '--ds-shadow-md',
        '0 8px 12px rgba(29, 29, 27, 0.04), 0 2px 4px rgba(29, 29, 27, 0.02)',
        'Sombra média para cards destacados, modais e blocos principais.',
    ],
];

function shadowItem([name, token, value, description]) {
    return `
        <article style="
            display: grid;
            grid-template-columns: 220px 1fr 220px;
            align-items: center;
            gap: 32px;
            padding: 32px 0;
            border-bottom: 1px solid var(--ds-color-border);
        ">
            <div>
                <h3 style="
                    margin: 0 0 8px;
                    font-family: var(--ds-font-family-body);
                    font-size: var(--ds-font-size-md);
                    line-height: var(--ds-line-height-24);
                    color: var(--ds-color-text-primary);
                ">
                    ${name}
                </h3>

                <code style="
                    display: inline-flex;
                    width: max-content;
                    padding: 4px 8px;
                    border-radius: var(--ds-radius-xsm);
                    background: var(--ds-color-background-muted);
                    font-size: 12px;
                    color: var(--ds-color-text-primary);
                ">
                    ${token}
                </code>
            </div>

            <div>
                <p style="
                    margin: 0 0 8px;
                    color: var(--ds-color-text-secondary);
                    font-size: var(--ds-body-md-font-size);
                    line-height: var(--ds-body-md-line-height);
                ">
                    ${description}
                </p>

                <p style="
                    margin: 0;
                    color: var(--ds-color-text-muted);
                    font-size: var(--ds-font-size-sm);
                    line-height: var(--ds-line-height-20);
                ">
                    ${value}
                </p>
            </div>

            <div style="
                width: 180px;
                height: 120px;
                border-radius: var(--ds-radius-md);
                background: var(--ds-color-background);
                border: 1px solid var(--ds-color-border);
                box-shadow: var(${token});
            "></div>
        </article>
    `;
}

export const Sombras = {
    render: () => `
        <main style="
            max-width: 1200px;
            padding: 48px;
            font-family: var(--ds-font-family-body);
            color: var(--ds-color-text-primary);
            background: var(--ds-color-background-muted);
        ">
            <header style="margin-bottom: 48px;">
                <h1 style="
                    margin: 0 0 16px;
                    font-family: var(--ds-font-family-heading);
                    font-size: var(--ds-heading-1-font-size);
                    line-height: var(--ds-heading-1-line-height);
                ">
                    Tokens de Sombras
                </h1>

                <p style="
                    max-width: 760px;
                    margin: 0;
                    color: var(--ds-color-text-secondary);
                    font-size: var(--ds-body-md-font-size);
                    line-height: var(--ds-body-md-line-height);
                ">
                    Esta página documenta as sombras utilizadas para indicar profundidade,
                    hierarquia visual e separação entre superfícies.
                </p>
            </header>

            <section style="
                padding: 0 32px;
                border-radius: var(--ds-radius-md);
                background: var(--ds-color-background);
                border: 1px solid var(--ds-color-border);
            ">
                ${shadows.map(shadowItem).join('')}
            </section>
        </main>
    `,
};
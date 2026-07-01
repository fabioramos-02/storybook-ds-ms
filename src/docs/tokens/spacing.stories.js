export default {
    title: 'Tokens/Espaçamentos',
};

const spacings = [
    ['0', '--ds-spacing-0', '0'],
    ['2', '--ds-spacing-2', '2px'],
    ['4', '--ds-spacing-4', '4px'],
    ['8', '--ds-spacing-8', '8px'],
    ['12', '--ds-spacing-12', '12px'],
    ['16', '--ds-spacing-16', '16px'],
    ['20', '--ds-spacing-20', '20px'],
    ['24', '--ds-spacing-24', '24px'],
    ['32', '--ds-spacing-32', '32px'],
    ['40', '--ds-spacing-40', '40px'],
    ['48', '--ds-spacing-48', '48px'],
    ['56', '--ds-spacing-56', '56px'],
    ['72', '--ds-spacing-72', '72px'],
    ['112', '--ds-spacing-112', '112px'],
];

const semanticSpacings = [
    ['Gap 2XSM', '--ds-gap-2xsm', '4px'],
    ['Gap SM', '--ds-gap-sm', '16px'],
    ['Gap XMD', '--ds-gap-xmd', '24px'],
    ['Padding MD', '--ds-padding-md', '16px'],
];

function spacingItem([name, token, value]) {
    return `
        <article style="
            display: grid;
            grid-template-columns: 160px 220px 120px 1fr;
            align-items: center;
            gap: 24px;
            padding: 20px 0;
            border-bottom: 1px solid var(--ds-color-border);
        ">
            <strong style="
                font-size: var(--ds-font-size-md);
                line-height: var(--ds-line-height-24);
                color: var(--ds-color-text-primary);
            ">
                ${name}
            </strong>

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

            <span style="
                color: var(--ds-color-text-secondary);
                font-size: var(--ds-font-size-sm);
                line-height: var(--ds-line-height-20);
            ">
                ${value}
            </span>

            <div style="
                width: var(${token});
                height: 24px;
                min-width: 1px;
                background: var(--ds-color-primary-600);
                border-radius: var(--ds-radius-2xsm);
            "></div>
        </article>
    `;
}

function section(title, description, items) {
    return `
        <section style="margin-bottom: 56px;">
            <header style="margin-bottom: 24px;">
                <h2 style="
                    margin: 0 0 8px;
                    font-family: var(--ds-font-family-heading);
                    font-size: var(--ds-heading-3-font-size);
                    line-height: var(--ds-heading-3-line-height);
                ">
                    ${title}
                </h2>

                <p style="
                    max-width: 760px;
                    margin: 0;
                    color: var(--ds-color-text-secondary);
                    font-size: var(--ds-body-md-font-size);
                    line-height: var(--ds-body-md-line-height);
                ">
                    ${description}
                </p>
            </header>

            <div>
                ${items.map(spacingItem).join('')}
            </div>
        </section>
    `;
}

export const Espaçamentos = {
    render: () => `
        <main style="
            max-width: 1200px;
            padding: 48px;
            font-family: var(--ds-font-family-body);
            color: var(--ds-color-text-primary);
        ">
            <header style="margin-bottom: 48px;">
                <h1 style="
                    margin: 0 0 16px;
                    font-family: var(--ds-font-family-heading);
                    font-size: var(--ds-heading-1-font-size);
                    line-height: var(--ds-heading-1-line-height);
                ">
                    Tokens de Espaçamento
                </h1>

                <p style="
                    max-width: 760px;
                    margin: 0;
                    color: var(--ds-color-text-secondary);
                    font-size: var(--ds-body-md-font-size);
                    line-height: var(--ds-body-md-line-height);
                ">
                    Esta página documenta os espaçamentos utilizados no Design System MS.
                    Eles devem ser usados para margens, paddings, gaps e organização visual dos componentes.
                </p>
            </header>

            ${section(
                'Escala base',
                'Escala principal de espaçamento usada nos componentes e layouts.',
                spacings
            )}

            ${section(
                'Tokens semânticos',
                'Atalhos com nomes de uso mais específico para gaps e paddings.',
                semanticSpacings
            )}
        </main>
    `,
};
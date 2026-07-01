export default {
    title: 'Tokens/Tipografia',
};

const typography = [
    {
        name: 'Display',
        token: 'Display',
        fontFamily: 'var(--ds-font-family-heading)',
        fontSize: 'var(--ds-display-font-size)',
        lineHeight: 'var(--ds-display-line-height)',
        fontWeight: 'var(--ds-display-font-weight)',
        sample: 'Design System MS',
    },
    {
        name: 'Heading 1',
        token: 'Heading 1',
        fontFamily: 'var(--ds-font-family-heading)',
        fontSize: 'var(--ds-heading-1-font-size)',
        lineHeight: 'var(--ds-heading-1-line-height)',
        fontWeight: 'var(--ds-heading-1-font-weight)',
        sample: 'Título principal da página',
    },
    {
        name: 'Heading 2',
        token: 'Heading 2',
        fontFamily: 'var(--ds-font-family-heading)',
        fontSize: 'var(--ds-heading-2-font-size)',
        lineHeight: 'var(--ds-heading-2-line-height)',
        fontWeight: 'var(--ds-heading-2-font-weight)',
        sample: 'Título de seção',
    },
    {
        name: 'Heading 3',
        token: 'Heading 3',
        fontFamily: 'var(--ds-font-family-heading)',
        fontSize: 'var(--ds-heading-3-font-size)',
        lineHeight: 'var(--ds-heading-3-line-height)',
        fontWeight: 'var(--ds-heading-3-font-weight)',
        sample: 'Subtítulo de conteúdo',
    },
    {
        name: 'Heading 4',
        token: 'Heading 4',
        fontFamily: 'var(--ds-font-family-heading)',
        fontSize: 'var(--ds-heading-4-font-size)',
        lineHeight: 'var(--ds-heading-4-line-height)',
        fontWeight: 'var(--ds-heading-4-font-weight)',
        sample: 'Título de card ou bloco',
    },
    {
        name: 'Heading 5',
        token: 'Heading 5',
        fontFamily: 'var(--ds-font-family-heading)',
        fontSize: 'var(--ds-heading-5-font-size)',
        lineHeight: 'var(--ds-heading-5-line-height)',
        fontWeight: 'var(--ds-heading-5-font-weight)',
        sample: 'Título menor',
    },
    {
        name: 'Body Large',
        token: 'Body Large',
        fontFamily: 'var(--ds-font-family-body)',
        fontSize: 'var(--ds-body-lg-font-size)',
        lineHeight: 'var(--ds-body-lg-line-height)',
        fontWeight: 'var(--ds-body-lg-font-weight)',
        sample: 'Texto de destaque para introduções, chamadas e descrições maiores.',
    },
    {
        name: 'Body Medium',
        token: 'Body Medium',
        fontFamily: 'var(--ds-font-family-body)',
        fontSize: 'var(--ds-body-md-font-size)',
        lineHeight: 'var(--ds-body-md-line-height)',
        fontWeight: 'var(--ds-body-md-font-weight)',
        sample: 'Texto padrão utilizado em parágrafos, descrições e conteúdos principais.',
    },
    {
        name: 'Body Small',
        token: 'Body Small',
        fontFamily: 'var(--ds-font-family-body)',
        fontSize: 'var(--ds-body-sm-font-size)',
        lineHeight: 'var(--ds-body-sm-line-height)',
        fontWeight: 'var(--ds-body-sm-font-weight)',
        sample: 'Texto auxiliar utilizado em legendas, observações e informações secundárias.',
    },
    {
        name: 'Label Medium',
        token: 'Label Medium',
        fontFamily: 'var(--ds-font-family-body)',
        fontSize: 'var(--ds-label-md-font-size)',
        lineHeight: 'var(--ds-label-md-line-height)',
        fontWeight: 'var(--ds-label-md-font-weight)',
        sample: 'Rótulo de botão ou campo',
    },
    {
        name: 'Subheading Small',
        token: 'Subheading Small',
        fontFamily: 'var(--ds-font-family-body)',
        fontSize: 'var(--ds-subheading-sm-font-size)',
        lineHeight: 'var(--ds-subheading-sm-line-height)',
        fontWeight: 'var(--ds-subheading-sm-font-weight)',
        sample: 'Subtítulo pequeno',
    },
];

function typographyItem(item) {
    return `
        <article style="
            display: grid;
            grid-template-columns: 220px 1fr;
            gap: 24px;
            padding: 24px 0;
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
                    ${item.name}
                </h3>

                <p style="
                    margin: 0 0 8px;
                    font-size: var(--ds-font-size-sm);
                    line-height: var(--ds-line-height-20);
                    color: var(--ds-color-text-secondary);
                ">
                    ${item.token}
                </p>

                <code style="
                    display: inline-flex;
                    padding: 4px 8px;
                    border-radius: var(--ds-radius-xsm);
                    background: var(--ds-color-background-muted);
                    font-size: 12px;
                ">
                    ${item.fontSize}
                </code>
            </div>

            <div>
                <p style="
                    margin: 0 0 16px;
                    font-family: ${item.fontFamily};
                    font-size: ${item.fontSize};
                    line-height: ${item.lineHeight};
                    font-weight: ${item.fontWeight};
                    color: var(--ds-color-text-primary);
                ">
                    ${item.sample}
                </p>

                <p style="
                    margin: 0;
                    font-size: var(--ds-font-size-sm);
                    line-height: var(--ds-line-height-20);
                    color: var(--ds-color-text-secondary);
                ">
                    Font family: <strong>${item.fontFamily}</strong> |
                    Font size: <strong>${item.fontSize}</strong> |
                    Line height: <strong>${item.lineHeight}</strong> |
                    Weight: <strong>${item.fontWeight}</strong>
                </p>
            </div>
        </article>
    `;
}

export const Tipografia = {
    render: () => `
        <main style="
            max-width: 1200px;
            padding: 48px;
            font-family: var(--ds-font-family-body);
            color: var(--ds-color-text-primary);
        ">
            <header style="margin-bottom: 40px;">
                <h1 style="
                    margin: 0 0 16px;
                    font-family: var(--ds-font-family-heading);
                    font-size: var(--ds-heading-1-font-size);
                    line-height: var(--ds-heading-1-line-height);
                ">
                    Tokens de Tipografia
                </h1>

                <p style="
                    max-width: 760px;
                    margin: 0;
                    color: var(--ds-color-text-secondary);
                    font-size: var(--ds-body-md-font-size);
                    line-height: var(--ds-body-md-line-height);
                ">
                    Esta página documenta os estilos tipográficos do Design System MS,
                    incluindo títulos, textos de corpo, labels e subtítulos.
                </p>
            </header>

            <section>
                ${typography.map(typographyItem).join('')}
            </section>
        </main>
    `,
};
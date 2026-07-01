export default {
    title: 'Tokens/Radius',
};

const radii = [
    ['None', '--ds-radius-none', '0'],
    ['2XSM', '--ds-radius-2xsm', '1px'],
    ['1XSM', '--ds-radius-1xsm', '2px'],
    ['XSM', '--ds-radius-xsm', '4px'],
    ['SM', '--ds-radius-sm', '8px'],
    ['MD', '--ds-radius-md', '12px'],
    ['LG', '--ds-radius-lg', '16px'],
    ['XLG', '--ds-radius-xlg', '20px'],
    ['BIG', '--ds-radius-big', '32px'],
    ['HUGE', '--ds-radius-huge', '9999px'],
];

function radiusItem([name, token, value]) {
    return `
        <article style="
            display: grid;
            grid-template-columns: 160px 240px 120px 1fr;
            align-items: center;
            gap: 24px;
            padding: 24px 0;
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
                width: 96px;
                height: 64px;
                background: var(--ds-color-primary-600);
                border-radius: var(${token});
            "></div>
        </article>
    `;
}

export const Radius = {
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
                    Tokens de Radius
                </h1>

                <p style="
                    max-width: 760px;
                    margin: 0;
                    color: var(--ds-color-text-secondary);
                    font-size: var(--ds-body-md-font-size);
                    line-height: var(--ds-body-md-line-height);
                ">
                    Esta página documenta os raios de borda utilizados no Design System MS.
                    Eles são aplicados em botões, cards, campos, badges e demais elementos de interface.
                </p>
            </header>

            <section>
                ${radii.map(radiusItem).join('')}
            </section>
        </main>
    `,
};
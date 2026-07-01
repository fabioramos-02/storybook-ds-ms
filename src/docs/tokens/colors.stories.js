export default {
    title: 'Tokens/Cores',
};

const colors = [
    {
        group: 'Brand',
        items: [
            ['Skyline', '--ds-color-brand-skyline', '#004f9f'],
            ['Golden', '--ds-color-brand-golden', '#ffd500'],
        ],
    },
    {
        group: 'Primary',
        items: [
            ['Primary 600', '--ds-color-primary-600', '#004f9f'],
            ['Primary 1000', '--ds-color-primary-1000', '#001020'],
        ],
    },
    {
        group: 'Secondary',
        items: [
            ['Secondary 600', '--ds-color-secondary-600', '#007f31'],
        ],
    },
    {
        group: 'Tertiary',
        items: [
            ['Tertiary 600', '--ds-color-tertiary-600', '#ffd500'],
        ],
    },
    {
        group: 'Complementary',
        items: [
            ['Green 600', '--ds-color-green-600', '#28a44c'],
            ['Blue 600', '--ds-color-blue-600', '#0d99f7'],
            ['Red 600', '--ds-color-red-600', '#da1e28'],
            ['Yellow 600', '--ds-color-yellow-600', '#f9bb00'],
            ['Orange 600', '--ds-color-orange-600', '#ff832b'],
            ['Purple 600', '--ds-color-purple-600', '#7c3ed0'],
        ],
    },
    {
        group: 'Neutral',
        items: [
            ['Neutral 0', '--ds-color-neutral-0', '#ffffff'],
            ['Neutral 100', '--ds-color-neutral-100', '#f9f9f9'],
            ['Neutral 200', '--ds-color-neutral-200', '#d5d5d5'],
            ['Neutral 500', '--ds-color-neutral-500', '#8e8e8d'],
            ['Neutral 800', '--ds-color-neutral-800', '#565654'],
            ['Neutral 900', '--ds-color-neutral-900', '#30302e'],
            ['Neutral 1000', '--ds-color-neutral-1000', '#1d1d1b'],
        ],
    },
    {
        group: 'Semantic',
        items: [
            ['Success', '--ds-color-success', '#28a44c'],
            ['Info', '--ds-color-info', '#0d99f7'],
            ['Danger', '--ds-color-danger', '#da1e28'],
            ['Warning', '--ds-color-warning', '#f9bb00'],
            ['Border', '--ds-color-border', '#d5d5d5'],
            ['Text Primary', '--ds-color-text-primary', '#1d1d1b'],
            ['Text Secondary', '--ds-color-text-secondary', '#565654'],
            ['Text Muted', '--ds-color-text-muted', '#8e8e8d'],
        ],
    },
];

function colorCard([name, token, hex]) {
    return `
        <article style="
            border: 1px solid var(--ds-color-border);
            border-radius: var(--ds-radius-md);
            overflow: hidden;
            background: var(--ds-color-background);
            box-shadow: var(--ds-shadow-card-sm);
        ">
            <div style="
                height: 96px;
                background: var(${token});
                border-bottom: 1px solid var(--ds-color-border);
            "></div>

            <div style="padding: 16px;">
                <h3 style="
                    margin: 0 0 8px;
                    font-size: var(--ds-font-size-md);
                    line-height: var(--ds-line-height-24);
                    font-family: var(--ds-font-family-body);
                ">
                    ${name}
                </h3>

                <p style="
                    margin: 0 0 4px;
                    color: var(--ds-color-text-secondary);
                    font-size: var(--ds-font-size-sm);
                    line-height: var(--ds-line-height-20);
                ">
                    ${token}
                </p>

                <code style="
                    display: inline-flex;
                    padding: 4px 8px;
                    border-radius: var(--ds-radius-xsm);
                    background: var(--ds-color-background-muted);
                    color: var(--ds-color-text-primary);
                    font-size: 12px;
                ">
                    ${hex}
                </code>
            </div>
        </article>
    `;
}

function colorGroup(group) {
    return `
        <section style="margin-bottom: 48px;">
            <h2 style="
                margin: 0 0 24px;
                font-family: var(--ds-font-family-heading);
                font-size: var(--ds-heading-3-font-size);
                line-height: var(--ds-heading-3-line-height);
            ">
                ${group.group}
            </h2>

            <div style="
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
                gap: 24px;
            ">
                ${group.items.map(colorCard).join('')}
            </div>
        </section>
    `;
}

export const Cores = {
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
                    Tokens de Cores
                </h1>

                <p style="
                    max-width: 720px;
                    margin: 0;
                    color: var(--ds-color-text-secondary);
                    font-size: var(--ds-body-md-font-size);
                    line-height: var(--ds-body-md-line-height);
                ">
                    Esta página documenta as cores principais, complementares, neutras
                    e semânticas do Design System MS.
                </p>
            </header>

            ${colors.map(colorGroup).join('')}
        </main>
    `,
};
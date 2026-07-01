export default {
    title: 'Design System MS/Sobre',
};

export const Sobre = {
    render: () => `
        <main style="max-width: 960px; padding: 48px; font-family: var(--ds-font-family-body);">
            <h1>Design System MS</h1>

            <p>
                Este Storybook documenta os componentes, estilos e tokens visuais utilizados
                no Design System MS.
            </p>

            <h2>Objetivo</h2>

            <p>
                Padronizar componentes de interface, cores, tipografia, espaçamentos,
                botões, cards, accordions e demais elementos utilizados em projetos digitais.
            </p>

            <h2>Tokens iniciais</h2>

            <ul>
                <li>Cores</li>
                <li>Tipografia</li>
                <li>Espaçamentos</li>
                <li>Radius</li>
                <li>Sombras</li>
                <li>Grid</li>
            </ul>

            <h2>Componentes iniciais</h2>

            <ul>
                <li>Button</li>
                <li>Card</li>
                <li>Accordion</li>
            </ul>
        </main>
    `,
};
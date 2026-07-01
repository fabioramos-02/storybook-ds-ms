import { CodePreview } from '../../utils/codePreview';
import './dropdown.css';
import { initAllDropdowns } from './dropdown';

export default {
    title: 'Componentes/Dropdown',
};

const dropdownCssDependencies = [
    'src/styles/variables.css',
    'src/styles/typography.css',
    'src/styles/spacing.css',
    'src/styles/radius.css',
    'src/styles/shadows.css',
    'src/components/dropdown/dropdown.css',
];

const dropdownJsDependencies = [
    'src/components/dropdown/dropdown.js',
];

const dropdownMeta = {
    id: 'ds-dropdown',
    status: 'Estável',
    version: '1.0.0',
    category: 'Components',
    updated: '2026-06-25',
};

const dropdownNotes = [
    'O Dropdown depende dos tokens globais do Design System MS.',
    'A classe principal obrigatória é <code>ds-dropdown</code>.',
    'O botão deve usar <code>aria-expanded</code> e <code>aria-controls</code>.',
    'O menu deve usar <code>role="menu"</code>.',
    'Cada item interativo deve usar <code>role="menuitem"</code>.',
    'O componente fecha com a tecla <code>Esc</code>.',
];

const dropdownWhenUse = [
    'Agrupar ações ou links relacionados em uma lista expansível.',
    'Exibir opções secundárias sem ocupar espaço permanente na tela.',
    'Criar menus contextuais simples.',
    'Organizar atalhos, filtros ou opções de navegação compactas.',
];

const dropdownWhenNotUse = [
    'Para navegação principal complexa, nesse caso utilize Menu ou Mega Menu.',
    'Para listas muito longas ou com busca interna.',
    'Para seleção de valores em formulários, nesse caso utilize Select.',
    'Para conteúdo importante que precisa estar sempre visível.',
];

const dropdownVariants = [
    '<code>Default</code> — dropdown padrão com botão e menu.',
    '<code>aria-expanded</code> — indica se o menu está aberto.',
    '<code>aria-controls</code> — relaciona o botão ao menu.',
    '<code>Esc</code> — fecha o menu.',
    '<code>ArrowDown</code> e <code>ArrowUp</code> — navegação entre itens.',
];

function renderList(items) {
    return items.map((item) => `<li>${item}</li>`).join('');
}

function renderDropdownDocumentation() {
    return `
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Dropdown</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para exibir uma lista de ações, links ou opções
                        relacionadas a partir de um botão acionador.
                    </p>
                </div>

                <dl class="ds-component-doc__meta">
                    <div>
                        <dt>Status</dt>
                        <dd>${dropdownMeta.status}</dd>
                    </div>

                    <div>
                        <dt>Versão</dt>
                        <dd>${dropdownMeta.version}</dd>
                    </div>

                    <div>
                        <dt>Atualizado</dt>
                        <dd>${dropdownMeta.updated}</dd>
                    </div>
                </dl>
            </header>

            <section class="ds-component-doc__grid">
                <article class="ds-component-doc__card">
                    <h2>Quando usar</h2>
                    <ul>
                        ${renderList(dropdownWhenUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${renderList(dropdownWhenNotUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${renderList(dropdownVariants)}
                    </ul>
                </article>
            </section>
        </main>
    `;
}

export const Documentacao = {
    name: 'Documentação',
    render: () => renderDropdownDocumentation(),
};

const dropdownHtml = `
<div class="ds-dropdown">
    <button
        class="ds-dropdown__trigger"
        type="button"
        aria-expanded="false"
        aria-controls="dropdown-menu-example"
    >
        Sistemas

        <svg class="ds-dropdown__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 9L12 15L18 9"></path>
        </svg>
    </button>

    <ul class="ds-dropdown__menu" id="dropdown-menu-example" role="menu">
        <li class="ds-dropdown__item" role="none">
            <a class="ds-dropdown__link" href="#" role="menuitem">Sistema 1</a>
        </li>

        <li class="ds-dropdown__item" role="none">
            <a class="ds-dropdown__link" href="#" role="menuitem">Sistema 2</a>
        </li>

        <li class="ds-dropdown__item" role="none">
            <a class="ds-dropdown__link" href="#" role="menuitem">Sistema 3</a>
        </li>
    </ul>
</div>
`;

function initPreview() {
    setTimeout(() => {
        initAllDropdowns();
    }, 0);
}

export const HTMLDefault = {
    name: 'Default',
    render: () => {
        initPreview();

        return CodePreview({
            title: 'Dropdown Default - HTML',
            description: 'Exemplo de HTML para replicar o componente Dropdown.',
            meta: dropdownMeta,
            preview: dropdownHtml,
            code: dropdownHtml,
            language: 'markup',
            cssDependencies: dropdownCssDependencies,
            jsDependencies: dropdownJsDependencies,
            notes: dropdownNotes,
        });
    },
};
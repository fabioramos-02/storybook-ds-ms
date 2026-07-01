import { CodePreview } from '../../utils/codePreview';
import './search.css';

export default {
    title: 'Componentes/Search',
};

const searchCssDependencies = [
    'src/styles/variables.css',
    'src/styles/typography.css',
    'src/styles/spacing.css',
    'src/styles/radius.css',
    'src/components/search/search.css',
];

const searchMeta = {
    id: 'ds-search',
    status: 'Estável',
    version: '1.0.0',
    category: 'Components',
    updated: '2026-06-25',
};

const searchJsDependencies = [
    'Nenhum JavaScript obrigatório para uso visual do Search.',
];

const searchNotes = [
    'O Search depende dos tokens globais do Design System MS.',
    'A classe principal obrigatória é <code>ds-search</code>.',
    'O campo de busca deve usar a classe <code>ds-search__input</code>.',
    'O botão da lupa deve usar a classe <code>ds-search__button</code>.',
    'Use <code>role="search"</code> no formulário para melhorar a acessibilidade.',
    'Use <code>aria-label</code> no botão para indicar a ação de pesquisa.',
];

const searchWhenUse = [
    'Permitir que o usuário pesquise conteúdos dentro do site ou sistema.',
    'Buscar notícias, serviços, páginas ou informações institucionais.',
    'Criar campo de busca global ou busca contextual em uma seção.',
    'Quando o usuário precisa localizar conteúdo por palavra-chave.',
];

const searchWhenNotUse = [
    'Para filtros estruturados com opções fixas, nesse caso utilize Select, Checkbox ou Radio.',
    'Para entrada comum de texto em formulários, nesse caso utilize Input.',
    'Para navegação entre páginas, nesse caso utilize Link ou Breadcrumb.',
    'Para ações sem consulta textual.',
];

const searchVariants = [
    '<code>Default</code> — campo de busca padrão.',
    '<code>Focus</code> — estado visual quando o campo está em foco.',
    '<code>Com valor</code> — campo preenchido.',
    '<code>ds-search__input</code> — campo de busca.',
    '<code>ds-search__button</code> — botão de envio da busca.',
    '<code>ds-search__icon</code> — ícone de lupa.',
];

function renderList(items) {
    return items.map((item) => `<li>${item}</li>`).join('');
}

function renderSearchDocumentation() {
    return `
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Search</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para permitir a busca de conteúdos,
                        serviços, páginas ou informações por palavra-chave.
                    </p>
                </div>

                <dl class="ds-component-doc__meta">
                    <div>
                        <dt>Status</dt>
                        <dd>${searchMeta.status}</dd>
                    </div>

                    <div>
                        <dt>Versão</dt>
                        <dd>${searchMeta.version}</dd>
                    </div>

                    <div>
                        <dt>Atualizado</dt>
                        <dd>${searchMeta.updated}</dd>
                    </div>
                </dl>
            </header>

            <section class="ds-component-doc__grid">
                <article class="ds-component-doc__card">
                    <h2>Quando usar</h2>
                    <ul>
                        ${renderList(searchWhenUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${renderList(searchWhenNotUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${renderList(searchVariants)}
                    </ul>
                </article>
            </section>
        </main>
    `;
}

export const Documentacao = {
    name: 'Documentação',
    render: () => renderSearchDocumentation(),
};

const searchDefaultHtml = `
<form class="ds-search" role="search" action="#" method="get">
    <input
        class="ds-search__input"
        type="search"
        name="s"
        placeholder="Pesquisar..."
        aria-label="Pesquisar"
    >

    <button class="ds-search__button" type="submit" aria-label="Pesquisar">
        <svg
            class="ds-search__icon"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
        >
            <circle cx="11" cy="11" r="7"></circle>
            <path d="M16.5 16.5L21 21"></path>
        </svg>
    </button>
</form>
`;

export const HTMLDefault = {
    name: 'Default',
    render: () => CodePreview({
        title: 'Search Default - HTML',
        description: 'Exemplo de HTML para replicar o campo de busca padrão.',
        meta: searchMeta,
        preview: searchDefaultHtml,
        code: searchDefaultHtml,
        language: 'markup',
        cssDependencies: searchCssDependencies,
        jsDependencies: searchJsDependencies,
        notes: searchNotes,
    }),
};

const searchFocusHtml = `
<form class="ds-search is-focused" role="search" action="#" method="get">
    <input
        class="ds-search__input"
        type="search"
        name="s"
        placeholder="Pesquisar..."
        aria-label="Pesquisar"
    >

    <button class="ds-search__button" type="submit" aria-label="Pesquisar">
        <svg
            class="ds-search__icon"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
        >
            <circle cx="11" cy="11" r="7"></circle>
            <path d="M16.5 16.5L21 21"></path>
        </svg>
    </button>
</form>
`;

export const HTMLFocus = {
    name: 'Focus',
    render: () => CodePreview({
        title: 'Search Focus - HTML',
        description: 'Exemplo de HTML para replicar o campo de busca em estado de foco.',
        meta: searchMeta,
        preview: searchFocusHtml,
        code: searchFocusHtml,
        language: 'markup',
        cssDependencies: searchCssDependencies,
        jsDependencies: searchJsDependencies,
        notes: searchNotes,
    }),
};

const searchWithValueHtml = `
<form class="ds-search" role="search" action="#" method="get">
    <input
        class="ds-search__input"
        type="search"
        name="s"
        value="Mato Grosso do Sul"
        placeholder="Pesquisar..."
        aria-label="Pesquisar"
    >

    <button class="ds-search__button" type="submit" aria-label="Pesquisar">
        <svg
            class="ds-search__icon"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            focusable="false"
        >
            <circle cx="11" cy="11" r="7"></circle>
            <path d="M16.5 16.5L21 21"></path>
        </svg>
    </button>
</form>
`;

export const HTMLComValor = {
    name: 'Com valor',
    render: () => CodePreview({
        title: 'Search com Valor - HTML',
        description: 'Exemplo de HTML para replicar o campo de busca preenchido.',
        meta: searchMeta,
        preview: searchWithValueHtml,
        code: searchWithValueHtml,
        language: 'markup',
        cssDependencies: searchCssDependencies,
        jsDependencies: searchJsDependencies,
        notes: searchNotes,
    }),
};

const searchAllHtml = `
<div style="display: flex; flex-direction: column; gap: 32px; max-width: 560px;">
    ${searchDefaultHtml}
    ${searchFocusHtml}
    ${searchWithValueHtml}
</div>
`;

export const HTMLSearch = {
    name: 'All',
    render: () => CodePreview({
        title: 'Search - HTML',
        description: 'Exemplo de HTML para replicar todas as variações do componente Search em uma página.',
        meta: searchMeta,
        preview: searchAllHtml,
        code: searchAllHtml,
        language: 'markup',
        cssDependencies: searchCssDependencies,
        jsDependencies: searchJsDependencies,
        notes: searchNotes,
    }),
};
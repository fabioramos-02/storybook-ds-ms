import brasaoGoverno from './brasao-governo.png';
import { CodePreview } from '../../utils/codePreview';
import { initHeader } from './header';
import '../search/search.css';
import './header.css';

export default {
    title: 'Componentes/Header',
};

const headerCssDependencies = [
    'src/styles/variables.css',
    'src/styles/typography.css',
    'src/styles/spacing.css',
    'src/styles/radius.css',
    'src/components/search/search.css',
    'src/components/header/header.css',
];

const headerJsDependencies = [
    'src/components/header/header.js',
];

const logoGovernoHtml = `
<span class="ds-header__logo">
    <img src="${brasaoGoverno}" alt="Governo do Estado de Mato Grosso do Sul">
</span>

<span class="ds-header__divider" aria-hidden="true"></span>
`;

const headerMeta = {
    id: 'ds-header',
    status: 'Em validação',
    version: '1.0.0',
    category: 'Components',
    updated: '2026-06-29',
};

const headerNotes = [
    'O Header depende dos tokens globais do Design System MS.',
    'A classe base obrigatória é <code>ds-header</code>.',
    'Use <code>ds-header--governo</code>, <code>ds-header--secretaria</code> ou <code>ds-header--subsecretaria</code> apenas para identificar o tipo institucional.',
    'A cor da barra principal permanece sempre <code>--ds-color-primary-600</code>.',
    'Durante o período eleitoral, o Header não deve exibir links de redes sociais.',
    'O JavaScript é necessário apenas para abrir e fechar o menu no mobile.',
    'A busca reutiliza o componente <code>Search</code> com as classes <code>ds-search</code>, <code>ds-search__input</code> e <code>ds-search__button</code>.',
];

const headerWhenUse = [
    'Identificar o site institucional do Governo, secretaria, órgão ou subsecretaria.',
    'Exibir links principais de navegação.',
    'Disponibilizar acesso à busca do site.',
    'Organizar links de acessibilidade, transparência e ouvidoria.',
];

const headerWhenNotUse = [
    'Dentro do conteúdo principal da página.',
    'Como título interno de seções, nesse caso utilize Page Header ou Section Title.',
    'Para menus laterais ou navegação contextual.',
];

const headerVariants = [
    '<code>ds-header--governo</code> — estrutura textual para páginas do Governo do Estado.',
    '<code>ds-header--secretaria</code> — estrutura textual para secretarias e órgãos.',
    '<code>ds-header--subsecretaria</code> — estrutura textual para subsecretarias ou estruturas vinculadas.',
];

const searchHeaderHtml = `
<form class="ds-search ds-header__search" id="busca" role="search" action="#" method="get">
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

function renderList(items) {
    return items.map((item) => `<li>${item}</li>`).join('');
}

function runHeaderScript() {
    setTimeout(() => {
        initHeader();
    }, 0);
}

function renderHeaderDocumentation() {
    return `
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Header</h1>

                    <p class="ds-component-doc__description">
                        Componente de topo utilizado para identificar o portal institucional, organizar acessos rápidos,
                        exibir navegação principal e disponibilizar busca.
                    </p>
                </div>

                <dl class="ds-component-doc__meta">
                    <div>
                        <dt>Status</dt>
                        <dd>${headerMeta.status}</dd>
                    </div>

                    <div>
                        <dt>Versão</dt>
                        <dd>${headerMeta.version}</dd>
                    </div>

                    <div>
                        <dt>Atualizado</dt>
                        <dd>${headerMeta.updated}</dd>
                    </div>
                </dl>
            </header>

            <section class="ds-component-doc__grid">
                <article class="ds-component-doc__card">
                    <h2>Quando usar</h2>
                    <ul>
                        ${renderList(headerWhenUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${renderList(headerWhenNotUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${renderList(headerVariants)}
                    </ul>
                </article>
            </section>

            <section class="ds-component-doc__content ds-component-doc__content--full">
                <article class="ds-component-doc__card">
                    <h2>Intro</h2>
                    <p>
                        O Header é a camada superior padronizada dos portais e sites do Governo do Estado de Mato Grosso do Sul.
                        Seu propósito é garantir identificação institucional imediata, organizar o acesso a serviços e informações
                        e manter consistência visual e funcional entre secretarias e órgãos.
                    </p>
                    <p>
                        O componente deve ser flexível para diferentes contextos, como sites institucionais, serviços digitais
                        e portais temáticos, mantendo acessibilidade, legibilidade e hierarquia de informação.
                    </p>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Anatomia da estrutura do Header</h2>

                    <h3>1 Área de acessibilidade</h3>
                    <p>
                        Área destinada a links e recursos de acessibilidade dos sites e serviços.
                    </p>

                    <h3>1.1 Área de acessibilidade</h3>
                    <p>
                        Faixa superior do Header destinada a atalhos rápidos e materiais de suporte. Deve ser visível,
                        previsível e consistente entre os sites do Estado, permitindo acesso rápido ao conteúdo,
                        navegação e busca.
                    </p>

                    <h3>1.2 Links úteis</h3>
                    <p>
                        Área destinada a atalhos institucionais, como Ouvidoria, Transparência e Portal MS.
                    </p>

                    <h3>2 Faixa azul institucional</h3>
                    <p>
                        Área responsável por imprimir a identidade do Governo do Estado e dos órgãos.
                    </p>

                    <h3>2.1 Identificação institucional</h3>
                    <p>
                        Espaço destinado a padronizar o uso do brasão, logotipo, sigla da secretaria e nome por extenso,
                        incluindo possíveis variações para subsecretarias.
                    </p>

                    <h3>2.2 Redes sociais</h3>
                    <p>
                        Área prevista para links de redes sociais. Durante o período eleitoral, esses links não devem ser exibidos.
                    </p>

                    <h3>3 Menu e busca</h3>
                    <p>
                        Área destinada ao menu principal e ao campo de busca dos sites.
                    </p>

                    <h3>3.1 Menu</h3>
                    <p>
                        O menu organiza categorias e conteúdos por assunto para facilitar a localização das informações.
                    </p>

                    <h3>3.2 Busca</h3>
                    <p>
                        A busca deve seguir o padrão visual do componente Search. Ao ser acionada, deve encaminhar o usuário
                        para uma página específica de resultados.
                    </p>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Comparação rápida das variações do Header</h2>

                    <h3>Portal do Governo do Estado</h3>
                    <p>
                        Variação usada para páginas institucionais principais do Governo do Estado.
                    </p>

                    <h3>Secretarias e órgãos</h3>
                    <p>
                        Variação usada para secretarias e órgãos, priorizando a sigla e o nome institucional específico.
                    </p>

                    <h3>Subsecretarias</h3>
                    <p>
                        Variação aplicada a subsecretarias ou estruturas vinculadas, mantendo a identidade institucional
                        e a hierarquia com o Governo do Estado.
                    </p>
                </article>

                <article class="ds-component-doc__card">
                    <h2>O que não deve ser feito</h2>
                    <p>
                        Não aplique a sigla da secretaria diretamente na faixa inferior junto ao menu de navegação.
                        Essa solução comprime as informações, prejudica a legibilidade e dificulta a leitura rápida pelo usuário.
                    </p>
                </article>
            </section>
        </main>
    `;
}

const headerGovernoHtml = `
<header class="ds-header ds-header--governo">
    <div class="ds-header__topbar">
        <div class="ds-header__container ds-header__topbar-content">
            <nav class="ds-header__accessibility" aria-label="Atalhos de navegação">
                <a href="#conteudo">Ir para conteúdo</a>
                <a href="#menu">Ir para navegação</a>
                <a href="#busca">Ir para busca</a>
            </nav>

            <nav class="ds-header__links" aria-label="Links úteis">
                <a href="#">Ouvidoria</a>
                <a href="#">Transparência</a>
                <a href="#">Portal MS</a>
            </nav>
        </div>
    </div>

    <div class="ds-header__brand">
        <div class="ds-header__container ds-header__brand-content">
            <a class="ds-header__identity" href="#" aria-label="Página inicial">
                ${logoGovernoHtml}

                <span class="ds-header__title">
                    <strong>Governo do Estado</strong>
                    <span>Mato Grosso do Sul</span>
                </span>
            </a>

            <button class="ds-header__menu-button" type="button" aria-expanded="false" aria-controls="menu-governo">
                Menu
            </button>
        </div>
    </div>

    <div class="ds-header__navigation" id="menu-governo">
        <div class="ds-header__container ds-header__navigation-content">
            <nav class="ds-header__menu" id="menu" aria-label="Menu principal">
                <a href="#">Institucional</a>
                <a href="#">Serviços</a>
                <a href="#">Notícias</a>
                <a href="#">Contato</a>
            </nav>

            ${searchHeaderHtml}
        </div>
    </div>
</header>
`;

const headerSecretariaHtml = `
<header class="ds-header ds-header--secretaria">
    <div class="ds-header__topbar">
        <div class="ds-header__container ds-header__topbar-content">
            <nav class="ds-header__accessibility" aria-label="Atalhos de navegação">
                <a href="#conteudo">Ir para conteúdo</a>
                <a href="#menu">Ir para navegação</a>
                <a href="#busca">Ir para busca</a>
            </nav>

            <nav class="ds-header__links" aria-label="Links úteis">
                <a href="#">Ouvidoria</a>
                <a href="#">Transparência</a>
                <a href="#">Portal MS</a>
            </nav>
        </div>
    </div>

    <div class="ds-header__brand">
        <div class="ds-header__container ds-header__brand-content">
            <a class="ds-header__identity" href="#" aria-label="Página inicial">
                ${logoGovernoHtml}

                <span class="ds-header__title">
                    <strong>SETDIG</strong>
                    <span>Secretaria-Executiva de Transformação Digital</span>
                </span>
            </a>

            <button class="ds-header__menu-button" type="button" aria-expanded="false" aria-controls="menu-secretaria">
                Menu
            </button>
        </div>
    </div>

    <div class="ds-header__navigation" id="menu-secretaria">
        <div class="ds-header__container ds-header__navigation-content">
            <nav class="ds-header__menu" id="menu" aria-label="Menu principal">
                <a href="#">A Secretaria</a>
                <a href="#">Serviços</a>
                <a href="#">Notícias</a>
                <a href="#">Contato</a>
            </nav>

            ${searchHeaderHtml}
        </div>
    </div>
</header>
`;

const headerSubsecretariaHtml = `
<header class="ds-header ds-header--subsecretaria">
    <div class="ds-header__topbar">
        <div class="ds-header__container ds-header__topbar-content">
            <nav class="ds-header__accessibility" aria-label="Atalhos de navegação">
                <a href="#conteudo">Ir para conteúdo</a>
                <a href="#menu">Ir para navegação</a>
                <a href="#busca">Ir para busca</a>
            </nav>

            <nav class="ds-header__links" aria-label="Links úteis">
                <a href="#">Ouvidoria</a>
                <a href="#">Transparência</a>
                <a href="#">Portal MS</a>
            </nav>
        </div>
    </div>

    <div class="ds-header__brand">
        <div class="ds-header__container ds-header__brand-content">
            <a class="ds-header__identity" href="#" aria-label="Página inicial">
                ${logoGovernoHtml}

                <span class="ds-header__title">
                    <strong>Subsecretaria</strong>
                    <span>Nome da subsecretaria ou órgão vinculado</span>
                </span>
            </a>

            <button class="ds-header__menu-button" type="button" aria-expanded="false" aria-controls="menu-subsecretaria">
                Menu
            </button>
        </div>
    </div>

    <div class="ds-header__navigation" id="menu-subsecretaria">
        <div class="ds-header__container ds-header__navigation-content">
            <nav class="ds-header__menu" id="menu" aria-label="Menu principal">
                <a href="#">Institucional</a>
                <a href="#">Programas</a>
                <a href="#">Publicações</a>
                <a href="#">Contato</a>
            </nav>

            ${searchHeaderHtml}
        </div>
    </div>
</header>
`;

const headerSemBuscaHtml = `
<header class="ds-header ds-header--secretaria">
    <div class="ds-header__topbar">
        <div class="ds-header__container ds-header__topbar-content">
            <nav class="ds-header__accessibility" aria-label="Atalhos de navegação">
                <a href="#conteudo">Ir para conteúdo</a>
                <a href="#menu">Ir para navegação</a>
            </nav>

            <nav class="ds-header__links" aria-label="Links úteis">
                <a href="#">Ouvidoria</a>
                <a href="#">Transparência</a>
                <a href="#">Portal MS</a>
            </nav>
        </div>
    </div>

    <div class="ds-header__brand">
        <div class="ds-header__container ds-header__brand-content">
            <a class="ds-header__identity" href="#" aria-label="Página inicial">
                ${logoGovernoHtml}

                <span class="ds-header__title">
                    <strong>SETDIG</strong>
                    <span>Secretaria-Executiva de Transformação Digital</span>
                </span>
            </a>

            <button class="ds-header__menu-button" type="button" aria-expanded="false" aria-controls="menu-sem-busca">
                Menu
            </button>
        </div>
    </div>

    <div class="ds-header__navigation" id="menu-sem-busca">
        <div class="ds-header__container ds-header__navigation-content">
            <nav class="ds-header__menu" id="menu" aria-label="Menu principal">
                <a href="#">A Secretaria</a>
                <a href="#">Serviços</a>
                <a href="#">Notícias</a>
                <a href="#">Contato</a>
            </nav>
        </div>
    </div>
</header>
`;

const allHeadersHtml = `
<div style="display: grid; gap: 32px;">
    ${headerGovernoHtml}
    ${headerSecretariaHtml}
    ${headerSubsecretariaHtml}
</div>
`;

export const Documentacao = {
    name: 'Documentação',
    render: () => renderHeaderDocumentation(),
};

export const HTMLHeaders = {
    name: 'All',
    render: () => {
        runHeaderScript();

        return CodePreview({
            title: 'Header - HTML',
            description: 'Exemplo de HTML para replicar todas as variações principais do componente Header.',
            meta: headerMeta,
            preview: allHeadersHtml,
            code: allHeadersHtml,
            language: 'markup',
            cssDependencies: headerCssDependencies,
            jsDependencies: headerJsDependencies,
            notes: headerNotes,
        });
    },
};

export const HTMLGoverno = {
    name: 'Governo',
    render: () => {
        runHeaderScript();

        return CodePreview({
            title: 'Header Governo - HTML',
            description: 'Exemplo de Header para páginas do Governo do Estado.',
            meta: headerMeta,
            preview: headerGovernoHtml,
            code: headerGovernoHtml,
            language: 'markup',
            cssDependencies: headerCssDependencies,
            jsDependencies: headerJsDependencies,
            notes: headerNotes,
        });
    },
};

export const HTMLSecretaria = {
    name: 'Secretaria',
    render: () => {
        runHeaderScript();

        return CodePreview({
            title: 'Header Secretaria - HTML',
            description: 'Exemplo de Header para secretarias e órgãos.',
            meta: headerMeta,
            preview: headerSecretariaHtml,
            code: headerSecretariaHtml,
            language: 'markup',
            cssDependencies: headerCssDependencies,
            jsDependencies: headerJsDependencies,
            notes: headerNotes,
        });
    },
};

export const HTMLSubsecretaria = {
    name: 'Subsecretaria',
    render: () => {
        runHeaderScript();

        return CodePreview({
            title: 'Header Subsecretaria - HTML',
            description: 'Exemplo de Header para subsecretarias ou estruturas vinculadas.',
            meta: headerMeta,
            preview: headerSubsecretariaHtml,
            code: headerSubsecretariaHtml,
            language: 'markup',
            cssDependencies: headerCssDependencies,
            jsDependencies: headerJsDependencies,
            notes: headerNotes,
        });
    },
};

export const HTMLSemBusca = {
    name: 'Sem Busca',
    render: () => {
        runHeaderScript();

        return CodePreview({
            title: 'Header sem Busca - HTML',
            description: 'Exemplo de Header sem formulário de busca.',
            meta: headerMeta,
            preview: headerSemBuscaHtml,
            code: headerSemBuscaHtml,
            language: 'markup',
            cssDependencies: headerCssDependencies,
            jsDependencies: headerJsDependencies,
            notes: headerNotes,
        });
    },
};
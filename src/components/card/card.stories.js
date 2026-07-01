import { CodePreview } from '../../utils/codePreview';
import './card.css';

export default {
    title: 'Componentes/Card',
};

const cardCssDependencies = [
    'src/styles/variables.css',
    'src/styles/typography.css',
    'src/styles/spacing.css',
    'src/styles/radius.css',
    'src/styles/shadows.css',
    'src/components/card/card.css',
];

const cardMeta = {
    id: 'ds-card',
    status: 'Estável',
    version: '1.0.0',
    category: 'Components',
    updated: '2026-06-25',
};

const cardJsDependencies = [
    'Nenhum JavaScript obrigatório para uso visual do Card.',
];

const cardNotes = [
    'O Card depende dos tokens globais do Design System MS.',
    'A classe base obrigatória é <code>ds-card</code>.',
    'Para cards com imagem, use <code>ds-card__image-wrapper</code> e <code>ds-card__image</code>.',
    'Para conteúdo interno, use <code>ds-card__content</code>, <code>ds-card__eyebrow</code>, <code>ds-card__title</code> e <code>ds-card__description</code>.',
    'Para ações, use <code>ds-card__actions</code> e <code>ds-card__link</code>.',
    'As variações usam classes modificadoras como <code>ds-card--horizontal</code>, <code>ds-card--featured</code> e <code>ds-card--compact</code>.',
];

const cardWhenUse = [
    'Agrupar informações relacionadas em uma única área visual.',
    'Exibir chamadas para serviços, notícias, programas ou conteúdos institucionais.',
    'Destacar conteúdos com título, descrição, imagem e ação.',
    'Organizar listas de conteúdos em grades ou áreas de destaque.',
];

const cardWhenNotUse = [
    'Para ações simples, nesse caso utilize Button.',
    'Para mensagens temporárias ou feedback de sistema, nesse caso utilize Alert ou Toast.',
    'Para grandes blocos de texto corrido.',
    'Para tabelas, listas extensas ou dados estruturados.',
];

const cardVariants = [
    '<code>ds-card</code> — card padrão.',
    '<code>ds-card--horizontal</code> — card com imagem lateral.',
    '<code>ds-card--featured</code> — card de destaque.',
    '<code>ds-card--compact</code> — card compacto para áreas menores.',
    '<code>ds-card__image-wrapper</code> e <code>ds-card__image</code> — estrutura para cards com imagem.',
];

function renderList(items) {
    return items.map((item) => `<li>${item}</li>`).join('');
}

function renderCardDocumentation() {
    return `
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Card</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para agrupar conteúdos relacionados, destacar informações
                        e apresentar chamadas com título, descrição, imagem e ação.
                    </p>
                </div>

                <dl class="ds-component-doc__meta">
                    <div>
                        <dt>Status</dt>
                        <dd>${cardMeta.status}</dd>
                    </div>

                    <div>
                        <dt>Versão</dt>
                        <dd>${cardMeta.version}</dd>
                    </div>

                    <div>
                        <dt>Atualizado</dt>
                        <dd>${cardMeta.updated}</dd>
                    </div>
                </dl>
            </header>

            <section class="ds-component-doc__grid">
                <article class="ds-component-doc__card">
                    <h2>Quando usar</h2>
                    <ul>
                        ${renderList(cardWhenUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${renderList(cardWhenNotUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${renderList(cardVariants)}
                    </ul>
                </article>
            </section>
        </main>
    `;
}

export const Documentacao = {
    name: 'Documentação',
    render: () => renderCardDocumentation(),
};

const allCardsHtml = `
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; align-items: start;">
    <article class="ds-card">
        <div class="ds-card__content">
            <p class="ds-card__eyebrow">Institucional</p>

            <h3 class="ds-card__title">Serviço em destaque</h3>

            <p class="ds-card__description">
                Descrição curta para apresentar o conteúdo do card dentro do portal.
            </p>

            <div class="ds-card__actions">
                <a
                    class="ds-card__link"
                    href="/?path=/story/components-card--html-default"
                    target="_top"
                >
                    Saiba mais
                </a>
            </div>
        </div>
    </article>

    <article class="ds-card">
        <div class="ds-card__image-wrapper">
            <img class="ds-card__image" src="https://placehold.co/768x432" alt="">
        </div>

        <div class="ds-card__content">
            <p class="ds-card__eyebrow">Programa</p>

            <h3 class="ds-card__title">Programa institucional</h3>

            <p class="ds-card__description">
                Card com imagem, título, descrição e link de acesso para uma página interna.
            </p>

            <div class="ds-card__actions">
                <a
                    class="ds-card__link"
                    href="/?path=/story/components-card--html-with-image"
                    target="_top"
                >
                    Acessar
                </a>
            </div>
        </div>
    </article>

    <article class="ds-card ds-card--featured">
        <div class="ds-card__image-wrapper">
            <img class="ds-card__image" src="https://placehold.co/768x432" alt="">
        </div>

        <div class="ds-card__content">
            <p class="ds-card__eyebrow">Destaque</p>

            <h3 class="ds-card__title">Card em destaque</h3>

            <p class="ds-card__description">
                Variação usada para destacar informações prioritárias dentro de uma página.
            </p>

            <div class="ds-card__actions">
                <a
                    class="ds-card__link"
                    href="/?path=/story/components-card--html-featured"
                    target="_top"
                >
                    Ver detalhes
                </a>
            </div>
        </div>
    </article>

    <article class="ds-card ds-card--compact">
        <div class="ds-card__content">
            <p class="ds-card__eyebrow">Serviço</p>

            <h3 class="ds-card__title">Card compacto</h3>

            <p class="ds-card__description">
                Variação menor para listas ou áreas com pouco espaço.
            </p>

            <div class="ds-card__actions">
                <a
                    class="ds-card__link"
                    href="/?path=/story/components-card--html-compact"
                    target="_top"
                >
                    Acessar
                </a>
            </div>
        </div>
    </article>
</div>

<div style="margin-top: 24px;">
    <article class="ds-card ds-card--horizontal">
        <div class="ds-card__image-wrapper">
            <img class="ds-card__image" src="https://placehold.co/768x432" alt="">
        </div>

        <div class="ds-card__content">
            <p class="ds-card__eyebrow">Notícia</p>

            <h3 class="ds-card__title">Governo foca na boa aplicação dos recursos públicos</h3>

            <p class="ds-card__description">
                Modelo de card horizontal para listas, destaques ou chamadas com imagem lateral.
            </p>

            <div class="ds-card__actions">
                <a
                    class="ds-card__link"
                    href="/?path=/story/components-card--html-horizontal"
                    target="_top"
                >
                    Ler notícia
                </a>
            </div>
        </div>
    </article>
</div>
`;

export const HTMLCards = {
    name: 'All',
    render: () => CodePreview({
        title: 'Card - HTML',
        description: 'Exemplo visual com todas as variações do componente Card. Clique no link de um card para abrir sua documentação específica.',
        meta: cardMeta,
        preview: allCardsHtml,
        cssDependencies: cardCssDependencies,
        jsDependencies: cardJsDependencies,
        notes: cardNotes,
    }),
};

const defaultHtml = `
<article class="ds-card">
    <div class="ds-card__content">
        <p class="ds-card__eyebrow">Institucional</p>

        <h3 class="ds-card__title">Serviço em destaque</h3>

        <p class="ds-card__description">
            Descrição curta para apresentar o conteúdo do card dentro do portal.
        </p>

        <div class="ds-card__actions">
            <a class="ds-card__link" href="#">
                Saiba mais
            </a>
        </div>
    </div>
</article>
`;

export const HTMLDefault = {
    name: 'Default',
    render: () => CodePreview({
        title: 'Card Default - HTML',
        description: 'Exemplo de HTML para replicar o card padrão sem imagem.',
        meta: cardMeta,
        preview: defaultHtml,
        code: defaultHtml,
        language: 'markup',
        cssDependencies: cardCssDependencies,
        jsDependencies: cardJsDependencies,
        notes: cardNotes,
    }),
};

const withImageHtml = `
<article class="ds-card">
    <div class="ds-card__image-wrapper">
        <img class="ds-card__image" src="https://placehold.co/768x432" alt="">
    </div>

    <div class="ds-card__content">
        <p class="ds-card__eyebrow">Programa</p>

        <h3 class="ds-card__title">Programa institucional</h3>

        <p class="ds-card__description">
            Card com imagem, título, descrição e link de acesso para uma página interna.
        </p>

        <div class="ds-card__actions">
            <a class="ds-card__link" href="#">
                Acessar
            </a>
        </div>
    </div>
</article>
`;

export const HTMLWithImage = {
    name: 'With Image',
    render: () => CodePreview({
        title: 'Card com imagem - HTML',
        description: 'Exemplo de HTML para replicar o card com imagem.',
        meta: cardMeta,
        preview: withImageHtml,
        code: withImageHtml,
        language: 'markup',
        cssDependencies: cardCssDependencies,
        jsDependencies: cardJsDependencies,
        notes: cardNotes,
    }),
};

const horizontalHtml = `
<article class="ds-card ds-card--horizontal">
    <div class="ds-card__image-wrapper">
        <img class="ds-card__image" src="https://placehold.co/768x432" alt="">
    </div>

    <div class="ds-card__content">
        <p class="ds-card__eyebrow">Notícia</p>

        <h3 class="ds-card__title">
            Governo foca na boa aplicação dos recursos públicos
        </h3>

        <p class="ds-card__description">
            Modelo de card horizontal para listas, destaques ou chamadas com imagem lateral.
        </p>

        <div class="ds-card__actions">
            <a class="ds-card__link" href="#">
                Ler notícia
            </a>
        </div>
    </div>
</article>
`;

export const HTMLHorizontal = {
    name: 'Horizontal',
    render: () => CodePreview({
        title: 'Card Horizontal - HTML',
        description: 'Exemplo de HTML para replicar o card horizontal.',
        meta: cardMeta,
        preview: horizontalHtml,
        code: horizontalHtml,
        language: 'markup',
        cssDependencies: cardCssDependencies,
        jsDependencies: cardJsDependencies,
        notes: cardNotes,
    }),
};

const featuredHtml = `
<article class="ds-card ds-card--featured">
    <div class="ds-card__image-wrapper">
        <img class="ds-card__image" src="https://placehold.co/768x432" alt="">
    </div>

    <div class="ds-card__content">
        <p class="ds-card__eyebrow">Destaque</p>

        <h3 class="ds-card__title">Card em destaque</h3>

        <p class="ds-card__description">
            Variação usada para destacar informações prioritárias dentro de uma página.
        </p>

        <div class="ds-card__actions">
            <a class="ds-card__link" href="#">
                Ver detalhes
            </a>
        </div>
    </div>
</article>
`;

export const HTMLFeatured = {
    name: 'Featured',
    render: () => CodePreview({
        title: 'Card Featured - HTML',
        description: 'Exemplo de HTML para replicar o card em destaque.',
        meta: cardMeta,
        preview: featuredHtml,
        code: featuredHtml,
        language: 'markup',
        cssDependencies: cardCssDependencies,
        jsDependencies: cardJsDependencies,
        notes: cardNotes,
    }),
};

const compactHtml = `
<article class="ds-card ds-card--compact">
    <div class="ds-card__content">
        <p class="ds-card__eyebrow">Serviço</p>

        <h3 class="ds-card__title">Card compacto</h3>

        <p class="ds-card__description">
            Variação menor para listas ou áreas com pouco espaço.
        </p>

        <div class="ds-card__actions">
            <a class="ds-card__link" href="#">
                Acessar
            </a>
        </div>
    </div>
</article>
`;

export const HTMLCompact = {
    name: 'Compact',
    render: () => CodePreview({
        title: 'Card Compact - HTML',
        description: 'Exemplo de HTML para replicar o card compacto.',
        meta: cardMeta,
        preview: compactHtml,
        code: compactHtml,
        language: 'markup',
        cssDependencies: cardCssDependencies,
        jsDependencies: cardJsDependencies,
        notes: cardNotes,
    }),
};
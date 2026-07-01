import { CodePreview } from '../../utils/codePreview';
import './carousel.css';
import { initAllCarousels } from './carousel';

export default {
    title: 'Componentes/Carousel',
};

const carouselCssDependencies = [
    'src/styles/variables.css',
    'src/styles/typography.css',
    'src/styles/spacing.css',
    'src/styles/radius.css',
    'src/styles/shadows.css',
    'src/components/carousel/carousel.css',
];

const carouselJsDependencies = [
    'src/components/carousel/carousel.js',
];

const carouselMeta = {
    id: 'ds-carousel',
    status: 'Estável',
    version: '1.0.0',
    category: 'Components',
    updated: '2026-06-25',
};

const carouselNotes = [
    'O Carousel depende dos tokens globais do Design System MS.',
    'A classe principal obrigatória é <code>ds-carousel</code>.',
    'Use <code>ds-carousel__track</code> para agrupar os slides.',
    'Cada slide deve usar a classe <code>ds-carousel__slide</code>.',
    'Use <code>aria-roledescription="carousel"</code> para descrever o componente para leitores de tela.',
    'O autoplay deve pausar ao passar o mouse ou focar o componente.',
    'A navegação por teclado usa as setas esquerda e direita.',
];

const carouselWhenUse = [
    'Destacar conteúdos importantes em uma área limitada da página.',
    'Apresentar banners institucionais ou campanhas.',
    'Exibir notícias, serviços ou cards em sequência.',
    'Permitir navegação manual ou automática entre conteúdos relacionados.',
];

const carouselWhenNotUse = [
    'Para poucos conteúdos (1 ou 2 itens).',
    'Quando todos os conteúdos devem permanecer visíveis simultaneamente.',
    'Para navegação principal do portal.',
    'Quando o usuário precisa comparar conteúdos lado a lado.',
];

const carouselVariants = [
    '<code>Default</code> — navegação manual.',
    '<code>Autoplay</code> — troca automática dos slides.',
    '<code>Controles anterior/próximo</code>.',
    '<code>Indicadores (dots)</code>.',
    '<code>Suporte à navegação por teclado.</code>',
];

function renderList(items) {
    return items.map(item => `<li>${item}</li>`).join('');
}

function renderCarouselDocumentation() {
    return `
        <main class="ds-component-doc">

            <header class="ds-component-doc__hero">

                <div>

                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Carousel</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para apresentar uma sequência de conteúdos,
                        permitindo navegação manual ou automática entre os slides.
                    </p>

                </div>

                <dl class="ds-component-doc__meta">

                    <div>
                        <dt>Status</dt>
                        <dd>${carouselMeta.status}</dd>
                    </div>

                    <div>
                        <dt>Versão</dt>
                        <dd>${carouselMeta.version}</dd>
                    </div>

                    <div>
                        <dt>Atualizado</dt>
                        <dd>${carouselMeta.updated}</dd>
                    </div>

                </dl>

            </header>

            <section class="ds-component-doc__grid">

                <article class="ds-component-doc__card">
                    <h2>Quando usar</h2>

                    <ul>
                        ${renderList(carouselWhenUse)}
                    </ul>

                </article>

                <article class="ds-component-doc__card">

                    <h2>Quando não usar</h2>

                    <ul>
                        ${renderList(carouselWhenNotUse)}
                    </ul>

                </article>

                <article class="ds-component-doc__card">

                    <h2>Variantes</h2>

                    <ul>
                        ${renderList(carouselVariants)}
                    </ul>

                </article>

            </section>

        </main>
    `;
}

export const Documentacao = {
    name: 'Documentação',
    render: () => renderCarouselDocumentation(),
};

const carouselHtml = `
<section
    class="ds-carousel"
    role="region"
    aria-roledescription="carousel"
    aria-label="Destaques"
    tabindex="0"
    data-autoplay="false"
>
    <div class="ds-carousel__viewport">
        <div class="ds-carousel__track">
            <article class="ds-carousel__slide" role="group" aria-roledescription="slide" aria-label="1 de 3">
                <div class="ds-carousel__content">
                    <h3 class="ds-carousel__title">Campanha de vacinação</h3>
                    <p class="ds-carousel__text">Postos abertos em todo o estado até o fim do mês.</p>
                </div>
            </article>

            <article class="ds-carousel__slide" role="group" aria-roledescription="slide" aria-label="2 de 3">
                <div class="ds-carousel__content">
                    <h3 class="ds-carousel__title">Edital de concurso</h3>
                    <p class="ds-carousel__text">Inscrições abertas para a Secretaria de Educação.</p>
                </div>
            </article>

            <article class="ds-carousel__slide" role="group" aria-roledescription="slide" aria-label="3 de 3">
                <div class="ds-carousel__content">
                    <h3 class="ds-carousel__title">Novo portal de serviços</h3>
                    <p class="ds-carousel__text">Mais de 200 serviços digitais em um só lugar.</p>
                </div>
            </article>
        </div>
    </div>

    <button class="ds-carousel__control ds-carousel__control--prev" type="button" aria-label="Slide anterior">
        ‹
    </button>

    <button class="ds-carousel__control ds-carousel__control--next" type="button" aria-label="Próximo slide">
        ›
    </button>

    <div class="ds-carousel__dots" aria-label="Selecionar slide">
        <button class="ds-carousel__dot" type="button" aria-label="Ir para slide 1"></button>
        <button class="ds-carousel__dot" type="button" aria-label="Ir para slide 2"></button>
        <button class="ds-carousel__dot" type="button" aria-label="Ir para slide 3"></button>
    </div>
</section>
`;

const carouselAutoplayHtml = carouselHtml.replace(
    'data-autoplay="false"',
    'data-autoplay="true" data-interval="3000"'
);

function initPreview() {
    setTimeout(() => {
        initAllCarousels();
    }, 0);
}

export const HTMLDefault = {
    name: 'Default',
    render: () => {
        initPreview();

        return CodePreview({
            title: 'Carousel Default - HTML',
            description: 'Exemplo de HTML para replicar o Carousel com navegação manual.',
            meta: carouselMeta,
            preview: carouselHtml,
            code: carouselHtml,
            language: 'markup',
            cssDependencies: carouselCssDependencies,
            jsDependencies: carouselJsDependencies,
            notes: carouselNotes,
        });
    },
};

export const HTMLAutoplay = {
    name: 'Autoplay',
    render: () => {
        initPreview();

        return CodePreview({
            title: 'Carousel Autoplay - HTML',
            description: 'Exemplo de HTML para replicar o Carousel com autoplay pausável.',
            meta: carouselMeta,
            preview: carouselAutoplayHtml,
            code: carouselAutoplayHtml,
            language: 'markup',
            cssDependencies: carouselCssDependencies,
            jsDependencies: carouselJsDependencies,
            notes: carouselNotes,
        });
    },
};
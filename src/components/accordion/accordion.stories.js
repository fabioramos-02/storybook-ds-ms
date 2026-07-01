import { Accordion } from './accordion';
import { CodePreview } from '../../utils/codePreview';
import './accordion.css';

export default {
    title: 'Componentes/Accordion',
};

const items = [
    {
        title: 'O que é o programa?',
        content: 'Este programa reúne informações, serviços e orientações para facilitar o acesso do cidadão.',
    },
    {
        title: 'Quem pode participar?',
        content: 'A participação depende dos critérios definidos pelo órgão responsável pelo serviço.',
    },
    {
        title: 'Como acessar?',
        content: 'O acesso pode ser feito pelo portal oficial, presencialmente ou pelos canais de atendimento informados.',
    },
];

const accordionCssDependencies = [
    'src/styles/variables.css',
    'src/styles/typography.css',
    'src/styles/spacing.css',
    'src/styles/radius.css',
    'src/components/accordion/accordion.css',
];

const accordionMeta = {
    id: 'ds-accordion',
    status: 'Estável',
    version: '1.0.0',
    category: 'Components',
    updated: '2026-06-25',
};

const accordionJsDependencies = [
    'src/components/accordion/accordion.js',
];

const accordionNotes = [
    'O Accordion depende dos tokens globais do Design System MS.',
    'A classe base obrigatória é <code>ds-accordion</code>.',
    'Cada item deve usar <code>ds-accordion__item</code>.',
    'O botão de abertura deve usar <code>ds-accordion__button</code>.',
    'Use <code>aria-expanded</code> para indicar se o item está aberto.',
    'Use <code>aria-controls</code> para vincular o botão ao painel correspondente.',
    'O painel de conteúdo deve usar <code>ds-accordion__panel</code>.',
    'Para abrir um painel inicialmente, adicione a classe <code>is-open</code> e use <code>aria-expanded="true"</code>.',
];

const accordionWhenUse = [
    'Organizar conteúdos longos em seções expansíveis.',
    'Exibir perguntas frequentes, orientações ou detalhes complementares.',
    'Reduzir a altura visual de páginas com muito conteúdo.',
    'Permitir que o usuário escolha quais informações deseja visualizar.',
];

const accordionWhenNotUse = [
    'Para conteúdos essenciais que devem estar sempre visíveis.',
    'Para navegação principal do site.',
    'Para ações simples, nesse caso utilize Button ou Link.',
    'Para conteúdos muito curtos que não precisam ser ocultados.',
];

const accordionVariants = [
    '<code>ds-accordion</code> — variação padrão.',
    '<code>firstOpen</code> — primeiro item inicia aberto.',
    '<code>allowMultiple</code> — permite múltiplos itens abertos.',
    '<code>ds-accordion--borderless</code> — remove a borda externa.',
    '<code>ds-accordion--compact</code> — reduz espaçamentos e altura dos itens.',
];

const defaultBehavior = [
    'Comportamento padrão: apenas um item permanece aberto por vez.',
    'Ao abrir um item, os demais são fechados.',
    'O JavaScript controla a troca de <code>aria-expanded</code> e da classe <code>is-open</code>.',
];

const firstOpenBehavior = [
    'O primeiro item inicia aberto.',
    'O botão inicial usa <code>aria-expanded="true"</code>.',
    'O painel inicial recebe a classe <code>is-open</code>.',
];

const multipleBehavior = [
    'Permite que vários itens fiquem abertos ao mesmo tempo.',
    'Cada item funciona de forma independente.',
    'Esse comportamento depende da configuração JavaScript <code>allowMultiple</code>.',
];

const borderlessBehavior = [
    'Remove a borda externa do Accordion.',
    'Mantém separação entre os itens.',
    'Use a classe modificadora <code>ds-accordion--borderless</code>.',
];

const compactBehavior = [
    'Reduz altura, padding e tamanho de texto.',
    'Indicado para áreas com pouco espaço.',
    'Use a classe modificadora <code>ds-accordion--compact</code>.',
];

function renderList(items) {
    return items.map((item) => `<li>${item}</li>`).join('');
}

function renderAccordionDocumentation() {
    return `
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Accordion</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para organizar conteúdos expansíveis em seções,
                        permitindo que o usuário abra e feche informações conforme sua necessidade.
                    </p>
                </div>

                <dl class="ds-component-doc__meta">
                    <div>
                        <dt>Status</dt>
                        <dd>${accordionMeta.status}</dd>
                    </div>

                    <div>
                        <dt>Versão</dt>
                        <dd>${accordionMeta.version}</dd>
                    </div>

                    <div>
                        <dt>Atualizado</dt>
                        <dd>${accordionMeta.updated}</dd>
                    </div>
                </dl>
            </header>

            <section class="ds-component-doc__grid">
                <article class="ds-component-doc__card">
                    <h2>Quando usar</h2>
                    <ul>
                        ${renderList(accordionWhenUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${renderList(accordionWhenNotUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${renderList(accordionVariants)}
                    </ul>
                </article>
            </section>
        </main>
    `;
}

export const Documentacao = {
    name: 'Documentação',
    render: () => renderAccordionDocumentation(),
};

const allAccordionHtml = `
<div style="display: grid; gap: 32px;">
    <a
        class="ds-link ds-link--md ds-link--primary"
        href="/?path=/story/components-accordion--html-default"
        target="_top"
    >
        <span>Accordion Default</span>
        <span class="ds-link__icon" aria-hidden="true">→</span>
    </a>

    <a
        class="ds-link ds-link--md ds-link--primary"
        href="/?path=/story/components-accordion--html-first-open"
        target="_top"
    >
        <span>Accordion First Open</span>
        <span class="ds-link__icon" aria-hidden="true">→</span>
    </a>

    <a
        class="ds-link ds-link--md ds-link--primary"
        href="/?path=/story/components-accordion--html-multiple-open"
        target="_top"
    >
        <span>Accordion Multiple Open</span>
        <span class="ds-link__icon" aria-hidden="true">→</span>
    </a>

    <a
        class="ds-link ds-link--md ds-link--primary"
        href="/?path=/story/components-accordion--html-borderless"
        target="_top"
    >
        <span>Accordion Borderless</span>
        <span class="ds-link__icon" aria-hidden="true">→</span>
    </a>

    <a
        class="ds-link ds-link--md ds-link--primary"
        href="/?path=/story/components-accordion--html-compact"
        target="_top"
    >
        <span>Accordion Compact</span>
        <span class="ds-link__icon" aria-hidden="true">→</span>
    </a>
</div>
`;

export const HTMLAccordions = {
    name: 'All',
    render: () => CodePreview({
        title: 'Accordion - HTML',
        description: 'Exemplo visual com todas as variações do componente Accordion. Clique em uma opção para abrir sua documentação específica.',
        meta: accordionMeta,
        preview: allAccordionHtml,
        cssDependencies: accordionCssDependencies,
        jsDependencies: accordionJsDependencies,
        notes: accordionNotes,
    }),
};

const defaultHtml = `
<div class="ds-accordion">
    <div class="ds-accordion__item">
        <h3 class="ds-accordion__heading">
            <button
                id="accordion-button-1"
                class="ds-accordion__button"
                type="button"
                aria-expanded="false"
                aria-controls="accordion-panel-1"
            >
                <span>O que é o programa?</span>
                <span class="ds-accordion__icon" aria-hidden="true">+</span>
            </button>
        </h3>

        <div
            id="accordion-panel-1"
            class="ds-accordion__panel"
            role="region"
            aria-labelledby="accordion-button-1"
        >
            <p>Este programa reúne informações, serviços e orientações para facilitar o acesso do cidadão.</p>
        </div>
    </div>

    <div class="ds-accordion__item">
        <h3 class="ds-accordion__heading">
            <button
                id="accordion-button-2"
                class="ds-accordion__button"
                type="button"
                aria-expanded="false"
                aria-controls="accordion-panel-2"
            >
                <span>Quem pode participar?</span>
                <span class="ds-accordion__icon" aria-hidden="true">+</span>
            </button>
        </h3>

        <div
            id="accordion-panel-2"
            class="ds-accordion__panel"
            role="region"
            aria-labelledby="accordion-button-2"
        >
            <p>A participação depende dos critérios definidos pelo órgão responsável pelo serviço.</p>
        </div>
    </div>
</div>
`;

export const HTMLDefault = {
    name: 'Default',
    render: () => CodePreview({
        title: 'Accordion Default - HTML',
        description: 'Exemplo de HTML para replicar o Accordion padrão.',
        meta: accordionMeta,
        preview: Accordion({
            items,
            allowMultiple: false,
            firstOpen: false,
            variant: 'default',
        }),
        code: defaultHtml,
        language: 'markup',
        cssDependencies: accordionCssDependencies,
        jsDependencies: accordionJsDependencies,
        notes: [...accordionNotes, ...defaultBehavior],
    }),
};

const firstOpenHtml = `
<div class="ds-accordion">
    <div class="ds-accordion__item">
        <h3 class="ds-accordion__heading">
            <button
                id="accordion-button-1"
                class="ds-accordion__button"
                type="button"
                aria-expanded="true"
                aria-controls="accordion-panel-1"
            >
                <span>O que é o programa?</span>
                <span class="ds-accordion__icon" aria-hidden="true">+</span>
            </button>
        </h3>

        <div
            id="accordion-panel-1"
            class="ds-accordion__panel is-open"
            role="region"
            aria-labelledby="accordion-button-1"
        >
            <p>Este programa reúne informações, serviços e orientações para facilitar o acesso do cidadão.</p>
        </div>
    </div>

    <div class="ds-accordion__item">
        <h3 class="ds-accordion__heading">
            <button
                id="accordion-button-2"
                class="ds-accordion__button"
                type="button"
                aria-expanded="false"
                aria-controls="accordion-panel-2"
            >
                <span>Quem pode participar?</span>
                <span class="ds-accordion__icon" aria-hidden="true">+</span>
            </button>
        </h3>

        <div
            id="accordion-panel-2"
            class="ds-accordion__panel"
            role="region"
            aria-labelledby="accordion-button-2"
        >
            <p>A participação depende dos critérios definidos pelo órgão responsável pelo serviço.</p>
        </div>
    </div>
</div>
`;

export const HTMLFirstOpen = {
    name: 'First Open',
    render: () => CodePreview({
        title: 'Accordion First Open - HTML',
        description: 'Exemplo de HTML para replicar o Accordion iniciando com o primeiro item aberto.',
        meta: accordionMeta,
        preview: Accordion({
            items,
            allowMultiple: false,
            firstOpen: true,
            variant: 'default',
        }),
        code: firstOpenHtml,
        language: 'markup',
        cssDependencies: accordionCssDependencies,
        jsDependencies: accordionJsDependencies,
        notes: [...accordionNotes, ...firstOpenBehavior],
    }),
};

const multipleOpenHtml = defaultHtml;

export const HTMLMultipleOpen = {
    name: 'Multiple Open',
    render: () => CodePreview({
        title: 'Accordion Multiple Open - HTML',
        description: 'Exemplo de HTML para Accordion com múltiplos itens abertos. O comportamento depende da configuração JavaScript.',
        meta: accordionMeta,
        preview: Accordion({
            items,
            allowMultiple: true,
            firstOpen: false,
            variant: 'default',
        }),
        code: multipleOpenHtml,
        language: 'markup',
        cssDependencies: accordionCssDependencies,
        jsDependencies: accordionJsDependencies,
        notes: [...accordionNotes, ...multipleBehavior],
    }),
};

const borderlessHtml = `
<div class="ds-accordion ds-accordion--borderless">
    <div class="ds-accordion__item">
        <h3 class="ds-accordion__heading">
            <button
                id="accordion-borderless-button-1"
                class="ds-accordion__button"
                type="button"
                aria-expanded="false"
                aria-controls="accordion-borderless-panel-1"
            >
                <span>O que é o programa?</span>
                <span class="ds-accordion__icon" aria-hidden="true">+</span>
            </button>
        </h3>

        <div
            id="accordion-borderless-panel-1"
            class="ds-accordion__panel"
            role="region"
            aria-labelledby="accordion-borderless-button-1"
        >
            <p>Este programa reúne informações, serviços e orientações para facilitar o acesso do cidadão.</p>
        </div>
    </div>
</div>
`;

export const HTMLBorderless = {
    name: 'Borderless',
    render: () => CodePreview({
        title: 'Accordion Borderless - HTML',
        description: 'Exemplo de HTML para replicar o Accordion sem borda externa.',
        meta: accordionMeta,
        preview: Accordion({
            items,
            allowMultiple: false,
            firstOpen: false,
            variant: 'borderless',
        }),
        code: borderlessHtml,
        language: 'markup',
        cssDependencies: accordionCssDependencies,
        jsDependencies: accordionJsDependencies,
        notes: [...accordionNotes, ...borderlessBehavior],
    }),
};

const compactHtml = `
<div class="ds-accordion ds-accordion--compact">
    <div class="ds-accordion__item">
        <h3 class="ds-accordion__heading">
            <button
                id="accordion-compact-button-1"
                class="ds-accordion__button"
                type="button"
                aria-expanded="false"
                aria-controls="accordion-compact-panel-1"
            >
                <span>O que é o programa?</span>
                <span class="ds-accordion__icon" aria-hidden="true">+</span>
            </button>
        </h3>

        <div
            id="accordion-compact-panel-1"
            class="ds-accordion__panel"
            role="region"
            aria-labelledby="accordion-compact-button-1"
        >
            <p>Este programa reúne informações, serviços e orientações para facilitar o acesso do cidadão.</p>
        </div>
    </div>
</div>
`;

export const HTMLCompact = {
    name: 'Compact',
    render: () => CodePreview({
        title: 'Accordion Compact - HTML',
        description: 'Exemplo de HTML para replicar o Accordion compacto.',
        meta: accordionMeta,
        preview: Accordion({
            items,
            allowMultiple: false,
            firstOpen: false,
            variant: 'compact',
        }),
        code: compactHtml,
        language: 'markup',
        cssDependencies: accordionCssDependencies,
        jsDependencies: accordionJsDependencies,
        notes: [...accordionNotes, ...compactBehavior],
    }),
};
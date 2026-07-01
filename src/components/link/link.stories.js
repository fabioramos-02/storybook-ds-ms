import { CodePreview } from '../../utils/codePreview';
import './link.css';

export default {
    title: 'Componentes/Link',
};

const linkCssDependencies = [
    'src/styles/variables.css',
    'src/styles/typography.css',
    'src/styles/spacing.css',
    'src/styles/radius.css',
    'src/components/link/link.css',
];

const linkMeta = {
    id: 'ds-link',
    status: 'Estável',
    version: '1.0.0',
    category: 'Components',
    updated: '2026-06-25',
};

const linkJsDependencies = [
    'Nenhum JavaScript obrigatório para uso visual do Link.',
];

const linkNotes = [
    'O Link depende dos tokens globais do Design System MS.',
    'As classes obrigatórias são <code>ds-link</code>, <code>ds-link--size</code> e <code>ds-link--variant</code>.',
    'Use <code>&lt;a&gt;</code> quando o elemento tiver função de navegação.',
    'Para abrir em nova aba, use <code>target="_blank"</code> e recomenda-se adicionar <code>rel="noopener noreferrer"</code>.',
    'Para link desabilitado, use <code>aria-disabled="true"</code>, <code>tabindex="-1"</code> e a classe <code>ds-link--disabled</code>.',
];

const linkWhenUse = [
    'Navegar para outra página, seção, documento ou recurso externo.',
    'Indicar caminhos de acesso dentro de textos, cards, listas ou áreas de conteúdo.',
    'Criar ações de navegação com menor destaque visual que Button.',
    'Exibir links com ou sem ícone, conforme o contexto.',
];

const linkWhenNotUse = [
    'Para executar ações na própria página, nesse caso utilize Button.',
    'Para destacar a ação principal de uma tela, nesse caso utilize Button Primary.',
    'Para abrir menus ou conteúdos expansíveis, nesse caso utilize Dropdown ou Accordion.',
    'Para texto sem função de navegação.',
];

const linkVariants = [
    '<code>ds-link--primary</code> — link principal.',
    '<code>ds-link--secondary</code> — link secundário.',
    '<code>ds-link--neutral</code> — link neutro.',
    '<code>ds-link--inverse</code> — link sobre fundo escuro.',
    '<code>ds-link--sm</code>, <code>ds-link--md</code> e <code>ds-link--lg</code> — tamanhos disponíveis.',
    '<code>ds-link__icon</code> — ícone à esquerda ou à direita.',
    '<code>ds-link--no-underline</code> — sem sublinhado inicial.',
    '<code>ds-link--disabled</code> — estado desabilitado.',
];

function renderList(items) {
    return items.map((item) => `<li>${item}</li>`).join('');
}

function renderLinkDocumentation() {
    return `
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Link</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para navegação entre páginas, seções,
                        documentos ou recursos internos e externos.
                    </p>
                </div>

                <dl class="ds-component-doc__meta">
                    <div>
                        <dt>Status</dt>
                        <dd>${linkMeta.status}</dd>
                    </div>

                    <div>
                        <dt>Versão</dt>
                        <dd>${linkMeta.version}</dd>
                    </div>

                    <div>
                        <dt>Atualizado</dt>
                        <dd>${linkMeta.updated}</dd>
                    </div>
                </dl>
            </header>

            <section class="ds-component-doc__grid">
                <article class="ds-component-doc__card">
                    <h2>Quando usar</h2>
                    <ul>
                        ${renderList(linkWhenUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${renderList(linkWhenNotUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${renderList(linkVariants)}
                    </ul>
                </article>
            </section>
        </main>
    `;
}

export const Documentacao = {
    name: 'Documentação',
    render: () => renderLinkDocumentation(),
};

const allLinksHtml = `
<div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center;">
    <a
        class="ds-link ds-link--md ds-link--primary"
        href="/?path=/story/components-link--html-primary"
        target="_top"
    >
        <span>Saiba mais</span>
    </a>

    <a
        class="ds-link ds-link--md ds-link--secondary"
        href="/?path=/story/components-link--html-secondary"
        target="_top"
    >
        <span>Ver detalhes</span>
    </a>

    <a
        class="ds-link ds-link--md ds-link--neutral"
        href="/?path=/story/components-link--html-neutral"
        target="_top"
    >
        <span>Acessar conteúdo</span>
    </a>

    <a
        class="ds-link ds-link--md ds-link--primary"
        href="/?path=/story/components-link--html-with-icon"
        target="_top"
    >
        <span>Abrir serviço</span>
        <span class="ds-link__icon" aria-hidden="true">→</span>
    </a>

    <a
        class="ds-link ds-link--md ds-link--primary"
        href="/?path=/story/components-link--html-icon-left"
        target="_top"
    >
        <span class="ds-link__icon" aria-hidden="true">←</span>
        <span>Voltar</span>
    </a>

    <a
        class="ds-link ds-link--sm ds-link--primary"
        href="/?path=/story/components-link--html-small"
        target="_top"
    >
        <span>Link pequeno</span>
    </a>

    <a
        class="ds-link ds-link--lg ds-link--primary"
        href="/?path=/story/components-link--html-large"
        target="_top"
    >
        <span>Link grande</span>
    </a>

    <a
        class="ds-link ds-link--md ds-link--primary ds-link--no-underline"
        href="/?path=/story/components-link--html-no-underline"
        target="_top"
    >
        <span>Link sem sublinhado</span>
    </a>

    <a
        class="ds-link ds-link--md ds-link--primary ds-link--disabled"
        href="/?path=/story/components-link--html-disabled"
        aria-disabled="true"
        tabindex="-1"
    >
        <span>Link desabilitado</span>
    </a>
</div>
`;

export const HTMLLinks = {
    name: 'All',
    render: () => CodePreview({
        title: 'Link - HTML',
        description: 'Exemplo visual com todas as variações do componente Link. Clique em um link para abrir sua documentação específica.',
        meta: linkMeta,
        preview: allLinksHtml,
        code: allLinksHtml,
        language: 'markup',
        cssDependencies: linkCssDependencies,
        jsDependencies: linkJsDependencies,
        notes: linkNotes,
    }),
};

const primaryHtml = `
<a class="ds-link ds-link--md ds-link--primary" href="#">
    <span>Saiba mais</span>
</a>
`;

export const HTMLPrimary = {
    name: 'Primary',
    render: () => CodePreview({
        title: 'Link Primary - HTML',
        description: 'Exemplo de HTML para replicar o link primário.',
        meta: linkMeta,
        preview: primaryHtml,
        code: primaryHtml,
        language: 'markup',
        cssDependencies: linkCssDependencies,
        jsDependencies: linkJsDependencies,
        notes: linkNotes,
    }),
};

const secondaryHtml = `
<a class="ds-link ds-link--md ds-link--secondary" href="#">
    <span>Ver detalhes</span>
</a>
`;

export const HTMLSecondary = {
    name: 'Secondary',
    render: () => CodePreview({
        title: 'Link Secondary - HTML',
        description: 'Exemplo de HTML para replicar o link secundário.',
        meta: linkMeta,
        preview: secondaryHtml,
        code: secondaryHtml,
        language: 'markup',
        cssDependencies: linkCssDependencies,
        jsDependencies: linkJsDependencies,
        notes: linkNotes,
    }),
};

const neutralHtml = `
<a class="ds-link ds-link--md ds-link--neutral" href="#">
    <span>Acessar conteúdo</span>
</a>
`;

export const HTMLNeutral = {
    name: 'Neutral',
    render: () => CodePreview({
        title: 'Link Neutral - HTML',
        description: 'Exemplo de HTML para replicar o link neutro.',
        meta: linkMeta,
        preview: neutralHtml,
        code: neutralHtml,
        language: 'markup',
        cssDependencies: linkCssDependencies,
        jsDependencies: linkJsDependencies,
        notes: linkNotes,
    }),
};

const withIconHtml = `
<a class="ds-link ds-link--md ds-link--primary" href="#">
    <span>Abrir serviço</span>
    <span class="ds-link__icon" aria-hidden="true">→</span>
</a>
`;

export const HTMLWithIcon = {
    name: 'With Icon',
    render: () => CodePreview({
        title: 'Link com ícone - HTML',
        description: 'Exemplo de HTML para replicar o link com ícone à direita.',
        meta: linkMeta,
        preview: withIconHtml,
        code: withIconHtml,
        language: 'markup',
        cssDependencies: linkCssDependencies,
        jsDependencies: linkJsDependencies,
        notes: linkNotes,
    }),
};

const iconLeftHtml = `
<a class="ds-link ds-link--md ds-link--primary" href="#">
    <span class="ds-link__icon" aria-hidden="true">←</span>
    <span>Voltar</span>
</a>
`;

export const HTMLIconLeft = {
    name: 'Icon Left',
    render: () => CodePreview({
        title: 'Link com ícone à esquerda - HTML',
        description: 'Exemplo de HTML para replicar o link com ícone à esquerda.',
        meta: linkMeta,
        preview: iconLeftHtml,
        code: iconLeftHtml,
        language: 'markup',
        cssDependencies: linkCssDependencies,
        jsDependencies: linkJsDependencies,
        notes: linkNotes,
    }),
};

const smallHtml = `
<a class="ds-link ds-link--sm ds-link--primary" href="#">
    <span>Link pequeno</span>
</a>
`;

export const HTMLSmall = {
    name: 'Small',
    render: () => CodePreview({
        title: 'Link Small - HTML',
        description: 'Exemplo de HTML para replicar o link pequeno.',
        meta: linkMeta,
        preview: smallHtml,
        code: smallHtml,
        language: 'markup',
        cssDependencies: linkCssDependencies,
        jsDependencies: linkJsDependencies,
        notes: linkNotes,
    }),
};

const largeHtml = `
<a class="ds-link ds-link--lg ds-link--primary" href="#">
    <span>Link grande</span>
</a>
`;

export const HTMLLarge = {
    name: 'Large',
    render: () => CodePreview({
        title: 'Link Large - HTML',
        description: 'Exemplo de HTML para replicar o link grande.',
        meta: linkMeta,
        preview: largeHtml,
        code: largeHtml,
        language: 'markup',
        cssDependencies: linkCssDependencies,
        jsDependencies: linkJsDependencies,
        notes: linkNotes,
    }),
};

const noUnderlineHtml = `
<a class="ds-link ds-link--md ds-link--primary ds-link--no-underline" href="#">
    <span>Link sem sublinhado</span>
</a>
`;

export const HTMLNoUnderline = {
    name: 'No Underline',
    render: () => CodePreview({
        title: 'Link sem sublinhado - HTML',
        description: 'Exemplo de HTML para replicar o link sem sublinhado inicial.',
        meta: linkMeta,
        preview: noUnderlineHtml,
        code: noUnderlineHtml,
        language: 'markup',
        cssDependencies: linkCssDependencies,
        jsDependencies: linkJsDependencies,
        notes: linkNotes,
    }),
};

const disabledHtml = `
<a
    class="ds-link ds-link--md ds-link--primary ds-link--disabled"
    href="#"
    aria-disabled="true"
    tabindex="-1"
>
    <span>Link desabilitado</span>
</a>
`;

export const HTMLDisabled = {
    name: 'Disabled',
    render: () => CodePreview({
        title: 'Link Disabled - HTML',
        description: 'Exemplo de HTML para replicar o link desabilitado.',
        meta: linkMeta,
        preview: disabledHtml,
        code: disabledHtml,
        language: 'markup',
        cssDependencies: linkCssDependencies,
        jsDependencies: linkJsDependencies,
        notes: linkNotes,
    }),
};

const inverseHtml = `
<div style="padding: 24px; background: var(--ds-color-primary-600); border-radius: var(--ds-radius-md);">
    <a class="ds-link ds-link--md ds-link--inverse" href="#">
        <span>Link sobre fundo escuro</span>
        <span class="ds-link__icon" aria-hidden="true">→</span>
    </a>
</div>
`;

export const HTMLInverse = {
    name: 'Inverse',
    render: () => CodePreview({
        title: 'Link Inverse - HTML',
        description: 'Exemplo de HTML para replicar o link sobre fundo escuro.',
        meta: linkMeta,
        preview: inverseHtml,
        code: inverseHtml,
        language: 'markup',
        cssDependencies: linkCssDependencies,
        jsDependencies: linkJsDependencies,
        notes: linkNotes,
    }),
};
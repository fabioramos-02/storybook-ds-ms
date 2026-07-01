import { CodePreview } from '../../utils/codePreview';
import './button.css';

export default {
    title: 'Componentes/Button',
};

const buttonCssDependencies = [
    'src/styles/variables.css',
    'src/styles/typography.css',
    'src/styles/spacing.css',
    'src/styles/radius.css',
    'src/components/button/button.css',
];

const buttonMeta = {
    id: 'ds-button',
    status: 'Estável',
    version: '1.0.0',
    category: 'Components',
    updated: '2026-06-25',
};

const buttonJsDependencies = [
    'Nenhum JavaScript obrigatório para uso visual do Button.',
];

const buttonNotes = [
    'O Button depende dos tokens globais do Design System MS.',
    'As classes obrigatórias são <code>ds-button</code>, <code>ds-button--variant</code> e <code>ds-button--size</code>.',
    'Use <code>&lt;a&gt;</code> quando a ação for navegação.',
    'Use <code>&lt;button&gt;</code> quando a ação executar comportamento na página, como enviar, abrir ou confirmar.',
    'Para estado desabilitado em links, use <code>aria-disabled="true"</code>, <code>tabindex="-1"</code> e a classe <code>is-disabled</code>.',
];

const buttonWhenUse = [
    'Executar uma ação principal da página.',
    'Enviar, confirmar ou cancelar ações.',
    'Destacar uma chamada para ação importante.',
    'Criar links de navegação com maior destaque visual.',
];

const buttonWhenNotUse = [
    'Para textos informativos sem ação.',
    'Para navegação comum dentro de parágrafos.',
    'Para seleção múltipla de opções.',
    'Para agrupar conteúdos visuais, nesse caso utilize Card.',
];

const buttonVariants = [
    '<code>ds-button--primary</code> — ação principal.',
    '<code>ds-button--secondary</code> — ação secundária.',
    '<code>ds-button--tertiary</code> — ação complementar.',
    '<code>ds-button--outline</code> — ação com menor peso visual.',
    '<code>ds-button--ghost</code> — ação discreta.',
    '<code>ds-button--sm</code>, <code>ds-button--md</code> e <code>ds-button--lg</code> — tamanhos disponíveis.',
];

const allButtonsHtml = `
<div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center;">
    <a
        class="ds-button ds-button--primary ds-button--md"
        href="/?path=/story/components-button--html-primary"
        target="_top"
    >
        Acessar serviço
    </a>

    <a
        class="ds-button ds-button--secondary ds-button--md"
        href="/?path=/story/components-button--html-secondary"
        target="_top"
    >
        Saiba mais
    </a>

    <a
        class="ds-button ds-button--tertiary ds-button--md"
        href="/?path=/story/components-button--html-tertiary"
        target="_top"
    >
        Continuar
    </a>

    <a
        class="ds-button ds-button--outline ds-button--md"
        href="/?path=/story/components-button--html-outline"
        target="_top"
    >
        Ver detalhes
    </a>

    <a
        class="ds-button ds-button--ghost ds-button--md"
        href="/?path=/story/components-button--html-ghost"
        target="_top"
    >
        Ler mais
    </a>

    <a
        class="ds-button ds-button--primary ds-button--sm"
        href="/?path=/story/components-button--html-small"
        target="_top"
    >
        Botão pequeno
    </a>

    <a
        class="ds-button ds-button--primary ds-button--lg"
        href="/?path=/story/components-button--html-large"
        target="_top"
    >
        Botão grande
    </a>

    <a
        class="ds-button ds-button--primary ds-button--md is-disabled"
        href="/?path=/story/components-button--html-disabled"
        aria-disabled="true"
        tabindex="-1"
    >
        Indisponível
    </a>

    <button
        class="ds-button ds-button--primary ds-button--md"
        type="button"
    >
        Enviar
    </button>
</div>
`;


function renderList(items) {
    return items.map((item) => `<li>${item}</li>`).join('');
}

function renderButtonDocumentation() {
    return `
    
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Button</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para ações principais, secundárias e links de navegação com destaque visual.
                    </p>
                </div>

                <dl class="ds-component-doc__meta">
                    <div>
                        <dt>Status</dt>
                        <dd>${buttonMeta.status}</dd>
                    </div>

                    <div>
                        <dt>Versão</dt>
                        <dd>${buttonMeta.version}</dd>
                    </div>

                    <div>
                        <dt>Atualizado</dt>
                        <dd>${buttonMeta.updated}</dd>
                    </div>
                </dl>
            </header>

            <section class="ds-component-doc__grid">
                <article class="ds-component-doc__card">
                    <h2>Quando usar</h2>
                    <ul>
                        ${renderList(buttonWhenUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${renderList(buttonWhenNotUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${renderList(buttonVariants)}
                    </ul>
                </article>
            </section>
        </main>
    `;
}

export const Documentacao = {
    name: 'Documentação',
    render: () => renderButtonDocumentation(),
};

export const HTMLBotoes = {
    name: 'All',
    render: () => CodePreview({
        title: 'Button - HTML',
        description: 'Exemplo de HTML para replicar todas as variações do componente Button em uma página.',
        meta: buttonMeta,
        preview: allButtonsHtml,
        cssDependencies: buttonCssDependencies,
        jsDependencies: buttonJsDependencies,
        notes: buttonNotes,
    }),
};

const primaryHtml = `
<a class="ds-button ds-button--primary ds-button--md" href="#">
    Acessar serviço
</a>
`;

export const HTMLPrimary = {
    name: 'Primary',
    render: () => CodePreview({
        title: 'Button Primary - HTML',
        description: 'Exemplo de HTML para replicar o botão primário.',
        meta: buttonMeta,
        preview: primaryHtml,
        code: primaryHtml,
        language: 'markup',
        cssDependencies: buttonCssDependencies,
        jsDependencies: buttonJsDependencies,
        notes: buttonNotes,
    }),
};

const secondaryHtml = `
<a class="ds-button ds-button--secondary ds-button--md" href="#">
    Saiba mais
</a>
`;

export const HTMLSecondary = {
    name: 'Secondary',
    render: () => CodePreview({
        title: 'Button Secondary - HTML',
        description: 'Exemplo de HTML para replicar o botão secundário.',
        meta: buttonMeta,
        preview: secondaryHtml,
        code: secondaryHtml,
        language: 'markup',
        cssDependencies: buttonCssDependencies,
        jsDependencies: buttonJsDependencies,
        notes: buttonNotes,
    }),
};

const tertiaryHtml = `
<a class="ds-button ds-button--tertiary ds-button--md" href="#">
    Continuar
</a>
`;

export const HTMLTertiary = {
    name: 'Tertiary',
    render: () => CodePreview({
        title: 'Button Tertiary - HTML',
        description: 'Exemplo de HTML para replicar o botão terciário.',
        meta: buttonMeta,
        preview: tertiaryHtml,
        code: tertiaryHtml,
        language: 'markup',
        cssDependencies: buttonCssDependencies,
        jsDependencies: buttonJsDependencies,
        notes: buttonNotes,
    }),
};

const outlineHtml = `
<a class="ds-button ds-button--outline ds-button--md" href="#">
    Ver detalhes
</a>
`;

export const HTMLOutline = {
    name: 'Outline',
    render: () => CodePreview({
        title: 'Button Outline - HTML',
        description: 'Exemplo de HTML para replicar o botão outline.',
        meta: buttonMeta,
        preview: outlineHtml,
        code: outlineHtml,
        language: 'markup',
        cssDependencies: buttonCssDependencies,
        jsDependencies: buttonJsDependencies,
        notes: buttonNotes,
    }),
};

const ghostHtml = `
<a class="ds-button ds-button--ghost ds-button--md" href="#">
    Ler mais
</a>
`;

export const HTMLGhost = {
    name: 'Ghost',
    render: () => CodePreview({
        title: 'Button Ghost - HTML',
        description: 'Exemplo de HTML para replicar o botão ghost.',
        meta: buttonMeta,
        preview: ghostHtml,
        code: ghostHtml,
        language: 'markup',
        cssDependencies: buttonCssDependencies,
        jsDependencies: buttonJsDependencies,
        notes: buttonNotes,
    }),
};

const smallHtml = `
<a class="ds-button ds-button--primary ds-button--sm" href="#">
    Botão pequeno
</a>
`;

export const HTMLSmall = {
    name: 'Small',
    render: () => CodePreview({
        title: 'Button Small - HTML',
        description: 'Exemplo de HTML para replicar o botão pequeno.',
        meta: buttonMeta,
        preview: smallHtml,
        code: smallHtml,
        language: 'markup',
        cssDependencies: buttonCssDependencies,
        jsDependencies: buttonJsDependencies,
        notes: buttonNotes,
    }),
};

const largeHtml = `
<a class="ds-button ds-button--primary ds-button--lg" href="#">
    Botão grande
</a>
`;

export const HTMLLarge = {
    name: 'Large',
    render: () => CodePreview({
        title: 'Button Large - HTML',
        description: 'Exemplo de HTML para replicar o botão grande.',
        meta: buttonMeta,
        preview: largeHtml,
        code: largeHtml,
        language: 'markup',
        cssDependencies: buttonCssDependencies,
        jsDependencies: buttonJsDependencies,
        notes: buttonNotes,
    }),
};

const disabledHtml = `
<a
    class="ds-button ds-button--primary ds-button--md is-disabled"
    href="#"
    aria-disabled="true"
    tabindex="-1"
>
    Indisponível
</a>
`;

export const HTMLDisabled = {
    name: 'Disabled',
    render: () => CodePreview({
        title: 'Button Disabled - HTML',
        description: 'Exemplo de HTML para replicar o botão desabilitado.',
        meta: buttonMeta,
        preview: disabledHtml,
        code: disabledHtml,
        language: 'markup',
        cssDependencies: buttonCssDependencies,
        jsDependencies: buttonJsDependencies,
        notes: buttonNotes,
    }),
};

const asButtonHtml = `
<button class="ds-button ds-button--primary ds-button--md" type="button">
    Enviar
</button>
`;

export const HTMLAsButton = {
    name: 'As Button',
    render: () => CodePreview({
        title: 'Button como Button - HTML',
        description: 'Exemplo de HTML usando a tag button em vez de link.',
        meta: buttonMeta,
        preview: asButtonHtml,
        code: asButtonHtml,
        language: 'markup',
        cssDependencies: buttonCssDependencies,
        jsDependencies: buttonJsDependencies,
        notes: buttonNotes,
    }),
};
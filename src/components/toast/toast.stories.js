import { CodePreview } from '../../utils/codePreview';
import './toast.css';

export default {
    title: 'Feedback/Toast',
};

const toastMeta = {
    id: 'ds-toast',
    status: 'Estável',
    version: '1.0.0',
    category: 'Feedback',
    updated: '2026-06-25',
};

const toastCssDependencies = [
    'src/styles/variables.css',
    'src/styles/typography.css',
    'src/styles/spacing.css',
    'src/styles/radius.css',
    'src/styles/shadows.css',
    'src/components/toast/toast.css',
];

const toastJsDependencies = [
    'src/components/toast/toast.js',
];

const toastNotes = [
    'O Toast depende dos tokens globais do Design System MS.',
    'Use Toast para mensagens temporárias e não bloqueantes.',
    'O Toast deve ser usado para feedback rápido após uma ação do usuário.',
    'Evite usar Toast para mensagens críticas que exigem decisão do usuário.',
    'Quando houver botão de fechar, garanta que ele tenha rótulo acessível.',
];

const toastWhenUse = [
    'Exibir feedback rápido após uma ação do usuário.',
    'Confirmar sucesso, erro, atenção ou informação temporária.',
    'Comunicar mensagens não bloqueantes.',
    'Mostrar notificações discretas que não exigem tomada de decisão imediata.',
];

const toastWhenNotUse = [
    'Para mensagens persistentes dentro da página, nesse caso utilize Alert.',
    'Para decisões críticas, nesse caso utilize Modal.',
    'Para validação específica de campos, use mensagens próximas ao campo.',
    'Para conteúdo longo ou instruções detalhadas.',
];

const toastVariants = [
    '<code>ds-toast--success</code> — operação concluída com sucesso.',
    '<code>ds-toast--info</code> — informação temporária.',
    '<code>ds-toast--warning</code> — aviso ou atenção.',
    '<code>ds-toast--danger</code> — erro ou falha.',
    '<code>ds-toast__close</code> — botão para fechar manualmente.',
];

function renderList(items) {
    return items.map((item) => `<li>${item}</li>`).join('');
}

function renderToastDocumentation() {
    return `
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Feedback
                    </span>

                    <h1>Toast</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para exibir mensagens temporárias, discretas
                        e não bloqueantes após ações do usuário.
                    </p>
                </div>

                <dl class="ds-component-doc__meta">
                    <div>
                        <dt>Status</dt>
                        <dd>${toastMeta.status}</dd>
                    </div>

                    <div>
                        <dt>Versão</dt>
                        <dd>${toastMeta.version}</dd>
                    </div>

                    <div>
                        <dt>Atualizado</dt>
                        <dd>${toastMeta.updated}</dd>
                    </div>
                </dl>
            </header>

            <section class="ds-component-doc__grid">
                <article class="ds-component-doc__card">
                    <h2>Quando usar</h2>
                    <ul>${renderList(toastWhenUse)}</ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>${renderList(toastWhenNotUse)}</ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>${renderList(toastVariants)}</ul>
                </article>
            </section>
        </main>
    `;
}

export const Documentacao = {
    name: 'Documentação',
    render: () => renderToastDocumentation(),
};

const successHtml = `
<div class="ds-toast ds-toast--success" role="status">
    <div class="ds-toast__content">
        <strong class="ds-toast__title">Sucesso</strong>
        <p class="ds-toast__message">A operação foi realizada com sucesso.</p>
    </div>

    <button class="ds-toast__close" type="button" aria-label="Fechar">
        ×
    </button>
</div>
`;

const infoHtml = `
<div class="ds-toast ds-toast--info" role="status">
    <div class="ds-toast__content">
        <strong class="ds-toast__title">Informação</strong>
        <p class="ds-toast__message">Existe uma nova informação disponível.</p>
    </div>

    <button class="ds-toast__close" type="button" aria-label="Fechar">
        ×
    </button>
</div>
`;

const warningHtml = `
<div class="ds-toast ds-toast--warning" role="status">
    <div class="ds-toast__content">
        <strong class="ds-toast__title">Atenção</strong>
        <p class="ds-toast__message">Verifique as informações antes de continuar.</p>
    </div>

    <button class="ds-toast__close" type="button" aria-label="Fechar">
        ×
    </button>
</div>
`;

const dangerHtml = `
<div class="ds-toast ds-toast--danger" role="alert">
    <div class="ds-toast__content">
        <strong class="ds-toast__title">Erro</strong>
        <p class="ds-toast__message">Não foi possível concluir a ação.</p>
    </div>

    <button class="ds-toast__close" type="button" aria-label="Fechar">
        ×
    </button>
</div>
`;

const allToastsHtml = `
<div style="display: grid; gap: 16px;">
    ${successHtml}
    ${infoHtml}
    ${warningHtml}
    ${dangerHtml}
</div>
`;

export const HTMLToasts = {
    name: 'All',
    render: () => CodePreview({
        title: 'Toast - HTML',
        description: 'Exemplo visual com todas as variações do componente Toast.',
        meta: toastMeta,
        preview: allToastsHtml,
        
        cssDependencies: toastCssDependencies,
        jsDependencies: toastJsDependencies,
        notes: toastNotes,
    }),
};

export const HTMLSuccess = {
    name: 'Success',
    render: () => CodePreview({
        title: 'Toast Success - HTML',
        description: 'Exemplo de HTML para replicar o Toast de sucesso.',
        meta: toastMeta,
        preview: successHtml,
        code: successHtml,
        language: 'markup',
        cssDependencies: toastCssDependencies,
        jsDependencies: toastJsDependencies,
        notes: toastNotes,
    }),
};

export const HTMLInfo = {
    name: 'Info',
    render: () => CodePreview({
        title: 'Toast Info - HTML',
        description: 'Exemplo de HTML para replicar o Toast informativo.',
        meta: toastMeta,
        preview: infoHtml,
        code: infoHtml,
        language: 'markup',
        cssDependencies: toastCssDependencies,
        jsDependencies: toastJsDependencies,
        notes: toastNotes,
    }),
};

export const HTMLWarning = {
    name: 'Warning',
    render: () => CodePreview({
        title: 'Toast Warning - HTML',
        description: 'Exemplo de HTML para replicar o Toast de atenção.',
        meta: toastMeta,
        preview: warningHtml,
        code: warningHtml,
        language: 'markup',
        cssDependencies: toastCssDependencies,
        jsDependencies: toastJsDependencies,
        notes: toastNotes,
    }),
};

export const HTMLDanger = {
    name: 'Danger',
    render: () => CodePreview({
        title: 'Toast Danger - HTML',
        description: 'Exemplo de HTML para replicar o Toast de erro.',
        meta: toastMeta,
        preview: dangerHtml,
        code: dangerHtml,
        language: 'markup',
        cssDependencies: toastCssDependencies,
        jsDependencies: toastJsDependencies,
        notes: toastNotes,
    }),
};
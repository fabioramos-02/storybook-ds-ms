import { Alert } from './alert';
import { CodePreview } from '../../utils/codePreview';
import './alert.css';

export default {
    title: 'Componentes/Alert',
};

const alertMeta = {
    id: 'ds-alert',
    status: 'Estável',
    version: '1.0.0',
    category: 'Components',
    updated: '2026-06-25',
};

const alertCssDependencies = [
    'src/styles/variables.css',
    'src/styles/typography.css',
    'src/styles/spacing.css',
    'src/styles/radius.css',
    'src/components/alert/alert.css',
];

const alertJsDependencies = [
    'Nenhum JavaScript obrigatório para uso visual do Alert.',
];

const alertNotes = [
    'O Alert depende dos tokens globais do Design System MS.',
    'A classe base obrigatória é <code>ds-alert</code>.',
    'Use classes modificadoras como <code>ds-alert--info</code>, <code>ds-alert--success</code>, <code>ds-alert--warning</code>, <code>ds-alert--danger</code> e <code>ds-alert--neutral</code>.',
    'Use <code>role="status"</code> para mensagens informativas não críticas.',
    'Para mensagens críticas ou erros importantes, avalie usar <code>role="alert"</code>.',
    'O ícone deve ser decorativo quando a mensagem textual já comunica o estado.',
];

const alertWhenUse = [
    'Comunicar informações importantes dentro do fluxo da página.',
    'Exibir mensagens de sucesso, atenção, erro ou informação.',
    'Orientar o usuário antes ou depois de uma ação.',
    'Destacar avisos que precisam ser percebidos sem bloquear a interface.',
];

const alertWhenNotUse = [
    'Para mensagens temporárias flutuantes, nesse caso utilize Toast.',
    'Para confirmar uma decisão crítica, nesse caso utilize Modal.',
    'Para textos comuns de conteúdo editorial.',
    'Para validação específica de campo, nesse caso utilize mensagens do formulário.',
];

const alertVariants = [
    '<code>ds-alert--info</code> — informação.',
    '<code>ds-alert--success</code> — sucesso.',
    '<code>ds-alert--warning</code> — atenção.',
    '<code>ds-alert--danger</code> — erro ou perigo.',
    '<code>ds-alert--neutral</code> — mensagem neutra.',
    '<code>ds-alert--sm</code>, <code>ds-alert--md</code> e <code>ds-alert--lg</code> — tamanhos disponíveis.',
];

function renderList(items) {
    return items.map((item) => `<li>${item}</li>`).join('');
}

function renderAlertDocumentation() {
    return `
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Alert</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para comunicar mensagens importantes,
                        contextuais e persistentes dentro da interface.
                    </p>
                </div>

                <dl class="ds-component-doc__meta">
                    <div>
                        <dt>Status</dt>
                        <dd>${alertMeta.status}</dd>
                    </div>

                    <div>
                        <dt>Versão</dt>
                        <dd>${alertMeta.version}</dd>
                    </div>

                    <div>
                        <dt>Atualizado</dt>
                        <dd>${alertMeta.updated}</dd>
                    </div>
                </dl>
            </header>

            <section class="ds-component-doc__grid">
                <article class="ds-component-doc__card">
                    <h2>Quando usar</h2>
                    <ul>
                        ${renderList(alertWhenUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${renderList(alertWhenNotUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${renderList(alertVariants)}
                    </ul>
                </article>
            </section>
        </main>
    `;
}

export const Documentacao = {
    name: 'Documentação',
    render: () => renderAlertDocumentation(),
};

const allAlertsHtml = `
<div style="display: grid; gap: 16px;">
    <div class="ds-alert ds-alert--info ds-alert--md" role="status">
        <span class="ds-alert__icon" aria-hidden="true">i</span>

        <div class="ds-alert__content">
            <h3 class="ds-alert__title">Informação</h3>
            <p class="ds-alert__description">Mensagem informativa para orientar o usuário.</p>
        </div>
    </div>

    <div class="ds-alert ds-alert--success ds-alert--md" role="status">
        <span class="ds-alert__icon" aria-hidden="true">✓</span>

        <div class="ds-alert__content">
            <h3 class="ds-alert__title">Sucesso</h3>
            <p class="ds-alert__description">Ação concluída com sucesso.</p>
        </div>
    </div>

    <div class="ds-alert ds-alert--warning ds-alert--md" role="status">
        <span class="ds-alert__icon" aria-hidden="true">!</span>

        <div class="ds-alert__content">
            <h3 class="ds-alert__title">Atenção</h3>
            <p class="ds-alert__description">Verifique as informações antes de continuar.</p>
        </div>
    </div>

    <div class="ds-alert ds-alert--danger ds-alert--md" role="alert">
        <span class="ds-alert__icon" aria-hidden="true">!</span>

        <div class="ds-alert__content">
            <h3 class="ds-alert__title">Erro</h3>
            <p class="ds-alert__description">Não foi possível concluir a ação solicitada.</p>
        </div>
    </div>

    <div class="ds-alert ds-alert--neutral ds-alert--md" role="status">
        <span class="ds-alert__icon" aria-hidden="true">i</span>

        <div class="ds-alert__content">
            <h3 class="ds-alert__title">Aviso</h3>
            <p class="ds-alert__description">Mensagem neutra para informação complementar.</p>
        </div>
    </div>
</div>
`;

export const HTMLAlerts = {
    name: 'All',
    render: () => CodePreview({
        title: 'Alert - HTML',
        description: 'Exemplo visual com todas as variações do componente Alert.',
        meta: alertMeta,
        preview: allAlertsHtml,
        cssDependencies: alertCssDependencies,
        jsDependencies: alertJsDependencies,
        notes: alertNotes,
    }),
};

const infoHtml = `
<div class="ds-alert ds-alert--info ds-alert--md" role="status">
    <span class="ds-alert__icon" aria-hidden="true">i</span>

    <div class="ds-alert__content">
        <h3 class="ds-alert__title">Informação</h3>
        <p class="ds-alert__description">Mensagem informativa para orientar o usuário.</p>
    </div>
</div>
`;

export const HTMLInfo = {
    name: 'Info',
    render: () => CodePreview({
        title: 'Alert Info - HTML',
        description: 'Exemplo de HTML para replicar o alerta informativo.',
        meta: alertMeta,
        preview: Alert({
            title: 'Informação',
            description: 'Mensagem informativa para orientar o usuário.',
            variant: 'info',
        }),
        code: infoHtml,
        language: 'markup',
        cssDependencies: alertCssDependencies,
        jsDependencies: alertJsDependencies,
        notes: alertNotes,
    }),
};

const successHtml = `
<div class="ds-alert ds-alert--success ds-alert--md" role="status">
    <span class="ds-alert__icon" aria-hidden="true">✓</span>

    <div class="ds-alert__content">
        <h3 class="ds-alert__title">Sucesso</h3>
        <p class="ds-alert__description">Ação concluída com sucesso.</p>
    </div>
</div>
`;

export const HTMLSuccess = {
    name: 'Success',
    render: () => CodePreview({
        title: 'Alert Success - HTML',
        description: 'Exemplo de HTML para replicar o alerta de sucesso.',
        meta: alertMeta,
        preview: Alert({
            title: 'Sucesso',
            description: 'Ação concluída com sucesso.',
            variant: 'success',
        }),
        code: successHtml,
        language: 'markup',
        cssDependencies: alertCssDependencies,
        jsDependencies: alertJsDependencies,
        notes: alertNotes,
    }),
};

const warningHtml = `
<div class="ds-alert ds-alert--warning ds-alert--md" role="status">
    <span class="ds-alert__icon" aria-hidden="true">!</span>

    <div class="ds-alert__content">
        <h3 class="ds-alert__title">Atenção</h3>
        <p class="ds-alert__description">Verifique as informações antes de continuar.</p>
    </div>
</div>
`;

export const HTMLWarning = {
    name: 'Warning',
    render: () => CodePreview({
        title: 'Alert Warning - HTML',
        description: 'Exemplo de HTML para replicar o alerta de atenção.',
        meta: alertMeta,
        preview: Alert({
            title: 'Atenção',
            description: 'Verifique as informações antes de continuar.',
            variant: 'warning',
        }),
        code: warningHtml,
        language: 'markup',
        cssDependencies: alertCssDependencies,
        jsDependencies: alertJsDependencies,
        notes: alertNotes,
    }),
};

const dangerHtml = `
<div class="ds-alert ds-alert--danger ds-alert--md" role="alert">
    <span class="ds-alert__icon" aria-hidden="true">!</span>

    <div class="ds-alert__content">
        <h3 class="ds-alert__title">Erro</h3>
        <p class="ds-alert__description">Não foi possível concluir a ação solicitada.</p>
    </div>
</div>
`;

export const HTMLDanger = {
    name: 'Danger',
    render: () => CodePreview({
        title: 'Alert Danger - HTML',
        description: 'Exemplo de HTML para replicar o alerta de erro ou perigo.',
        meta: alertMeta,
        preview: Alert({
            title: 'Erro',
            description: 'Não foi possível concluir a ação solicitada.',
            variant: 'danger',
        }),
        code: dangerHtml,
        language: 'markup',
        cssDependencies: alertCssDependencies,
        jsDependencies: alertJsDependencies,
        notes: alertNotes,
    }),
};

const neutralHtml = `
<div class="ds-alert ds-alert--neutral ds-alert--md" role="status">
    <span class="ds-alert__icon" aria-hidden="true">i</span>

    <div class="ds-alert__content">
        <h3 class="ds-alert__title">Aviso</h3>
        <p class="ds-alert__description">Mensagem neutra para informação complementar.</p>
    </div>
</div>
`;

export const HTMLNeutral = {
    name: 'Neutral',
    render: () => CodePreview({
        title: 'Alert Neutral - HTML',
        description: 'Exemplo de HTML para replicar o alerta neutro.',
        meta: alertMeta,
        preview: Alert({
            title: 'Aviso',
            description: 'Mensagem neutra para informação complementar.',
            variant: 'neutral',
        }),
        code: neutralHtml,
        language: 'markup',
        cssDependencies: alertCssDependencies,
        jsDependencies: alertJsDependencies,
        notes: alertNotes,
    }),
};

const smallHtml = `
<div class="ds-alert ds-alert--info ds-alert--sm" role="status">
    <span class="ds-alert__icon" aria-hidden="true">i</span>

    <div class="ds-alert__content">
        <h3 class="ds-alert__title">Alerta pequeno</h3>
        <p class="ds-alert__description">Mensagem em tamanho reduzido.</p>
    </div>
</div>
`;

export const HTMLSmall = {
    name: 'Small',
    render: () => CodePreview({
        title: 'Alert Small - HTML',
        description: 'Exemplo de HTML para replicar o alerta pequeno.',
        meta: alertMeta,
        preview: Alert({
            title: 'Alerta pequeno',
            description: 'Mensagem em tamanho reduzido.',
            variant: 'info',
            size: 'sm',
        }),
        code: smallHtml,
        language: 'markup',
        cssDependencies: alertCssDependencies,
        jsDependencies: alertJsDependencies,
        notes: alertNotes,
    }),
};

const largeHtml = `
<div class="ds-alert ds-alert--info ds-alert--lg" role="status">
    <span class="ds-alert__icon" aria-hidden="true">i</span>

    <div class="ds-alert__content">
        <h3 class="ds-alert__title">Alerta grande</h3>
        <p class="ds-alert__description">Mensagem em tamanho maior para maior destaque.</p>
    </div>
</div>
`;

export const HTMLLarge = {
    name: 'Large',
    render: () => CodePreview({
        title: 'Alert Large - HTML',
        description: 'Exemplo de HTML para replicar o alerta grande.',
        meta: alertMeta,
        preview: Alert({
            title: 'Alerta grande',
            description: 'Mensagem em tamanho maior para maior destaque.',
            variant: 'info',
            size: 'lg',
        }),
        code: largeHtml,
        language: 'markup',
        cssDependencies: alertCssDependencies,
        jsDependencies: alertJsDependencies,
        notes: alertNotes,
    }),
};
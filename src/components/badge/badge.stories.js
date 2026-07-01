import { Badge } from './badge';
import { CodePreview } from '../../utils/codePreview';
import './badge.css';

export default {
    title: 'Componentes/Badge',
};

const badgeMeta = {
    id: 'ds-badge',
    status: 'Estável',
    version: '1.0.0',
    category: 'Components',
    updated: '2026-06-25',
};

const badgeCssDependencies = [
    'src/styles/variables.css',
    'src/styles/typography.css',
    'src/styles/spacing.css',
    'src/styles/radius.css',
    'src/components/badge/badge.css',
];

const badgeJsDependencies = [
    'Nenhum JavaScript obrigatório para uso visual do Badge.',
];

const badgeNotes = [
    'O Badge depende dos tokens globais do Design System MS.',
    'A classe base obrigatória é <code>ds-badge</code>.',
    'Use classes modificadoras como <code>ds-badge--primary</code>, <code>ds-badge--success</code> e <code>ds-badge--danger</code>.',
    'Use <code>ds-badge--sm</code>, <code>ds-badge--md</code> ou <code>ds-badge--lg</code> para controlar o tamanho.',
    'Use <code>ds-badge--pill</code> para formato arredondado.',
];

const badgeWhenUse = [
    'Destacar status, categorias ou classificações curtas.',
    'Exibir estados como ativo, concluído, pendente, novo ou indisponível.',
    'Complementar títulos, cards, listas ou tabelas com informação contextual.',
    'Indicar uma informação visual de baixo peso sem criar uma ação.',
];

const badgeWhenNotUse = [
    'Para executar ações, nesse caso utilize Button.',
    'Para mensagens longas ou avisos importantes, nesse caso utilize Alert.',
    'Para informações temporárias flutuantes, nesse caso utilize Toast.',
    'Para textos extensos ou descrições completas.',
];

const badgeVariants = [
    '<code>ds-badge--primary</code> — destaque principal.',
    '<code>ds-badge--secondary</code> — destaque secundário.',
    '<code>ds-badge--success</code> — sucesso ou concluído.',
    '<code>ds-badge--warning</code> — atenção ou pendência.',
    '<code>ds-badge--danger</code> — erro, risco ou indisponibilidade.',
    '<code>ds-badge--info</code> — informação.',
    '<code>ds-badge--neutral</code> — informação neutra.',
    '<code>ds-badge--outline</code> — variação com borda.',
    '<code>ds-badge--pill</code> — formato arredondado.',
];

function renderList(items) {
    return items.map((item) => `<li>${item}</li>`).join('');
}

function renderBadgeDocumentation() {
    return `
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Badge</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para destacar status, categorias, classificações
                        e pequenas informações contextuais dentro da interface.
                    </p>
                </div>

                <dl class="ds-component-doc__meta">
                    <div>
                        <dt>Status</dt>
                        <dd>${badgeMeta.status}</dd>
                    </div>

                    <div>
                        <dt>Versão</dt>
                        <dd>${badgeMeta.version}</dd>
                    </div>

                    <div>
                        <dt>Atualizado</dt>
                        <dd>${badgeMeta.updated}</dd>
                    </div>
                </dl>
            </header>

            <section class="ds-component-doc__grid">
                <article class="ds-component-doc__card">
                    <h2>Quando usar</h2>
                    <ul>
                        ${renderList(badgeWhenUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${renderList(badgeWhenNotUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${renderList(badgeVariants)}
                    </ul>
                </article>
            </section>
        </main>
    `;
}

export const Documentacao = {
    name: 'Documentação',
    render: () => renderBadgeDocumentation(),
};

const allBadgesHtml = `
<div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
    <span class="ds-badge ds-badge--primary ds-badge--md">Primary</span>
    <span class="ds-badge ds-badge--secondary ds-badge--md">Secondary</span>
    <span class="ds-badge ds-badge--success ds-badge--md">Success</span>
    <span class="ds-badge ds-badge--warning ds-badge--md">Warning</span>
    <span class="ds-badge ds-badge--danger ds-badge--md">Danger</span>
    <span class="ds-badge ds-badge--info ds-badge--md">Info</span>
    <span class="ds-badge ds-badge--neutral ds-badge--md">Neutral</span>
    <span class="ds-badge ds-badge--outline ds-badge--md">Outline</span>
    <span class="ds-badge ds-badge--primary ds-badge--md ds-badge--pill">Pill</span>
</div>
`;

export const HTMLBadges = {
    name: 'All',
    render: () => CodePreview({
        title: 'Badge - HTML',
        description: 'Exemplo visual com todas as variações do componente Badge.',
        meta: badgeMeta,
        preview: allBadgesHtml,
        cssDependencies: badgeCssDependencies,
        jsDependencies: badgeJsDependencies,
        notes: badgeNotes,
    }),
};

const primaryHtml = `<span class="ds-badge ds-badge--primary ds-badge--md">Primary</span>`;

export const HTMLPrimary = {
    name: 'Primary',
    render: () => CodePreview({
        title: 'Badge Primary - HTML',
        description: 'Exemplo de HTML para replicar o badge primário.',
        meta: badgeMeta,
        preview: primaryHtml,
        code: primaryHtml,
        language: 'markup',
        cssDependencies: badgeCssDependencies,
        jsDependencies: badgeJsDependencies,
        notes: badgeNotes,
    }),
};

const secondaryHtml = `<span class="ds-badge ds-badge--secondary ds-badge--md">Secondary</span>`;

export const HTMLSecondary = {
    name: 'Secondary',
    render: () => CodePreview({
        title: 'Badge Secondary - HTML',
        description: 'Exemplo de HTML para replicar o badge secundário.',
        meta: badgeMeta,
        preview: secondaryHtml,
        code: secondaryHtml,
        language: 'markup',
        cssDependencies: badgeCssDependencies,
        jsDependencies: badgeJsDependencies,
        notes: badgeNotes,
    }),
};

const successHtml = `<span class="ds-badge ds-badge--success ds-badge--md">Success</span>`;

export const HTMLSuccess = {
    name: 'Success',
    render: () => CodePreview({
        title: 'Badge Success - HTML',
        description: 'Exemplo de HTML para replicar o badge de sucesso.',
        meta: badgeMeta,
        preview: successHtml,
        code: successHtml,
        language: 'markup',
        cssDependencies: badgeCssDependencies,
        jsDependencies: badgeJsDependencies,
        notes: badgeNotes,
    }),
};

const warningHtml = `<span class="ds-badge ds-badge--warning ds-badge--md">Warning</span>`;

export const HTMLWarning = {
    name: 'Warning',
    render: () => CodePreview({
        title: 'Badge Warning - HTML',
        description: 'Exemplo de HTML para replicar o badge de alerta.',
        meta: badgeMeta,
        preview: warningHtml,
        code: warningHtml,
        language: 'markup',
        cssDependencies: badgeCssDependencies,
        jsDependencies: badgeJsDependencies,
        notes: badgeNotes,
    }),
};

const dangerHtml = `<span class="ds-badge ds-badge--danger ds-badge--md">Danger</span>`;

export const HTMLDanger = {
    name: 'Danger',
    render: () => CodePreview({
        title: 'Badge Danger - HTML',
        description: 'Exemplo de HTML para replicar o badge de erro ou perigo.',
        meta: badgeMeta,
        preview: dangerHtml,
        code: dangerHtml,
        language: 'markup',
        cssDependencies: badgeCssDependencies,
        jsDependencies: badgeJsDependencies,
        notes: badgeNotes,
    }),
};

const infoHtml = `<span class="ds-badge ds-badge--info ds-badge--md">Info</span>`;

export const HTMLInfo = {
    name: 'Info',
    render: () => CodePreview({
        title: 'Badge Info - HTML',
        description: 'Exemplo de HTML para replicar o badge informativo.',
        meta: badgeMeta,
        preview: infoHtml,
        code: infoHtml,
        language: 'markup',
        cssDependencies: badgeCssDependencies,
        jsDependencies: badgeJsDependencies,
        notes: badgeNotes,
    }),
};

const neutralHtml = `<span class="ds-badge ds-badge--neutral ds-badge--md">Neutral</span>`;

export const HTMLNeutral = {
    name: 'Neutral',
    render: () => CodePreview({
        title: 'Badge Neutral - HTML',
        description: 'Exemplo de HTML para replicar o badge neutro.',
        meta: badgeMeta,
        preview: neutralHtml,
        code: neutralHtml,
        language: 'markup',
        cssDependencies: badgeCssDependencies,
        jsDependencies: badgeJsDependencies,
        notes: badgeNotes,
    }),
};

const outlineHtml = `<span class="ds-badge ds-badge--outline ds-badge--md">Outline</span>`;

export const HTMLOutline = {
    name: 'Outline',
    render: () => CodePreview({
        title: 'Badge Outline - HTML',
        description: 'Exemplo de HTML para replicar o badge outline.',
        meta: badgeMeta,
        preview: outlineHtml,
        code: outlineHtml,
        language: 'markup',
        cssDependencies: badgeCssDependencies,
        jsDependencies: badgeJsDependencies,
        notes: badgeNotes,
    }),
};

const pillHtml = `<span class="ds-badge ds-badge--primary ds-badge--md ds-badge--pill">Pill</span>`;

export const HTMLPill = {
    name: 'Pill',
    render: () => CodePreview({
        title: 'Badge Pill - HTML',
        description: 'Exemplo de HTML para replicar o badge em formato pill.',
        meta: badgeMeta,
        preview: pillHtml,
        code: pillHtml,
        language: 'markup',
        cssDependencies: badgeCssDependencies,
        jsDependencies: badgeJsDependencies,
        notes: badgeNotes,
    }),
};
import { CodePreview } from '../../utils/codePreview';
import './textarea.css';
import '../input/input.css';

export default {
    title: 'Componentes/Textarea',
};

const textareaCssDependencies = [
    'src/styles/variables.css',
    'src/styles/typography.css',
    'src/styles/spacing.css',
    'src/styles/radius.css',
    'src/components/input/input.css',
    'src/components/textarea/textarea.css',
];

const textareaJsDependencies = [
    'Nenhum JavaScript obrigatório para uso visual do Textarea.',
];

const textareaMeta = {
    id: 'ds-textarea',
    status: 'Estável',
    version: '1.0.0',
    category: 'Components',
    updated: '2026-06-25',
};

const textareaNotes = [
    'O Textarea depende dos tokens globais do Design System MS.',
    'Use <code>ds-field</code> para agrupar label, campo e mensagens auxiliares.',
    'Use <code>ds-textarea</code> no elemento <code>textarea</code>.',
    'Associe o label ao textarea usando <code>for</code> e <code>id</code>.',
    'Para erro, use <code>aria-invalid="true"</code> e relacione a mensagem com <code>aria-describedby</code>.',
];

const textareaWhenUse = [
    'Coletar textos longos em formulários.',
    'Permitir descrições, mensagens, observações ou justificativas.',
    'Capturar informações que podem ocupar múltiplas linhas.',
    'Quando o usuário precisa escrever livremente com mais espaço visual.',
];

const textareaWhenNotUse = [
    'Para textos curtos, nesse caso utilize Input.',
    'Para seleção de opções, nesse caso utilize Select, Checkbox ou Radio.',
    'Para conteúdo apenas informativo, sem edição pelo usuário.',
    'Para campos com formatação avançada de texto, nesse caso utilize um editor apropriado.',
];

const textareaVariants = [
    '<code>Default</code> — campo de texto longo simples.',
    '<code>Com label</code> — textarea associado a um rótulo.',
    '<code>Com ajuda</code> — textarea com texto auxiliar.',
    '<code>Erro</code> — textarea inválido com mensagem relacionada.',
    '<code>Desabilitado</code> — textarea indisponível para edição.',
    '<code>Somente leitura</code> — textarea visível, mas não editável.',
];

function renderList(items) {
    return items.map((item) => `<li>${item}</li>`).join('');
}

function renderTextareaDocumentation() {
    return `
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Textarea</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para coletar textos longos, mensagens,
                        descrições ou observações em formulários.
                    </p>
                </div>

                <dl class="ds-component-doc__meta">
                    <div>
                        <dt>Status</dt>
                        <dd>${textareaMeta.status}</dd>
                    </div>

                    <div>
                        <dt>Versão</dt>
                        <dd>${textareaMeta.version}</dd>
                    </div>

                    <div>
                        <dt>Atualizado</dt>
                        <dd>${textareaMeta.updated}</dd>
                    </div>
                </dl>
            </header>

            <section class="ds-component-doc__grid">
                <article class="ds-component-doc__card">
                    <h2>Quando usar</h2>
                    <ul>
                        ${renderList(textareaWhenUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${renderList(textareaWhenNotUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${renderList(textareaVariants)}
                    </ul>
                </article>
            </section>
        </main>
    `;
}

export const Documentacao = {
    name: 'Documentação',
    render: () => renderTextareaDocumentation(),
};

const textareaDefaultHtml = `
<textarea
    class="ds-textarea"
    name="mensagem"
    placeholder="Digite sua mensagem"
></textarea>
`;

export const HTMLDefault = {
    name: 'Default',
    render: () => CodePreview({
        title: 'Textarea Default - HTML',
        description: 'Exemplo de HTML para replicar o campo de texto longo padrão.',
        meta: textareaMeta,
        preview: textareaDefaultHtml,
        code: textareaDefaultHtml,
        language: 'markup',
        cssDependencies: textareaCssDependencies,
        jsDependencies: textareaJsDependencies,
        notes: textareaNotes,
    }),
};

const textareaWithLabelHtml = `
<div class="ds-field">
    <label class="ds-field__label" for="textarea-mensagem">
        Mensagem
    </label>

    <textarea
        class="ds-textarea"
        id="textarea-mensagem"
        name="mensagem"
        placeholder="Digite sua mensagem"
    ></textarea>
</div>
`;

export const HTMLComLabel = {
    name: 'Com label',
    render: () => CodePreview({
        title: 'Textarea com Label - HTML',
        description: 'Exemplo de HTML para replicar o Textarea com label.',
        meta: textareaMeta,
        preview: textareaWithLabelHtml,
        code: textareaWithLabelHtml,
        language: 'markup',
        cssDependencies: textareaCssDependencies,
        jsDependencies: textareaJsDependencies,
        notes: textareaNotes,
    }),
};

const textareaWithHelpHtml = `
<div class="ds-field">
    <label class="ds-field__label" for="textarea-descricao">
        Descrição
    </label>

    <textarea
        class="ds-textarea"
        id="textarea-descricao"
        name="descricao"
        placeholder="Descreva sua solicitação"
        aria-describedby="textarea-descricao-help"
    ></textarea>

    <p class="ds-field__help" id="textarea-descricao-help">
        Informe os detalhes necessários para atendimento.
    </p>
</div>
`;

export const HTMLComAjuda = {
    name: 'Com ajuda',
    render: () => CodePreview({
        title: 'Textarea com Ajuda - HTML',
        description: 'Exemplo de HTML para replicar o Textarea com texto auxiliar.',
        meta: textareaMeta,
        preview: textareaWithHelpHtml,
        code: textareaWithHelpHtml,
        language: 'markup',
        cssDependencies: textareaCssDependencies,
        jsDependencies: textareaJsDependencies,
        notes: textareaNotes,
    }),
};

const textareaErrorHtml = `
<div class="ds-field is-error">
    <label class="ds-field__label" for="textarea-observacao">
        Observação <span class="ds-field__required" aria-hidden="true">*</span>
    </label>

    <textarea
        class="ds-textarea"
        id="textarea-observacao"
        name="observacao"
        placeholder="Digite uma observação"
        aria-invalid="true"
        aria-describedby="textarea-observacao-error"
        required
    ></textarea>

    <p class="ds-field__error" id="textarea-observacao-error">
        A observação é obrigatória.
    </p>
</div>
`;

export const HTMLErro = {
    name: 'Erro',
    render: () => CodePreview({
        title: 'Textarea com Erro - HTML',
        description: 'Exemplo de HTML para replicar o Textarea em estado de erro.',
        meta: textareaMeta,
        preview: textareaErrorHtml,
        code: textareaErrorHtml,
        language: 'markup',
        cssDependencies: textareaCssDependencies,
        jsDependencies: textareaJsDependencies,
        notes: textareaNotes,
    }),
};

const textareaDisabledHtml = `
<div class="ds-field">
    <label class="ds-field__label" for="textarea-disabled">
        Campo desabilitado
    </label>

    <textarea
        class="ds-textarea"
        id="textarea-disabled"
        name="disabled"
        disabled
    >Informação indisponível</textarea>
</div>
`;

export const HTMLDesabilitado = {
    name: 'Desabilitado',
    render: () => CodePreview({
        title: 'Textarea Desabilitado - HTML',
        description: 'Exemplo de HTML para replicar o Textarea desabilitado.',
        meta: textareaMeta,
        preview: textareaDisabledHtml,
        code: textareaDisabledHtml,
        language: 'markup',
        cssDependencies: textareaCssDependencies,
        jsDependencies: textareaJsDependencies,
        notes: textareaNotes,
    }),
};

const textareaReadonlyHtml = `
<div class="ds-field">
    <label class="ds-field__label" for="textarea-readonly">
        Somente leitura
    </label>

    <textarea
        class="ds-textarea"
        id="textarea-readonly"
        name="readonly"
        readonly
    >Mato Grosso do Sul</textarea>
</div>
`;

export const HTMLSomenteLeitura = {
    name: 'Somente leitura',
    render: () => CodePreview({
        title: 'Textarea Somente Leitura - HTML',
        description: 'Exemplo de HTML para replicar o Textarea somente leitura.',
        meta: textareaMeta,
        preview: textareaReadonlyHtml,
        code: textareaReadonlyHtml,
        language: 'markup',
        cssDependencies: textareaCssDependencies,
        jsDependencies: textareaJsDependencies,
        notes: textareaNotes,
    }),
};
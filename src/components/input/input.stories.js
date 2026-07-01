import { CodePreview } from '../../utils/codePreview';
import './input.css';

export default {
    title: 'Componentes/Input',
};

const inputCssDependencies = [
    'src/styles/variables.css',
    'src/styles/typography.css',
    'src/styles/spacing.css',
    'src/styles/radius.css',
    'src/components/input/input.css',
];

const inputJsDependencies = [
    'Nenhum JavaScript obrigatório para uso visual do Input.',
];

const inputMeta = {
    id: 'ds-input',
    status: 'Estável',
    version: '1.0.0',
    category: 'Components',
    updated: '2026-06-25',
};

const inputNotes = [
    'O Input depende dos tokens globais do Design System MS.',
    'Use <code>ds-field</code> para agrupar label, campo e mensagens auxiliares.',
    'Use <code>ds-input</code> no elemento <code>input</code>.',
    'Associe o label ao input usando <code>for</code> e <code>id</code>.',
    'Para erro, use <code>aria-invalid="true"</code> e relacione a mensagem com <code>aria-describedby</code>.',
    'Campos obrigatórios devem indicar visualmente a obrigatoriedade e manter informação acessível.',
];

const inputWhenUse = [
    'Coletar dados curtos em formulários.',
    'Permitir entrada de texto simples, e-mail, CPF, telefone ou outros valores objetivos.',
    'Capturar informações em páginas de cadastro, contato, filtros ou solicitações.',
    'Exibir campos com label, ajuda, erro, estado desabilitado ou somente leitura.',
];

const inputWhenNotUse = [
    'Para textos longos ou descrições extensas, nesse caso utilize Textarea.',
    'Para seleção entre opções predefinidas, nesse caso utilize Select, Checkbox ou Radio.',
    'Para executar ações, nesse caso utilize Button.',
    'Para busca com ícone e comportamento específico, nesse caso utilize Search.',
];

const inputVariants = [
    '<code>Default</code> — campo simples.',
    '<code>Com label</code> — campo associado a um rótulo.',
    '<code>Com ajuda</code> — campo com texto auxiliar.',
    '<code>Erro</code> — campo inválido com mensagem relacionada.',
    '<code>Desabilitado</code> — campo indisponível para edição.',
    '<code>Somente leitura</code> — campo visível, mas não editável.',
];

function renderList(items) {
    return items.map((item) => `<li>${item}</li>`).join('');
}

function renderInputDocumentation() {
    return `
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Input</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para coletar dados curtos do usuário em formulários,
                        filtros, cadastros e páginas de atendimento.
                    </p>
                </div>

                <dl class="ds-component-doc__meta">
                    <div>
                        <dt>Status</dt>
                        <dd>${inputMeta.status}</dd>
                    </div>

                    <div>
                        <dt>Versão</dt>
                        <dd>${inputMeta.version}</dd>
                    </div>

                    <div>
                        <dt>Atualizado</dt>
                        <dd>${inputMeta.updated}</dd>
                    </div>
                </dl>
            </header>

            <section class="ds-component-doc__grid">
                <article class="ds-component-doc__card">
                    <h2>Quando usar</h2>
                    <ul>
                        ${renderList(inputWhenUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${renderList(inputWhenNotUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${renderList(inputVariants)}
                    </ul>
                </article>
            </section>
        </main>
    `;
}

export const Documentacao = {
    name: 'Documentação',
    render: () => renderInputDocumentation(),
};

const inputDefaultHtml = `
<input
    class="ds-input"
    type="text"
    name="nome"
    placeholder="Digite seu nome"
>
`;

export const HTMLDefault = {
    name: 'Default',
    render: () => CodePreview({
        title: 'Input Default - HTML',
        description: 'Exemplo de HTML para replicar o campo de texto padrão.',
        meta: inputMeta,
        preview: inputDefaultHtml,
        code: inputDefaultHtml,
        language: 'markup',
        cssDependencies: inputCssDependencies,
        jsDependencies: inputJsDependencies,
        notes: inputNotes,
    }),
};

const inputWithLabelHtml = `
<div class="ds-field">
    <label class="ds-field__label" for="input-nome">
        Nome completo
    </label>

    <input
        class="ds-input"
        id="input-nome"
        type="text"
        name="nome"
        placeholder="Digite seu nome completo"
    >
</div>
`;

export const HTMLComLabel = {
    name: 'Com label',
    render: () => CodePreview({
        title: 'Input com Label - HTML',
        description: 'Exemplo de HTML para replicar o Input com label.',
        meta: inputMeta,
        preview: inputWithLabelHtml,
        code: inputWithLabelHtml,
        language: 'markup',
        cssDependencies: inputCssDependencies,
        jsDependencies: inputJsDependencies,
        notes: inputNotes,
    }),
};

const inputWithHelpHtml = `
<div class="ds-field">
    <label class="ds-field__label" for="input-email">
        E-mail
    </label>

    <input
        class="ds-input"
        id="input-email"
        type="email"
        name="email"
        placeholder="nome@exemplo.com"
        aria-describedby="input-email-help"
    >

    <p class="ds-field__help" id="input-email-help">
        Informe um e-mail válido para contato.
    </p>
</div>
`;

export const HTMLComAjuda = {
    name: 'Com ajuda',
    render: () => CodePreview({
        title: 'Input com Ajuda - HTML',
        description: 'Exemplo de HTML para replicar o Input com texto auxiliar.',
        meta: inputMeta,
        preview: inputWithHelpHtml,
        code: inputWithHelpHtml,
        language: 'markup',
        cssDependencies: inputCssDependencies,
        jsDependencies: inputJsDependencies,
        notes: inputNotes,
    }),
};

const inputErrorHtml = `
<div class="ds-field is-error">
    <label class="ds-field__label" for="input-cpf">
        CPF <span class="ds-field__required" aria-hidden="true">*</span>
    </label>

    <input
        class="ds-input"
        id="input-cpf"
        type="text"
        name="cpf"
        placeholder="000.000.000-00"
        aria-invalid="true"
        aria-describedby="input-cpf-error"
        required
    >

    <p class="ds-field__error" id="input-cpf-error">
        Informe um CPF válido.
    </p>
</div>
`;

export const HTMLErro = {
    name: 'Erro',
    render: () => CodePreview({
        title: 'Input com Erro - HTML',
        description: 'Exemplo de HTML para replicar o Input em estado de erro.',
        meta: inputMeta,
        preview: inputErrorHtml,
        code: inputErrorHtml,
        language: 'markup',
        cssDependencies: inputCssDependencies,
        jsDependencies: inputJsDependencies,
        notes: inputNotes,
    }),
};

const inputDisabledHtml = `
<div class="ds-field">
    <label class="ds-field__label" for="input-disabled">
        Campo desabilitado
    </label>

    <input
        class="ds-input"
        id="input-disabled"
        type="text"
        name="disabled"
        value="Informação indisponível"
        disabled
    >
</div>
`;

export const HTMLDesabilitado = {
    name: 'Desabilitado',
    render: () => CodePreview({
        title: 'Input Desabilitado - HTML',
        description: 'Exemplo de HTML para replicar o Input desabilitado.',
        meta: inputMeta,
        preview: inputDisabledHtml,
        code: inputDisabledHtml,
        language: 'markup',
        cssDependencies: inputCssDependencies,
        jsDependencies: inputJsDependencies,
        notes: inputNotes,
    }),
};

const inputReadonlyHtml = `
<div class="ds-field">
    <label class="ds-field__label" for="input-readonly">
        Somente leitura
    </label>

    <input
        class="ds-input"
        id="input-readonly"
        type="text"
        name="readonly"
        value="Mato Grosso do Sul"
        readonly
    >
</div>
`;

export const HTMLSomenteLeitura = {
    name: 'Somente leitura',
    render: () => CodePreview({
        title: 'Input Somente Leitura - HTML',
        description: 'Exemplo de HTML para replicar o Input somente leitura.',
        meta: inputMeta,
        preview: inputReadonlyHtml,
        code: inputReadonlyHtml,
        language: 'markup',
        cssDependencies: inputCssDependencies,
        jsDependencies: inputJsDependencies,
        notes: inputNotes,
    }),
};
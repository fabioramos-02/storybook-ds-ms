import { CodePreview } from '../../utils/codePreview';
import './select.css';
import '../input/input.css';

export default {
    title: 'Componentes/Select',
};

const selectCssDependencies = [
    'src/styles/variables.css',
    'src/styles/typography.css',
    'src/styles/spacing.css',
    'src/styles/radius.css',
    'src/components/input/input.css',
    'src/components/select/select.css',
];

const selectJsDependencies = [
    'Nenhum JavaScript obrigatório para uso visual do Select.',
];

const selectMeta = {
    id: 'ds-select',
    status: 'Estável',
    version: '1.0.0',
    category: 'Components',
    updated: '2026-06-25',
};

const selectNotes = [
    'O Select depende dos tokens globais do Design System MS.',
    'Use <code>ds-field</code> para agrupar label, campo e mensagens auxiliares.',
    'Use <code>ds-select</code> no elemento <code>select</code>.',
    'Associe o label ao select usando <code>for</code> e <code>id</code>.',
    'Para erro, use <code>aria-invalid="true"</code> e relacione a mensagem com <code>aria-describedby</code>.',
];

const selectWhenUse = [
    'Permitir a escolha de uma opção dentro de uma lista predefinida.',
    'Reduzir o espaço visual quando há várias opções disponíveis.',
    'Coletar informações em formulários, filtros ou cadastros.',
    'Selecionar cidade, serviço, categoria, assunto ou outros valores objetivos.',
];

const selectWhenNotUse = [
    'Para entrada livre de texto, nesse caso utilize Input.',
    'Para múltiplas escolhas simultâneas, nesse caso utilize Checkbox.',
    'Para escolher uma única opção visível entre poucas alternativas, avalie usar Radio.',
    'Para listas muito longas com busca, avalie usar Autocomplete.',
];

const selectVariants = [
    '<code>Default</code> — select simples.',
    '<code>Com label</code> — select associado a um rótulo.',
    '<code>Com ajuda</code> — select com texto auxiliar.',
    '<code>Erro</code> — select inválido com mensagem relacionada.',
    '<code>Desabilitado</code> — select indisponível para interação.',
];

function renderList(items) {
    return items.map((item) => `<li>${item}</li>`).join('');
}

function renderSelectDocumentation() {
    return `
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Select</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para permitir que o usuário escolha uma opção
                        dentro de uma lista predefinida em formulários e filtros.
                    </p>
                </div>

                <dl class="ds-component-doc__meta">
                    <div>
                        <dt>Status</dt>
                        <dd>${selectMeta.status}</dd>
                    </div>

                    <div>
                        <dt>Versão</dt>
                        <dd>${selectMeta.version}</dd>
                    </div>

                    <div>
                        <dt>Atualizado</dt>
                        <dd>${selectMeta.updated}</dd>
                    </div>
                </dl>
            </header>

            <section class="ds-component-doc__grid">
                <article class="ds-component-doc__card">
                    <h2>Quando usar</h2>
                    <ul>
                        ${renderList(selectWhenUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${renderList(selectWhenNotUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${renderList(selectVariants)}
                    </ul>
                </article>
            </section>
        </main>
    `;
}

export const Documentacao = {
    name: 'Documentação',
    render: () => renderSelectDocumentation(),
};

const selectDefaultHtml = `
<select class="ds-select" name="cidade">
    <option value="">Selecione uma opção</option>
    <option value="campo-grande">Campo Grande</option>
    <option value="dourados">Dourados</option>
    <option value="tres-lagoas">Três Lagoas</option>
</select>
`;

export const HTMLDefault = {
    name: 'Default',
    render: () => CodePreview({
        title: 'Select Default - HTML',
        description: 'Exemplo de HTML para replicar o Select padrão.',
        meta: selectMeta,
        preview: selectDefaultHtml,
        code: selectDefaultHtml,
        language: 'markup',
        cssDependencies: selectCssDependencies,
        jsDependencies: selectJsDependencies,
        notes: selectNotes,
    }),
};

const selectWithLabelHtml = `
<div class="ds-field">
    <label class="ds-field__label" for="select-cidade">
        Cidade
    </label>

    <select class="ds-select" id="select-cidade" name="cidade">
        <option value="">Selecione uma cidade</option>
        <option value="campo-grande">Campo Grande</option>
        <option value="dourados">Dourados</option>
        <option value="tres-lagoas">Três Lagoas</option>
    </select>
</div>
`;

export const HTMLComLabel = {
    name: 'Com label',
    render: () => CodePreview({
        title: 'Select com Label - HTML',
        description: 'Exemplo de HTML para replicar o Select com label.',
        meta: selectMeta,
        preview: selectWithLabelHtml,
        code: selectWithLabelHtml,
        language: 'markup',
        cssDependencies: selectCssDependencies,
        jsDependencies: selectJsDependencies,
        notes: selectNotes,
    }),
};

const selectWithHelpHtml = `
<div class="ds-field">
    <label class="ds-field__label" for="select-servico">
        Serviço
    </label>

    <select
        class="ds-select"
        id="select-servico"
        name="servico"
        aria-describedby="select-servico-help"
    >
        <option value="">Selecione um serviço</option>
        <option value="documentos">Documentos</option>
        <option value="saude">Saúde</option>
        <option value="educacao">Educação</option>
    </select>

    <p class="ds-field__help" id="select-servico-help">
        Escolha o serviço desejado para continuar.
    </p>
</div>
`;

export const HTMLComAjuda = {
    name: 'Com ajuda',
    render: () => CodePreview({
        title: 'Select com Ajuda - HTML',
        description: 'Exemplo de HTML para replicar o Select com texto auxiliar.',
        meta: selectMeta,
        preview: selectWithHelpHtml,
        code: selectWithHelpHtml,
        language: 'markup',
        cssDependencies: selectCssDependencies,
        jsDependencies: selectJsDependencies,
        notes: selectNotes,
    }),
};

const selectErrorHtml = `
<div class="ds-field is-error">
    <label class="ds-field__label" for="select-assunto">
        Assunto <span class="ds-field__required" aria-hidden="true">*</span>
    </label>

    <select
        class="ds-select"
        id="select-assunto"
        name="assunto"
        aria-invalid="true"
        aria-describedby="select-assunto-error"
        required
    >
        <option value="">Selecione um assunto</option>
        <option value="duvida">Dúvida</option>
        <option value="solicitacao">Solicitação</option>
        <option value="reclamacao">Reclamação</option>
    </select>

    <p class="ds-field__error" id="select-assunto-error">
        Selecione uma opção para continuar.
    </p>
</div>
`;

export const HTMLErro = {
    name: 'Erro',
    render: () => CodePreview({
        title: 'Select com Erro - HTML',
        description: 'Exemplo de HTML para replicar o Select em estado de erro.',
        meta: selectMeta,
        preview: selectErrorHtml,
        code: selectErrorHtml,
        language: 'markup',
        cssDependencies: selectCssDependencies,
        jsDependencies: selectJsDependencies,
        notes: selectNotes,
    }),
};

const selectDisabledHtml = `
<div class="ds-field">
    <label class="ds-field__label" for="select-disabled">
        Campo desabilitado
    </label>

    <select class="ds-select" id="select-disabled" name="disabled" disabled>
        <option value="">Informação indisponível</option>
    </select>
</div>
`;

export const HTMLDesabilitado = {
    name: 'Desabilitado',
    render: () => CodePreview({
        title: 'Select Desabilitado - HTML',
        description: 'Exemplo de HTML para replicar o Select desabilitado.',
        meta: selectMeta,
        preview: selectDisabledHtml,
        code: selectDisabledHtml,
        language: 'markup',
        cssDependencies: selectCssDependencies,
        jsDependencies: selectJsDependencies,
        notes: selectNotes,
    }),
};
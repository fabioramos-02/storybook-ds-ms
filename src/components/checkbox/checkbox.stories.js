import { CodePreview } from '../../utils/codePreview';
import './checkbox.css';

export default {
    title: 'Componentes/Checkbox',
};

const checkboxCssDependencies = [
    'src/styles/variables.css',
    'src/styles/typography.css',
    'src/styles/spacing.css',
    'src/styles/radius.css',
    'src/components/checkbox/checkbox.css',
];

const checkboxJsDependencies = [
    'Nenhum JavaScript obrigatório para uso visual do Checkbox.',
];

const checkboxMeta = {
    id: 'ds-checkbox',
    status: 'Estável',
    version: '1.0.0',
    category: 'Components',
    updated: '2026-06-25',
};

const checkboxNotes = [
    'O Checkbox depende dos tokens globais do Design System MS.',
    'Use <code>ds-checkbox</code> como wrapper do input, controle visual e texto.',
    'O <code>input</code> deve permanecer no HTML para manter acessibilidade e comportamento nativo.',
    'Associe o texto ao checkbox usando <code>label</code>.',
    'Para erro, use <code>aria-invalid="true"</code> e relacione a mensagem com <code>aria-describedby</code>.',
    'Para grupos, use <code>fieldset</code> e <code>legend</code>.',
];

const checkboxWhenUse = [
    'Permitir seleção de uma ou mais opções independentes.',
    'Confirmar aceite de termos, regras ou declarações.',
    'Ativar ou desativar preferências simples em formulários.',
    'Exibir listas de opções em que múltiplas respostas são possíveis.',
];

const checkboxWhenNotUse = [
    'Para escolher apenas uma opção entre várias, nesse caso utilize Radio.',
    'Para ações imediatas de liga/desliga, nesse caso utilize Switch.',
    'Para executar ações, nesse caso utilize Button.',
    'Para navegação entre páginas ou seções.',
];

const checkboxVariants = [
    '<code>Default</code> — estado padrão.',
    '<code>Checked</code> — opção selecionada.',
    '<code>Com ajuda</code> — com texto auxiliar.',
    '<code>Erro</code> — com <code>aria-invalid="true"</code>.',
    '<code>Desabilitado</code> — opção indisponível.',
    '<code>Grupo</code> — conjunto de checkboxes com <code>fieldset</code> e <code>legend</code>.',
];

function renderList(items) {
    return items.map((item) => `<li>${item}</li>`).join('');
}

function renderCheckboxDocumentation() {
    return `
        <main class="ds-component-doc">
            <header class="ds-component-doc__hero">
                <div>
                    <span class="ds-component-doc__eyebrow">
                        Componentes
                    </span>

                    <h1>Checkbox</h1>

                    <p class="ds-component-doc__description">
                        Componente utilizado para permitir que o usuário selecione uma ou mais
                        opções independentes dentro de formulários e listas de preferências.
                    </p>
                </div>

                <dl class="ds-component-doc__meta">
                    <div>
                        <dt>Status</dt>
                        <dd>${checkboxMeta.status}</dd>
                    </div>

                    <div>
                        <dt>Versão</dt>
                        <dd>${checkboxMeta.version}</dd>
                    </div>

                    <div>
                        <dt>Atualizado</dt>
                        <dd>${checkboxMeta.updated}</dd>
                    </div>
                </dl>
            </header>

            <section class="ds-component-doc__grid">
                <article class="ds-component-doc__card">
                    <h2>Quando usar</h2>
                    <ul>
                        ${renderList(checkboxWhenUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Quando não usar</h2>
                    <ul>
                        ${renderList(checkboxWhenNotUse)}
                    </ul>
                </article>

                <article class="ds-component-doc__card">
                    <h2>Variantes</h2>
                    <ul>
                        ${renderList(checkboxVariants)}
                    </ul>
                </article>
            </section>
        </main>
    `;
}

export const Documentacao = {
    name: 'Documentação',
    render: () => renderCheckboxDocumentation(),
};

const checkIcon = `
<svg class="ds-checkbox__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12L10 17L19 7"></path>
</svg>
`;

const checkboxDefaultHtml = `
<label class="ds-checkbox">
    <input class="ds-checkbox__input" type="checkbox" name="termos">

    <span class="ds-checkbox__control">
        ${checkIcon}
    </span>

    <span class="ds-checkbox__content">
        <span class="ds-checkbox__label">
            Aceito os termos de uso
        </span>
    </span>
</label>
`;

export const HTMLDefault = {
    name: 'Default',
    render: () => CodePreview({
        title: 'Checkbox Default - HTML',
        description: 'Exemplo de HTML para replicar o Checkbox padrão.',
        meta: checkboxMeta,
        preview: checkboxDefaultHtml,
        code: checkboxDefaultHtml,
        language: 'markup',
        cssDependencies: checkboxCssDependencies,
        jsDependencies: checkboxJsDependencies,
        notes: checkboxNotes,
    }),
};

const checkboxCheckedHtml = `
<label class="ds-checkbox">
    <input class="ds-checkbox__input" type="checkbox" name="notificacoes" checked>

    <span class="ds-checkbox__control">
        ${checkIcon}
    </span>

    <span class="ds-checkbox__content">
        <span class="ds-checkbox__label">
            Receber notificações
        </span>
    </span>
</label>
`;

export const HTMLChecked = {
    name: 'Checked',
    render: () => CodePreview({
        title: 'Checkbox Checked - HTML',
        description: 'Exemplo de HTML para replicar o Checkbox selecionado.',
        meta: checkboxMeta,
        preview: checkboxCheckedHtml,
        code: checkboxCheckedHtml,
        language: 'markup',
        cssDependencies: checkboxCssDependencies,
        jsDependencies: checkboxJsDependencies,
        notes: checkboxNotes,
    }),
};

const checkboxHelpHtml = `
<label class="ds-checkbox">
    <input class="ds-checkbox__input" type="checkbox" name="informativos">

    <span class="ds-checkbox__control">
        ${checkIcon}
    </span>

    <span class="ds-checkbox__content">
        <span class="ds-checkbox__label">
            Quero receber informativos
        </span>

        <span class="ds-checkbox__help">
            Você pode alterar essa opção a qualquer momento.
        </span>
    </span>
</label>
`;

export const HTMLComAjuda = {
    name: 'Com ajuda',
    render: () => CodePreview({
        title: 'Checkbox com Ajuda - HTML',
        description: 'Exemplo de HTML para replicar o Checkbox com texto auxiliar.',
        meta: checkboxMeta,
        preview: checkboxHelpHtml,
        code: checkboxHelpHtml,
        language: 'markup',
        cssDependencies: checkboxCssDependencies,
        jsDependencies: checkboxJsDependencies,
        notes: checkboxNotes,
    }),
};

const checkboxErrorHtml = `
<div>
    <label class="ds-checkbox is-error">
        <input
            class="ds-checkbox__input"
            type="checkbox"
            name="confirmacao"
            aria-invalid="true"
            aria-describedby="checkbox-error"
        >

        <span class="ds-checkbox__control">
            ${checkIcon}
        </span>

        <span class="ds-checkbox__content">
            <span class="ds-checkbox__label">
                Confirmo que li as informações
            </span>
        </span>
    </label>

    <p class="ds-checkbox-group__error" id="checkbox-error">
        É necessário confirmar antes de continuar.
    </p>
</div>
`;

export const HTMLErro = {
    name: 'Erro',
    render: () => CodePreview({
        title: 'Checkbox com Erro - HTML',
        description: 'Exemplo de HTML para replicar o Checkbox em estado de erro.',
        meta: checkboxMeta,
        preview: checkboxErrorHtml,
        code: checkboxErrorHtml,
        language: 'markup',
        cssDependencies: checkboxCssDependencies,
        jsDependencies: checkboxJsDependencies,
        notes: checkboxNotes,
    }),
};

const checkboxDisabledHtml = `
<label class="ds-checkbox is-disabled">
    <input class="ds-checkbox__input" type="checkbox" name="desabilitado" disabled>

    <span class="ds-checkbox__control">
        ${checkIcon}
    </span>

    <span class="ds-checkbox__content">
        <span class="ds-checkbox__label">
            Opção indisponível
        </span>
    </span>
</label>
`;

export const HTMLDesabilitado = {
    name: 'Desabilitado',
    render: () => CodePreview({
        title: 'Checkbox Desabilitado - HTML',
        description: 'Exemplo de HTML para replicar o Checkbox desabilitado.',
        meta: checkboxMeta,
        preview: checkboxDisabledHtml,
        code: checkboxDisabledHtml,
        language: 'markup',
        cssDependencies: checkboxCssDependencies,
        jsDependencies: checkboxJsDependencies,
        notes: checkboxNotes,
    }),
};

const checkboxGroupHtml = `
<fieldset class="ds-checkbox-group">
    <legend class="ds-checkbox-group__legend">
        Selecione os serviços desejados
    </legend>

    <label class="ds-checkbox">
        <input class="ds-checkbox__input" type="checkbox" name="servicos[]" value="documentos">

        <span class="ds-checkbox__control">
            ${checkIcon}
        </span>

        <span class="ds-checkbox__content">
            <span class="ds-checkbox__label">Documentos</span>
        </span>
    </label>

    <label class="ds-checkbox">
        <input class="ds-checkbox__input" type="checkbox" name="servicos[]" value="saude" checked>

        <span class="ds-checkbox__control">
            ${checkIcon}
        </span>

        <span class="ds-checkbox__content">
            <span class="ds-checkbox__label">Saúde</span>
        </span>
    </label>

    <label class="ds-checkbox">
        <input class="ds-checkbox__input" type="checkbox" name="servicos[]" value="educacao">

        <span class="ds-checkbox__control">
            ${checkIcon}
        </span>

        <span class="ds-checkbox__content">
            <span class="ds-checkbox__label">Educação</span>
        </span>
    </label>
</fieldset>
`;

export const HTMLGrupo = {
    name: 'Grupo',
    render: () => CodePreview({
        title: 'Checkbox Grupo - HTML',
        description: 'Exemplo de HTML para replicar um grupo de Checkboxes.',
        meta: checkboxMeta,
        preview: checkboxGroupHtml,
        code: checkboxGroupHtml,
        language: 'markup',
        cssDependencies: checkboxCssDependencies,
        jsDependencies: checkboxJsDependencies,
        notes: checkboxNotes,
    }),
};
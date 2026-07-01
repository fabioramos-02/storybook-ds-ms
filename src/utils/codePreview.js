import Prism from 'prismjs';

import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';

import { ComponentMeta } from './ComponentMeta';

import 'prism-themes/themes/prism-dracula.css';

export function highlightCode(code = '', language = 'markup') {
    const grammar = Prism.languages[language] || Prism.languages.markup;

    return Prism.highlight(code, grammar, language);
}

export function escapeHtml(code = '') {
    return code
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}

export function CodePreview({
    title = 'HTML',
    description = 'Exemplo de marcação HTML para uso do componente.',
    preview = '',
    code = '',
    language = 'markup',
    cssDependencies = [],
    jsDependencies = [],
    notes = [],
    meta = {},
} = {}) {
    const cssList = cssDependencies.length
        ? cssDependencies.map((item) => `<li><code>${item}</code></li>`).join('')
        : '<li>Sem dependência CSS específica.</li>';

    const jsList = jsDependencies.length
        ? jsDependencies.map((item) => `<li><code>${item}</code></li>`).join('')
        : '<li>Sem dependência JavaScript.</li>';

    const notesList = notes.length
        ? notes.map((item) => `<li>${item}</li>`).join('')
        : '<li>Use as classes indicadas no HTML para manter o padrão visual do Design System.</li>';

    const highlightedCode = code
        ? highlightCode(code.trim(), language)
        : '';

    return `
        <section style="
            max-width: 1040px;
            padding: 32px;
            font-family: var(--ds-font-family-body);
            color: var(--ds-color-text-primary);
        ">
            <header style="margin-bottom: 32px;">
                <h1 style="
                    margin: 0 0 12px;
                    font-family: var(--ds-font-family-heading);
                    font-size: var(--ds-heading-2-font-size);
                    line-height: var(--ds-heading-2-line-height);
                ">
                    ${title}
                </h1>

                <p style="
                    margin: 0;
                    max-width: 760px;
                    color: var(--ds-color-text-secondary);
                    font-size: var(--ds-body-md-font-size);
                    line-height: var(--ds-body-md-line-height);
                ">
                    ${description}
                </p>

                ${ComponentMeta(meta)}
            </header>

            <div
                onclick="
                    const link = event.target.closest('a');

                    if (link && link.getAttribute('href') === '#') {
                        event.preventDefault();
                    }
                "
                style="
                    margin-bottom: 32px;
                    padding: 32px;
                    border: 1px solid var(--ds-color-border);
                    border-radius: var(--ds-radius-md);
                    background: var(--ds-color-background);
                "
            >
                ${preview}
            </div>

            ${code ? `
                <div
                    data-code-preview
                    style="
                        position: relative;
                        margin-bottom: 32px;
                        border-radius: var(--ds-radius-md);
                        overflow: hidden;
                        background: #282a36;
                    "
                >
                    <div style="
                        display: flex;
                        justify-content: flex-end;
                        gap: 8px;
                        padding: 8px;
                        background: #1f2029;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                    ">
                        <button
                            type="button"
                            onclick="
                                const wrapper = this.closest('[data-code-preview]');
                                const pre = wrapper.querySelector('pre');
                                const isHidden = pre.style.display === 'none';

                                pre.style.display = isHidden ? 'block' : 'none';
                                this.textContent = isHidden ? 'Hide code' : 'Show code';
                            "
                            style="
                                min-height: 32px;
                                padding: 0 12px;
                                border: 1px solid rgba(255, 255, 255, 0.2);
                                border-radius: 4px;
                                background: #ffffff;
                                color: #1d1d1b;
                                font-size: 12px;
                                font-weight: 700;
                                cursor: pointer;
                            "
                        >
                            Hide code
                        </button>

                        <button
                            type="button"
                            onclick="
                                const wrapper = this.closest('[data-code-preview]');
                                const textarea = wrapper.querySelector('textarea');

                                navigator.clipboard.writeText(textarea.value);

                                const originalText = this.textContent;
                                this.textContent = 'Copied';

                                setTimeout(() => {
                                    this.textContent = originalText;
                                }, 1500);
                            "
                            style="
                                min-height: 32px;
                                padding: 0 12px;
                                border: 1px solid rgba(255, 255, 255, 0.2);
                                border-radius: 4px;
                                background: #000000;
                                color: #ffffff;
                                font-size: 12px;
                                font-weight: 700;
                                cursor: pointer;
                            "
                        >
                            Copy
                        </button>
                    </div>

                    <textarea style="display: none;">${escapeHtml(code.trim())}</textarea>

                    <pre class="language-${language}" style="
                        margin: 0;
                        padding: 24px;
                        overflow: auto;
                        border-radius: 0;
                        font-size: 14px;
                        line-height: 1.6;
                    "><code class="language-${language}">${highlightedCode}</code></pre>
                </div>
            ` : ''}

            <div style="
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
                gap: 24px;
                margin-bottom: 32px;
            ">
                <article style="
                    padding: 20px;
                    border: 1px solid var(--ds-color-border);
                    border-radius: var(--ds-radius-md);
                    background: var(--ds-color-background-muted);
                ">
                    <h2 style="
                        margin: 0 0 12px;
                        font-family: var(--ds-font-family-heading);
                        font-size: var(--ds-heading-5-font-size);
                        line-height: var(--ds-heading-5-line-height);
                    ">
                        CSS necessário
                    </h2>

                    <ul style="
                        margin: 0;
                        padding-left: 20px;
                        color: var(--ds-color-text-secondary);
                        font-size: var(--ds-body-sm-font-size);
                        line-height: var(--ds-body-sm-line-height);
                    ">
                        ${cssList}
                    </ul>
                </article>

                <article style="
                    padding: 20px;
                    border: 1px solid var(--ds-color-border);
                    border-radius: var(--ds-radius-md);
                    background: var(--ds-color-background-muted);
                ">
                    <h2 style="
                        margin: 0 0 12px;
                        font-family: var(--ds-font-family-heading);
                        font-size: var(--ds-heading-5-font-size);
                        line-height: var(--ds-heading-5-line-height);
                    ">
                        JavaScript necessário
                    </h2>

                    <ul style="
                        margin: 0;
                        padding-left: 20px;
                        color: var(--ds-color-text-secondary);
                        font-size: var(--ds-body-sm-font-size);
                        line-height: var(--ds-body-sm-line-height);
                    ">
                        ${jsList}
                    </ul>
                </article>
            </div>

            <article style="
                margin-bottom: 32px;
                padding: 20px;
                border-left: 4px solid var(--ds-color-primary-600);
                border-radius: var(--ds-radius-sm);
                background: var(--ds-color-background-muted);
            ">
                <h2 style="
                    margin: 0 0 12px;
                    font-family: var(--ds-font-family-heading);
                    font-size: var(--ds-heading-5-font-size);
                    line-height: var(--ds-heading-5-line-height);
                ">
                    Observações
                </h2>

                <ul style="
                    margin: 0;
                    padding-left: 20px;
                    color: var(--ds-color-text-secondary);
                    font-size: var(--ds-body-sm-font-size);
                    line-height: var(--ds-body-sm-line-height);
                ">
                    ${notesList}
                </ul>
            </article>
        </section>
    `;
}
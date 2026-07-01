export function ComponentPage({
    title,
    description,
    meta,
    preview,
    code,
    cssDependencies = [],
    jsDependencies = [],
    whenUse = [],
    whenNotUse = [],
    accessibility = [],
    bestPractices = [],
    donts = [],
}) {
    return `
        <main class="ds-doc-page">
            <header class="ds-doc-hero">
                <div>
                    <span class="ds-doc-eyebrow">${meta.category}</span>
                    <h1>${title}</h1>
                    <p>${description}</p>
                </div>

                <dl class="ds-doc-meta">
                    <div>
                        <dt>Status</dt>
                        <dd>${meta.status}</dd>
                    </div>
                    <div>
                        <dt>Versão</dt>
                        <dd>${meta.version}</dd>
                    </div>
                    <div>
                        <dt>Atualizado</dt>
                        <dd>${meta.updated}</dd>
                    </div>
                </dl>
            </header>

            ${sectionList('Quando usar', whenUse)}
            ${sectionList('Quando não usar', whenNotUse)}

            <section class="ds-doc-section">
                <h2>Preview</h2>
                <div class="ds-doc-preview">
                    ${preview}
                </div>
            </section>

            <section class="ds-doc-section">
                <h2>HTML</h2>
                <pre class="ds-doc-code"><code>${escapeHtml(code)}</code></pre>
            </section>

            ${sectionList('CSS necessário', cssDependencies)}
            ${sectionList('JavaScript', jsDependencies)}
            ${sectionList('Acessibilidade', accessibility)}
            ${sectionList('Boas práticas', bestPractices)}
            ${sectionList('Não faça', donts)}
        </main>
    `;
}

function sectionList(title, items = []) {
    if (!items.length) return '';

    return `
        <section class="ds-doc-section">
            <h2>${title}</h2>
            <ul class="ds-doc-list">
                ${items.map((item) => `<li>${item}</li>`).join('')}
            </ul>
        </section>
    `;
}

function escapeHtml(html) {
    return html
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;');
}
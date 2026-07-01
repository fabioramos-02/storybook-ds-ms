import './search.css';

export function createSearch({
    placeholder = 'Pesquisar...',
    value = '',
    action = '#',
    method = 'get',
    name = 's',
} = {}) {
    const form = document.createElement('form');

    form.className = 'ds-search';

    form.setAttribute('role', 'search');
    form.setAttribute('action', action);
    form.setAttribute('method', method);

    form.innerHTML = `
        <input
            class="ds-search-input"
            type="search"
            name="${name}"
            value="${value}"
            placeholder="${placeholder}"
            aria-label="${placeholder}"
        >

        <button class="ds-search-button" type="submit" aria-label="Pesquisar">
            <svg
                class="ds-search-icon"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                focusable="false"
            >
                <circle cx="11" cy="11" r="7"></circle>
                <path d="M16.5 16.5L21 21"></path>
            </svg>
        </button>
    `;

    return form;
}
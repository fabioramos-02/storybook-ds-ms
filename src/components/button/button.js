import './button.css';

export function Button({
    label = 'Botão',
    href = '#',
    variant = 'primary',
    size = 'md',
    target = '_self',
    disabled = false,
    type = 'link',
} = {}) {
    const classes = [
        'ds-button',
        `ds-button--${variant}`,
        `ds-button--${size}`,
        disabled ? 'is-disabled' : '',
    ]
        .filter(Boolean)
        .join(' ');

    if (type === 'button') {
        return `
            <button
                class="${classes}"
                type="button"
                ${disabled ? 'disabled' : ''}
            >
                ${label}
            </button>
        `;
    }

    return `
        <a
            class="${classes}"
            href="${disabled ? '#' : href}"
            target="${target}"
            ${disabled ? 'aria-disabled="true" tabindex="-1"' : ''}
        >
            ${label}
        </a>
    `;
}
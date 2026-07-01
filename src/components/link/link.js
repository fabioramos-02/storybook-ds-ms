import './link.css';

export function Link({
    label = 'Saiba mais',
    href = '#',
    target = '_self',
    size = 'md',
    variant = 'primary',
    underline = true,
    icon = '',
    iconPosition = 'right',
    disabled = false,
} = {}) {
    const classes = [
        'ds-link',
        `ds-link--${size}`,
        `ds-link--${variant}`,
        !underline ? 'ds-link--no-underline' : '',
        disabled ? 'ds-link--disabled' : '',
    ]
        .filter(Boolean)
        .join(' ');

    const iconHtml = icon
        ? `<span class="ds-link__icon" aria-hidden="true">${icon}</span>`
        : '';

    return `
        <a
            class="${classes}"
            href="${disabled ? '#' : href}"
            target="${target}"
            ${disabled ? 'aria-disabled="true" tabindex="-1"' : ''}
        >
            ${icon && iconPosition === 'left' ? iconHtml : ''}
            <span>${label}</span>
            ${icon && iconPosition === 'right' ? iconHtml : ''}
        </a>
    `;
}
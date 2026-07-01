import './badge.css';

export function Badge({
    label = 'Badge',
    variant = 'primary',
    size = 'md',
    pill = false,
} = {}) {
    const classes = [
        'ds-badge',
        `ds-badge--${variant}`,
        `ds-badge--${size}`,
        pill ? 'ds-badge--pill' : '',
    ]
        .filter(Boolean)
        .join(' ');

    return `
        <span class="${classes}">
            ${label}
        </span>
    `;
}
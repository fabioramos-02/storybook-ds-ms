import './alert.css';

const icons = {
    info: 'i',
    success: '✓',
    warning: '!',
    danger: '!',
    neutral: 'i',
};

export function Alert({
    title = 'Título do alerta',
    description = 'Descrição breve da mensagem de alerta.',
    variant = 'info',
    size = 'md',
    icon = '',
} = {}) {
    const classes = [
        'ds-alert',
        `ds-alert--${variant}`,
        `ds-alert--${size}`,
    ]
        .filter(Boolean)
        .join(' ');

    const iconValue = icon || icons[variant] || icons.info;

    return `
        <div class="${classes}" role="status">
            <span class="ds-alert__icon" aria-hidden="true">
                ${iconValue}
            </span>

            <div class="ds-alert__content">
                <h3 class="ds-alert__title">${title}</h3>

                <p class="ds-alert__description">
                    ${description}
                </p>
            </div>
        </div>
    `;
}
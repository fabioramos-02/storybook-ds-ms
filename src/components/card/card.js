import './card.css';

export function Card({
    eyebrow = 'Institucional',
    title = 'Título do card',
    description = 'Descrição breve do conteúdo do card para apresentar uma informação importante ao usuário.',
    image = '',
    href = '#',
    linkLabel = 'Saiba mais',
    variant = 'default',
} = {}) {
    const classes = [
        'ds-card',
        variant !== 'default' ? `ds-card--${variant}` : '',
    ]
        .filter(Boolean)
        .join(' ');

    const imageHtml = image
        ? `
            <div class="ds-card__image-wrapper">
                <img class="ds-card__image" src="${image}" alt="">
            </div>
        `
        : '';

    return `
        <article class="${classes}">
            ${imageHtml}

            <div class="ds-card__content">
                ${eyebrow ? `<p class="ds-card__eyebrow">${eyebrow}</p>` : ''}

                <h3 class="ds-card__title">${title}</h3>

                <p class="ds-card__description">${description}</p>

                <div class="ds-card__actions">
                    <a class="ds-card__link" href="${href}">
                        ${linkLabel}
                    </a>
                </div>
            </div>
        </article>
    `;
}
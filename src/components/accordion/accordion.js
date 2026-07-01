import './accordion.css';

export function Accordion({
    items = [
        {
            title: 'O que é o programa?',
            content: 'Este programa reúne informações, serviços e orientações para facilitar o acesso do cidadão.',
        },
        {
            title: 'Quem pode participar?',
            content: 'A participação depende dos critérios definidos pelo órgão responsável pelo serviço.',
        },
        {
            title: 'Como acessar?',
            content: 'O acesso pode ser feito pelo portal oficial, presencialmente ou pelos canais de atendimento informados.',
        },
    ],
    allowMultiple = false,
    firstOpen = false,
    variant = 'default',
} = {}) {
    const accordionId = `ds-accordion-${Math.random().toString(36).substring(2, 9)}`;

    const classes = [
        'ds-accordion',
        variant !== 'default' ? `ds-accordion--${variant}` : '',
    ]
        .filter(Boolean)
        .join(' ');

    setTimeout(() => {
        const accordion = document.getElementById(accordionId);

        if (!accordion) {
            return;
        }

        const buttons = accordion.querySelectorAll('.ds-accordion__button');

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const panelId = button.getAttribute('aria-controls');
                const panel = document.getElementById(panelId);
                const isExpanded = button.getAttribute('aria-expanded') === 'true';

                if (!allowMultiple) {
                    buttons.forEach((currentButton) => {
                        const currentPanelId = currentButton.getAttribute('aria-controls');
                        const currentPanel = document.getElementById(currentPanelId);

                        currentButton.setAttribute('aria-expanded', 'false');

                        if (currentPanel) {
                            currentPanel.classList.remove('is-open');
                        }
                    });
                }

                button.setAttribute('aria-expanded', String(!isExpanded));

                if (panel) {
                    panel.classList.toggle('is-open', !isExpanded);
                }
            });
        });
    }, 0);

    const htmlItems = items.map((item, index) => {
        const buttonId = `${accordionId}-button-${index}`;
        const panelId = `${accordionId}-panel-${index}`;
        const isOpen = firstOpen && index === 0;

        return `
            <div class="ds-accordion__item">
                <h3 class="ds-accordion__heading">
                    <button
                        id="${buttonId}"
                        class="ds-accordion__button"
                        type="button"
                        aria-expanded="${isOpen ? 'true' : 'false'}"
                        aria-controls="${panelId}"
                    >
                        <span>${item.title}</span>
                        <span class="ds-accordion__icon" aria-hidden="true">+</span>
                    </button>
                </h3>

                <div
                    id="${panelId}"
                    class="ds-accordion__panel ${isOpen ? 'is-open' : ''}"
                    role="region"
                    aria-labelledby="${buttonId}"
                >
                    <p>${item.content}</p>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div id="${accordionId}" class="${classes}">
            ${htmlItems}
        </div>
    `;
}
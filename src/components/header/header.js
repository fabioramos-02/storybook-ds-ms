export function initHeader() {
    const headers = document.querySelectorAll('.ds-header');

    headers.forEach((header) => {
        const button = header.querySelector('.ds-header__menu-button');
        const navigation = header.querySelector('.ds-header__navigation');

        if (!button || !navigation) {
            return;
        }

        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            button.setAttribute('aria-expanded', String(!isExpanded));
            navigation.classList.toggle('is-open', !isExpanded);
        });
    });
}
import './toast.css';

export function createToast({
    variant = 'info',
    title = 'Informação',
    message = 'Mensagem do toast.',
    dismissible = true,
} = {}) {
    const toast = document.createElement('div');

    toast.className = [
        'ms-toast',
        `ms-toast-${variant}`,
    ].join(' ');

    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');

    const icons = {
        success: '✓',
        info: 'i',
        warning: '!',
        danger: '×',
    };

    toast.innerHTML = `
        <span class="ms-toast-icon" aria-hidden="true">
            ${icons[variant] || icons.info}
        </span>

        <div class="ms-toast-content">
            <strong class="ms-toast-title">${title}</strong>
            <p class="ms-toast-message">${message}</p>
        </div>

        ${
            dismissible
                ? '<button class="ms-toast-close" type="button" aria-label="Fechar aviso">×</button>'
                : ''
        }
    `;

    const closeButton = toast.querySelector('.ms-toast-close');

    if (closeButton) {
        closeButton.addEventListener('click', () => {
            toast.classList.add('is-hidden');
        });
    }

    return toast;
}
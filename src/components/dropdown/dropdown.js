import './dropdown.css';

export function initDropdown(root) {
    const dropdown = root instanceof HTMLElement ? root : document.querySelector(root);

    if (!dropdown) {
        return null;
    }

    const trigger = dropdown.querySelector('.ds-dropdown__trigger');
    const menu = dropdown.querySelector('.ds-dropdown__menu');
    const links = Array.from(dropdown.querySelectorAll('.ds-dropdown__link'));

    if (!trigger || !menu) {
        return null;
    }

    function open() {
        dropdown.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
    }

    function close() {
        dropdown.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
    }

    function toggle() {
        if (dropdown.classList.contains('is-open')) {
            close();
        } else {
            open();
        }
    }

    trigger.addEventListener('click', (event) => {
        event.preventDefault();
        toggle();
    });

    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            close();
        }
    });

    dropdown.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            close();
            trigger.focus();
        }

        if (event.key === 'ArrowDown') {
            event.preventDefault();
            open();
            links[0]?.focus();
        }

        if (event.key === 'ArrowUp') {
            event.preventDefault();
            open();
            links[links.length - 1]?.focus();
        }
    });

    links.forEach((link, index) => {
        link.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                links[(index + 1) % links.length]?.focus();
            }

            if (event.key === 'ArrowUp') {
                event.preventDefault();
                links[(index - 1 + links.length) % links.length]?.focus();
            }
        });
    });

    close();

    return {
        open,
        close,
        toggle,
    };
}

export function initAllDropdowns() {
    return Array.from(document.querySelectorAll('.ds-dropdown')).map((dropdown) =>
        initDropdown(dropdown)
    );
}
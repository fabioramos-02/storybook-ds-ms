import './carousel.css';

export function initCarousel(root) {
    const carousel = root instanceof HTMLElement ? root : document.querySelector(root);

    if (!carousel) {
        return null;
    }

    const track = carousel.querySelector('.ds-carousel__track');
    const slides = Array.from(carousel.querySelectorAll('.ds-carousel__slide'));
    const prevButton = carousel.querySelector('.ds-carousel__control--prev');
    const nextButton = carousel.querySelector('.ds-carousel__control--next');
    const dots = Array.from(carousel.querySelectorAll('.ds-carousel__dot'));

    const autoplay = carousel.dataset.autoplay === 'true';
    const interval = Number(carousel.dataset.interval || 4000);

    let currentIndex = 0;
    let timer = null;
    let paused = false;

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        slides.forEach((slide, index) => {
            slide.setAttribute('aria-hidden', String(index !== currentIndex));
        });

        dots.forEach((dot, index) => {
            dot.setAttribute('aria-current', String(index === currentIndex));
        });
    }

    function goTo(index) {
        currentIndex = (index + slides.length) % slides.length;
        updateCarousel();
    }

    function startAutoplay() {
        stopAutoplay();

        if (!autoplay) {
            return;
        }

        timer = window.setInterval(() => {
            if (!paused) {
                goTo(currentIndex + 1);
            }
        }, interval);
    }

    function stopAutoplay() {
        if (timer) {
            window.clearInterval(timer);
            timer = null;
        }
    }

    prevButton?.addEventListener('click', () => {
        goTo(currentIndex - 1);
    });

    nextButton?.addEventListener('click', () => {
        goTo(currentIndex + 1);
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goTo(index);
        });
    });

    carousel.addEventListener('mouseenter', () => {
        paused = true;
    });

    carousel.addEventListener('mouseleave', () => {
        paused = false;
    });

    carousel.addEventListener('focusin', () => {
        paused = true;
    });

    carousel.addEventListener('focusout', () => {
        paused = false;
    });

    carousel.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            event.preventDefault();
            goTo(currentIndex - 1);
        }

        if (event.key === 'ArrowRight') {
            event.preventDefault();
            goTo(currentIndex + 1);
        }
    });

    updateCarousel();
    startAutoplay();

    return {
        goTo,
        startAutoplay,
        stopAutoplay,
        destroy() {
            stopAutoplay();
        },
    };
}

export function initAllCarousels() {
    return Array.from(document.querySelectorAll('.ds-carousel')).map((carousel) =>
        initCarousel(carousel)
    );
}
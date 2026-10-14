document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    if (!navbar) {
        return;
    }

    const toggle = document.getElementById('navbarToggle');
    const menu = navbar.querySelector('.navbar-menu');
    const scrim = document.getElementById('navbarScrim');

    if (!toggle || !menu) {
        return;
    }

    const updateScrollState = () => {
        navbar.classList.toggle('scrolled', window.scrollY > 20);
    };

    const closeMenu = (restoreFocus = false) => {
        navbar.classList.remove('menu-open');
        menu.setAttribute('aria-hidden', 'true');
        menu.setAttribute('inert', '');
        scrim?.setAttribute('aria-hidden', 'true');
        scrim?.setAttribute('inert', '');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Buka menu navigasi');
        document.body.style.overflow = '';

        if (restoreFocus) {
            toggle.focus();
        }
    };

    const openMenu = () => {
        navbar.classList.add('menu-open');
        menu.removeAttribute('aria-hidden');
        menu.removeAttribute('inert');
        scrim?.removeAttribute('aria-hidden');
        scrim?.removeAttribute('inert');
        toggle.setAttribute('aria-expanded', 'true');
        toggle.setAttribute('aria-label', 'Tutup menu navigasi');
        document.body.style.overflow = 'hidden';
        menu.querySelector('a')?.focus({ preventScroll: true });
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });

    toggle.addEventListener('click', (event) => {
        event.stopPropagation();
        if (navbar.classList.contains('menu-open')) {
            closeMenu(true);
        } else {
            openMenu();
        }
    });

    menu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', (event) => {
            const target = document.querySelector(link.hash);
            if (!target) {
                return;
            }

            event.preventDefault();
            closeMenu();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            history.replaceState(null, '', link.hash);
        });
    });

    scrim?.addEventListener('click', () => closeMenu(true));

    document.querySelector('.brand-logo')?.addEventListener('click', () => {
        if (navbar.classList.contains('menu-open')) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navbar.classList.contains('menu-open')) {
            closeMenu(true);
        }

        if (event.key === 'Tab' && navbar.classList.contains('menu-open')) {
            const focusable = [...menu.querySelectorAll('a[href]')];
            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last?.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first?.focus();
            }
        }
    });
});
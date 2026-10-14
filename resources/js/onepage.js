document.addEventListener('DOMContentLoaded', () => {
    const productModal = document.getElementById('productModal');
    const productButtons = document.querySelectorAll('.product-button');
    const activityLightbox = document.getElementById('activityLightbox');
    const contactForm = document.getElementById('contactForm');
    const trustedSlider = document.querySelector('.trusted-slider');
    const locationFocusButton = document.getElementById('focusCompanyLocation');
    const companyLocationMap = document.getElementById('companyLocationMap');
    let previousFocus = null;

    const closeDialog = (dialog) => {
        if (!dialog?.classList.contains('active')) {
            return;
        }

        dialog.classList.remove('active');
        dialog.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        previousFocus?.focus({ preventScroll: true });
        previousFocus = null;
    };

    const openDialog = (dialog) => {
        if (!dialog) {
            return;
        }

        previousFocus = document.activeElement;
        dialog.classList.add('active');
        dialog.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        dialog.querySelector('button')?.focus({ preventScroll: true });
    };

    if (trustedSlider) {
        const setCarouselPaused = (paused) => {
            trustedSlider.classList.toggle('is-paused', paused);
        };

        const resumeCarousel = () => setCarouselPaused(false);

        trustedSlider.addEventListener('pointerenter', () => setCarouselPaused(true));
        trustedSlider.addEventListener('pointerleave', () => setCarouselPaused(false));
        document.addEventListener('visibilitychange', resumeCarousel);
        window.addEventListener('pageshow', resumeCarousel);
        window.addEventListener('focus', resumeCarousel);
    }

    locationFocusButton?.addEventListener('click', () => {
        if (!companyLocationMap) {
            return;
        }

        companyLocationMap.src = companyLocationMap.dataset.focusSrc;
        locationFocusButton.setAttribute('aria-pressed', 'true');
        companyLocationMap.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

    productButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const fields = {
                modalImage: button.dataset.image,
                modalTitle: button.dataset.name,
                modalDescription: button.dataset.description,
                modalApplication: button.dataset.application,
                modalAdvantage: button.dataset.advantage,
                modalCapacity: button.dataset.capacity,
                modalMaterial: button.dataset.material,
                modalPower: button.dataset.power,
                modalWarranty: button.dataset.warranty,
            };

            Object.entries(fields).forEach(([id, value]) => {
                const element = document.getElementById(id);
                if (!element) {
                    return;
                }

                if (id === 'modalImage') {
                    element.src = value;
                    element.alt = button.dataset.name;
                } else {
                    element.textContent = value || 'Informasi dapat dikonsultasikan';
                }
            });

            openDialog(productModal);
        });
    });

    productModal?.querySelector('.modal-close')?.addEventListener('click', () => closeDialog(productModal));
    productModal?.addEventListener('click', (event) => {
        if (event.target === productModal) {
            closeDialog(productModal);
        }
    });
    productModal?.querySelector('#whatsappButton')?.addEventListener('click', (event) => {
        event.preventDefault();
        closeDialog(productModal);
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', '#contact');
    });

    document.querySelectorAll('.activity-photo').forEach((photo) => {
        photo.addEventListener('click', () => {
            const image = document.getElementById('activityLightboxImage');
            if (image) {
                image.src = photo.dataset.gallerySrc;
                image.alt = photo.dataset.galleryAlt;
            }
            openDialog(activityLightbox);
        });
    });

    activityLightbox?.querySelector('.activity-lightbox-close')?.addEventListener('click', () => closeDialog(activityLightbox));
    activityLightbox?.addEventListener('click', (event) => {
        if (event.target === activityLightbox) {
            closeDialog(activityLightbox);
        }
    });

    const pickerButton = document.getElementById('productPickerButton');
    const pickerPopup = document.getElementById('productPickerPopup');
    const productInput = document.getElementById('contactProduct');
    const whatsappLink = document.getElementById('contactWhatsapp');

    document.querySelector('.contact-form-jump')?.addEventListener('click', (event) => {
        event.preventDefault();
        const formHeading = document.getElementById('contact-form-title');
        formHeading?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        formHeading?.focus({ preventScroll: true });
        history.replaceState(null, '', '#contact-form-title');
    });

    pickerButton?.addEventListener('click', () => {
        const isOpen = pickerPopup?.classList.toggle('is-open') ?? false;
        pickerButton.setAttribute('aria-expanded', String(isOpen));
    });

    pickerPopup?.querySelectorAll('[data-product]').forEach((option) => {
        option.addEventListener('click', () => {
            if (productInput && pickerButton) {
                productInput.value = option.dataset.product;
                pickerButton.textContent = option.dataset.product;
                pickerButton.classList.add('is-selected');
                pickerButton.removeAttribute('aria-invalid');
            }
            pickerPopup.classList.remove('is-open');
            pickerButton?.setAttribute('aria-expanded', 'false');
            updateWhatsAppLink();
        });
    });

    const updateWhatsAppLink = () => {
        if (!contactForm || !whatsappLink) {
            return;
        }

        const formData = new FormData(contactForm);
        const message = [
            'PERMINTAAN INFORMASI PRODUK',
            '',
            'Halo CV. Dikatama Permata Abadi,',
            '',
            'Saya ingin mendapatkan informasi lebih lanjut mengenai produk yang tersedia.',
            '',
            'DATA KONTAK',
            `Nama: ${formData.get('name') || '-'}`,
            `Perusahaan: ${formData.get('company') || '-'}`,
            `Email: ${formData.get('email') || '-'}`,
            '',
            'DETAIL PERMINTAAN',
            `Produk: ${formData.get('product') || '-'}`,
            'Pesan:',
            `${formData.get('message') || '-'}`,
            '',
            'Terima kasih. Saya menunggu informasi dan tindak lanjut dari tim CV. Dikatama Permata Abadi.',
        ].join('\n');

        whatsappLink.href = `https://wa.me/6285749512348?text=${encodeURIComponent(message)}`;
    };

    contactForm?.addEventListener('input', updateWhatsAppLink);
    updateWhatsAppLink();

    whatsappLink?.addEventListener('click', (event) => {
        if (!contactForm?.checkValidity()) {
            event.preventDefault();
            contactForm?.reportValidity();
            return;
        }

        if (!productInput?.value) {
            event.preventDefault();
            pickerButton?.setAttribute('aria-invalid', 'true');
            pickerButton?.focus();
            return;
        }

        pickerButton?.removeAttribute('aria-invalid');
        updateWhatsAppLink();
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.onepage-product-picker') && pickerPopup?.classList.contains('is-open')) {
            pickerPopup.classList.remove('is-open');
            pickerButton?.setAttribute('aria-expanded', 'false');
        }
    });

    contactForm?.addEventListener('submit', (event) => {
        event.preventDefault();
        if (!productInput?.value) {
            pickerButton?.focus();
            pickerButton?.setAttribute('aria-invalid', 'true');
            return;
        }

        pickerButton?.removeAttribute('aria-invalid');
        const formData = new FormData(contactForm);
        const body = [
            'PERMINTAAN INFORMASI PRODUK',
            '',
            'Halo CV. Dikatama Permata Abadi,',
            '',
            'Saya ingin mendapatkan informasi lebih lanjut mengenai produk yang tersedia.',
            '',
            'DATA PEMOHON',
            `Nama: ${formData.get('name')}`,
            `Perusahaan: ${formData.get('company')}`,
            `Nomor Telepon: ${formData.get('phone')}`,
            `Email: ${formData.get('email')}`,
            '',
            'DETAIL PERMINTAAN',
            `Produk yang diminati: ${formData.get('product')}`,
            '',
            'Pesan:',
            `${formData.get('message') || '-'}`,
            '',
            'Demikian permintaan ini saya sampaikan. Besar harapan saya untuk mendapatkan informasi dan tindak lanjut dari tim CV. Dikatama Permata Abadi.',
            '',
            'Hormat Kami,',
            `${formData.get('name') || '-'}`,
        ].join('\n');
        const subject = encodeURIComponent(`Permintaan Informasi Produk - ${formData.get('product') || 'Produk'}`);
        window.location.href = `mailto:cvdikatamapermataabadi@gmail.com?subject=${subject}&body=${encodeURIComponent(body)}`;
    });

    document.addEventListener('keydown', (event) => {
        const openDialogElement = document.querySelector('.product-modal.active, .activity-lightbox.active');

        if (event.key === 'Escape') {
            closeDialog(productModal);
            closeDialog(activityLightbox);
        }

        if (event.key === 'Tab' && openDialogElement) {
            const focusable = [...openDialogElement.querySelectorAll('button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled])')];
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

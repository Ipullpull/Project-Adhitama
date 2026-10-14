<section class="home-activity" id="activity" aria-label="Our Activity" style="--activity-background-image: url('{{ asset('images/activity/activity-background.jpg') }}')">
    <div class="home-activity-inner">
        <header class="home-activity-heading">
            <span class="home-kicker">Our Activity</span>
        </header>
        <div class="activity-gallery">
            <button class="activity-photo activity-photo-main" type="button" data-gallery-src="{{ asset('images/activity/activity-1.png') }}" data-gallery-alt="Mesin packaging di area workshop" aria-label="Perbesar foto mesin packaging">
                <img src="{{ asset('images/activity/activity-1.png') }}" alt="Mesin packaging di area workshop" width="1086" height="1448" loading="lazy" decoding="async">
                <span>01 <strong>Mesin Packaging</strong></span>
            </button>
            <button class="activity-photo" type="button" data-gallery-src="{{ asset('images/activity/activity-2.png') }}" data-gallery-alt="Pekerja melakukan proses pemesinan" aria-label="Perbesar foto proses pemesinan">
                <img src="{{ asset('images/activity/activity-2.png') }}" alt="Pekerja melakukan proses pemesinan" width="1086" height="1448" loading="lazy" decoding="async">
                <span>02 <strong>Proses Pemesinan</strong></span>
            </button>
            <button class="activity-photo" type="button" data-gallery-src="{{ asset('images/activity/activity-3.png') }}" data-gallery-alt="Area workshop dengan mesin dan peralatan produksi" aria-label="Perbesar foto workshop dan produksi">
                <img src="{{ asset('images/activity/activity-3.png') }}" alt="Area workshop dengan mesin dan peralatan produksi" width="1086" height="1448" loading="lazy" decoding="async">
                <span>03 <strong>Workshop &amp; Produksi</strong></span>
            </button>
        </div>
    </div>
    <div class="activity-lightbox" id="activityLightbox" role="dialog" aria-modal="true" aria-label="Galeri foto" aria-hidden="true">
        <button class="activity-lightbox-close" type="button" aria-label="Tutup galeri">&times;</button>
        <img id="activityLightboxImage" src="" alt="">
    </div>
</section>

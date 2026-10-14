@php($companyAddress = 'Jl. Kramat, Wonokasian, Kec. Wonoayu, Kabupaten Sidoarjo, Jawa Timur 61261')
@php($companyMapUrl = 'https://www.google.com/maps?q=-7.4344239,112.653646&z=17&output=embed')

<section class="onepage-location" aria-labelledby="location-title">
    <div class="onepage-location-inner">
        <header class="onepage-location-heading">
            <span class="home-kicker" id="location-title">Our Location</span>
            <h2>Where to Find Us</h2>
            <p>Find our company location and visit us at the address shown on the map below.</p>
        </header>
        <button class="onepage-location-marker-label" id="focusCompanyLocation" type="button" aria-controls="companyLocationMap" aria-pressed="false">
            <span aria-hidden="true">&#9906;</span> Titik Lokasi Perusahaan
        </button>
        <iframe
            class="onepage-location-map"
            id="companyLocationMap"
            src="{{ $companyMapUrl }}"
            data-focus-src="{{ $companyMapUrl }}"
            title="Lokasi CV. Dikatama Permata Abadi"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen>
        </iframe>
        <p class="onepage-location-address">{{ $companyAddress }}</p>
        <a class="onepage-location-link" href="https://www.google.com/maps/place/CV+Dikatama+Permata+Abadi/@-7.4344239,112.653646,17z/data=!3m1!4b1!4m6!3m5!1s0x2dd7e1005d58e41b:0x9ec010a9c34dba66!8m2!3d-7.4344239!4d112.653646!16s%2Fg%2F11nb4myt7p" target="_blank" rel="noopener noreferrer">Buka di Google Maps</a>
    </div>
</section>

@php($homeSectionPrefix = request()->routeIs('home') ? '' : route('home'))

<footer class="home-footer">
    <div class="home-container">
        <div class="footer-home-grid">
            <div>
                <div class="home-footer-brand">
                    <img src="{{ asset('images/logo/logo.png') }}" alt="Logo CV. Dikatama Permata Abadi">
                    <h3>CV. Dikatama<br>Permata Abadi</h3>
                </div>
                <p>Solusi mesin packaging berkualitas tinggi untuk berbagai kebutuhan industri.</p>
            </div>
            <div>
                <h4>Produk</h4>
                <ul>
                    <li><a href="{{ $homeSectionPrefix }}#products">Mesin Packaging DM-280</a></li>
                    <li><a href="{{ $homeSectionPrefix }}#products">Mesin Packaging DM-380</a></li>
                    <li><a href="{{ $homeSectionPrefix }}#products">Mesin Packing DM-28 BMJ</a></li>
                </ul>
            </div>
            <div>
                <h4>Perusahaan</h4>
                <ul>
                    <li><a href="{{ $homeSectionPrefix }}#about">Tentang Kami</a></li>
                    <li><a href="{{ $homeSectionPrefix }}#vision-mission">Visi &amp; Misi</a></li>
                    <li>Sertifikasi</li>
                    <li>Karir</li>
                </ul>
            </div>
            <div>
                <h4>Kontak</h4>
                <ul>
                    <li><a href="https://maps.app.goo.gl/dWcfFxCgu83nFjrB6" target="_blank" rel="noopener noreferrer">Jl. Kramat, Wonokasian, Kec. Wonoayu, Kabupaten Sidoarjo, Jawa Timur 61261</a></li>
                    <li><a href="tel:+6285749512348">+62 857-4951-2348</a></li>
                    <li><a href="mailto:cvdikatamapermataabadi@gmail.com">cvdikatamapermataabadi@gmail.com</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-home-bottom">
            <span>&copy; {{ date('Y') }} CV. Dikatama Permata Abadi. All Rights Reserved.</span>
            <span>Privacy Policy &nbsp; | &nbsp; Terms &amp; Conditions</span>
        </div>
    </div>
</footer>

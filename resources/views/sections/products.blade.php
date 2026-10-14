@php

$products = [

    // ==================================================
    // 1. DM-280
    // ==================================================

    [
        'name' => 'Mesin Packaging DM-280',
        'image' => 'dm-280.png',
        'description' => 'Mesin packaging otomatis DM-280 untuk proses pengemasan produk secara efisien dan stabil.',
        'application' => 'Pengemasan produk pada lini produksi industri.',
        'advantage' => 'Proses pengemasan efisien dan stabil.',
        'capacity' => '20 - 80 Pack / Menit',
        'material' => 'Stainless Steel SUS 304',
        'power' => '220V',
        'warranty' => '1 Tahun',

        'scale' => '92%',
        'offset' => '0px',
    ],


    // ==================================================
    // 2. DM-3880
    // ==================================================

    [
        'name' => 'Mesin Packaging DM-380',
        'image' => 'dm-380.png',
        'description' => 'Mesin packaging otomatis DM-380 yang dirancang untuk mendukung kebutuhan produksi industri.',
        'application' => 'Mendukung proses pengemasan pada lini produksi industri.',
        'advantage' => 'Dirancang untuk mendukung kebutuhan produksi industri.',
        'capacity' => '20 - 80 Pack / Menit',
        'material' => 'Stainless Steel SUS 304',
        'power' => '220V',
        'warranty' => '1 Tahun',

        'scale' => '92%',
        'offset' => '0px',
    ],


    // ==================================================
    // 3. DM-28 BMJ
    // ==================================================

    [
        'name' => 'Mesin Packing DM-28 BMJ',
        'image' => 'dm-28-bmj.png',
        'description' => 'Mesin packaging otomatis DM-28 BMJ yang dirancang untuk mendukung kebutuhan produksi industri.',
        'application' => 'Pengemasan produk sesuai kebutuhan proses produksi.',
        'advantage' => 'Solusi mesin packaging untuk kebutuhan produksi industri.',
        'capacity' => '20 - 40 Pack / Menit',
        'material' => 'Stainless Steel SUS 304',
        'power' => '220V',
        'warranty' => '1 Tahun',

        'scale' => '90%',
        'offset' => '-10px',
    ]
    
];

@endphp


<section id="products" class="products home-products" aria-labelledby="products-title">

<div class="container">

<div class="section-title">

<span>OUR PRODUCTS</span>

<h2 id="products-title">

Solusi Mesin<br>Untuk Setiap Kebutuhan

</h2>

<p>

ADHITAMA menyediakan mesin packaging berkualitas tinggi untuk mendukung efisiensi proses produksi industri.

</p>

</div>

<div class="products-grid">

@foreach($products as $product)

<div class="product-card">

    <div class="product-image">

        <img
            src="{{ asset('images/product/'.$product['image']) }}"
            alt="{{ $product['name'] }}"
            loading="lazy"
            decoding="async">

    </div>

    <div class="product-body">

        <h3>{{ $product['name'] }}</h3>
        <p class="product-short-description">{{ $product['description'] }}</p>

    </div>

<button
    class="product-button"

    data-name="{{ $product['name'] }}"
    data-image="{{ asset('images/product/'.$product['image']) }}"
    data-description="{{ $product['description'] }}"
    data-application="{{ $product['application'] }}"
    data-advantage="{{ $product['advantage'] }}"
    data-capacity="{{ $product['capacity'] }}"
    data-material="{{ $product['material'] }}"
    data-power="{{ $product['power'] }}"
    data-warranty="{{ $product['warranty'] }}"

    data-scale="{{ $product['scale'] }}"
    data-offset="{{ $product['offset'] }}">

        Detail Produk

        <span>→</span>

    </button>

</div>

@endforeach

</div>


</div>

</section>



<!-- ===========================
MODAL
=========================== -->

<div class="product-modal" id="productModal" role="dialog" aria-modal="true" aria-labelledby="modalTitle" aria-hidden="true">

<div class="modal-box">

<button class="modal-close" type="button" aria-label="Tutup detail produk">

×

</button>



<div class="modal-left">

<img

id="modalImage"

src=""

alt=""

>

</div>



<div class="modal-right">

<span class="modal-tag">

PRODUK KAMI

</span>

<h2 id="modalTitle"></h2>


<div class="line"></div>

<p id="modalDescription"></p>

<div class="modal-spec">
    <h4 class="modal-spec-title">INFORMASI PRODUK</h4>
    <div><small>Aplikasi</small><strong id="modalApplication"></strong></div>
    <div><small>Kapasitas</small><strong id="modalCapacity"></strong></div>
    <div><small>Keunggulan</small><strong id="modalAdvantage"></strong></div>
    <div><small>Material</small><strong id="modalMaterial"></strong></div>
    <div><small>Daya</small><strong id="modalPower"></strong></div>
    <div><small>Garansi</small><strong id="modalWarranty"></strong></div>
</div>


<a href="#contact" id="whatsappButton" class="modal-wa">

    <img
        class="wa-icon"
        src="{{ asset('images/icons/whatsapp-white.png') }}"
        alt="WhatsApp">

    <span>Konsultasi Sekarang</span>

</a><p class="modal-note">

    Jam Operasional<br>

    Senin–Jumat • 10.00–15.30 WIB

</p></div>
</div>
</div>
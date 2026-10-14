@extends('layouts.app')

@section('content')
    @include('partials.navbar')

    <main>
        @include('sections.hero')
        @include('sections.trusted')
        @include('sections.onepage-about')
        @include('sections.products')
        @include('sections.onepage-activity')
        @include('sections.onepage-why')
        @include('sections.onepage-vision')
        @include('sections.onepage-contact')
        @include('sections.onepage-location')
    </main>

    @include('partials.footer')
@endsection

{{-- DS-MS Button — Laravel (Blade) --}}
{{-- No layout base, uma vez: --}}
{{-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@design-system-ms/ds-sis/dist/css/ds-sis.css"> --}}

<button class="btn btn-primary btn-md">{{ __('Salvar') }}</button>
<button class="btn btn-secondary btn-md">{{ __('Cancelar') }}</button>

{{-- Token nativo no back-end, quando precisar (ex.: cor de marca em PDF/e-mail) --}}
@php
    require_once base_path('vendor/dsms/Tokens.php');
@endphp
<span style="color: {{ \DSMS\Tokens::COLOR_PRIMARY_500 }}">Texto na cor da marca</span>

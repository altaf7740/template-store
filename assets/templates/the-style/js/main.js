(function($) {
    "use strict";
    
    /*----------------------------
        mobile menu
    ------------------------------ */
    jQuery('#mobile-menu-active').meanmenu();
    jQuery('#mobile-menu-active-dark').meanmenu();
    
    
    /*----------------------------
        wow js active
    ------------------------------ */
    new WOW().init();
    
    
    //toogle-menu
    $('.icon_cog').on('click', function() {
        $('.settings-open').slideToggle(500)
    });
    $('.icon_search').on('click', function() {
        $('.inner-form').slideToggle(500)
    });
    $('.icon_bag_alt').on('click', function() {
        $('.cart-open').slideToggle(500)
    });
    
    
    /*--
    menu-toggle
    ------------------------*/
    $('.menu-toggle').on('click', function() {
        if ($('.menu-toggle').hasClass('is-active')) {
            $('.main-menu nav').removeClass('menu-open');
        } else {
            $('.main-menu nav').addClass('menu-open');
        }
    });
    
    
    /*--
    Hamburger js
    -----------------------------------*/
    var forEach = function(t, o, r) {
        if ("[object Object]" === Object.prototype.toString.call(t))
            for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
        else
            for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
    };

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
        forEach(hamburgers, function(hamburger) {
            hamburger.addEventListener("click", function() {
                this.classList.toggle("is-active");
            }, false);
        });
    }
    
    
    /*---------------------
        countdown
      --------------------- */
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hour</p></span> <span class="cdown minutes">%M <p>Min</p></span class="cdown second"> <span>%S <p>Sec</p></span>'));
        });
    });
    
    
    /*---------------------
    	venobox
    --------------------- */
    $('.venobox').venobox();
    
    
    /*----------------------------
        price-slider
    ------------------------------ */
    $("#slider-range").slider({
        range: true,
        min: 14.00,
        max: 53.00,
        values: [18.00, 40.00],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
    " - $" + $("#slider-range").slider("values", 1));
    
    
    /*----------------------------
        TOP Menu Stick
    ------------------------------ */
    
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 180) {
            $(".header-area").removeClass("sticky");
        } else {
            $(".header-area").addClass("sticky");
        }
    });
    
    
    /* light-header */
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 180) {
            $(".light-header-area").removeClass("sticky-light");
        } else {
            $(".light-header-area").addClass("sticky-light");
        }
    });
    
    
    /* fixed-header-light */
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 180) {
            $(".fixed-header-light").removeClass("fixed-sticky-light");
        } else {
            $(".fixed-header-light").addClass("fixed-sticky-light");
        }
    });
    
    
    /*----------------------------
        new-product-carosel
    ------------------------------ */
    $(".new-product-carosel").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 4,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [767, 2],
        itemsMobile: [479, 1],
    });
    
    
    /*----------------------------
        new-product-carosel
    ------------------------------ */
    $(".re-testimonials-all").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: false,
        items: 1,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [991, 1],
        itemsTablet: [767, 1],
        itemsMobile: [479, 1],
    });
    
    
    /*----------------------------
        feature-carosel
    ------------------------------ */
    $(".feature-carosel").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 4,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [767, 2],
        itemsMobile: [479, 1],
    });
    
    
    /*----------------------------
        feature-carosel
    ------------------------------ */
    $(".home2-feature-carosel").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 4,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
        itemsDesktop: [1499, 4],
        itemsDesktopSmall: [991, 3],
        itemsTablet: [767, 2],
        itemsMobile: [479, 1],
    });
    
    
    /*----------------------------
        testimonial-carousel
    ------------------------------ */
    $(".testimonial-carousel").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: false,
        items: 1,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["PREV", "NEXT"],
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [991, 1],
        itemsTablet: [767, 1],
        itemsMobile: [479, 1],
    });
    
    
    /*----------------------------
        blog-carousel
    ------------------------------ */
    $(".blog-carousel").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 1,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [991, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
    });
    
    
    /*----------------------------
        promotion-carousel
    ------------------------------ */
    $(".promotion-carousel").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: false,
        items: 1,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [991, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1],
    });
    
    
    /*----------------------------
        main-banner-carousel
    ------------------------------ */
    $(".main-banner-carousel").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: false,
        items: 2,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
    });
    
    
    /*----------------------------
        add-bottom-carousel
    ------------------------------ */
    $(".add-bottom-carousel").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: false,
        items: 1,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"],
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [991, 1],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
    });
    
    
    /*----------------------------
        product-tab-slider
    ------------------------------ */
    $(".product-tab-slider").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 4,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [991, 3],
        itemsTablet: [768, 4],
        itemsMobile: [479, 3],
    });
    
    
    /*--------------------------
        scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        scrollSpeed: 900,
        animationInSpeed: 1000, // Animation in speed (ms)
        animationOutSpeed: 1000, // Animation out speed (ms)
        scrollText: '<i class="fa fa-angle-double-up" aria-hidden="true"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
    
    
    /*----------------------------
    youtube
    ------------------------------ */
    $('.youtube-bg').YTPlayer({
        containment: '.youtube-bg',
        autoPlay: true,
        loop: true,
    });
    
    
    
    
    
    
    
    
    
    


})(jQuery);
(function($) {
    "use strict";

    /*-------------------------------------------
     	01. jQuery MeanMenu
     --------------------------------------------- */
    jQuery('nav#dropdown').meanmenu();

    /*----------------------------
       02. stickey menu
    ----------------------------*/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 265) {
            $(".sticky-header").removeClass("sticky");
        } else {
            $(".sticky-header").addClass("sticky");
        }
    });



    /*----------------------
		05. Nivo slider activation
	----------------------*/
    $('#mainSlider').nivoSlider({
        directionNav: true,
        controlNavThumbs: false,
        animSpeed: 1000,
        slices: 10,
        pauseTime: 5000,
        pauseOnHover: true,
        controlNav: false,
        manualAdvance: true,
        prevText: 'p',
        nextText: 'n'
    });

    /*----------------------
		05. Isotope activation
	----------------------*/
    $(window).on('load', function() {

        // Activate isotope in container
        $(".latest-work").isotope({
            itemSelector: '.work-item'
        });

        //add isotope click function
        $('.latest-work-menu li').on('click', function() {
            $(".latest-work-menu li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr("data-filter");
            $(".latest-work").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });


    /*--------------------------
      06.  Counter Up
    ---------------------------- */
    $('.counter').counterUp({
        delay: 70,
        time: 5000
    });
    /*--------------------------
      07.  Carousel slider
    ---------------------------- */
    $(".feature-list").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 3,
        /* transitionStyle : "fade",*/
        /* [This code for animation ] */
        navigationText: ["<i class='zmdi zmdi-long-arrow-left'></i>", "<i class='zmdi zmdi-long-arrow-right'></i>"],
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [991, 2],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1]
    });
    $(".testimonial-list").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: true,
        items: 1,
        /* transitionStyle : "fade",*/
        /* [This code for animation ] */
        navigationText: ["<i class='zmdi zmdi-long-arrow-left'></i>", "<i class='zmdi zmdi-long-arrow-right'></i>"],
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [991, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1]
    });
    $(".brand-list").owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: false,
        items: 5,
        /* transitionStyle : "fade",*/
        /* [This code for animation ] */
        navigationText: ["<i class='zmdi zmdi-long-arrow-left'></i>", "<i class='zmdi zmdi-long-arrow-right'></i>"],
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [991, 3],
        itemsTablet: [768, 3],
        itemsMobile: [479, 1]
    });



    /*------------
     08. scrollUp jquery active
    ------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

    /*------------------
    09.    wow js active
    ---------------- */
    new WOW().init();



})(jQuery);
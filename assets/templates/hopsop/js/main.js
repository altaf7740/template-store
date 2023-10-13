/*--------------------------------------------------
Template Name: Hopsop;
Description:   eCommerce Bootstrap 4 Template;
Version: 1.0;
--------------------------------------------------*/

(function ($) {
    "use Strict";
    /*--------------------------
        Newsletter Popup
    ---------------------------*/
    setTimeout(function () {
        $('.popup_wrapper').css({
            "opacity": "1",
            "visibility": "hidden"
        });
        $('.popup_off').on('click', function () {
            $(".popup_wrapper").fadeOut(500);
        })
    }, 2500);

    /*----------------------------
        Mobile Menu Activation
    -----------------------------*/
    jQuery('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
    });

    /*----------------------------
        Tooltip Activation
    ------------------------------ */
    $('.pro-actions a').tooltip({
        animated: 'fade',
        placement: 'top',
        container: 'body'
    });

    /*----------------------------
        Checkout Page Activation
    -----------------------------*/
    $('#showlogin').on('click', function () {
        $('#checkout-login').slideToggle();
    });
    $('#showcoupon').on('click', function () {
        $('#checkout_coupon').slideToggle();
    });
    $('#cbox').on('click', function () {
        $('#cbox_info').slideToggle();
    });
    $('#ship-box').on('click', function () {
        $('#ship-box-info').slideToggle();
    });

    /*----------------------------
        Slider Activation
    -----------------------------*/
    $(".slider-activation").owlCarousel({
        loop: true, 
        margin: 0,
        nav: true,
        autoplay: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 10000,
        items: 1,
        navText: ["Prev", "Next"],
        dots: true,
        dotsContainer: '.slide-item-number',
        autoHeight:true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });


    var i = 1;
    $(".slide-item-number .owl-dot").each(function(){
        $(this).text('0'+i);
        i++;
    });


    /* bestseller active  */ 
    $('.best-seller-active').owlCarousel({
        loop:true,
        autoplay: false,
        autoplayTimeout: 5000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items:5,
        dots:false,
        nav:false,
        margin:3,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
    /*----------------------------------------------------
        Hot Deal Product Activation
    -----------------------------------------------------*/
    $('.blog-slider-active').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 500,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 0,
        items: 1,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                smartSpeed: 300
            },
            480: {
                items: 1
            },
            768: {
                items: 1
            },
            992: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    })
    
    /*----------------------------------------------------
        Brand Logo  Activation
    -----------------------------------------------------*/
    $('.brand-logo-active').owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        smartSpeed: 500,
        margin: 20,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                smartSpeed: 300
            },
            340: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    })
    
    /*-------------------------------------
        Thumbnail Product activation
    --------------------------------------*/
    $('.thumb-menu').owlCarousel({
        loop: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 15,
        smartSpeed: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 3,
                autoplay: true,
                smartSpeed: 300
            },
            768: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
    $('.thumb-menu a').on('click', function () {
        $('.thumb-menu a').removeClass('active');
    })
    
    /*----------------------------
        Countdown Js Activation
    -----------------------------*/
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<div class="count"><p>%D</p> <span>Days</span></div><div class="count"><p>%H</p> <span>Hours</span></div><div class="count"><p>%M</p> <span>Minutes</span></div><div class="count"> <p>%S</p> <span>Seconds</span></div>'));
        });
    });

    /*----------------------------
        ScrollUp Activation
    -----------------------------*/
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '550', // Distance from top before showing element (px)
        topSpeed: 1000, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        scrollSpeed: 900,
        animationInSpeed: 1000, // Animation in speed (ms)
        animationOutSpeed: 1000, // Animation out speed (ms)
        scrollText: '<i class="fa fa-angle-double-up" aria-hidden="true"></i>', // Text for element
        activeOverlay: false // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });

    /*----------------------------
        Sticky-Menu Activation
    ------------------------------ */
    var HeaderSticky = $('.header-sticky');
    var win = $(window);
    
    win.scroll(function () {
        if ($(this).scrollTop() > 100) {
            HeaderSticky.addClass("sticky");
        } else {
            HeaderSticky.removeClass("sticky");
        }
    });
    
    /*----------------------------
        Nice Select Activation
    ------------------------------ */
    $('select').niceSelect();
    
    /*----------------------------
        Price Slider Activation
    -----------------------------*/
    var sliderrange = $('#slider-range');
    var amountprice = $('#amount');
    
    sliderrange.slider({
        range: true,
        min: 0,
        max: 100,
        values: [0, 85],
        slide: function (event, ui) {
            amountprice.val("$" + ui.values[0] + "  $" + ui.values[1]);
        }
    });
    amountprice.val("$" + sliderrange.slider("values", 0) +
        "  $" + sliderrange.slider("values", 1));
    
    /*----------------------------------------------------
        Single Categorie Activation
    -----------------------------------------------------*/
    $('.single-img-categorie-active').owlCarousel({
        loop: false,
        nav: false,
        dots: true,
        smartSpeed: 500,
        margin: 0,
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                smartSpeed: 100
            },
            480: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })
    
})(jQuery);
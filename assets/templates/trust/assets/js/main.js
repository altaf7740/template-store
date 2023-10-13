(function($) {
    "use strict";


    /* last  2 li child add class */
    $('ul.menu>li').slice(-2).addClass('last-elements');
    
    
    /* jQuery MeanMenu */
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "768",
        meanMenuContainer: ".mobile-menu-area .mobile-menu",
    });
    
    
    /* magnificPopup image popup */
    $('.img-popup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    
    /*--
    gallery active
    ------------------------*/
    $('.gallery-active').slick({
        centerMode: true,
        dots: true,
        centerPadding: '0',
        slidesToShow: 5,
        arrows: false,
        responsive: [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    });
    
    /*------------------------
    testimonials active
    ------------------------*/
    $('.testimonials-active').owlCarousel({
        loop: true,
        nav: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    
    /* countdown */
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"><span class="time-count">%S</span> <p>Sec</p></span>'));
        });
    });
    
    
    /*--------------------------
        09. ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    
    /* slider active  */
    $('.slider-active').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        dots: false,
        nav: true,
        navText: ['prev', 'next'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
    
    
    /*--
    Menu Stick
    -----------------------------------*/
    var header = $('.transparent-bar');
    var win = $(window);
    
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 54) {
            header.removeClass('stick');
        } else {
            header.addClass('stick');
        }
    });
    
    
    /* parallax active  */
    $('.parallax-window').parallax();
    
    
    /* magnificPopup video popup */
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });
    
    
    /* counterUp */
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });




})(jQuery);
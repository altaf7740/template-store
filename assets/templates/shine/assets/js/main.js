(function($) {
    "use strict";
    
    
    
    
    
    /*--
    Menu Stick
    -----------------------------------*/
    var header = $('.transparent-bar');
    var win = $(window);
    
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 1) {
            header.removeClass('stick');
        } else {
            header.addClass('stick');
        }
    });
    
    
    
    /* testimonials active */
    $('.testimonials-active').owlCarousel({
        loop: true,
        nav: false,
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
    
    
    /* creative-menu-6 */
    var CreativeMenu = $('.creative-menu-6');
    $(".menu-icon").on("click", function() {
        CreativeMenu.css('right', '0').addClass('animated Toggle');
    })
    $(".menu-close").on("click", function() {
        CreativeMenu.css('right', '-420px').removeClass('animated Toggle');
    })
    
    
    /* search */
    $(".icon-search").on("click", function() {
        $(this).parent().find('.toogle-content').slideToggle('medium');
    })
    
    
    /* cart */
    $(".icon-cart").on("click", function() {
        $(this).parent().find('.cart-toogle').slideToggle('medium');
    })
    
    
    /* magnificPopup image popup */
    $('.img-poppu').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    
    
    /* counterUp */
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    
    /*--
    Testimonial Slick Carousel
    -----------------------------------*/
    $('.testimonial-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        draggable: false,
        fade: true,
        asNavFor: '.slider-nav',
    });
    
    
    /*--
        Testimonial Slick Carousel as Nav
    -----------------------------------*/
    $('.testimonial-image-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.testimonial-text-slider',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        responsive: [{
                breakpoint: 767,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 420,
                settings: {
                    autoplay: true,
                    dots: false,
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });
    
    
    /* minim 4 menu*/
    var CrHeader = $('.cr-header-section');
    var CrMenu = $('.cr-menu-section');
    
    $('.cr-menu-toggle').on('click', function() {
        if ($('.cr-header-section').hasClass('menu-open')) {
            CrHeader.removeClass('menu-open');
            $(this).html('<img src="assets/img/icon-img/menu.png" alt="">');
            CrMenu.removeClass('active');
        } else {
            CrHeader.addClass('menu-open');
            $(this).html('<i class="ti-close"></i>');
            CrMenu.addClass('active');
        }
    })
    
    
    /* minim 4 banner slider */
    $('.banner-slider').slick({
        dots: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 970,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    
    /* isotop active */
    // filter items on button click
    $('.portfolio-style-4').imagesLoaded(function() {
        $('.portfolio-menu-active').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        // init Isotope
        var $grid = $('.grid-4').isotope({
            itemSelector: '.grid-item-4',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item-4',
            }
        });
    });
    
    
    
    $('.portfolio-menu-active button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
    
    
    /* slider active  */
    $('.slider-active').owlCarousel({
        loop: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        dots: false,
        nav: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
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
    
    
    /* slider active  */
    $('.related-slider-active').owlCarousel({
        loop: true,
        items: 4,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
    
    /* slider active  */
    $('.brand-slider').owlCarousel({
        loop: true,
        items: 4,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    
    
    /*--------------------------
        09. ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="ti-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    
    /*--
    slick slider
    ------------------------*/
    $('.slider-active-shop').slick({
        centerMode: true,
        dots: true,
        fade: true,
        centerPadding: '0',
        slidesToShow: 1,
        arrows: false,
        responsive: [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    
    
    /* jQuery MeanMenu */
    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu-area .mobile-menu",
    });
    
    /* tab overly */
    $('.tab-overly').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });
    
    /* sidebar slider */
    $('.sidebar-slider').owlCarousel({
        loop: true,
        nav: false,
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
    
    /* blog masonry active */
    $('.blog-masonry-active').owlCarousel({
        loop: true,
        nav: false,
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
    
    /* blog slider active */
    $('.blog-slider-active').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
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
    
    
    
    
    /*----- 
    	Cart Plus Minus
    --------------------------------*/
    $('.pro-qty, .cart-plus-minus-2').append('<span class="inc qtybtn"><i class="ti-plus"></i></span>');
    $('.pro-qty, .cart-plus-minus-2').append('<span class="dec qtybtn"><i class="ti-minus"></i></span>');
    $('.qtybtn').on('click', function() {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });
    
    
    /*--- showlogin toggle function ----*/
    $('#showlogin').on('click', function() {
        $('#checkout-login').slideToggle(900);
    });
    
    
    /*--- showlogin toggle function ----*/
    $('#showcoupon').on('click', function() {
        $('#checkout_coupon').slideToggle(900);
    });
    
    
    /*--- showlogin toggle function ----*/
    $('#ship-box').on('click', function() {
        $('#ship-box-info').slideToggle(1000);
    });
    
    
    /*--- wow ----*/
    new WOW().init();
    
    
    
    
    /* magnific video popup */
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });
    
    
    
    /* parallax active  */
    $('.parallax-window').parallax();
    
    
    
    /* isotop active */
    // filter items on button click
    $('.portfolio-style , .portfolio-style-2 , .creative-portfolio , .grid').imagesLoaded(function() {
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item'
            }
        });
    });
    
    
    
    
    
    
    
    



})(jQuery);
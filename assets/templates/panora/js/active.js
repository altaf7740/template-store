/*********************************************************************************

	Template Name: Panora Blog  Bootstrap 4 Template  
	Description: Panora is a beautiful and unique blog Bootstrap 4 template.
	Version: 1.0

**********************************************************************************/


/*===============================================================================
			[ INDEX ]
=================================================================================

	Scroll Up Activation
	Mobile Menu
	Wow Active
    Counter Up
    Instagram Activation
    Slider Activation
    Instagram List
    Popular Post Activation
    Slider Activation
    Testimonial Activation
    Search Toggler

=================================================================================
			[ END INDEX ]
================================================================================*/

(function ($) {
    'use strict';



    /*============ Scroll Up Activation ============*/
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'slide'
    });


    /*=========== Mobile Menu ===========*/

    $('nav.mobilemenu__nav').meanmenu({
        meanMenuClose: 'X',
        meanMenuCloseSize: '18px',
        meanScreenWidth: '991',
        meanExpandableChildren: true,
        meanMenuContainer: '.mobile-menu',
        onePage: true
    });

    /*=========== Wow Active ===========*/

    new WOW().init();


    /*=========== Counter Up ===========*/

    $('.count').counterUp({
        delay: 10,
        time: 1000
    });


    /*=============  Instagram Activation  ==============*/

    $('.instagram--activation').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 10000,
        items: 1,
        dots: true,
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


    /*=============  Slider Activation  ==============*/

    $('.activation--1').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 10000,
        items: 1,
        dots: true,
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


    /*=============  Instagram List  ==============*/

    $('.instagram__list').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 10000,
        items: 1,
        dots: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            422: {
                items: 2
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1920: {
                items: 6
            }
        }
    });


    /*=============  Popular Post Activation  ==============*/

    $('.popular__post__active').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        autoplay: false,
        autoplayTimeout: 10000,
        items: 1,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    });


    /*=============  Slider Activation  ==============*/

    $('.slide__activation--2').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        autoplay: false,
        autoplayTimeout: 10000,
        items: 1,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
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


    $('.slide__activation--3').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        center: true,
        autoplay: false,
        autoplayTimeout: 10000,
        items: 1,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });

    /*=============  Testimonial Activation  ==============*/

    $('.testimonial__active').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 10000,
        items: 1,
        dots: true,
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

    /*============= Search Toggler ==============*/

    function searchToggler() {
        var trigger = $('.search__active'),
            container = $('.search_active');


        trigger.on('click', function (e) {
            e.preventDefault();
            container.toggleClass('is-visible');
        });

        $('.close__wrap').on('click', function () {
            container.removeClass('is-visible');
        });

    }
    searchToggler();


})(jQuery);
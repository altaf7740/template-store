/*
 ===========================================================
 Table of Contents
 -----------------------------------------------------------
 ---------------------------------------------
 ** Js Index
 ---------------------------------------------
// Preloader
// Bootstrap Essentials
// Smooth Scrolling Effect
// Adjust Header Menu On Scroll Down
// Scroll top 
// On click hide collapse menu
// Hero Section Slider
// About Section Slider
// About Section Slider
// Single Service Section Slider
// Portfoli Masonry Grid
// prettyPhoto js  
// Team Carousel Slider
// Clients Carousel Slider
// Counter Js
// Project Item Tab Slider
// Project slider Section Slider
// Project Team slider Section Slider
// On click hide collapse spiceal menu
// Service Item Tab Slider
// Bolg Masonry Grid
// scrollReveal js Init
// My Skills Section
// Ajax Contact Form 
 ===========================================================
 ===========================================================
 */


// Js Index
(function($) {
    "use strict";

    // Preloader
    $(window).on('load', function() {
        $('.preloader-wrap').fadeOut('slow', function() { $(this).remove(); });
    });

    // Bootstrap Essentials
    $(".embed-responsive iframe").addClass("embed-responsive-item");
    $(".carousel-inner .item:first-child").addClass("active");
    $('[data-toggle="tooltip"]').tooltip();

    // Smooth Scrolling Effect
    $('.smoothscroll').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;

        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - 50
        }, 1200);
    });


    // Adjust Header Menu On Scroll Down
    $(window).scroll(function() {
        var wScroll = $(this).scrollTop();

        if (wScroll > 0) {
            $('.navbar-default').addClass('sticky');
        } else {
            $('.navbar-default').removeClass('sticky');
        }

        // Scroll top 
        if (wScroll > 800) {
            $('.scroll-top').css('display', 'block');
        } else {
            $('.scroll-top').css('display', 'none');

        }

    });


    // On click hide collapse menu
    $(".navbar-nav li a").on('click', function(event) {
        $(".navbar-collapse").removeClass("collapse in").addClass("collapse").removeClass('open');
        $(".navbar-toggle").removeClass('open');

    });
    $(".dropdown-toggle").on('click', function(event) {
        $(".navbar-collapse").addClass("collapse in").removeClass("collapse");
        $(".navbar-toggle").addClass('open');
    });
    $('.navbar-toggle').on('click', function() {
        $(this).toggleClass('open');
    });

    // Hero Section Slider
    function hero_slider_carousel() {
        var owl = $("#hero-slider-screen");
        owl.owlCarousel({
            loop: true,
            margin: 10,
            smartSpeed: 2000,
            responsiveClass: true,
            navigation: true,
            items: 1,
            addClassActive: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {}
        });
    }
    hero_slider_carousel();

    // About Section Slider
    function about_slider_carousel() {
        var owl = $("#about-silder");
        owl.owlCarousel({
            loop: true,
            margin: 10,
            smartSpeed: 2000,
            responsiveClass: true,
            navigation: false,
            items: 1,
            addClassActive: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {}
        });
    }
    about_slider_carousel();

    // About Section Slider
    function about_slider_2_carousel() {
        var owl = $("#about-silder-2");
        owl.owlCarousel({
            loop: true,
            margin: 10,
            smartSpeed: 2000,
            responsiveClass: true,
            navigation: false,
            items: 1,
            addClassActive: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 4000,
            responsive: {}
        });
    }
    about_slider_2_carousel();

    // Single Service Section Slider
    function single_service_carousel() {
        var owl = $("#single-service-slider");
        owl.owlCarousel({
            loop: true,
            margin: 10,
            smartSpeed: 2000,
            responsiveClass: true,
            navigation: false,
            items: 1,
            addClassActive: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {}
        });
    }
    single_service_carousel();

    // Portfoli Masonry Grid
    $('.portfolio-masonry').masonry({
        itemSelector: '.portfolio-item, .portfolio-grid'
    });

    // prettyPhoto js    
    $("a[data-popup^='prettyPhoto']").prettyPhoto();

    // Team Carousel Slider
    function testimonial_carousel() {
        var owl = $("#testimonial-slider");
        owl.owlCarousel({
            loop: true,
            margin: 75,
            smartSpeed: 2000,
            responsiveClass: true,
            navigation: false,
            items: 2,
            addClassActive: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                800: {
                    items: 2,
                    nav: false
                }
            }
        });
    }
    testimonial_carousel();

    //Clients Carousel Slider
    function clients_carousel() {
        var owl = $("#clients-slider");
        owl.owlCarousel({
            loop: true,
            margin: 30,
            smartSpeed: 2000,
            responsiveClass: true,
            navigation: false,
            items: 5,
            addClassActive: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 5,
                    nav: false,
                    loop: true
                }
            }
        });
    }
    clients_carousel();

    // Counter Js
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // Project Item Tab Slider
    $('.project-item-tab').on('click', function() {
        $('.project-item-tab').removeClass('active');
        $(this).addClass('active');
    });

    // Project slider Section Slider
    function project_done_carousel() {
        var owl = $("#project-done-slider");
        owl.owlCarousel({
            loop: true,
            margin: 10,
            smartSpeed: 2000,
            responsiveClass: true,
            navigation: false,
            items: 1,
            addClassActive: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 7000,
            responsive: {}
        });
    }
    project_done_carousel();


    // Project Team slider Section Slider
    function project_team_carousel() {
        var owl = $("#project-team-slider");
        owl.owlCarousel({
            loop: true,
            margin: 10,
            smartSpeed: 2000,
            responsiveClass: true,
            navigation: false,
            items: 3,
            addClassActive: true,
            dots: true,
            autoplay: false,
            autoplayTimeout: 7000,
            responsive: {
                0: {
                    items: 1
                },
                760: {
                    items: 2,
                    nav: false
                },
                1100: {
                    items: 3,
                    nav: false
                }
            }
        });
    }
    project_team_carousel();


    // On click hide collapse spiceal menu
    $(".panel-default:first-child .collapse").addClass("in");
    $(".panel-default:first-child .panel-title a").removeClass("collapsed");

    $('.panel:first-child .panel-title a i').removeClass('fa-plus').addClass('fa-minus');
    $('.panel-title a').on('click', function() {

        $('.panel-title').removeClass('active');
        $(this).addClass('active');

        if ($(this).find('i').hasClass('fa-plus')) {
            $('.panel-title a').find('i').removeClass('fa-minus').addClass('fa-plus');
            $(this).find('i').removeClass('fa-plus').addClass('fa-minus');
        } else {
            $(this).find('i').removeClass('fa-minus').addClass('fa-plus');
        }
    });

    // Service Item Tab Slider
    $('.service-item-tab').on('click', function() {
        $('.service-item-tab').removeClass('active');
        $(this).addClass('active');
    });

    // Bolg Masonry Grid
    $('.blog-masonary').masonry({
        singleMode: true,
        itemSelector: '.post-grid, .post-grid2'
    });

    //scrollReveal js Init
    window.sr = ScrollReveal({ duration: 800 });
    sr.reveal('.foo');
    sr.reveal('.bar');


    // My Skills Section 
    $('.my-skills').waypoint(function() {
        $('.progress-bar').addClass('left-anim');
    }, {
        triggerOnce: true,
        offset: '50%'
    });


    // Ajax Contact Form  

    $('.cf-msg').hide();
    $('form#cf button#submit').on('click', function() {
        var fname = $('#fname').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var msg = $('#msg').val();

        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!regex.test(email)) {
            alert('Please enter valid email');
            return false;
        }

        fname = $.trim(fname);
        email = $.trim(email);
        subject = $.trim(subject);
        msg = $.trim(msg);

        if (fname != '' && email != '' && subject != '' && msg != '') {
            var values = "fname=" + fname + "&email=" + email + "&subject=" + subject + "&msg=" + msg;
            $.ajax({
                type: "POST",
                url: "sendMail.php",
                data: values,
                success: function() {
                    $('#fname').val('');
                    $('#email').val('');
                    $('#subject').val('');
                    $('#msg').val('');

                    $('.cf-msg').fadeIn().css('background-color', 'rgba(98, 181, 87, 0.7)').html('<p>Email has been sent successfully.</p>');
                    setTimeout(function() {
                        $('.cf-msg').fadeOut('slow');
                    }, 2000);

                }
            });
        } else {
            $('.cf-msg').fadeIn().css('background-color', 'rgba(181,62,75,0.7)').html('<p>Please fillup the informations correctly.</p>')
        }


        return false;
    });


}(jQuery));

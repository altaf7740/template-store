(function($) {
    "use strict";
    
    /*--
    Magnific Popup
    ------------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });
    
    
    /*--
    slick slider
    ------------------------*/
    $('.screenshot-slider').slick({
        centerMode: true,
        dots: true,
        focusOnSelect: true,
        swipeToSlide: true,
        touchMove: false,
        centerPadding: '0',
        slidesToShow: 4,
        arrows: false,
        responsive: [{
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
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
    
    
    /*--
    slick slider
    ------------------------*/
    $('.slider-2').slick({
        centerMode: true,
        dots: false,
        centerPadding: '0',
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
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

    /*--------------------------
    counterUp
    ---------------------------- */
    $('.counter').counterUp({
        delay: 10,
        time: 5000
    });
    
    
    /*----------------------------
    owl active brand-logo
    ------------------------------ */
    $('.item_all').owlCarousel({
        autoPlay: false,
        slideSpeed: 2000,
        pagination: false,
        navigation: false,
        items: 6,
        /* transitionStyle : "fade", */
        /* [This code for animation ] */
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [980, 4],
        itemsTablet: [767, 2],
        itemsMobile: [479, 2],
    });
    
    
    /*--
    Menu Stick
    -----------------------------------*/
    var header = $('.sticker');
    var win = $(window);
    
    win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 1) {
            header.removeClass('stick');
        } else {
            header.addClass('stick');
        }
    });
    
    
    /*--
    One Page Nav
    -----------------------------------*/
    var top_offset = $('.header-area').height() - -60;
    $('.main-menu nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });
    
    
    /*--
     Bootstrap Menu Fix For Mobile
    -----------------------------------*/
    $(document).on('click', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });
    
    
    /*--
    Smooth Scroll
    -----------------------------------*/
    $('.scroll-down, .mean-nav ul li a').on('click', function(e) {
        e.preventDefault();
        var link = this;
        $.smoothScroll({
            offset: -100,
            scrollTarget: link.hash
        });
    });
    
    
    /*--------------------------
    scrollUp
    ---------------------------- */
    var totop = $('#toTop');
    
    win.on('scroll', function() {
        if (win.scrollTop() > 200) {
            totop.fadeIn();
        } else {
            totop.fadeOut();
        }
    });
    totop.on('click', function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500)
    });
    
    
    /*--
     MailChimp
    ------------------------*/
    var mailchimperror = $('.mailchimp-error');
    
    $('#mc-form').ajaxChimp({
        language: 'en',
        callback: mailChimpResponse,
        // ADD YOUR MAILCHIMP URL BELOW HERE!
        url: 'http://themeshaven.us8.list-manage.com/subscribe/post?u=759ce8a8f4f1037e021ba2922&amp;id=a2452237f8'
    });
    
    function mailChimpResponse(resp) {
        if (resp.result === 'success') {
            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            mailchimperror.fadeOut(400);
        } else if (resp.result === 'error') {
            mailchimperror.html('' + resp.msg).fadeIn(900);
        }
    }
    
    
    /*----------------------------
    slider-active
    ------------------------------ */
    $('.slider-active').owlCarousel({
        autoPlay: 800000000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        slideSpeed: 500,
        pagination: true,
        navigation: false,
        loop: true,
        mouseDrag: true,
        singleItem: true,
        transitionStyle: "fade",
        transitionStyle: "fade",
        addClassActive: true,
    });
    
    
    //venbox start
    $('.venobox').venobox({
        numeratio: true,
        titleattr: 'data-title'
    })
    //venbox end
    
    
    /*----------------------------
    youtube
    ------------------------------ */
    $('.youtube-bg').YTPlayer({
        containment: '.youtube-bg',
        autoPlay: true,
        loop: true,
    });




})(jQuery);
(function ($) {
"use strict";


 
 // MOUSE MOVING BACKGTOUND
    
    $('#background-1').mouseParallax({
        moveFactor: 1
    });
    
    $('#background-2').mouseParallax({
        moveFactor: 2
    });
    
    $('#background-3').mouseParallax({
        moveFactor: 7
    });
    
    $('#background-4').mouseParallax({
        moveFactor: 8
    });
    
    $('#background-5').mouseParallax({
        moveFactor: 5
    });
    
    $('#background-6').mouseParallax({
        moveFactor: 1
    });
    
    $('#background-7').mouseParallax({
        moveFactor: 3
    });
    
    $('#background-8').mouseParallax({
        moveFactor: 5
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
    var top_offset = $('.header-area').height() - 0;
    $('.menu-bar nav ul').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
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
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.testimonial-text-slider',
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: '0px',
      responsive: [
        {
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
    
    /* magnificPopup video popup */
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });
    
    
    /* counterUp */
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    /*--
     Bootstrap Menu Fix For Mobile
    -----------------------------------*/
    $(document).on('click', '.navbar-collapse.in', function(e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });
    
    /*--------------------------
        09. ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="ion-android-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    
    
    
    
})(jQuery);	
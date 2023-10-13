(function ($) {
    "use strict";

/*--
    Menu Sticky
-----------------------------------*/
var windows = $(window);
var sticky = $('.header-sticky');

windows.on('scroll', function() {
    var scroll = windows.scrollTop();
    if (scroll < 300) {
        sticky.removeClass('stick');
    }else{
        sticky.addClass('stick');
    }
});


/*--
    Mobile Menu
------------------------*/
$('#menu').meanmenu({
    meanScreenWidth: '991',
    meanMenuContainer: '.mobile-menu',
    meanMenuClose: '<span class="menu-close"></span>',
    meanMenuOpen: '<span class="menu-bar"></span>',
    meanRevealPosition: 'right',
    meanMenuCloseSize: '0',
});


/*-- 
    Menu Toggle & Expand For Home Two Menu
--------------------------------------------*/
var overlayMenu = $('.overlay-menu');
var menuExpand = $('.expand-menu');
var menuToggle = $('.menu-toggle');

/*-- Menu Toggle --*/
menuToggle.on('click', function(){
    if( overlayMenu.hasClass('open') ) {
        overlayMenu.removeClass('open');
        $(this).removeClass('open');
    }else{
        overlayMenu.addClass('open');
        $(this).addClass('open');
    }
});

/*-- Menu Expand --*/
menuExpand.on('click', function(){
    if( $(this).siblings('ul').size() > 0 ) {
        $(this).siblings('ul').slideToggle();
        return false;
    }
});

/*--
    Hero Slider
-----------------------------------*/

/*-- Hero Slider One --*/
$('.hero-slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
});

/*-- Hero Slider Two --*/
$('.hero-slider-2').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 1,
});

/*--
    Hero Slider One Dot Style 
-----------------------------------*/
$('.hero-slider-one .slick-dots li').each(function() {
    $(this).append('<svg class="hero-dot-circle"><circle class="shape" fill="none" cx="20" cy="20" r="19" stroke-dasharray="1000" stroke-dashoffset="1000"/></svg>');
})

/*--
    Default Image Slider
-----------------------------------*/
$('.image-slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 1,
});

/*--
    Speaker One Slider
-----------------------------------*/
$('.speaker-one-slider').slick({
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
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

/*--
    Product Event Slider
-----------------------------------*/
$('.product-slider').slick({
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
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

/*--
    Related Product Slider
-----------------------------------*/
$('.related-product-slider').slick({
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
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
$('.related-product-slider-two').slick({
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
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

/*--
    Upcoming Event Slider
-----------------------------------*/
$('.upcoming-event-slider').slick({
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
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

/*--
    Event Category Slider
-----------------------------------*/
$('.event-category-slider').slick({
    arrows: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
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

/*--
    About Video Slider
-----------------------------------*/
$('.about-video-slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 1,
});

/*--
    Testimonial Slider One
-----------------------------------*/ 
$('.testimonial-slider-one').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 1,
});

/*--
    Testimonial Slider Two
-----------------------------------*/ 
$('.testimonial-slider-two').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    infinite: true,
    slidesToShow: 1,
});

/*--
    Single Product Thubmnail & Image Slider
-----------------------------------*/
/*--  Thubmnail Slider --*/
$('.product-thumbnail-slider').slick({
    autoplay: false,
    infinite: true,
    centerPadding: '0px',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-image-slider',
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
});

/*--  Image Slider --*/
$('.product-image-slider').slick({
    arrows: false,
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    asNavFor: '.product-thumbnail-slider',
});

/*--
    Gallery Hover Effect 
------------------------*/
$('.gallery-wrapper > div').each( function() { $(this).hoverdir(); } );

/*--
    Gallery Hover Effect 
------------------------*/
$('[data-toggle="tooltip"]').tooltip({
    trigger: 'hover',
});

/*--
    Count Down Timer
------------------------*/
$('[data-countdown]').each(function() {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
        $this.html(event.strftime('<span class="cdown day"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hours</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Minute</p></span> <span class="cdown second"><span class="time-count">%S</span> <p>Second</p></span>'));
    });
});

/*--
    Counter UP
-----------------------------------*/
$('.counter').counterUp({
    delay: 20,
    time: 3000
});

/*--
    Scroll Up
-----------------------------------*/
$.scrollUp({
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade',
    scrollText: '<i class="fa fa-angle-up"></i>',
});

/*--
    Magnific Video Popup
--------------------------------*/
var imagePopup = $('.image-popup');
imagePopup.magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
        enabled: true,
    },
});
var videoPopup = $('.video-popup');
videoPopup.magnificPopup({
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    zoom: {
        enabled: true,
    }
});

/*----- 
    Cart Plus Minus
--------------------------------*/
$('.product-quantity').prepend('<span class="dec qtybtn"><i class="fa fa-angle-left"></i></span>');
$('.product-quantity').append('<span class="inc qtybtn"><i class="fa fa-angle-right"></i></span>');
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

/*-- 
    Checkout Login/Register Form Toggle
-----------------------------------*/
var checkoutMethodList = $('.checkout-method-list li');
checkoutMethodList.on('click', function(){
    var form = $(this).data('form');
    if( !$(this).hasClass('active') ) {
        $('.checkout-method-list li').removeClass('active');
        $(this).addClass('active');
        $('.checkout-method form').slideUp(500);
        $('.' + form).delay(500).slideDown();
    }
});

/*-- 
    Checkout Shipping Form Toggle
-----------------------------------*/
var shipingFormToggle = $('.shipping-form-toggle');
var shipingForm = $('.shipping-form');
shipingFormToggle.on('click', function(){
    if( $(this).hasClass('active') ) {
        $(this).removeClass('active');
        shipingForm.slideUp();
    } else {
        $(this).addClass('active');
        shipingForm.slideDown();
    }
});

/*-- 
    Payment Method Toggle
-----------------------------------*/
var paymentMethodList = $('.payment-method-list li');
var paymentFormToggle = $('.payment-form-toggle');
var paymentForm = $('.payment-form');
paymentMethodList.on('click', function(){
    paymentMethodList.removeClass('active');
    $(this).addClass('active');
    if( $(this).hasClass('payment-form-toggle') ) {
        paymentForm.slideDown()
    } else {
        paymentForm.slideUp()
    }
});

/*--
    Input Type File
------------------------------------*/    
( function( $, window, document, undefined )
{
    $( 'input[type="file"]' ).each( function()
    {
        var $input	 = $( this ),
            $label	 = $input.next( 'label' ),
            labelVal = $label.html();

        $input.on( 'change', function( e )
        {
            var fileName = '';

            if( this.files && this.files.length > 1 )
                fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
            else if( e.target.value )
                fileName = e.target.value.split( '\\' ).pop();

            if( fileName )
                $label.html( fileName );
            else
                $label.html( labelVal );
        });

        // Firefox bug fix
        $input
        .on( 'focus', function(){ $input.addClass( 'has-focus' ); })
        .on( 'blur', function(){ $input.removeClass( 'has-focus' ); });
    });
})( jQuery, window, document );

/*--
    Speaker Share Toggle
------------------------------------*/    
$('.speaker-share-toggle').on('click', function(){
    $(this).siblings('.share').toggleClass('open');
})

/*--
    Event Submit Pricing Select
------------------------------------*/  
$('.event-submit-pricing').on('click', function(){
    $('.event-submit-pricing').removeClass('active');
    $(this).addClass('active');
})

/*--
    Smoth Scroll
------------------------------------*/  
$('[data-scroll]').on('click', function(event) {
    event.preventDefault();
    var link = this;
    $.smoothScroll({
        scrollTarget: link.hash,
        offset: - 90,
    });
});

})(jQuery);	
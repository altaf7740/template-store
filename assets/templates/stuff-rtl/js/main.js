(function ($) {
"use strict";
/*--
	Variables
------------------------*/
var $window = $(window);
var $preQty = $('.pro-qty, .cart-plus-minus-2');
var $preQty2 = $('.pro-qty-2');
/*--
	Preloader
------------------------*/
$window.on('load', function() {
	$(".preloader").fadeOut("slow");;
});
/*--
	Mobile Menu
------------------------*/
$('.mobile-menu nav').meanmenu({
	meanScreenWidth: '990',
	meanMenuContainer: '.mobile-menu-wrapper',
	meanMenuClose: '<i class="zmdi zmdi-close"></i>',
	meanMenuOpen: '<i class="zmdi zmdi-menu"></i>',
	meanRevealPosition: 'left',
	meanMenuCloseSize: '30px',
});
/*--
	Menu 3 Toggle
------------------------*/
$('.sidebar-menu-toggle').on('click', function(){
	$('.sidebar-menu-wrapper').addClass('open');
});
$('.menu-close').on('click', function(){
	$('.sidebar-menu-wrapper').removeClass('open');
});
/*----- 
	Sidebar Menu Treeview 
-------------------------------------*/
$('#sidebar-menu').treeview({
	animated: 'normal',
	persist: 'location',
	collapsed: true,
	unique: true,
});
$('.cat-treeview').treeview({
	animated: 'normal',
	persist: 'location',
	collapsed: true,
	unique: true,
});
/*--
	Menu Sticky
-----------------------------------*/
$window.on('scroll', function() {    
	var scroll = $window.scrollTop();
	if (scroll < 245) {
		$(".sticky").removeClass("stick");
	}else{
		$(".sticky").addClass("stick");
	}
});

/*--
	Main Slider
------------------------*/
$('#mainSlider-1').nivoSlider({
	directionNav: false,
	animSpeed: 500,
	slices: 18,
	pauseTime: 7000,
	pauseOnHover: false,
	controlNav: true,
});

/*--
	Main Slider
------------------------*/
$('#mainSlider-2').nivoSlider({
	animSpeed: 500,
	slices: 18,
	pauseTime: 7000,
	pauseOnHover: false,
	controlNav: false,
	prevText: '<i class="zmdi zmdi-caret-left"></i>',
	nextText: '<i class="zmdi zmdi-caret-right"></i>'
});

/*--
	Product Slider
-----------------------------------*/
$('.product-slider-6').slick({
  slidesToShow: 5,
  nextArrow: '<button type="button" class="slick-next"><i class="zmdi zmdi-caret-right"></i></button>',
  prevArrow: '<button type="button" class="slick-prev"><i class="zmdi zmdi-caret-left"></i></button>',
  responsive: [
    {
      breakpoint: 1400,
      settings: {
		slidesToShow: 4,
      }
    },
    {
      breakpoint: 1170,
      settings: {
		slidesToShow: 3,
      }
    },
    {
      breakpoint: 900,
      settings: {
		slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
		arrows: false,
		slidesToShow: 1,
      }
    },
  ]
});
/*--
	Arrival Slider
-----------------------------------*/
$('.arrival-slider').slick({
  arrows: false,
  dots: true,
  slidesToShow: 1,
});
/*--
	Testimonial Image Slider
-----------------------------------*/
$('.testimonial-image-slider').slick({
  arrows: false,
  asNavFor: '.testimonial-text-slider',
  centerMode: true,
  centerPadding: '120px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 350,
      settings: {
		centerPadding: '20px',
      }
    }
  ]
});
/*--
	Testimonial Text Slider
-----------------------------------*/
$('.testimonial-text-slider').slick({
  arrows: false,
  asNavFor: '.testimonial-image-slider',
  dots: true,
  slidesToShow: 1,
});
/*--
	Mini Product Slider
-----------------------------------*/
$('.mini-product-slider').slick({
  arrows: false,
  slidesToShow: 1,
});
/*--
	Brand Slider
-----------------------------------*/
$('.brand-slider').slick({
  arrows: false,
  slidesToShow: 5,
  responsive: [
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
/*--
	Product Thumb Slider
-----------------------------------*/
$('.pro-thumb-slider').slick({
  nextArrow: '<button type="button" class="slick-next"><i class="zmdi zmdi-chevron-right"></i></button>',
  prevArrow: '<button type="button" class="slick-prev"><i class="zmdi zmdi-chevron-left"></i></button>',
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 350,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});
/*--
	Product Thumb AddClass
------------------------*/
$('.pro-thumb a, .pro-thumb-slider a').on('click', function(){
	$('.pro-thumb a, .pro-thumb-slider a').removeClass( 'active' );
	$(this).addClass( 'active' );
});
/*--
	Count Down Timer
------------------------*/
$('[data-countdown]').each(function() {
	var $this = $(this), finalDate = $(this).data('countdown');
	$this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<span class="cdown day"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hrs</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"><span class="time-count">%S</span> <p>Sec</p></span>'));
	});
});
/*--
	MagnificPopup
------------------------*/
$('.pro-img-popup').magnificPopup({
	type: 'image',		
});
$('.gallery-image a').magnificPopup({
	type: 'image',
	gallery:{
		enabled:true
	}	
});
/*----- 
	Elevate Zoom 
--------------------------------*/
$('.pro-img-big img').elevateZoom({
	gallery:'pro-img-thumb',
	galleryActiveClass: 'active',
	imageCrossfade: true,
	zoomType: "inner",
});
/*----- 
	Cart Plus Minus
--------------------------------*/
$preQty.prepend('<span class="dec qtybtn"><i class="zmdi zmdi-minus"></i></span>');
$preQty.append('<span class="inc qtybtn"><i class="zmdi zmdi-plus"></i></span>');
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
$preQty2.append('<span class="inc qtybtn-2"><i class="zmdi zmdi-chevron-up"></i></span>');
$preQty2.append('<span class="dec qtybtn-2"><i class="zmdi zmdi-chevron-down"></i></span>');
$('.qtybtn-2').on('click', function() {
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
	Scroll Up
------------------------*/
$.scrollUp({
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade',
	scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
});
/*--
	Price Range Slider
------------------------*/
 $('#slider-range').slider({
	range: true,
	min: 0,
	max: 600,
	values: [ 40, 440 ],
	slide: function( event, ui ) {
		$('input[name="first_price"]').val('$' + ui.values[0]);
		$('input[name="last_price"]').val('$' + ui.values[1]);
	},
});
$('input[name="first_price"]').val('$' + $( '#slider-range' ).slider( 'values', 0 ));
$('input[name="last_price"]').val('$' + $( '#slider-range' ).slider( 'values', 1 ));
/*--
	MailChimp
------------------------*/
$('#mc-form').ajaxChimp({
	language: 'en',
	callback: mailChimpResponse,
	// ADD YOUR MAILCHIMP URL BELOW HERE!
	url: 'http://themeshaven.us8.list-manage.com/subscribe/post?u=759ce8a8f4f1037e021ba2922&amp;id=a2452237f8'

});
function mailChimpResponse(resp) {
	
	if (resp.result === 'success') {
		$('.mailchimp-success').html('' + resp.msg).fadeIn(900);
		$('.mailchimp-error').fadeOut(400);
		
	} else if(resp.result === 'error') {
		$('.mailchimp-error').html('' + resp.msg).fadeIn(900);
	}  
}
/*--
	Wow js
-----------------------------------*/
new WOW().init();

/*--
	Textillate Text Effect
-----------------------------------*/
$('.tlt').textillate({
  loop: true,
});



})(jQuery);	
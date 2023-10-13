(function ($) {
"use strict";
$(window).load(function() {
	$(".preloader").fadeOut("slow");;
});
/*--
	Mobile Menu
------------------------*/
$('.mobile-menu nav').meanmenu({
	meanScreenWidth: "990",
	meanMenuContainer: ".header-bottom-wrap",
});
/*--
	Main Slider
------------------------*/
$('#mainSlider').nivoSlider({
	directionNav: true,
	animSpeed: 500,
	slices: 18,
	pauseTime: 7000,
	pauseOnHover: false,
	controlNav: true,
	prevText: '<i class="zmdi zmdi-chevron-left"></i>',
	nextText: '<i class="zmdi zmdi-chevron-right"></i>'
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
	Owl Carousel
------------------------*/
$('.product-slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ['<i class="zmdi zmdi-chevron-left"></i>','<i class="zmdi zmdi-chevron-right"></i>'],
    margin: 30,
    responsive: {
        1200:{
            items:4
        },
        970:{
            items:3
        },
        768:{
            items:2,
			nav: false,
        },
        0:{
            items:1,
			nav: false,
        },
    }
})
$('.product-slider-2').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ['<i class="zmdi zmdi-chevron-left"></i>','<i class="zmdi zmdi-chevron-right"></i>'],
    margin: 30,
    responsive: {
        1400:{
            items:6
        },
        1200:{
            items:4
        },
        970:{
            items:3
        },
        768:{
            items:2,
			nav: false,
        },
        0:{
            items:1,
			nav: false,
        },
    }
})
$('.hot-deal-slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ['<i class="zmdi zmdi-chevron-left"></i>','<i class="zmdi zmdi-chevron-right"></i>'],
    margin: 30,
    responsive: {
        1200:{
            items:2
        },
        970:{
            items:1
        },
        768:{
            items:1,
        },
        0:{
            items:1,
			nav: false,
        },
    }
})
$('.blog-slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ['<i class="zmdi zmdi-chevron-left"></i>','<i class="zmdi zmdi-chevron-right"></i>'],
    margin: 30,
    responsive: {
        1200:{
            items:3
        },
        970:{
            items:2
        },
        768:{
            items:2,
			nav: false,
        },
        0:{
            items:1,
			nav: false,
        },
    }
})
$('.brand-slider').owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    navText: ['<i class="zmdi zmdi-chevron-left"></i>','<i class="zmdi zmdi-chevron-right"></i>'],
    margin: 120,
    responsive: {
        1200:{
            items:5
        },
        970:{
            items:4
        },
        768:{
            items:3,
			nav: false,
        },
        480:{
            items:2,
			nav: false,
        },
        0:{
            items:2,
			nav: false,
			margin: 40,
        },
    }
})
/*--
	Active Tab for View Mode
------------------------*/
$('.view-mode a').click(function(){
	var vmClass = $(this).attr('class');
	$( ".view-mode a" ).removeClass( "active" );
	$(".view-mode a."+vmClass).addClass( "active" );
});
/*----- 
	Category Sidebar Treeview 
-------------------------------------*/
$("#cat-treeview").treeview({
	animated: "normal",
	persist: "location",
	collapsed: true,
	unique: true,
});
/*----- 
	Custom Scroll 
--------------------------------*/
$(".cus-scroll").niceScroll({
	cursorborderradius: 0,
	cursorcolor:"#eeeeee",
	scrollspeed: 150,
});	
/*----- 
	Elevate Zoom 
--------------------------------*/
$(".pro-img-big img").elevateZoom({
	gallery:'pro-img-thumb',
	galleryActiveClass: 'active',
	imageCrossfade: true,
	zoomType: "inner",
});
/*----- 
	Cart Plus Minus
--------------------------------*/
$(".pro-qty, .cart-plus-minus-2").append('<span class="inc qtybtn"><i class="zmdi zmdi-chevron-up"></i></span>');
$(".pro-qty, .cart-plus-minus-2").append('<span class="dec qtybtn"><i class="zmdi zmdi-chevron-down"></i></span>');
$(".qtybtn").on("click", function() {
	var $button = $(this);
	var oldValue = $button.parent().find("input").val();
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
	$button.parent().find("input").val(newVal);
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
$( "#price-range" ).slider({
   range: true,
   min: 0,
   max: 300,
   values: [ 40, 250 ],
   slide: function( event, ui ) {
	$( "#price-amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
   }
  });
$( "#price-amount" ).val( "$" + $( "#price-range" ).slider( "values", 0 ) +
   " - $" + $( "#price-range" ).slider( "values", 1 ) ); 
/*--
	Magnific Popup
------------------------*/
$('.video-sidebar a').magnificPopup({
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
});
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

//>>>> Trigger ColorSwitcher
$(".ec-handle").on('click', function(){
	$(".ec-colorswitcher").trigger('click')
	$(this).toggleClass('btnclose');
	$(".ec-colorswitcher") .toggleClass('sidebarmain');
	return false;
});
$('.ec-boxed,.pattren-wrap a,.background-wrap a').on('click', function(){
	$(".as-mainwrapper").addClass('wrapper-boxed');
	$(".as-mainwrapper").removeClass('wrapper-wide');
});
$('.ec-wide').on('click', function(){
	$(".as-mainwrapper").addClass('wrapper-wide');
	$(".as-mainwrapper").removeClass('wrapper-boxed');
});


})(jQuery);	
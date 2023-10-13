(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */
  jQuery('nav#dropdown').meanmenu();	
	
/*----------------------------
 wow js active
------------------------------ */
	new WOW().init();

/* ----------------------------
 Tooltip
------------------------------ */
    $('[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        container: 'body'
    });
 
/* ---------------------------------------------
 Nivo slider
---------------------------------------------*/
	$('#ensign-nivoslider').nivoSlider({
		effect: 'random',
		slices: 15,
		boxCols: 8,
		boxRows: 4,
		animSpeed: 500,
		pauseTime: 5000,
		startSlide: 0,
		directionNav: true,
		controlNavThumbs: false,
		pauseOnHover: false,
	 });
			 
/*----------------------------
 Active-Product-Carousel
------------------------------ */  
  $(".active-product-carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='pe-7s-preview'></i>","<i class='pe-7s-play'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [991,3],
	  itemsTablet: [767,1],
	  itemsMobile : [479,1],
  });
  
 
/*----------------------------
 Active-Arrival-Carousel
------------------------------ */  
  $(".active-arrival-carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='pe-7s-preview'></i>","<i class='pe-7s-play'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [767,1],
	  itemsMobile : [479,1],
  });
  
 /*----------------------------
 Active-Testimonial-Carousel
------------------------------ */  
  $(".active-testimonial-carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	
	  transitionStyle : "backSlide", /* [This code for animation ] */	
      items : 1,
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
  });
 
 /*----------------------------
 Active-Blog-Post
------------------------------ */  
  $(".active-blog-post").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 2,
	  navigationText:["<i class='pe-7s-preview'></i>","<i class='pe-7s-play'></i>"],
      itemsDesktop : [1199,2],
	  itemsDesktopSmall : [980,2],
	  itemsTablet: [767,1],
	  itemsMobile : [479,1],
  });
  
  
/*----------------------------
 Active-Brands-Logo
------------------------------ */  
  $(".active-brands-logo").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 6,
      itemsDesktop : [1199,5],
	  itemsDesktopSmall : [980,4],
	  itemsTablet: [768,3],
	  itemsMobile : [479,1],
  });
  
/*----------------------------
 Single-product-carousel
------------------------------ */  
  $(".product-details-carousel").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:true,	  
      items : 4,
	  navigationText:["<i class='pe-7s-preview'></i>","<i class='pe-7s-play'></i>"],
      itemsDesktop : [1199,4],
	  itemsDesktopSmall : [980,4],
	  itemsTablet: [768,4],
	  itemsMobile : [479,2],
  });

/*---------------------
 countdown
--------------------- */
	$('[data-countdown]').each(function() {
	  var $this = $(this), finalDate = $(this).data('countdown');
	  $this.countdown(finalDate, function(event) {
		$this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
	  });
	});	

	
/*----------------------------
 Cart Plus Minus Button
------------------------------ */
 $(".cart-plus-minus").prepend('<div class="dec qtybutton">-</div>');
 $(".cart-plus-minus").append('<div class="inc qtybutton">+</div>');
 $(".qtybutton").on("click", function() {
  var $button = $(this);
  var oldValue = $button.parent().find("input").val();
  if ($button.text() == "+") {
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
/*----------------------------
 price-slider active
------------------------------ */  
	  $( "#slider-range" ).slider({
	   range: true,
	   min: 5,
	   max: 120,
	   values: [ 15, 85 ],
	   slide: function( event, ui ) {
		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	   }
	  });
	  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
	   " - $" + $( "#slider-range" ).slider( "values", 1 ) );  
	   
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });

/*--------------------------
  View Large Product Image
---------------------------- */	
$('.simpleLens-lens-image').simpleLens({
  loading_image: 'img/loading.gif'
 });	
 

 
 
})(jQuery); 
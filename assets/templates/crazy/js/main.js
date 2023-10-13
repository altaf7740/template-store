(function ($) {
 "use strict";

/*----------------------------
 jQuery MeanMenu
------------------------------ */
	jQuery('nav#dropdown').meanmenu();	
/*--------------------------
 menu a active jquery
---------------------------- */
	var pgurl = window.location.href.substr(window.location.href
		.lastIndexOf("/")+1);
		$("ul li a").each(function(){
		if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
		$(this).addClass("active");
	})
	$( "header ul li ul,.header-bottom-two ul li ul ,.magamenu " ).parent('li').addClass('drop-icon');
/*----------------------------
 nivoSlider active
------------------------------ */
	$('#mainSlider').nivoSlider({
		directionNav: true,
		animSpeed: 500,
		effect: 'random',
		slices: 18,
		pauseTime: 10000,
		pauseOnHover: false,
		controlNav: true,
		prevText: '<i class="pe-7s-play nivo-prev-icon"></i>',
		nextText: '<i class="pe-7s-play nivo-next-icon"></i>'
	});
/*----------------------------
 owl active
------------------------------ */  
	$("#view-gallery,#testimonials").owlCarousel({
	  autoPlay: false, 
	  slideSpeed:500,
	  pagination:false,
	  navigation:true,	  
	  items : 1,
	  transitionStyle : "backSlide",     /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	  itemsDesktop : [1199,1],
	  itemsDesktopSmall : [991,1],
	  itemsTablet: [767,1],
	  itemsMobile : [479,1],
	});
/*----------------------------
 owl active
------------------------------ */  
	$("#testimonials-two").owlCarousel({
	  autoPlay: false, 
	  slideSpeed:500,
	  pagination:false,
	  navigation:true,	  
	  items : 2,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	  itemsDesktop : [1199,2],
	  itemsDesktopSmall : [991,2],
	  itemsTablet: [767,1],
	  itemsMobile : [479,1],
	});
/*----------------------------
 owl active
------------------------------ */  
	$("#new-products,#tab-carousel-1,#tab-carousel-2,#tab-carousel-3,#tab-carousel-4,#tab-carousel-5").owlCarousel({
	  autoPlay: false, 
	  slideSpeed:1000,
	  pagination:false,
	  navigation:true,	  
	  items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	  itemsDesktop : [1199,4],
	  itemsDesktopSmall : [991,3],
	  itemsTablet: [767,2],
	  itemsMobile : [479,1],
	});
/*----------------------------
 owl active
------------------------------ */  
	$("#tabs-details").owlCarousel({
	  autoPlay: false, 
	  slideSpeed:1000,
	  pagination:false,
	  navigation:true,	  
	  items : 4,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	  itemsDesktop : [1199,4],
	  itemsDesktopSmall : [991,3],
	  itemsTablet: [767,3],
	  itemsMobile : [479,3],
	});
/*----------------------------
 owl active
------------------------------ */  
	$("#blog").owlCarousel({
	  autoPlay: false, 
	  slideSpeed:1000,
	  pagination:false,
	  navigation:true,	  
	  items : 3,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	  itemsDesktop : [1199,3],
	  itemsDesktopSmall : [991,2],
	  itemsTablet: [767,2],
	  itemsMobile : [479,1],
	});
/*----------------------------
 owl active
------------------------------ */  
	$("#brand-logo").owlCarousel({
	  autoPlay: false, 
	  slideSpeed:1000,
	  pagination:false,
	  navigation:true,	  
	  items : 6,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	  itemsDesktop : [1199,6],
	  itemsDesktopSmall : [991,4],
	  itemsTablet: [767,3],
	  itemsMobile : [479,2],
	});
/*----------------------------
 plus-minus-button
------------------------------ */
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
/*--------------------------
 tooltip active jquery
---------------------------- */
	$('.actions-btn a').tooltip({
        container: 'body'
    });
/*----------------------------
 price-slider active
------------------------------ */  
	$( "#slider-range" ).slider({
		range: true,
		min: 40,
		max: 600,
		values: [ 100, 568 ],
		slide: function( event, ui ) {
		$( "#amount" ).val( "" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
		}
	});
	$( "#amount" ).val( "" + $( "#slider-range" ).slider( "values", 0 ) +
	" - " + $( "#slider-range" ).slider( "values", 1 ) );
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
 tablist
---------------------------- */
	$('.quick-thumb .tablist a').on('click', function(){
		$('.quick-thumb .tablist a').removeClass('active');
		$('.quick-thumb .tablist').removeClass('active');
		$(this).addClass('active');
	});
	$('#reviews-tab a').on('click',function (e) {
		e.preventDefault()
		$(this).tab('show')
	});
/*--------------------------
 simpleLens
---------------------------- */
	$('.simpleLens-image').simpleLens({
		
	});
	
})(jQuery); 
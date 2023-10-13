(function ($) {
 "use strict";

	/*----------------------------
	 jQuery MeanMenu
	------------------------------ */
	$('.active-mobile-menu').meanmenu();	
	
	/*----------------------------
	 wow js active
	------------------------------ */
	new WOW().init();
 
	/*----------------------------
	 owl active
	------------------------------ */  
    /*Owl for animate-text main slider*/

	$(".active-owl-slider").owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:false,
		navigation:true,	  
		items :1,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
	}); 
  
  
  
	$("#owl-demo").owlCarousel({
		autoPlay: false, 
		slideSpeed:2000,
		pagination:false,
		navigation:true,	  
		items : 4,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsMobile : [479,1],
	});

	/*----------------------------
	 price-slider active
	------------------------------ */
	var sliderange = $("#slider-range");
	var amountvalue = $("#amount");
	
	sliderange.slider({
		range: true,
		min: 40,
		max: 600,
		values: [ 60, 570 ],
		slide: function( event, ui ) {
			amountvalue.val( "£" + ui.values[ 0 ] + " - £" + ui.values[ 1 ] );
		}
	});
	amountvalue.val( "£" + sliderange.slider( "values", 0 ) +
	" - £" + sliderange.slider( "values", 1 ) );  
	

	
	/*--------------------------
	 scrollUp
	---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    }); 	

	/* Countdown*/

	$('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span><span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span><span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"><span class="time-count">%S</span> <p>Sec</p></span>'));
        });
    });
 
	/*Owl textimonial*/ 
	$(".active-testimonial").owlCarousel({
		autoPlay: false,
		stopOnHover :true,
		slideSpeed:2000,
		pagination:false,
		navigation:true,	  
		items : 1,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [980,1],
		itemsTablet: [768,1],
		itemsMobile : [479,1],
	});

	/*Teachers*/
 
	$(".active-teachers-owl").owlCarousel({
		autoPlay: false,
		stopOnHover :false,
		slideSpeed:2000,
		pagination:false,
		navigation:true,	  
		items : 4,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [980,4],
		itemsTablet: [768,2],
		itemsMobile : [479,1],
	});
	/*Teachers*/
 
   $(".active-page-blog-owl").owlCarousel({
		autoPlay: false,
		stopOnHover :false,
		slideSpeed:2000,
		pagination:false,
		navigation:true,	  
		items : 3,
		/* transitionStyle : "fade", */    /* [This code for animation ] */
		navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		itemsDesktop : [1199,3],
		itemsDesktopSmall : [980,3],
		itemsTablet: [768,2],
		itemsMobile : [479,1],
	 });
    /*For js counter up*/
	
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
  
	/* mixItUp
    ------------------------------ */
    $('#mix-fil').mixItUp();
	
	
	/*
		for sticky menu
	*/
	var win = $(window);
    var stickey = $("#sticky-header");
	
	win.on('scroll', function() {
        var scroll = win.scrollTop();
        if (scroll < 100) {
            stickey.removeClass("sticky");
        } else {
            stickey.addClass("sticky");
        }
    });
	
	 
	/*Scroll menu with a current class*/
 
	var top_offset = $('.logo-menu-area').height() - -15;  // get height of fixed navbar
		$('#nav').onePageNav({
		scrollOffset: top_offset,
		scrollSpeed: 750,
		easing: 'swing',
		currentClass: 'current',
	});
	
	 
	/*--------------------------
        scrollUp
    ---------------------------- */
    
    var totop = $(".to-top");
    
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
	/*Scroll to top button end*/
	
	
	/* For venobox of portfolio page*/
	$('.venobox').venobox();


	
	
})(jQuery); 





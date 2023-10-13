(function ($) {
 "use strict";

	/*----------------------------
	 jQuery MeanMenu
	------------------------------ */
		jQuery('nav#mobile-nav').meanmenu();	
	
	/*----------------------------
	 wow js active
	------------------------------ */
	 new WOW().init();
	/*---------------------
	 Category menu
	--------------------- */
	$('#cate-toggle li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp();
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown();
			element.siblings('li').children('ul').slideUp();
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp();
		}
	});
	$('#cate-toggle>ul>li.has-sub>a').append('<span class="holder"></span>');
	/*----------------------------
	 owl active
	------------------------------ */  
		  $("#featured-product-owl").owlCarousel({
			  autoPlay: false, 
			  slideSpeed:2000,
			  pagination:false,
			  navigation:true,	  
			  items : 4,
			  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			  itemsDesktop : [1199,4],
			  itemsDesktopSmall : [980,3],
			  itemsTablet: [768,1],
			  itemsMobile : [479,1],
		  });
		  $("#featured-product-owl2").owlCarousel({
			  autoPlay: false, 
			  slideSpeed:2000,
			  pagination:false,
			  navigation:true,	  
			  items : 4,
			  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			  itemsDesktop : [1199,4],
			  itemsDesktopSmall : [980,3],
			  itemsTablet: [768,1],
			  itemsMobile : [479,1],
		  });
		  $("#featured-product-owl3").owlCarousel({
			  autoPlay: false, 
			  slideSpeed:2000,
			  pagination:false,
			  navigation:true,	  
			  items : 4,
			  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			  itemsDesktop : [1199,4],
			  itemsDesktopSmall : [980,3],
			  itemsTablet: [768,1],
			  itemsMobile : [479,1],
		  });
		  $("#bestsell-owl").owlCarousel({
			  autoPlay: false, 
			  slideSpeed:2000,
			  pagination:false,
			  navigation:true,	  
			  items : 3,
			  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			  itemsDesktop : [1199,3],
			  itemsDesktopSmall : [980,3],
			  itemsTablet: [768,1],
			  itemsMobile : [479,1],
		  });
		  $("#ourbrand-owl").owlCarousel({
			  autoPlay: false, 
			  slideSpeed:2000,
			  pagination:false,
			  navigation:true,	  
			  items : 6,
			  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			  itemsDesktop : [1199,6],
			  itemsDesktopSmall : [980,3],
			  itemsTablet: [768,3],
			  itemsMobile : [479,1],
		  });
		  $("#featured-product-owl4").owlCarousel({
			  autoPlay: false, 
			  slideSpeed:2000,
			  pagination:false,
			  navigation:true,	  
			  items : 4,
			  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			  itemsDesktop : [1199,4],
			  itemsDesktopSmall : [980,3],
			  itemsTablet: [768,2],
			  itemsMobile : [479,1],
		  });
		$("#featured-product-owl5").owlCarousel({
			autoPlay: false, 
			slideSpeed:2000,
			pagination:false,
			navigation:true,	  
			items : 4,
			navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
			itemsDesktop : [1199,4],
			itemsDesktopSmall : [980,3],
			itemsTablet: [768,2],
			itemsMobile : [479,1],
		});
		$("#upsell-owl").owlCarousel({
		  autoPlay: false, 
		  slideSpeed:2000,
		  pagination:false,
		  navigation:true,	  
		  items : 3,
		  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		  itemsDesktop : [1199,3],
		  itemsDesktopSmall : [980,3],
		  itemsTablet: [768,2],
		  itemsMobile : [479,1],
	  });
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
			prevText: '<i class="zmdi zmdi-chevron-left"></i>',
			nextText: '<i class="zmdi zmdi-chevron-right"></i>'
		});
	/*----------------------------
	 price-slider active
	------------------------------ */  
		  $( "#slider-range" ).slider({
		   range: true,
		   min: 5,
		   max: 120,
		   values: [ 25, 95 ],
		   slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		   }
		  });
		  $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		   " - $" + $( "#slider-range" ).slider( "values", 1 ) );  
	/*--------------------------
	 countdown
	---------------------------- */
		 $('[data-countdown]').each(function() {
		   var $this = $(this), finalDate = $(this).data('countdown');
		   $this.countdown(finalDate, function(event) {
		  $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
		   });
		 });
	/*--------------------------
		About Us page Accrodian
	---------------------------- */
		 $('.collapse').on('shown.bs.collapse', function(){
			$(this).parent().find(".fa-plus-circle").removeClass("fa-plus-circle").addClass("fa-minus-circle");
			}).on('hidden.bs.collapse', function(){
			$(this).parent().find(".fa-minus-circle").removeClass("fa-minus-circle").addClass("fa-plus-circle");
			});	
	/*--------------------------
		Testimonial Slick Slider
	---------------------------- */
		 $('.slider-for').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  arrows: true,
			  fade: true,
			  asNavFor: '.slider-nav',
			});
		  $('.slider-nav').slick({
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  asNavFor: '.slider-for',
			  dots: false,
			  centerMode: false,
			  arrows: false,
			  focusOnSelect: true,
			  vertical: true,
			});	 
	/*----------------------------
		CHECKOUT Page
	------------------------------ */
		  $('.panel-heading a').on('click', function() {
			$('.panel-default').removeClass('actives');
			$(this).parents('.panel-default').addClass('actives');
		  });
	/*-------------------------------------
		Create an account toggle function
	--------------------------------------- */
		 $( '#cbox' ).on('click', function() {
			$( '#cbox_info' ).slideToggle(900);
		 });
	/*-------------------------------------
		Create an account toggle function
	--------------------------------------- */	 
		 $( '#ship-box' ).on('click', function() {
			$( '#ship-box-info' ).slideToggle(1000);
		 });
	/*--------------------------
	 scrollUp
	---------------------------- */	
		$.scrollUp({
			scrollText: '<i class="fa fa-angle-up"></i>',
			easingType: 'linear',
			scrollSpeed: 900,
			animation: 'fade'
		}); 
		
		var bodyEl = document.body,
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.getElementById( 'open-button' ),
		closebtn = document.getElementById( 'close-button' ),
		isOpen = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it´s not the menu element or one of its descendants..
		/* content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} ); */
	}

	function toggleMenu() {
		if( isOpen ) {
			classie.remove( bodyEl, 'show-menu' );
		}
		else {
			classie.add( bodyEl, 'show-menu' );
		}
		isOpen = !isOpen;
	}

	init();
	
	/*---------------------
	Single  product Zoom
	--------------------- */
	   $('.zoom_01').elevateZoom({
		easing : true,
		cursor: "crosshair",
		zoomWindowFadeIn: 300,
		zoomWindowFadeOut: 350
	   });
 
})(jQuery); 
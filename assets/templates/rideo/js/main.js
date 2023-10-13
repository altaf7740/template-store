(function ($) {
 "use strict";


/************************************
	Mega menu 
************************************/
	$('#mainslider').camera({
		height: '44%',
		loader: 'none',
		pagination: false,
		playPause: false,
		thumbnails: false,
		autoAdvance: true,
		navigation: false,
		hover: false,
		opacityOnGrid: false,
		overlayer: true,
		fx: 'random'
	});



 
	// jQuery MeanMenu
	jQuery('nav#dropdown').meanmenu();

	//menu a active jquery
	var pgurl = window.location.href.substr(window.location.href
		.lastIndexOf("/")+1);
		$('ul li a').on('each',function(){
		if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
		$(this).addClass("active");
	})
	//li parent select
	$('.mega-menu').parent('li').addClass('mega-parent');
	
	//accordion active
	$('.collapse.in').parent('li.panel').addClass('collapse-in');
	$('.custom-radio').on('click',function(){
		$('li.panel').removeClass('collapse-in');
	});
	
	$('.radio-in').addClass('add-in');
	$('.custom-radio').on('click',function(){
		$('.radio-in').removeClass('add-in');
	});
	
	//tab twice active class
	$('.view-mode a').on('click',function(){
	 var vmClass = $(this).attr('class');
		$( ".view-mode a" ).removeClass( "active" );
		$(".view-mode a."+vmClass).addClass( "active" );
	});
	
	//TOP Menu sticky
	var s = $('#sticky-menu');
	var pos = s.position();
	$(window).on('scroll',function() {
		var windowpos = $(window).scrollTop();
		if (windowpos > pos.top) {
		s.addClass("sticky");
		} else {
			s.removeClass("sticky");	
		}
	});
/*------------------------------------
	Slick Carousel as Nav
--------------------------------------*/
	  $('.featured-slider').slick({
	  centerMode: true,
	  centerPadding: '0px',
	  slidesToShow: 3,
	  prevArrow: '<img class="prev" src="img/icon/prev.png" alt="prev" />',
	  nextArrow: '<img class="next" src="img/icon/next.png" alt="next" />',
	  responsive: [
		{ breakpoint: 1169, settings: { slidesToShow: 3 } },
		{ breakpoint: 969, settings: { slidesToShow: 3 } },
		{ breakpoint: 767, settings: { slidesToShow: 1 } },
		{ breakpoint: 480, settings: { slidesToShow: 1 } }
	  ]
	});
	
	$('.sell-up-right').slick({
		prevArrow: '<img class="prev" src="img/icon/prev.png" alt="prev" />',
		nextArrow: '<img class="next" src="img/icon/next.png" alt="next" />',
	});
	$('.four-item').slick({
			slidesToShow: 4,
			prevArrow: '<img class="prev" src="img/icon/prev.png" alt="prev" />',
			nextArrow: '<img class="next" src="img/icon/next.png" alt="next" />',
			responsive: [
				{ breakpoint: 1169, settings: { slidesToShow: 3 } },
				{ breakpoint: 969, settings: { slidesToShow: 3 } },
				{ breakpoint: 767, settings: { slidesToShow: 2 } },
				{ breakpoint: 480, settings: { slidesToShow: 1 } }
			]
	});
	$('.four-item-w').slick({
			slidesToShow: 4,
			prevArrow: '<img class="prev" src="img/icon/w-prev.png" alt="prev" />',
			nextArrow: '<img class="next" src="img/icon/w-next.png" alt="next" />',
			responsive: [
				{ breakpoint: 1169, settings: { slidesToShow: 3 } },
				{ breakpoint: 969, settings: { slidesToShow: 3 } },
				{ breakpoint: 767, settings: { slidesToShow: 2 } },
				{ breakpoint: 480, settings: { slidesToShow: 1 } }
			]
	});
	$('.related-slider').slick({
			slidesToShow: 4,
			prevArrow: '<i class="fa fa-angle-left prev"></i>',
			nextArrow: '<i class="fa fa-angle-right next"></i>',
			responsive: [
				{ breakpoint: 1169, settings: { slidesToShow: 3 } },
				{ breakpoint: 969, settings: { slidesToShow: 3 } },
				{ breakpoint: 767, settings: { slidesToShow: 2 } },
				{ breakpoint: 480, settings: { slidesToShow: 1 } }
			]
	});
/*----------------------------
	single-pro-slider
------------------------------ */  
	 $('.large-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.large-slider',
		dots: false,
		arrows: true,
		centerMode: false,
		focusOnSelect: true,
		prevArrow: '<div class="angle-left"><i class="fa fa-angle-left"></i></div>',
		nextArrow: '<div class="angle-right"><i class="fa fa-angle-right"></i></div>',
	});
/*----------------------------
 magnificPopup
------------------------------ */
	 $('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
			  return item.el.attr('title') + '  ';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
			  return element.find('img');
			}
		}
	});
/*----------------------------
 plus-minus-button
------------------------------ */
	$('.qtybutton').on('click', function() {
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
	
	function collision($div1, $div2) {
		var x1 = $div1.offset().left;
		var w1 = 40;
		var r1 = x1 + w1;
		var x2 = $div2.offset().left;
		var w2 = 40;
		var r2 = x2 + w2;
		if (r1 < x2 || x1 > r2) return false;
		return true;
	}
	$('#range-slider').slider({
		range: true,
		min: 100,
		max: 500,
		values: [ 100, 330 ],
		slide: function(event, ui) {
			
		$('.ui-slider-handle:eq(0) .price-range-min').html('' + ui.values[ 0 ]);
		$('.ui-slider-handle:eq(1) .price-range-max').html('' + ui.values[ 1 ]);
		$('.price-range-both').html('<i>$' + ui.values[ 0 ] + ' - </i>$' + ui.values[ 1 ] );
			
		if ( ui.values[0] == ui.values[1] ) {
		  $('.price-range-both i').css('display', 'none');
		} else {
		  $('.price-range-both i').css('display', 'inline');
		}
			if (collision($('.price-range-min'), $('.price-range-max')) == true) {
				$('.price-range-min, .price-range-max').css('opacity', '0');	
				$('.price-range-both').css('display', 'block');		
			} else {
				$('.price-range-min, .price-range-max').css('opacity', '1');	
				$('.price-range-both').css('display', 'none');		
			}
		}
	});
	$('.ui-slider-range').append('<span class="price-range-both value"><i>$' + $('#range-slider').slider('values', 0 ) + ' - </i>' + $('#range-slider').slider('values', 1 ) + '</span>');
	$('.ui-slider-handle:eq(0)').append('<span class="price-range-min value">' + $('#range-slider').slider('values', 0 ) + '</span>');
	$('.ui-slider-handle:eq(1)').append('<span class="price-range-max value">' + $('#range-slider').slider('values', 1 ) + '</span>');
/*--------------------------
 scrollUp
---------------------------- */	
	$.scrollUp({
        scrollText: '<i class="fa fa-angle-double-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
	
})(jQuery); 
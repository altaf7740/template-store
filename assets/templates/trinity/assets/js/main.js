(function($){

	'use strict';

    // Check if element exists
    $.fn.elExists = function() {
        return this.length > 0;
    };

	// Variables

	var $html = $('html'),
		$body = $('body'),
		$window = $(window),
		$window_width = $(window).outerWidth(),
		$pageUrl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1),
		$header = $('.header'),
		$overlay = $('.trinity-global-overlay'),
		$headerPosition = ( $header.elExists() ) ? $header.offset().top : '',
		$mainHeaderHeight = ( $header.elExists() ) ? $header[0].getBoundingClientRect().height : 0,
		$headerTotalHeight = $headerPosition + $mainHeaderHeight,
		$dom = $('.wrapper').children(),
		$elementCarousel = $('.trinity-element-carousel');



	/**********************
	*Background Color settings
	***********************/ 
	var $bgcolor = $('.bg-color');
	$bgcolor.each(function(){
		var $this = $(this),
			$color = $this.data('bg-color');
		$this.css('background-color', $color);
	});

	/**********************
	*Background Image settings
	***********************/ 

	var $bgimage = $('.bg-image');
	$bgimage.each(function(){
		var $this = $(this),
			$image = $this.data('bg-image');

		$this.css({
			'background-image': 'url(' + $image + ')'
		});
	});


	/**********************
	*Off Canvas Menu
	***********************/ 


    /*Variables*/
    var $offcanvasNav = $('.offcanvas-menu'),
        $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');
    
    /*Add Toggle Button With Off Canvas Sub Menu*/
    $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="fa fa-angle-down"></i></span>');
    
    /*Close Off Canvas Sub Menu*/
    $offcanvasNavSubMenu.slideUp();
    
    /*Category Sub Menu Toggle*/
    $offcanvasNav.on('click', 'li a, li .menu-expand', function(e) {
        var $this = $(this);
        if ( ($this.parent().attr('class').match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand')) ) {
            e.preventDefault();
            if ($this.siblings('ul:visible').length){
                $this.siblings('ul').slideUp('slow');
            }else {
                $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                $this.siblings('ul').slideDown('slow');
            }
        }
        if( $this.is('a') || $this.is('span') || $this.attr('clas').match(/\b(menu-expand)\b/) ){
        	$this.parent().toggleClass('menu-open');
        }else if( $this.is('li') && $this.attr('class').match(/\b('menu-item-has-children')\b/) ){
        	$this.toggleClass('menu-open');
        }
    });

	/**********************
	* Sticky Header
	***********************/

	$(window).on({
	    load:function(){
	     	if($(this).outerWidth() > 991){
	     		stickyHeader();
	     	}
	    },
	    resize:function(){
	     	if($(this).outerWidth() > 991){
	     		stickyHeader();
	     	}
	    }
	});

	function stickyHeader(){
		$(window).on('scroll', function(){
		    if ($(window).scrollTop() >= $headerTotalHeight) {
		        $('.fixed-header').addClass('sticky-header');
		    }
		    else {
		        $('.fixed-header').removeClass('sticky-header');
		    }
		});		
	}



	/**********************
	* Scroll To Top
	***********************/

	var scrollTop = $(".scroll-to-top");
	$(window).on('scroll',function() {
		var topPos = $(this).scrollTop();

		if (topPos > 100) {
			$(scrollTop).css("opacity", "1");

		} else {
			$(scrollTop).css("opacity", "0");
		}

	}); 

	$(scrollTop).on('click',function() {
		$('html, body').animate({
			scrollTop: 0
		}, 800);
		return false;

	}); 


	/**********************
	* Contact Form
	***********************/

	var $form = $('#contact-form');
	var $formMessages = $('.form__output');
	// Set up an event listener for the contact form.
	$form.submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(this).serialize();
		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $($form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$formMessages.removeClass('error');
			$formMessages.addClass('success');

			// Set the message text.
			$formMessages.text(response);

			// Clear the form.
			$('#contact-form input,#contact-form textarea').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$formMessages.removeClass('success');
			$formMessages.addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$formMessages.text(data.responseText);
			} else {
				$formMessages.text('Oops! An error occured and your message could not be sent.');
			}
		});
	});


	/**********************
	* Countdown Activation
	***********************/
	
	$('[data-countdown]').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			$this.html(event.strftime('<div class="single-countdown"><span class="single-countdown__time single-countdown__time--day">%D</span><span class="single-countdown__text single-countdown__time--day">Days,</span></div><div class="single-countdown"><span class="single-countdown__time">%H</span><span class="single-countdown__text">:</span></div><div class="single-countdown"><span class="single-countdown__time">%M</span><span class="single-countdown__text">:</span></div><div class="single-countdown"><span class="single-countdown__time">%S</span></div>'));
		});
	}); 

	/**********************
	*Header Toolbar Sidenav Expand
	***********************/

	$('.toolbar-btn').on('click', function(e){
		e.preventDefault();
		e.stopPropagation();
		var $this = $(this);
		var target = $this.attr('href');
		var prevTarget = $('.toolbar-btn').attr('href');
		var prevTarget = $this.parent().siblings().children('.toolbar-btn').attr('href');
		$(target).toggleClass('open');
		$(prevTarget).removeClass('open');
		$($overlay).addClass('overlay-open');
		if($this.attr('class').match(/\b(menu-btn)\b/)){
			$this.children('.hamburger-icon').toggleClass('open');
		}
	});

	/**********************
	*Blog Share Button
	***********************/

	$('.share-btn').on('click', function(e){
		e.preventDefault();
		$(this).parent().siblings('.blog__share-icons').toggleClass('share-visible');
	});
	

	/**********************
	*Click on Documnet
	***********************/

	$body.on('click', function (e){
	    var $target = e.target;
	    var dom = $('.wrapper').children();
	    
	    if (!$($target).is('.toolbar-btn') && !$($target).is('.product-filter-btn') && !$($target).parents().is('.open')) {
	        dom.removeClass('open');
	        dom.find('.open').removeClass('open');
	        $overlay.removeClass('overlay-open');
	    }
	});


	/**********************
	*Close Button Actions
	***********************/

	$('.btn-close').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		$this.parents('.open').removeClass('open');
		$($overlay).removeClass('overlay-open');
	});



	/**********************
	*Adding Slide effect to dropdown
	***********************/ 

	$('.dropdown').on('show.bs.dropdown', function(e){
	  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
	});

	$('.dropdown').on('hide.bs.dropdown', function(e){
	  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
	});	


	/**********************
	*BootStrap Tab
	***********************/ 

	$('.tab-style-1').on('click', '.nav-link', function(){
		var $this = $(this);
		var $target = $this.attr('href');
		var $prevTarget = $this.siblings().attr('href');
		var $prevChildren = $($prevTarget).children().find('.trinity-product');
		var $activeChildren = $($target).children().find('.trinity-product');
		$($activeChildren).addClass('animated');
		$($prevChildren).removeClass('animated');
	});


	/**********************
	* Product Quantity
	***********************/

    $(".quantity").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');

    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.hasClass("inc")) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });	



	/**********************
	* Expand User Activation
	***********************/

	$(".expand-btn").on('click', function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		$(target).slideToggle('slow');
	});

	/**********************
	*Expand new shipping info  
	***********************/

	$("#shipdifferetads").on('change', function(){
		if(  $("#shipdifferetads").prop( "checked" ) ){
			$(".ship-box-info").slideToggle('slow');
		}else{
			$(".ship-box-info").slideToggle('slow');
		}
	});


	/**********************
	* Expand payment Info
	***********************/

    $('input[name="payment-method"]').on('click', function () {
        var $value = $(this).attr('value');
        $(this).parents('.payment-group').siblings('.payment-group').children('.payment-info').slideUp('300');
        $('[data-method="' + $value + '"]').slideToggle('300');
    });


	
	/**********************
	*Element Carousel
	***********************/ 

	if($elementCarousel.elExists()){
		var slickInstances = [];

	    /*For RTL*/
	    if( $html.attr("dir") == "rtl" || $body.attr("dir") == "rtl" ){
	        $elementCarousel.attr("dir", "rtl");
	    }
    

		$elementCarousel.each(function(index, element){
			var $this = $(this);	

			// Carousel Options
			

			var $options = typeof $this.data('slick-options') !== 'undefined' ? $this.data('slick-options') : ''; 

			var $spaceBetween = $options.spaceBetween ? parseInt($options.spaceBetween, 10) : 0,
			    $spaceBetween_xl = $options.spaceBetween_xl ? parseInt($options.spaceBetween_xl, 10) : 0,
			    $rowSpace = $options.rowSpace ? parseInt($options.rowSpace, 10) : 0,
			    $vertical = $options.vertical ? $options.vertical : false,
			    $focusOnSelect = $options.focusOnSelect ? $options.focusOnSelect : false,
			    $asNavFor = $options.asNavFor ? $options.asNavFor : '',
			    $fade = $options.fade ? $options.fade : false,
			    $autoplay = $options.autoplay ? $options.autoplay : false,
			    $autoplaySpeed = $options.autoplaySpeed ? parseInt($options.autoplaySpeed, 10) : 5000,
			    $swipe = $options.swipe ? $options.swipe : true,
			    $swipeToSlide = $options.swipeToSlide ? $options.swipeToSlide : true,
			    $touchMove = $options.touchMove ? $options.touchMove : true,
			    $verticalSwiping = $options.verticalSwiping ? $options.verticalSwiping : true,
			    $draggable = $options.draggable ? $options.draggable : true,
			    $arrows = $options.arrows ? $options.arrows : false,
			    $dots = $options.dots ? $options.dots : false,
			    $infinite = $options.infinite ? $options.infinite : false,
			    $centerMode = $options.centerMode ? $options.centerMode : false,
			    $centerPadding = $options.centerPadding ? $options.centerPadding : '',
			    $speed = $options.speed ? parseInt($options.speed, 10) : 500,
			    $appendArrows = $options.appendArrows ? $options.appendArrows : $this,
			    $prevArrow = $arrows === true ? ($options.prevArrow ? '<span class="'+ $options.prevArrow.buttonClass +'"><i class="'+ $options.prevArrow.iconClass +'"></i></span>' : '<button class="tty-slick-text-btn tty-slick-text-prev">previous</span>') : '',
        		$nextArrow = $arrows === true ? ($options.nextArrow ? '<span class="'+ $options.nextArrow.buttonClass +'"><i class="'+ $options.nextArrow.iconClass +'"></i></span>' : '<button class="tty-slick-text-btn tty-slick-text-next">next</span>') : '',
			    $rows = $options.rows ? parseInt($options.rows, 10) : 1,
			    $rtl = $options.rtl || $html.attr('dir="rtl"') || $body.attr('dir="rtl"') ? true : false,
			    $slidesToShow = $options.slidesToShow ? parseInt($options.slidesToShow, 10) : 1,
			    $slidesToScroll = $options.slidesToScroll ? parseInt($options.slidesToScroll, 10) : 1;

			/*Responsive Variable, Array & Loops*/
			var $responsiveSetting = typeof $this.data('slick-responsive') !== 'undefined' ? $this.data('slick-responsive') : '',
			    $responsiveSettingLength = $responsiveSetting.length,
			    $responsiveArray = [];
			    for (var i = 0; i < $responsiveSettingLength; i++) {
					$responsiveArray[i] = $responsiveSetting[i];
					
				}

			// Adding Class to instances
			$this.addClass('slick-carousel-'+index);		
			$this.parent().find('.slick-dots').addClass('dots-'+index);		
			$this.parent().find('.slick-btn').addClass('btn-'+index);

			if($spaceBetween != 0){
				$this.addClass('slick-gutter-'+$spaceBetween);
			}
			if($spaceBetween_xl != 0){
				$this.addClass('slick-gutter-xl-'+$spaceBetween_xl);
			}
			var $slideCount = null;
			$this.on('init', function(event, slick){
				$this.find('.slick-active').first().addClass('first-active');
				$this.find('.slick-active').last().addClass('last-active');
				$slideCount = slick.slideCount;
				if($slideCount <= $slidesToShow){
					$this.children('.slick-dots').hide();	
				}
		        var $firstAnimatingElements = $('.slick-slide').find('[data-animation]');
		        doAnimations($firstAnimatingElements);  
			});
			$this.slick({
				slidesToShow: $slidesToShow,
				slidesToScroll: $slidesToScroll,
				asNavFor: $asNavFor,
				autoplay: $autoplay,
				autoplaySpeed: $autoplaySpeed,
				speed: $speed,
				infinite: $infinite,
				arrows: $arrows,
				dots: $dots,
				vertical: $vertical,
				focusOnSelect: $focusOnSelect,
				centerMode: $centerMode,
				centerPadding: $centerPadding,
				swipe: $swipe,
				swipeToSlide: $swipeToSlide,
				touchMove: $touchMove,
				draggable: $draggable,
				fade: $fade,
				appendArrows: $appendArrows,
				prevArrow: $prevArrow,
				nextArrow: $nextArrow,
				rtl: $rtl,
				responsive: $responsiveArray,
			});	

			$this.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
				$this.find('.slick-active').first().removeClass('first-active');
				$this.find('.slick-active').last().removeClass('last-active');
				var $animatingElements = $('.slick-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
				doAnimations($animatingElements);
			});
		    function doAnimations(elements) {
		        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		        elements.each(function() {
		        	var $el = $(this);
		            var $animationDelay = $el.data('delay');
		            var $animationDuration = $el.data('duration');
		            var $animationType = 'animated ' + $el.data('animation');
		            $el.css({
		                'animation-delay': $animationDelay,
		                'animation-duration': $animationDuration,
		            });
		            $el.addClass($animationType).one(animationEndEvents, function() {
		                $el.removeClass($animationType);
		            });
		        });
		    }

		    $this.on('afterChange', function(e, slick){
				$this.find('.slick-active').first().addClass('first-active');
				$this.find('.slick-active').last().addClass('last-active');
		    });

	        // Updating the sliders in tab
	        $('body').on('shown.bs.tab', 'a[data-toggle="tab"], a[data-toggle="pill"]', function (e) {
	            $this.slick('setPosition');
	        });
		});
	}


	/**********************
	*WOW Js activation 
	***********************/

	new WOW().init();



	/**********************
	*Magnific Popup Activation
	***********************/ 

	var imagePopup = $('.popup-btn');
	var videoPopup = $('.video-popup');

	imagePopup.magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	videoPopup.magnificPopup({
		type: 'iframe',
        closeMarkup: '<button type="button" class="custom-close mfp-close"><i class="pe-7s-close mfp-close"></i></button type="button">'
	});


	/**********************
	*Sticky Sidebar
	***********************/

    $('#sticky-sidebar').theiaStickySidebar({
      // Settings
      additionalMarginTop: 95
    });

	/**********************
	* Nice Select Activation
	***********************/

	$('.nice-select').niceSelect();


	/**********************
	*Tooltip
	***********************/

	$('[data-toggle="tooltip"]').tooltip();


	/*================================
	    Accordion 
	==================================*/

	$('.accordion__link').on('click', function(e){
		e.preventDefault();
		var $this = $(this);
		var $target =  $(this).data('target');

		$this.parent().toggleClass('open');
		$($target).slideToggle(300);
	});


	/*================================
	    Newsletter Form JS
	==================================*/
    var subscribeUrl = $(".mc-form").attr('action');

    $('.mc-form').ajaxChimp({
        language: 'en',
        url: subscribeUrl,
        callback: mailChimpResponse
    });

    function mailChimpResponse(resp) {
        if (resp.result === 'success') {
            $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
            $('.mailchimp-error').fadeOut(400);
            $(".mc-form").trigger('reset');
        } else if (resp.result === 'error') {
            $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
        }
    }

	/*================================
	    Product View Mode
	==================================*/

	$('.product-view-mode a').on('click', function(e){
	    e.preventDefault();

	    var $this = $(this);
	    var shopProductWrap = $('.shop-products');
	    var viewMode = $this.data('target');

	    
	    $('.product-view-mode a').removeClass('active');
	    $this.addClass('active');
	    shopProductWrap.removeClass('grid list').addClass(viewMode);

	    if($this.parents('.shop-page-wrapper').hasClass('shop-fullwidth')){
		    if(viewMode === 'list'){
		    	shopProductWrap.removeClass('container-fluid')
		    	shopProductWrap.addClass('container')
		    }else{
		    	if(shopProductWrap.hasClass('container')){
		    		shopProductWrap.removeClass('container');
		    		shopProductWrap.addClass('container-fluid');
		    	}
		    }
	    }
	        // Updating the sliders in tab
        $('.trinity-element-carousel').slick('setPosition');
	});

})(jQuery);

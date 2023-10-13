/*********************************************************************************

	Template Name: chasmishco - chasmish eCommerce Bootstrap4 Template
	Description: A perfect template to build beautiful and unique chasmish websites. It comes with nice and clean design.
	Version: 1.0

	Note: This is main js.

**********************************************************************************/

/**************************************************************
	
		MAIN JS INDEXING
		========================

		01.  Header Cart
		02.  Humberger
		03.  Price Slider Active
		04.  Quantity
		05.  Nice Select
		06. Shipping Form Toggle
		07. Payment Method Select
		08. Add To Cart Animation
		09. Mobile Menu
		10. Youtube Popup
		11. Odometer Activation
		12. Textimonial Activation
		13. Instagram Activation
		14. Product Details Images 
		15. Quick View Modal 
		16. Slider Activation	
		17. Scroll Up Activation
	
	__ END MAIN JS INDEXING

***************************************************************/


(function ($) {
	'use strict';


	/*--------------------
	   01.  Header Cart
	------------------------*/


	var headerCart = $('.header-cart');
	var closeCart = $('.close-cart, .body_overlay');
	var miniCartWrap = $('.mini-cart-wrap');

	headerCart.on('click', function (e) {
		e.preventDefault();
		$('.body_overlay').addClass('visible');
		miniCartWrap.addClass('open');
	});
	closeCart.on('click', function (e) {
		e.preventDefault();
		$('.body_overlay').removeClass('visible');
		miniCartWrap.removeClass('open');
	});


	/*--------------------
	   02.  Humberger
	------------------------*/


	var navTrigger = document.querySelector('.mobile-toggle')

	var navMenu = document.querySelector('.mainmenu_nav')

	var openNav = function openNav() {
		navTrigger.classList.add('active'),
			navMenu.classList.add('active')
	}

	var closeNav = function closeNav() {
		navTrigger.classList.remove('active'),
			navMenu.classList.remove('active')
	}

	navTrigger.addEventListener('click', function () {

		if (navTrigger.classList.contains('active')) {
			closeNav()
		} else {
			openNav()
		}

	})



	/*-------------------------------
	   03.  Price Slider Active
	----------------------------------*/

    $('.nstSlider').nstSlider({
        'left_grip_selector': '.leftGrip',
        'right_grip_selector': '.rightGrip',
        'value_bar_selector': '.bar',
        'value_changed_callback': function(cause, leftValue, rightValue) {
            $(this).parent().find('.leftLabel').text(leftValue);
            $(this).parent().find('.rightLabel').text(rightValue);
		}
		
    });



	/*--------------------------------
	   04.  Quantity
	-------------------------------*/

	$('.pro-qty').prepend('<span class="dec qtybtn">-</span>');
	$('.pro-qty').append('<span class="inc qtybtn">+</span>');
	$('.qtybtn').on('click', function () {
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



	/*----------------------
	   05.  Nice Select
	------------------------*/
	$('.nice-select').niceSelect()



	/*----------------------------- 
		06. Shipping Form Toggle
	--------------------------------*/

	$('[data-shipping]').on('click', function () {
		if ($('[data-shipping]:checked').length > 0) {
			$('#shipping-form').slideDown();
		} else {
			$('#shipping-form').slideUp();
		}
	})


	/*----------------------------- 
		07. Payment Method Select
	--------------------------------*/
	$('[name="payment-method"]').on('click', function () {

		var $value = $(this).attr('value');

		$('.single-method p').slideUp();
		$('[data-method="' + $value + '"]').slideDown();

	})


	/*----------------------------------
		08. Add To Cart Animation
	------------------------------------*/

	$('.add-to-cart').on('click', function (e) {
		e.preventDefault();

		if ($(this).hasClass('added')) {
			$(this).removeClass('added').find('i').removeClass('ti-check').addClass('ti-shopping-cart').siblings('span').text('add to cart');
		} else {
			$(this).addClass('added').find('i').addClass('ti-check').removeClass('ti-shopping-cart').siblings('span').text('added');
		}
	});



	/*----------------------------------
		09. Mobile Menu
	------------------------------------*/

	$('nav.mainmenu__nav').meanmenu({
		meanMenuClose: 'X',
		meanMenuCloseSize: '18px',
		meanScreenWidth: '991',
		meanExpandableChildren: true,
		meanMenuContainer: '.mobile-menu',
		onePage: true
	});



	/*----------------------------------
		10. Youtube Popup
	------------------------------------*/

	$('.play__btn').yu2fvl();




	/*----------------------------------
		11. Odometer Activation
	------------------------------------*/	


	if( $('.odometer').length ){

		$(window).on('scroll', function(){

			function winScrollPosition() {
				var scrollPos = $(window).scrollTop(),
					winHeight = $(window).height();
				var scrollPosition = Math.round(scrollPos + (winHeight / 1.2));
				return scrollPosition;
			}

			var scrollPos = $(this).scrollTop();
			var elemOffset = $('.odometer').offset().top;
			var winHeight = $(window).height();

			if ( elemOffset < winScrollPosition()) {

				$('.odometer').each(function(){
					$(this).html($(this).data('count-to'));
				});

			}
			
		});

	}

	/*----------------------------------
		12. Textimonial Activation
	------------------------------------*/


	$('.testimonial_activation').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1
	  });

	/*----------------------------------
		13. Instagram Activation
	------------------------------------*/

	$('.instagram_list').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [

			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 3,
			  }
			},

			{
			  breakpoint: 575,
			  settings: {
				slidesToShow: 2,
			  }
			},

			{
			  breakpoint: 450,
			  settings: {
				slidesToShow: 1,
			  }
			},
		]

	  });

	/*----------------------------------
		14. Product Details Images 
	------------------------------------*/

	$('.product-details-images').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		infinite: true,
		centerMode: true,
		centerPadding: 0,
		prevArrow: '<span class="slider-navigation slider-navigation-prev"><i class="fa fa-caret-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-next"><i class="fa fa-caret-right"></i></span>',
		asNavFor: '.product-details-thumbs'
	});
	$('.product-details-thumbs').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		infinite: true,
		focusOnSelect: true,
		centerMode: true,
		centerPadding: 0,
		prevArrow: '<span class="slider-navigation slider-navigation-prev"><i class="fa fa-caret-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-next"><i class="fa fa-caret-right"></i></span>',
		asNavFor: '.product-details-images'
	});

	/*----------------------------------
		15. Quick View Modal 
	------------------------------------*/


	$('.quickview').on('click', function(e){
		e.preventDefault();
		$('.quick-view-modal').toggleClass('is-visible');
	});
	
	$('.close-quickview-modal').on('click', function(){
		$('.quick-view-modal').removeClass('is-visible');
	});


	/*----------------------------------
		16. Slider Activation
	------------------------------------*/

	$('.slide_active').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		slidesToShow: 1,
  		slidesToScroll: 1,
	  });



	/*----------------------------------
		17. Scroll Up Activation
	------------------------------------*/

	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'slide'
	});
















})(jQuery);
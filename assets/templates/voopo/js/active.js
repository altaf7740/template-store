/*********************************************************************************

	Template Name: Voopo - VOIP, Telecom and Cloud Services Template
	Description: Voopo is a beautiful and unique Bootstrap 4 template.
	Version: 1.0

**********************************************************************************/


/*===============================================================================
			[ INDEX ]
=================================================================================

	Scroll Up Activation
	Mobile Menu
	Checkout Login/Register Toggle
	Checkout Shipping Form Toggle
	Payment Method Toggle
	Youtub Popup

=================================================================================
			[ END INDEX ]
================================================================================*/

(function ($) {
	'use strict';


	/*============ Scroll Up Activation ============*/

	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'slide'
	});


	/*=========== Mobile Menu ===========*/

	$('nav.mainmenu__nav').meanmenu({
		meanMenuClose: 'X',
		meanMenuCloseSize: '18px',
		meanScreenWidth: '991',
		meanExpandableChildren: true,
		meanMenuContainer: '.mobile-menu',
		onePage: true
	});

	/*============= Checkout Login/Register Toggle ==============*/

	function checkoutLoginToggle() {
		var checkoutMethodList = $('.checkout-method-list li');
		checkoutMethodList.on('click', function () {
			var form = $(this).data('form');
			if (!$(this).hasClass('active')) {
				$('.checkout-method-list li').removeClass('active');
				$(this).addClass('active');
				$('.checkout-method form').slideUp(500);
				$('.' + form).delay(500).slideDown();
			}
		});
	}
	checkoutLoginToggle();



	/*============= Checkout Shipping Form Toggle ==============*/

	function checkoutShippingToggle() {
		var shipingFormToggle = $('.shipping-form-toggle');
		var shipingForm = $('.shipping-form');
		shipingFormToggle.on('click', function () {
			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				shipingForm.slideUp();
			} else {
				$(this).addClass('active');
				shipingForm.slideDown();
			}
		});
	}
	checkoutShippingToggle();


	/*============= Payment Method Toggle ==============*/

	function paymentMethodToggle() {
		var paymentMethodList = $('.payment-method-list li');
		var paymentFormToggle = $('.payment-form-toggle');
		var paymentForm = $('.payment-form');
		paymentMethodList.on('click', function () {
			paymentMethodList.removeClass('active');
			$(this).addClass('active');
			if ($(this).hasClass('payment-form-toggle')) {
				paymentForm.slideDown();
			} else {
				paymentForm.slideUp();
			}
		});
	}
	paymentMethodToggle();


	/*============= Youtub Popup ==============*/

	$('.play__btn').yu2fvl();



})(jQuery);
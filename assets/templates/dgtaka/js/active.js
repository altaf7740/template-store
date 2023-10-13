/*********************************************************************************

	Template Name: Dgtaka- crypto Currency HTML5 Template 
    Description: Dgtaka is a beautiful and unique Bootstrap 4 template.

**********************************************************************************/


/*===============================================================================
			[ INDEX ]
=================================================================================

	Scroll Up Activation
	Mobile Menu
	Wow Active
	CounterUp Active
	Testimonial Activation 01
	Counterup Images
	Particle Activation
	Youtube Popup
	NiceSelect
	Ripples js
	Currency Converter




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

	$('nav.mobilemenu__nav').meanmenu({
		meanMenuClose: 'X',
		meanMenuCloseSize: '18px',
		meanScreenWidth: '991',
		meanExpandableChildren: true,
		meanMenuContainer: '.mobile-menu',
		onePage: true
	});

	/*=========== Wow Active ===========*/

	new WOW().init();


	/*=========== CounterUp Active ===========*/


	$('.counter-active').counterUp({
		delay: 10,
		time: 1000
	});

	/*=============  Testimonial Activation 01  ==============*/

	$('.brand__acivation').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		autoplay: true,
		autoplayTimeout: 3000,
		items: 5,
		dots: false,
		lazyLoad: true,
		responsive: {
			0: {
				items: 1
			},
			422: {
				items: 2
			},
			734: {
				items: 3
			},
			992: {
				items: 4
			},
			1920: {
				items: 5
			}
		}
	});


	/*=============  Counterup Images  ==============*/


	var movementStrength = 200;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	$('#counterup__images').mousemove(function (e) {
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 - 25;
		var newvalueY = height * pageY * -1 - 50;
		$('#counterup__images').css('background-position', newvalueX + 'px     ' + newvalueY + 'px');
	});

	var movementStrength = 200;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();
	$('#counterup__images--2').mousemove(function (e) {
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX * -1 - 25;
		var newvalueY = height * pageY * -1 - 50;
		$('#counterup__images--2').css('background-position', newvalueX + 'px     ' + newvalueY + 'px');
	});

	/*=============  Particle Activation  ==============*/


	if ($('#particles-js').length) {
		particlesJS.load('particles-js', 'particles.json');
	}

	if ($('#particles-js2').length) {
		particlesJS.load('particles-js2', 'particles2.json');
	}

	/*============= Youtub Popup ==============*/

	$('.play__btn').yu2fvl();


	/*============= NiceSelect ==============*/

	$('select').niceSelect();


	/*============= Ripples js ==============*/

	$('.js-ripples').ripples({
		resolution: 512,
		dropRadius: 20,
		perturbance: 0.04
	});

	/*============= Currency Converter ==============*/


	function currencyConverter() {

		var inputData = $('.btc-conterter');
		var convertedData = $('.btc-coverter-output');
		var currentRate = inputData.data('current-rate');
		var convertedDataOutput;
		convertedData.attr('placeholder', currentRate);
		inputData.on('focus', function () {
			inputData.on('keyup', function () {
				var convertedDataOutput = inputData.val();
				convertedData.val(convertedDataOutput * currentRate);
			});
		});

	}
	currencyConverter();




})(jQuery);
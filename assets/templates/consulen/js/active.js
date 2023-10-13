/*********************************************************************************

	Template Name: CONSULEN - Multipurpose Bootstrap 4 Template
	Description: CONSULEN is a best templete for your corporate/business website which comes with unique design and user friendly code.  
	Version: 1.0
	Note: This is active js. Plugins activation code here.

**********************************************************************************/

/*===============================================================================

	[ INDEX ]
	|
	|___Scroll Animation Active
	|___Scroll Up Activation
	|___Carousel Activation
	|	|___Banner Slider Active
	|	|___Banner Slider active with navigation
	|	|___Testimonial style 1 Slider Active
	|	|___Brand Logo Slider Active
	|	|___Portfolios Slider Active
	|	|___Single Portfolio Gallery Slider Active
	|	|___Single Portfolio Related portfolios slider
	|
	|___Lightgallery Activations
	|	|___Video Area video popup
	|	|___Videobox video popup
	|
	|___Portfolio Active
	|	|___Portfolio popup with zoom button
	|	|___Portfolio Details Image Popup
	|
	|___CounterUp Active
	|___Mobile Menu
	|___Parallax Active
	|___Particle Activation
	|___Tilter Activation
	|___Youtube Background Activation
	|
	[END INDEX ]

================================================================================*/

(function ($) {
	'use strict';


	/* Scroll Animation Active */
	new WOW().init();

	/* Scroll Up Activation */
	$.scrollUp({
		scrollText: '<i class="icofont icofont-rounded-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'slide'
	});

	/* Carousel Activation */
	// Banner Slider Active
	$('.banner-slider-active').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 6000,
		adaptiveHeight: true,
		arrows: false,
		pauseOnHover: false,
	});

	// Banner Slider active with navigation 
	$('.banner-slider-active-with-navigation').slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		adaptiveHeight: true,
		arrows: true,
		prevArrow: '<span class="cr-slider-nav cr-slider-nav-left"><i class="icofont icofont-simple-left"></i></span>',
		nextArrow: '<span class="cr-slider-nav cr-slider-nav-right"><i class="icofont icofont-simple-right"></i></span>'
	});

	// Testimonial style 1 Slider Active
	$('.testimonial-style-1.testimonial-slider-active').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		centerMode: true,
		autoplay: true,
		focusOnSelect: true,
		responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});


	// Brand Logo Slider Active
	$('.brand-logo-carousel-activation').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
		prevArrow: '<span class="cr-slider-nav cr-slider-nav-left"><i class="icofont icofont-simple-left"></i></span>',
		nextArrow: '<span class="cr-slider-nav cr-slider-nav-right"><i class="icofont icofont-simple-right"></i></span>',
		responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});


	// Single Portfolio Gallery Slider Active
	$('.pg-portfolio-images').slick({
		dots: false,
		infinite: true,
		speed: 300,
		autoplay: false,
		arrows: true,
		prevArrow: '<span class="cr-slider-nav cr-slider-nav-left"><i class="icofont icofont-simple-left"></i></span>',
		nextArrow: '<span class="cr-slider-nav cr-slider-nav-right"><i class="icofont icofont-simple-right"></i></span>',
	});

	// Single Portfolio Related portfolios slider
	$('.pg-related-portfolios').slick({
		dots: false,
		infinite: true,
		speed: 300,
		autoplay: false,
		arrows: true,
		prevArrow: '<span class="cr-slider-nav cr-slider-nav-left"><i class="icofont icofont-simple-left"></i></span>',
		nextArrow: '<span class="cr-slider-nav cr-slider-nav-right"><i class="icofont icofont-simple-right"></i></span>',
		slidesToShow: 2,
		slidesToScroll: 1,
		items: 2,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});
	
	/* Lightgallery Activations */
	// Video Area video popup
	$('.video-area-inner').lightGallery({
		selector: '.video-popup-trigger'
	});


	// Videobox video popup
	$('.video-box').lightGallery({
		selector: 'a.play-button'
	});

	// Blog details image popup
	$('.blog-details-thumb').lightGallery({
		selector: 'img',
		thumbnail: false
	});

	/* Portfolio Active */
	var isotopFilter = $('.portfolio-filters');
	var isotopGrid = $('.portfolios:not(.portfolios-slider-active)');
	var isotopGridItemSelector = $('.portfolio-single');
	var isotopGridItem = '.portfolio-single';

	isotopFilter.find('button:first-child').addClass('active');

	//Images Loaded
	isotopGrid.imagesLoaded(function () {
		/*-- init Isotope --*/
		var initial_items = isotopGrid.data('show');
		var next_items = isotopGrid.data('load');
		var loadMoreBtn = $('.load-more-toggle');

		var $grid = isotopGrid.isotope({
			itemSelector: isotopGridItem,
			layoutMode: 'masonry',
		});

		/*-- Isotop Filter Menu --*/
		isotopFilter.on('click', 'button', function () {
			var filterValue = $(this).attr('data-filter');

			isotopFilter.find('button').removeClass('is-checked');
			$(this).addClass('is-checked');

			// use filterFn if matches value
			$grid.isotope({
				filter: filterValue
			});
		});

		/*-- Update Filter Counts --*/
		function updateFilterCounts() {
			// get filtered item elements
			var itemElems = $grid.isotope('getFilteredItemElements');

			if (isotopGridItemSelector.hasClass('hidden')) {
				isotopGridItemSelector.removeClass('hidden');
			}

			var index = 0;

			$(itemElems).each(function () {
				if (index >= initial_items) {
					$(this).addClass('hidden');
				}
				index++;
			});

			$grid.isotope('layout');
		}

		/*-- Function that Show items when page is loaded --*/
		function showNextItems(pagination) {
			var itemsMax = $('.hidden').length;
			var itemsCount = 0;

			$('.hidden').each(function () {
				if (itemsCount < pagination) {
					$(this).removeClass('hidden');
					itemsCount++;
				}
			});

			if (itemsCount >= itemsMax) {
				loadMoreBtn.hide();
			}

			$grid.isotope('layout');
		}

		/*-- Function that hides items when page is loaded --*/
		function hideItems(pagination) {
			var itemsMax = $(isotopGridItem).length;
			var itemsCount = 0;

			$(isotopGridItem).each(function () {
				if (itemsCount >= pagination) {
					$(this).addClass('hidden');
				}
				itemsCount++;
			});

			if (itemsCount < itemsMax || initial_items >= itemsMax) {
				loadMoreBtn.hide();
			}

			$grid.isotope('layout');
		}

		/*-- Function that Load items when Button is Click --*/
		loadMoreBtn.on('click', function (e) {
			e.preventDefault();
			showNextItems(next_items);
		});

		hideItems(initial_items);
	});



	// Portfolio popup with zoom button
	$('.portfolios-zoom-button-holder').lightGallery({
		selector: '.portfolio-zoom-trigger',
		thumbnail: false
	});

	/* CounterUp Active */
	$('.counter-active').counterUp({
		delay: 10,
		time: 1000
	});

	/* Mobile Menu */
	$('.header-style-1 nav.menu, .header-style-2 nav.menu, .header-style-3 nav.menu').meanmenu({
		meanMenuClose: '<i class="icofont icofont-close"></i>',
		meanMenuCloseSize: '18px',
		meanScreenWidth: '991',
		meanExpandableChildren: true,
		meanMenuContainer: '.mobile-menu',
		onePage: true
	});

	/* Parallax Active */
	$('.bg-parallax').scrolly({
		bgParallax: true
	});


	/* Particle Activation */
	if ($('#particles-js').length) {
		particlesJS.load('particles-js', 'particles.json', function () {
			console.log('callback - particles.js config loaded');
		});
	}


	/* Tilter Activation */
	if ($('[data-tilt]').length) {
		$('[data-tilt]').tilt({
			perspective: 800,
		});
	}


	/* Youtube Background Activation */
	if ($('.youtube-bg').length) {
		$('.youtube-bg').YTPlayer({
			containment: '.youtube-bg',
			autoPlay: true,
			loop: true,
			realfullscreen: true,
			showControls: false,
			mobileFallbackImage: '../img/home-one/bg/video-bg.jpg',
		});
	}

	/* Instafeed Activation */
	if ($('#sidebar-instagram-feed').length) {
		var userFeed = new Instafeed({
			get: 'user',
			userId: 6665768655,
			accessToken: '6665768655.1677ed0.313e6c96807c45d8900b4f680650dee5',
			target: 'sidebar-instagram-feed',
			resolution: 'thumbnail',
			limit: 6,
			template: '<li><a href="{{link}}" target="_new"> <img src="{{image}}" /><ul class="likes-comments"><li><i class="icofont icofont-heart"></i><span>{{likes}}</span></li><li><i class="icofont icofont-speech-comments"></i><span>{{comments}}</span></li></ul></a></li>',
		});
		userFeed.run();
	}


})(jQuery);
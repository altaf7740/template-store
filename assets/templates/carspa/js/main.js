/* ======================================
	
	Template: Carspa
	Css Name: Main Js
	Version: 1
	Design and Developed by:HasTech
	NOTE: This is Footer style file. All footer related style included in this file.

========================================= */

/*================================================
[  Table of contents  ]
================================================

	01. jQuery MeanMenu
	02. Mian Slider Active
	03. Counter Up
	04. Testimonial Slider Active
	05. Service Owl Active
	06. Latest News Owl Active
	07. Venobox
	08. Portfolio Isotop active
	09. TOP Menu Stick
	10. Mailchimp Active
	11. Google Map
	12. scrollUp
	
================================================*/

(function ($) {
 "use strict";
 
   /*------ 01. jQuery Mobile MeanMenu ------*/
	jQuery('#mobile-nav').meanmenu();

	/*------ 02. Mian Slider Active ------*/
	$('.hero-slider').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 4000,
		infinite: true,
		slidesToShow: 1,
		dots: true,
		dotsClass:'slick-dots',
	});
	
	/*------ 03. Counter Up ------*/
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	
	/*------ 04. Testimonial Slider Active ------*/
   $('.testimonial-active').owlCarousel({
		loop:true,
		margin:0,
		nav:false,
		dots:true,
		autoplay: false,
		autoplaytimeout:2000,
		navText:["<i class='icofont icofont-long-arrow-left'></i>","<i class='icofont icofont-long-arrow-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})
	
	/*------ 05. Service Owl Active ------*/
   $('.service-active').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:false,
		autoplay: false,
		autoplaytimeout:2000,
		navText:["<i class='zmdi zmdi-long-arrow-left'></i>","<i class='zmdi zmdi-long-arrow-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},
			600:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:4
			}
		}
	})
	
	/*------ 06. Latest News Owl Active ------*/
   $('.latest-news-active').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:false,
		autoplay: false,
		autoplaytimeout:2000,
		navText:["<i class='zmdi zmdi-long-arrow-left'></i>","<i class='zmdi zmdi-long-arrow-right'></i>"],
		responsive:{
			0:{
				items:1
			},
			480:{
				items:1
			},
			600:{
				items:1
			},
			768:{
				items:2
			},
			1000:{
				items:3
			}
		}
	})	

	/*------ 07. Venobox ------*/
	$('.venobox').magnificPopup({
	  type: 'image',
	  gallery: {
			  enabled: true, // set to true to enable gallery
			}
	});
	
	/*------ 08. Portfolio Isotop active  ------*/
	// images have loaded
	$('.portfolio-box').imagesLoaded( function() {
	  // Isotop Active
	  $('.portfolio-menu').on( 'click', 'li', function() {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	  });

	  // Isotop Full Grid
	  var $grid = $('.grid').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
		columnWidth: '.grid-item'
		}
	  });
	  // Isotop Menu Active
	  $('.portfolio-menu li').on('click', function(event) {
			$(this).siblings('.active').removeClass('active');
			$(this).addClass('active');
			event.preventDefault();
		});
	});
	
	
	/*------ 09. TOP Menu Stick ------*/
	$(window).on('scroll',function() {    
	   var scroll = $(window).scrollTop();
	   if (scroll < 245) {
		$("#sticky-header").removeClass("sticky");
	   }else{
		$("#sticky-header").addClass("sticky");
	   }
	});
 
	/*------ 10. Mailchimp Active ------*/
	$('#mc-form').ajaxChimp({
		 language: 'en',
		 callback: mailChimpResponse,
		 // ADD YOUR MAILCHIMP URL BELOW HERE!
		 url: 'http://themeshaven.us8.list-manage.com/subscribe/post?u=759ce8a8f4f1037e021ba2922&amp;id=a2452237f8'
		});
		function mailChimpResponse(resp) {
		 
		 if (resp.result === 'success') {
		  $('.mailchimp-success').html('' + resp.msg).fadeIn(900);
		  $('.mailchimp-error').fadeOut(400);
		  
		 } else if(resp.result === 'error') {
		  $('.mailchimp-error').html('' + resp.msg).fadeIn(900);
		 }  
		}

	/*------ 11. Google Map  ------*/
	var mapID = $('#map');
	var isDraggable = Math.max($(window).width(), window.innerWidth) > 480 ? true : false;

	mapID.each(function() {

		var GMaddress = mapID.attr('data-address');

		mapID.gmap3({
			action: "init",
			marker: {
				address: GMaddress,
				options: {
					icon: 'img/icon/map.png'
				}
			},
			map: {
				options: {
					zoom: 12,
					zoomControl: true,
					zoomControlOptions: {
						style: google.maps.ZoomControlStyle.SMALL
					},
					mapTypeControl: true,
					scaleControl: false,
					scrollwheel: false,
					streetViewControl: false,
					draggable: isDraggable,
					styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
				}
			}
		});

	});
	
	/*------ 12. scrollUp ------*/
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});
 
})(jQuery);  
(function ($) {
    "use strict";
    
$.fn.elExists = function() {
    return this.length > 0;
};
    

/*--
Menu Sticky
-----------------------------------*/
var windows = $(window);
var screenSize = windows.width();
var sticky = $('.header-sticky');

windows.on('scroll', function () {
    var scroll = windows.scrollTop();
    if (scroll < 300) {
        sticky.removeClass('is-sticky');
    } else {
        sticky.addClass('is-sticky');
    }
});
   
/*--- 
    Clickable menu active 
-------------------------------*/
const slinky = $('#menu').slinky()

/*--
    sidebarCart 
------------------------------*/
function sidebarMainmenu() {
    var menuTrigger = $('.clickable-mainmenu-active a'),
        endTrigger = $('button.clickable-mainmenu-close'),
        container = $('.clickable-mainmenu');
    menuTrigger.on('click', function(e) {
        e.preventDefault();
        container.addClass('inside');
    });
    endTrigger.on('click', function() {
        container.removeClass('inside');
    });
};
sidebarMainmenu();
    
/*-- 
    One PageNav Scrolling
-------------------------------------*/
  function onePageScrolling(){
	$('.sectionNav').onePageNav();
	var scrollOffset = 0;
	$(".btn-link").on('click', function(evn){
		evn.preventDefault();
		$('html,body').scrollTo(this.hash, this.hash, {
			gap: { nav: -scrollOffset-0 },
			animation:{
				duration: 1000,
				easing: "easeInOutExpo",
                
			}
		});
		return false;	
	});
}
onePageScrolling();
    
/*--
    Slider Height
--------------------------------*/

var $headerMedia = $('header');

function heroSliderMargin() {
    var headerHeight = ( $headerMedia.elExists() ) ? $headerMedia[0].getBoundingClientRect().height : 0;
    if ($('.header-transparant').length) {
        $('.hero-slide-item').css({
            'min-height': '100vh'
        });
    } else {

        $('.hero-slide-item').css({
            'min-height': 'calc(100vh - ' + headerHeight + 'px)'
        });
    }
}
$(window).on('load', function(){
    heroSliderMargin();
});

$(window).on('resize', function(){
    heroSliderMargin();
});
    
/*--
    Hero Slider
--------------------------------------------*/
var heroSlider = $('.hero-slider');
heroSlider.slick({
    arrows: true,
    autoplay: false,
    autoplaySpeed: 5000,
    dots: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    prevArrow: false,
    nextArrow: false
});

/* Testimonial Carousel 6*/
    
$('.testimonial-activation-6').slick({
    slidesToShow: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    easing: 'ease-in-out',
    dots: false,
    arrows: false,
    prevArrow: '<button class="testimonial-arrow-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="testimonial-arrow-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [{
            breakpoint: 1200,
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
    


/*-- 
    Post Carousel
----------------------------*/

$('.post-carousel-active-5').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    dots: false,
    arrows: true,
    prevArrow: '<button class="post-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="post-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 769,
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
    
/*--
	Video Popup
-----------------------------------*/
var videoPopup = $('.video-popup');
videoPopup.magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
});
    
/*--
	Image Popup
-----------------------------------*/
var imagePopup = $('.image-popup');
imagePopup.magnificPopup({
    type: 'image',
    mainClass: 'mfp-fade',
});
    
/*--
	Counter UP
-----------------------------------*/
var counter = $('.count');
counter.counterUp({
    delay: 20,
    time: 2000
});
    
/*--
	MailChimp
-----------------------------------*/
$('#mc-form').ajaxChimp({
	language: 'en',
	callback: mailChimpResponse,
	// ADD YOUR MAILCHIMP URL BELOW HERE!
	url: 'http://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef'

});
function mailChimpResponse(resp) {
	
	if (resp.result === 'success') {
		$('.mailchimp-success').html('' + resp.msg).fadeIn(900);
		$('.mailchimp-error').fadeOut(400);
		
	} else if(resp.result === 'error') {
		$('.mailchimp-error').html('' + resp.msg).fadeIn(900);
	}  
}
    
// Fake Loader 
$('.fakeloader').fakeLoader({
    timeToHide:3000,
    bgColor:"#CA1F26",
    spinner:"spinner1",
    zIndex:"99999"
});

/*--
    Scroll Up
-----------------------------------*/
$.scrollUp({
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade',
    scrollText: '<i class="fa fa-angle-double-up"></i>',
});
    
/*--
    Google Map
-----------------------------------*/

// Google Map For Single Property Map
$('.contact-map').each(function(){
    if($(this).length){
        var $this = $(this);
        var $lat = $this.data('lat');
        var $long = $this.data('long');
        function initialize() {
            var mapOptions = {
                zoom: 11.2,
                scrollwheel: false,
                center: new google.maps.LatLng($lat, $long),
                styles: [{
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "color": "#555"
                    }]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [{
                        "color": "#f3efef"
                    }]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [{
                            "saturation": -120
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "simplified"
                    }]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [{
                        "visibility": "off"
                    }]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [{
                            "color": "#ecb5b5"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "lightness": "-12"
                        },
                        {
                            "saturation": "0"
                        },
                        {
                            "color": "#eee2db"
                        }
                    ]
                }
            ]  
            };
            var map = new google.maps.Map(document.getElementById('googleMap-2'), mapOptions);
            var marker = new google.maps.Marker({
                position: map.getCenter(),
                icon: 'assets/images/icon/map-icon.png',
                map: map,
                animation: google.maps.Animation.BOUNCE
            });

        }
        google.maps.event.addDomListener(window, 'load', initialize);
    }
});
 
    
})(jQuery);	

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
/*--
    32. Cleaning Service Activation
-------------------------------------------*/

$('.cln-service-activation').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    dots: false,
    arrows: true,
    focusOnSelect: true,
    prevArrow: '<button class="clnService-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="clnService-next"><i class="fa fa-angle-right"></i></button>',

    responsive: [
        {
            breakpoint: 992,
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
        },
    ]

});




/* Testimonial Carousel 3*/

$('.testimonial-carousel-3').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    autoplay: false,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '0',
    prevArrow: '<button class="post-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="post-next"><i class="fa fa-angle-right"></i></button>',

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
var imagePopup = $('.image-popup, .big-image-popup');
imagePopup.magnificPopup({
    type: 'image',
    mainClass: 'mfp-fade',
});
    
/*--
	Gallery Popup
-----------------------------------*/
var galleryPopup = $('.gallery-popup');
galleryPopup.magnificPopup({
    type: 'image',
    mainClass: 'mfp-fade',
    gallery: {
        enabled: true,
    },
});

/*--
	Counter UP
-----------------------------------*/
var counter = $('.counter-active , .counter-active-2');
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
$('.googleMap-2,.contact-map').each(function(){
    if($(this).length){
        var $this = $(this);
        var $lat = $this.data('lat');
        var $long = $this.data('long');
        function initialize() {
            var mapOptions = {
                zoom: 11.2,
                scrollwheel: false,
                center: new google.maps.LatLng($lat, $long),
                styles: [
            {
                "featureType": "administrative.province",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels",
                "stylers": [
                    {
                        "lightness": "-8"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "all",
                "stylers": [
                    {
                        "color": "#acacac"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#484848"
                    }
                ]
            },
            {
                "featureType": "administrative.neighborhood",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ff0000"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": "-3"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": "72"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "labels",
                "stylers": [
                    {
                        "lightness": "23"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": "30"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "lightness": "-19"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": "2"
                    },
                    {
                        "gamma": "1.21"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "saturation": "15"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "lightness": "-43"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": "22"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "weight": "0.12"
                    },
                    {
                        "lightness": "-23"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "lightness": "71"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 30
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 40
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": -100
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "saturation": "5"
                    },
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": "5"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "hue": "#ffff00"
                    },
                    {
                        "lightness": "-24"
                    },
                    {
                        "saturation": -97
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "saturation": "-88"
                    },
                    {
                        "lightness": "-23"
                    },
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "lightness": -25
                    },
                    {
                        "saturation": -100
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "weight": "0.01"
                    },
                    {
                        "lightness": "9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "lightness": "-32"
                    },
                    {
                        "gamma": "2.99"
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

(function ($) {
"use strict";

/*--
	Preloader
------------------------*/
var win = $(window);
win.on('load', function() {
	$('.preloader').fadeOut('slow');;
});
/*--
	Menu Sticky
-----------------------------------*/
var sticky = $('.sticky');
win.on('scroll',function() {    
	var scroll = win.scrollTop();
	if (scroll < 245) {
		sticky.removeClass('stick');
	}else{
		sticky.addClass('stick');
	}
});
/*--
	One Page Menu
-----------------------------------*/
var TopOffsetId = $('.onepage-nav').height() - 20;
$('.onepage-nav nav').onePageNav({
	currentClass: 'active',
	scrollThreshold: 0.2,
	scrollSpeed: 1000,
	scrollOffset: TopOffsetId,
});
/*--
	One Page Menu Open & Close Icon
-----------------------------------*/
var navCollapse = $('.navbar-collapse');
$('.navbar-collapse ul li a').on('click', function(){
	if( navCollapse.hasClass('in')){
		navCollapse.css('height', '1px').removeClass('in');
		$('.navbar-toggle').addClass('collapsed');
	}
})
/*--
	Menu Toggle
-----------------------------------*/
var menuToggle = $('.menu-toggle');
var menuNav = $('.main-menu nav');
menuToggle.on('click', function(){
	if( menuToggle.hasClass('is-active') ){
		menuNav.removeClass('menu-open');
	}else {
		menuNav.addClass('menu-open');
	}
});
/*--
	Mean Mobile Menu
------------------------*/
$('.mean-menu nav').meanmenu({
	meanScreenWidth: '990',
	meanMenuContainer: '.mobile-menu',
	meanMenuClose: '<i class="icofont icofont-close"></i>',
	meanMenuOpen: '<i class="icofont icofont-navigation-menu"></i>',
	meanRevealPosition: 'right',
	meanMenuCloseSize: '30px',
	onePage: true,
});
/*--
	Hero Slider
-----------------------------------*/
$('#hero-slider').nivoSlider({
	animSpeed: 500,
	slices: 18,
	pauseTime: 55557000,
	pauseOnHover: true,
	controlNav: true,
	prevText: '<i class="icofont icofont-long-arrow-left"></i>',
    nextText: '<i class="icofont icofont-long-arrow-right"></i>',
	afterChange: function(){ 
		var date = $('.nivo-caption .date-picker');
		date.datepicker();
		var select = $('.nivo-caption .cusselect');
		select.selectpicker();
	},
	afterLoad: function(){
		var select = $('.nivo-caption .cusselect');
		select.selectpicker();
	},
});
/*--
	Date Picker
-----------------------------------*/
var datePicker = $('.date-picker');
datePicker.datepicker();
/*--
	Select Picker
-----------------------------------*/
var selectPicker = $('.cus-select');
selectPicker.selectpicker();
/*--
	Counter UP
-----------------------------------*/
var counter = $('.counter');
counter.counterUp({
    time: 3000,
});
/*--
	Scroll Up
-----------------------------------*/
$.scrollUp({
	easingType: 'linear',
	scrollSpeed: 900,
	animation: 'fade',
	scrollText: '<i class="icofont icofont-simple-up"></i>',
});
/*--
	Magnific Popup
-----------------------------------*/
/*-- Video --*/
var videoPopup = $('.video-popup');
videoPopup.magnificPopup({
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	zoom: {
		enabled: true,
	}
});
/*-- Image --*/
var imagePopup = $('.image-popup');
imagePopup.magnificPopup({
	type: 'image',
});
/*-- Gallery --*/
var galleryPopup = $('.gallery-popup');
galleryPopup.magnificPopup({
	type: 'image',
	gallery:{
		enabled:true
	}	
});
/*--
	Isotop with ImagesLoaded
-----------------------------------*/
var galleryFilter = $('.gallery-filter');
var galleryGrid = $('.gallery-grid');
/*-- Images Loaded --*/
galleryGrid.imagesLoaded( function() {
/*-- Filter List --*/
galleryFilter.on( 'click', 'button', function() {
	galleryFilter.find('button').removeClass('active');
	$(this).addClass('active');
	var filterValue = $(this).attr('data-filter');
	galleryGrid.isotope({ filter: filterValue });
});
/*-- Filter Grid --*/
galleryGrid.isotope({
  itemSelector: '.gallery-item',
  masonry: {
    columnWidth: '.gallery-item',
  }
});
	
});
/*--
	Testimonial Slider
-----------------------------------*/
/*-- Image Slider --*/
var tiSlider = $('.ti-slider');
tiSlider.slick({
  arrows: false,
  asNavFor: '.tc-slider',
  centerMode: true,
  centerPadding: '225px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 1150,
      settings: {
		centerPadding: '190px',
      }
    },
    {
      breakpoint: 990,
      settings: {
		centerPadding: '210px',
      }
    },
    {
      breakpoint: 600,
      settings: {
		centerPadding: '50px',
      }
    },
    {
      breakpoint: 350,
      settings: {
		centerPadding: '20px',
      }
    }
  ]
});
/*-- Text Slider --*/
var tcSlider = $('.tc-slider');
tcSlider.slick({
	arrows: false,
	asNavFor: '.ti-slider',
	slidesToShow: 1,
});
/*-- Text Slider Preview --*/
var tsPrev = $('.ts-prev');
tsPrev.on('click', function(){
	tcSlider.slick('slickPrev');
})
/*-- Text Slider Nex --*/
var tsNext = $('.ts-next');
tsNext.on('click', function(){
	tcSlider.slick('slickNext');
})
/*--
	Background Slideshow
-----------------------------------*/
var slideshowBG = $('.slideshow-bg');
slideshowBG.backstretch([
    'img/slider/1.jpg',
    'img/slider/4.jpg',
    'img/slider/3.jpg',
],{
	fade: 750,
	duration: 3000
});
/*--
	Kenburnsy Slideshow
-----------------------------------*/
var kenburneBG = $('.kenburne-slideshow');
kenburneBG.kenburnsy({
  fullscreen: true
});
/*--
	HTML5 Background Video
-----------------------------------*/
var videoBG = $('.video-bg');
videoBG.vide({
	mp4: 'video/video',
	webm: 'video/video',
	poster: 'video/banner',
}, {
	posterType: 'jpg',
	className: 'video-container'
});
/*--
	Textillate
-----------------------------------*/
$('.tlt').textillate({
  loop: true,
});
/*--
	Wow js
-----------------------------------*/
new WOW().init();
/*--
	Hamburger js
-----------------------------------*/
var forEach=function(t,o,r){if('[object Object]'===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
	hamburger.addEventListener('click', function() {
	  this.classList.toggle('is-active');
	}, false);
  });
}




})(jQuery);	
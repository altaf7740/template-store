/*********************************************************************************

	Template Name: Voopo - VOIP, Telecom and Cloud Services Template
	Description: Voopo is a beautiful and unique Bootstrap 4 template.
	Version: 1.0

**********************************************************************************/


/*===============================================================================
			[ INDEX ]
=================================================================================

	Avoid Console




=================================================================================
			[ END INDEX ]
================================================================================*/


/*========== Avoid Console ==========*/
(function() {
	var method;
	var noop = function () {};
	var methods = [
		'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
		'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
		'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
		'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
	];
	var length = methods.length;
	var console = (window.console = window.console || {});

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}
}());

// Place any jQuery/helper plugins in here.



/*========= MobileMenu =========*/
!function($){"use strict";$.fn.meanmenu=function(e){var n={meanMenuTarget:jQuery(this),meanMenuContainer:"body",meanMenuClose:"X",meanMenuCloseSize:"18px",meanMenuOpen:"<span /><span /><span />",meanRevealPosition:"right",meanRevealPositionDistance:"0",meanRevealColour:"",meanScreenWidth:"480",meanNavPush:"",meanShowChildren:!0,meanExpandableChildren:!0,meanExpand:"+",meanContract:"-",meanRemoveAttrs:!1,onePage:!1,meanDisplay:"block",removeElements:""};e=$.extend(n,e);var a=window.innerWidth||document.documentElement.clientWidth;return this.each(function(){var n=e.meanMenuTarget,t=e.meanMenuContainer,r=e.meanMenuClose,i=e.meanMenuCloseSize,s=e.meanMenuOpen,u=e.meanRevealPosition,m=e.meanRevealPositionDistance,l=e.meanRevealColour,o=e.meanScreenWidth,c=e.meanNavPush,v=".meanmenu-reveal",h=e.meanShowChildren,d=e.meanExpandableChildren,y=e.meanExpand,j=e.meanContract,Q=e.meanRemoveAttrs,f=e.onePage,g=e.meanDisplay,p=e.removeElements,C=!1;(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/Blackberry/i)||navigator.userAgent.match(/Windows Phone/i))&&(C=!0),(navigator.userAgent.match(/MSIE 8/i)||navigator.userAgent.match(/MSIE 7/i))&&jQuery("html").css("overflow-y","scroll");var w="",x=function(){if("center"===u){var e=window.innerWidth||document.documentElement.clientWidth,n=e/2-22+"px";w="left:"+n+";right:auto;",C?jQuery(".meanmenu-reveal").animate({left:n}):jQuery(".meanmenu-reveal").css("left",n)}},A=!1,E=!1;"right"===u&&(w="right:"+m+";left:auto;"),"left"===u&&(w="left:"+m+";right:auto;"),x();var M="",P=function(){M.html(jQuery(M).is(".meanmenu-reveal.meanclose")?r:s)},W=function(){jQuery(".mean-bar,.mean-push").remove(),jQuery(t).removeClass("mean-container"),jQuery(n).css("display",g),A=!1,E=!1,jQuery(p).removeClass("mean-remove")},b=function(){var e="background:"+l+";color:"+l+";"+w;if(o>=a){jQuery(p).addClass("mean-remove"),E=!0,jQuery(t).addClass("mean-container"),jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="'+e+'">Show Navigation</a><nav class="mean-nav"></nav></div>');var r=jQuery(n).html();jQuery(".mean-nav").html(r),Q&&jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function(){jQuery(this).is(".mean-remove")?jQuery(this).attr("class","mean-remove"):jQuery(this).removeAttr("class"),jQuery(this).removeAttr("id")}),jQuery(n).before('<div class="mean-push" />'),jQuery(".mean-push").css("margin-top",c),jQuery(n).hide(),jQuery(".meanmenu-reveal").show(),jQuery(v).html(s),M=jQuery(v),jQuery(".mean-nav ul").hide(),h?d?(jQuery(".mean-nav ul ul").each(function(){jQuery(this).children().length&&jQuery(this,"li:first").parent().append('<a class="mean-expand" href="#" style="font-size: '+i+'">'+y+"</a>")}),jQuery(".mean-expand").on("click",function(e){e.preventDefault(),jQuery(this).hasClass("mean-clicked")?(jQuery(this).text(y),jQuery(this).prev("ul").slideUp(300,function(){})):(jQuery(this).text(j),jQuery(this).prev("ul").slideDown(300,function(){})),jQuery(this).toggleClass("mean-clicked")})):jQuery(".mean-nav ul ul").show():jQuery(".mean-nav ul ul").hide(),jQuery(".mean-nav ul li").last().addClass("mean-last"),M.removeClass("meanclose"),jQuery(M).click(function(e){e.preventDefault(),A===!1?(M.css("text-align","center"),M.css("text-indent","0"),M.css("font-size",i),jQuery(".mean-nav ul:first").slideDown(),A=!0):(jQuery(".mean-nav ul:first").slideUp(),A=!1),M.toggleClass("meanclose"),P(),jQuery(p).addClass("mean-remove")}),f&&jQuery(".mean-nav ul > li > a:first-child").on("click",function(){jQuery(".mean-nav ul:first").slideUp(),A=!1,jQuery(M).toggleClass("meanclose").html(s)})}else W()};C||jQuery(window).resize(function(){a=window.innerWidth||document.documentElement.clientWidth,a>o,W(),o>=a?(b(),x()):W()}),jQuery(window).resize(function(){a=window.innerWidth||document.documentElement.clientWidth,C?(x(),o>=a?E===!1&&b():W()):(W(),o>=a&&(b(),x()))}),b()})}}(jQuery);




/*========== ScrollUp ==========*/
/*!
 * scrollup v2.4.1
 * Url: http://markgoodyear.com/labs/scrollup/
 * Copyright (c) Mark Goodyear â€” @markgdyr â€” http://markgoodyear.com
 * License: MIT
 */
!function(l,o,e){"use strict";l.fn.scrollUp=function(o){l.data(e.body,"scrollUp")||(l.data(e.body,"scrollUp",!0),l.fn.scrollUp.init(o))},l.fn.scrollUp.init=function(r){var s,t,c,i,n,a,d,p=l.fn.scrollUp.settings=l.extend({},l.fn.scrollUp.defaults,r),f=!1;switch(d=p.scrollTrigger?l(p.scrollTrigger):l("<a/>",{id:p.scrollName,href:"#top"}),p.scrollTitle&&d.attr("title",p.scrollTitle),d.appendTo("body"),p.scrollImg||p.scrollTrigger||d.html(p.scrollText),d.css({display:"none",position:"fixed",zIndex:p.zIndex}),p.activeOverlay&&l("<div/>",{id:p.scrollName+"-active"}).css({position:"absolute",top:p.scrollDistance+"px",width:"100%",borderTop:"1px dotted"+p.activeOverlay,zIndex:p.zIndex}).appendTo("body"),p.animation){case"fade":s="fadeIn",t="fadeOut",c=p.animationSpeed;break;case"slide":s="slideDown",t="slideUp",c=p.animationSpeed;break;default:s="show",t="hide",c=0}i="top"===p.scrollFrom?p.scrollDistance:l(e).height()-l(o).height()-p.scrollDistance,n=l(o).scroll(function(){l(o).scrollTop()>i?f||(d[s](c),f=!0):f&&(d[t](c),f=!1)}),p.scrollTarget?"number"==typeof p.scrollTarget?a=p.scrollTarget:"string"==typeof p.scrollTarget&&(a=Math.floor(l(p.scrollTarget).offset().top)):a=0,d.click(function(o){o.preventDefault(),l("html, body").animate({scrollTop:a},p.scrollSpeed,p.easingType)})},l.fn.scrollUp.defaults={scrollName:"scrollUp",scrollDistance:300,scrollFrom:"top",scrollSpeed:300,easingType:"linear",animation:"fade",animationSpeed:200,scrollTrigger:!1,scrollTarget:!1,scrollText:"Scroll to top",scrollTitle:!1,scrollImg:!1,activeOverlay:!1,zIndex:2147483647},l.fn.scrollUp.destroy=function(r){l.removeData(e.body,"scrollUp"),l("#"+l.fn.scrollUp.settings.scrollName).remove(),l("#"+l.fn.scrollUp.settings.scrollName+"-active").remove(),l.fn.jquery.split(".")[1]>=7?l(o).off("scroll",r):l(o).unbind("scroll",r)},l.scrollUp=l.fn.scrollUp}(jQuery,window,document);





/*========= Youtube Player =========*/
/*! YU2FVL - jQuery Youtube Url To FullScreen Video Lightbox - v0.1.0 - 2016-02-07
* http://otakod.es/yu2fvl
* Copyright (c) 2016 darkylmnx; Licensed MIT */
!function(t,e,s){function i(t){return/youtu\.be/.test(t)?t.split("youtu.be/")[1].split("?")[0].split("&")[0].split("#")[0]:/youtube\.com\/v\//.test(t)?t.split("youtube.com/v/")[1].split("?")[0].split("&")[0].split("#")[0]:/youtube\.com\/embed\//.test(t)?t.split("youtube.com/embed/")[1].split("?")[0].split("&")[0].split("#")[0]:/youtube.com|youtuberepeater.com|listenonrepeat.com/.test(t)?t.split("v=")[1].split("&")[0].split("#")[0]:!1}function n(t,e,s){var i=JSON.stringify({event:"command",func:e,args:s||[]});-1!==t.src.indexOf("youtube.com/embed")&&t.contentWindow.postMessage(i,"*")}function o(e,i,o){function f(){var t=a.width()-e.minPaddingX,s=a.height()-e.minPaddingY,i=t/s,n=e.ratio;i>n?(C.height(s),C.width(s*n)):(C.width(t),C.height(t/n)),C.css("left",(a.width()-C.width())/2),C.css("top",(a.height()-C.height())/2)}function r(){n(w[0],"playVideo"),h()}function h(){b.stop().fadeIn("fast"),C.stop().fadeIn("fast")}function m(){b.stop().fadeOut("fast"),C.stop().fadeOut("fast",function(){null===i&&e.open&&(b.remove(),C.remove())})}function v(t){t.on("click",function(t){t.preventDefault(),r()})}function y(t){t.on("click",function(t){t.preventDefault(),n(w[0],"pauseVideo"),m()})}var C=t(s.createElement("DIV")).addClass(e.cssClass).css(c),b=t(s.createElement("DIV")).addClass(e.cssClass+e.overlayCssClass).css(p),g=t(s.createElement("BUTTON")).addClass(e.cssClass+e.closeCssClass).html(e.closeText),w=t(s.createElement("IFRAME")).addClass(e.cssClass+e.iframeCssClass).attr({src:l+o+d}).css(u);C.append(w).append(g),t("body").append(b).append(C),e.open&&w.on("load",function(){r()}),null!==i&&v(i),y(g.add(b)),a.on("resize",f).trigger("resize")}var a=t(e),l="https://www.youtube.com/embed/",d="?enablejsapi=1",c={display:"none",position:"fixed"},u={width:"100%",height:"100%"},p={display:"none",position:"fixed",top:0,left:0,width:"100%",height:"100%"},f={minPaddingX:50,minPaddingY:50,ratio:16/9,cssClass:"yu2fvl",overlayCssClass:"-overlay",iframeCssClass:"-iframe",closeCssClass:"-close",closeText:"X",open:!1,vid:!1};t.yu2fvl=function(e){var s=t.extend({},f,e);if(s.vid===!1)throw"YOU MUST SET THE 'vid' option";o(s,null,s.vid)},t.fn.yu2fvl=function(e){function s(){var e=t(this),s=i(e.attr("href"));o(n,e,s)}var n=t.extend({},f,e);return n.vid!==!1?(o(n,this,n.vid),this):this.each(s)}}(jQuery,window,document);











/*================= Contact Form ================*/ 

$(function() {

	// Get the form.
	var form = $('#contact-form');
  
	// Get the messages div.
	var formMessages = $('.form-messege');
  
	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
	  // Stop the browser from submitting the form.
	  e.preventDefault();
  
	  // Serialize the form data.
	  var formData = $(form).serialize();
  
	  // Submit the form using AJAX.
	  $.ajax({
		type: 'POST',
		url: $(form).attr('action'),
		data: formData
	  })
	  .done(function(response) {
		// Make sure that the formMessages div has the 'success' class.
		$(formMessages).removeClass('error');
		$(formMessages).addClass('success');
  
		// Set the message text.
		$(formMessages).text(response);
  
		// Clear the form.
		$('#contact-form input,#contact-form textarea').val('');
	  })
	  .fail(function(data) {
		// Make sure that the formMessages div has the 'error' class.
		$(formMessages).removeClass('success');
		$(formMessages).addClass('error');
  
		// Set the message text.
		if (data.responseText !== '') {
		  $(formMessages).text(data.responseText);
		} else {
		  $(formMessages).text('Oops! An error occured and your message could not be sent.');
		}
	  });
	});
  
  });
  
  













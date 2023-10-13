
(function ($) {
 "use strict";

    function initialize() {
        var mapOptions = {
        zoom: 14,
        zoom: 17,
        hue: '#E9E5DC',
        scrollwheel: false,
            center: new google.maps.LatLng(23.760772, 90.424790)
        };
        var map = new google.maps.Map(document.getElementById('googleMap'),
        mapOptions);
        var marker = new google.maps.Marker({
            position: map.getCenter(),
            animation:google.maps.Animation.BOUNCE,
            icon: 'img/map-marker.png',
            map: map
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);   

})(jQuery); 


jQuery(document).ready(function($) {

        // ---------------Google Map------------------------------
        var myCenter = new google.maps.LatLng(51.511059, -0.117148);
        var marker;

        function initialize() {
            var mapProp = {
                center: myCenter,
                scrollwheel: false,
                zoom: 17,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(document.getElementById("gmap"), mapProp);

            var marker = new google.maps.Marker({
                position: myCenter,
                animation: google.maps.Animation.BOUNCE
            });

            marker.setMap(map);
        }

        google.maps.event.addDomListener(window, 'load', initialize);
    
});

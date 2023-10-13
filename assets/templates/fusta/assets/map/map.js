var myCenter=new google.maps.LatLng(-37.8201657,144.9587475);
    function initialize()
    {
        var mapProp = {
            center:myCenter,
            scrollwheel: false,
            zoom:8,
            mapTypeId:google.maps.MapTypeId.ROADMAP
        };
        var map=new google.maps.Map(document.getElementById("map-inner"),mapProp);
    }
google.maps.event.addDomListener(window, 'load', initialize);

	
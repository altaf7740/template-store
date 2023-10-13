if($('#gmap').length){
$(function() {
               
        var LocsA = [
            {
                lat: 40.839081,
                lon: -74.477142,
                title: 'Property 1',
                html: ['<a href="single-properties.html"><img style="width: 250px;" alt="" src="assets/images/propertes/01.jpg"></a>',
                       '<h4 style="margin: 15px 0 5px;color: #004395;"><a href="single-properties.html">Friuli-Venezia Giulia</a></h4>',
                        '<h5 style="margin-bottom: 5px;color: #19cfa3;" class="price">$52,354</h5>',
                        '<p style="margin: 0;font-weight: 300;">568 E 1st Ave, Miami</p>'
                    ].join(''),
                icon: 'assets/images/icons/map.png',
                animation: google.maps.Animation.BOUNCE
            },
            {
                lat: 40.733617,
                lon: -74.171150,
                title: 'Property 2',
                html: ['<a href="single-properties.html"><img style="width: 250px;" alt="" src="assets/images/propertes/02.jpg"></a>',
                       '<h4 style="margin: 15px 0 5px;color: #004395;"><a href="single-properties.html">Radison de Villa</a></h4>',
                        '<h5 style="margin-bottom: 5px;color: #19cfa3;" class="price">$42,354</h5>',
                        '<p style="margin: 0;font-weight: 300;"> 450 E 1st Ave, New Jersey</p>'
                    ].join(''),
                icon: 'assets/images/icons/map.png',
                animation: google.maps.Animation.BOUNCE
            },
            {
                lat: 40.743011,
                lon: -74.247100,
                title: 'Property 3',
                html: ['<a href="single-properties.html"><img style="width: 250px;" alt="" src="assets/images/propertes/03.jpg"></a>',
                       '<h4 style="margin: 15px 0 5px;color: #004395;"><a href="single-properties.html">Friuli-Venezia Giulia</a></h4>',
                        '<h5 style="margin-bottom: 5px;color: #19cfa3;" class="price">$62,354</h5>',
                        '<p style="margin: 0;font-weight: 300;">568 E 2nd Ave, Miami</p>'
                    ].join(''),
                icon: 'assets/images/icons/map.png',
                animation: google.maps.Animation.BOUNCE
            },
            {
                lat: 40.711150,
                lon: -74.214998,
                title: 'Property 4',
                html: ['<a href="single-properties.html"><img style="width: 250px;" alt="" src="assets/images/propertes/04.jpg"></a>',
                       '<h4 style="margin: 15px 0 5px;color: #004395;"><a href="single-properties.html">Friuli-Venezia Giulia</a></h4>',
                        '<h5 style="margin-bottom: 5px;color: #19cfa3;" class="price">$22,354</h5>',
                        '<p style="margin: 0;font-weight: 300;">568 E 1st Ave, Miami</p>'
                    ].join(''),
                icon: 'assets/images/icons/map.png',
                animation: google.maps.Animation.BOUNCE
            },
            {
                lat: 40.690010,
                lon: -74.151753,
                title: 'Property 5',
                html: ['<a href="single-properties.html"><img style="width: 250px;" alt="" src="assets/images/propertes/05.jpg"></a>',
                       '<h4 style="margin: 15px 0 5px;color: #004395;"><a href="single-properties.html">Friuli-Venezia Giulia</a></h4>',
                        '<h5 style="margin-bottom: 5px;color: #19cfa3;" class="price">$62,354</h5>',
                        '<p style="margin: 0;font-weight: 300;">568 E 1st Ave, Miami</p>'
                    ].join(''),
                icon: 'assets/images/icons/map.png',
                animation: google.maps.Animation.BOUNCE
            },
            {
                lat: 40.825870,
                lon: -74.360770,
                title: 'Property 6',
                html: ['<a href="single-properties.html"><img style="width: 250px;" alt="" src="assets/images/propertes/06.jpg"></a>',
                       '<h4 style="margin: 15px 0 5px;color: #004395;"><a href="single-properties.html">Marvel de Villa</a></h4>',
                        '<h5 style="margin-bottom: 5px;color: #19cfa3;" class="price">$42,354</h5>',
                        '<p style="margin: 0;font-weight: 300;">568 E 1st Ave, Miami</p>'
                    ].join(''),
                icon: 'assets/images/icons/map.png',
                animation: google.maps.Animation.BOUNCE
            },
            {
                lat: 40.729979,
                lon: -74.271992,
                title: 'Property 7',
                html: ['<a href="single-properties.html"><img style="width: 250px;" alt="" src="assets/images/propertes/03.jpg"></a>',
                       '<h4 style="margin: 15px 0 5px;color: #004395;"><a href="single-properties.html">Friuli-Venezia Giulia</a></h4>',
                        '<h5 style="margin-bottom: 5px;color: #19cfa3;" class="price">$34,354</h5>',
                        '<p style="margin: 0;font-weight: 300;">568 E 1st Ave, Miami</p>'
                    ].join(''),
                icon: 'assets/images/icons/map.png',
                animation: google.maps.Animation.BOUNCE
            },
            
            {
                lat: 40.683230,
                lon: -74.636980,
                title: 'property 7',
                html: ['<a href="single-properties.html"><img style="width: 250px;" alt="" src="assets/images/propertes/02.jpg"></a>',
                       '<h4 style="margin: 15px 0 5px;color: #004395;"><a href="single-properties.html">Friuli-Venezia Giulia</a></h4>',
                        '<h5 style="margin-bottom: 5px;color: #19cfa3;" class="price">$42,354</h5>',
                        '<p style="margin: 0;font-weight: 300;">568 E 1st Ave, Miami</p>'
                    ].join(''),
                icon: 'assets/images/icons/map.png',
                animation: google.maps.Animation.BOUNCE
            },
            {
                lat: 40.775360,
                lon: -74.603500,
                title: 'Property 8',
                html: ['<a href="single-properties.html"><img style="width: 250px;" alt="" src="assets/images/propertes/05.jpg"></a>',
                       '<h4 style="margin: 15px 0 5px;color: #004395;"><a href="single-properties.html">Friuli-Venezia Giulia</a></h4>',
                        '<h5 style="margin-bottom: 5px;color: #19cfa3;" class="price">$42,354</h5>',
                        '<p style="margin: 0;font-weight: 300;">568 E 1st Ave, Miami</p>'
                    ].join(''),
                icon: 'assets/images/icons/map.png',
                animation: google.maps.Animation.BOUNCE
            },
            {
                lat: 40.815080,
                lon: -74.162520,
                title: 'Property 9',
                html: ['<a href="single-properties.html"><img style="width: 250px;" alt="" src="assets/images/propertes/02.jpg"></a>',
                       '<h4 style="margin: 15px 0 5px;color: #004395;"><a href="single-properties.html">Friuli-Venezia Giulia</a></h4>',
                        '<h5 style="margin-bottom: 5px;color: #19cfa3;" class="price">$42,354</h5>',
                        '<p style="margin: 0;font-weight: 300;">568 E 1st Ave, Miami</p>'
                    ].join(''),
                icon: 'assets/images/icons/map.png',
                animation: google.maps.Animation.BOUNCE
            },
            {
                lat: 40.728157,
                lon: -74.077644,
                title: 'Property 10',
                html: ['<a href="single-properties.html"><img style="width: 250px;" alt="" src="assets/images/propertes/03.jpg"></a>',
                       '<h4 style="margin: 15px 0 5px;color: #004395;"><a href="single-properties.html">Friuli-Venezia Giulia</a></h4>',
                        '<h5 style="margin-bottom: 5px;color: #19cfa3;" class="price">$42,354</h5>',
                        '<p style="margin: 0;font-weight: 300;">568 E 1st Ave, Miami</p>'
                    ].join(''),
                icon: 'assets/images/icons/map.png',
                animation: google.maps.Animation.BOUNCE
            }


        ];
        new Maplace({
            locations: LocsA,
            controls_on_map: true,
            map_options: {
                zoom: 11.9,
                scrollwheel: false,
                stopover: true,
                styles: [
                    {
                        "featureType": "landscape.natural",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#EDE9DE"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "hue": "#EDE9DE"
                            },
                            {
                                "color": "#00D0A2"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "lightness": 100
                            },
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "lightness": 700
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#BEBEF1"
                            }
                        ]
                    }
                ]   
            }
        }).Load();

    });
}

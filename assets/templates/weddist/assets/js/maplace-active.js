if($('#gmap').length){
$(function() {
               
        var LocsA = [
            {
                lat: 40.652981,
                lon: -73.866707,
                html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-wedding.html"><img src="assets/image/other/map-log.jpg" alt=""></a>',
                    '<span></span></div>',
                    '<div class="content"><div class="left"><h4 class="title"><a href="single-wedding.html">Friuli-Venezia Giulia</a></h4><span class="location">568 E 1st Ave, Miami</span></div>',
                    '<div class="right"><div class="type-wrap"><span class="price">$550<span>M</span></span><span class="type">For Rent</span></div></div></div></div></div>',
                    ].join(''),
                icon: 'assets/image/icon/map-05.png'
            },
            {
                lat: 40.627579,
                lon: -73.933228,
                html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-wedding.html"><img src="assets/image/other/map-log.jpg" alt=""></a>',
                    '<span></span></div>',
                    '<div class="content"><div class="left"><h4 class="title"><a href="single-wedding.html">Open Wedding Program</a></h4><span class="location">568 E 1st Ave, Miami</span></div>',
                    '<div class="right"><div class="type-wrap"><span class="price">$550<span>M</span></span><span class="type">For Rent</span></div></div></div></div></div>',
                    ].join(''),
                icon: 'assets/image/icon/map-02.png'
            },
            {
                lat: 40.637480,
                lon: -73.919180,
                html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-wedding.html"><img src="assets/image/other/map-log.jpg" alt=""></a>',
                    '<span></span></div>',
                    '<div class="content"><div class="left"><h4 class="title"><a href="single-wedding.html">Party Gallery</a></h4><span class="location">568 E 1st Ave, Miami</span></div>',
                    '<div class="right"><div class="type-wrap"><span class="price">$550<span>M</span></span><span class="type">For Rent</span></div></div></div></div></div>',
                    ].join(''),
                icon: 'assets/image/icon/map-03.png',
                animation: google.maps.Animation.BOUNCE
            },
            {
                lat: 40.630569,
                lon: -73.897362,
                html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-wedding.html"><img src="assets/image/other/map-log.jpg" alt=""></a>',
                    '<span></span></div>',
                    '<div class="content"><div class="left"><h4 class="title"><a href="single-wedding.html">Having trabels</a></h4><span class="location">568 E 1st Ave, Miami</span></div>',
                    '<div class="right"><div class="type-wrap"><span class="price">$550<span>M</span></span><span class="type">For Rent</span></div></div></div></div></div>',
                    ].join(''),
                icon: 'assets/image/icon/map-04.png'
            },
            {
                lat: 40.635291,
                lon:  -73.848262,
                html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-wedding.html"><img src="assets/image/other/map-log.jpg" alt=""></a>',
                    '<span></span></div>',
                    '<div class="content"><div class="left"><h4 class="title"><a href="single-wedding.html">Friuli-Venezia Giulia</a></h4><span class="location">568 E 1st Ave, Miami</span></div>',
                    '<div class="right"><div class="type-wrap"><span class="price">$550<span>M</span></span><span class="type">For Rent</span></div></div></div></div></div>',
                    ].join(''),
                icon: 'assets/image/icon/map-01.png'
                
            },
            {
                lat: 40.629227,
                lon: -73.828151,
                html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-wedding.html"><img src="assets/image/other/map-log.jpg" alt=""></a>',
                    '<span></span></div>',
                    '<div class="content"><div class="left"><h4 class="title"><a href="single-wedding.html">Friuli-Venezia Giulia</a></h4><span class="location">568 E 1st Ave, Miami</span></div>',
                    '<div class="right"><div class="type-wrap"><span class="price">$550<span>M</span></span><span class="type">For Rent</span></div></div></div></div></div>',
                    ].join(''),
                icon: 'assets/image/icon/map-06.png'
            },
            {
                lat: 40.644248,
                lon: -73.887191,
                html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-wedding.html"><img src="assets/image/other/map-log.jpg" alt=""></a>',
                    '<span></span></div>',
                    '<div class="content"><div class="left"><h4 class="title"><a href="single-wedding.html">Friuli-Venezia Giulia</a></h4><span class="location">568 E 1st Ave, Miami</span></div>',
                    '<div class="right"><div class="type-wrap"><span class="price">$550<span>M</span></span><span class="type">For Rent</span></div></div></div></div></div>',
                    ].join(''),
                icon: 'assets/image/icon/map-06.png'
            },

        ];
    
        new Maplace({
            locations: LocsA,
            controls_on_map: true,
            controls_cssclass: 'map-property-item-list',
            map_options: {
                zoom: 14.2,
                scrollwheel: false,
                stopover: true,
                styles: [
                    {
                        "featureType": "water",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#F1F1F1"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "stylers": [
                            {
                                "color": "#F1F1F1"
                            },
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#fff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#fff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#F1F1F1"
                            },
                            {
                                "weight": 1.8
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#ECECEC"
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
                                "color": "#FF5151"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "color": "#fff"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#F1F1F1"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#ffffff"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#F9F9F9"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#B7B7B7"
                            }
                        ]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "visibility": "on"
                            },
                            {
                                "color": "#8b8b8b"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#d6d6d6"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {},
                    {
                        "featureType": "poi",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#EBEBEB"
                            }
                        ]
                    }
                ] 
            }
        }).Load();

    });
}



if($('#hero-map').length){
$(function() {

    var LocsB = [
        {
            lat: 40.678177,
            lon: -73.944160,
            imageUrl: 'assets/image/place/01.jpg',
            title: 'Friuli-Venezia Giulia',
            address: '<i class="ti-target "></i> Alaska USA',
            price: '$3999.00',
            ratting: '<i class="ti-star"></i> <i class="ti-star"></i> <i class="ti-star"></i><i class="ti-star"></i><i class="ti-star"></i>',
            html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-wedding.html"><img src="assets/image/place/01.jpg" alt=""></a>',
                    '<span></span></div>',
                    '<div class="content"><div class="left"><h4 class="title"><a href="single-wedding.html">Friuli-Venezia Giulia</a></h4><span class="location">568 E 1st Ave, Miami</span></div>',
                    '<div class="right"><div class="type-wrap"><span class="price">$299.00<span>M</span></span><span class="type">For Rent</span></div></div></div></div></div>',
                    ].join(''),
            icon: 'assets/image/icon/map-icon.png',
            animation: google.maps.Animation.BOUNCE
        },
        {
            lat: 40.579240,
            lon: -74.078940,
            imageUrl: 'assets/image/place/02.jpg',
            title: 'Program Place One ',
            address: '<i class="ti-target "></i> Alaska USA',
            price: '$499.00',
            ratting: '<i class="ti-star"></i> <i class="ti-star"></i> <i class="ti-star"></i><i class="ti-star"></i><i class="ti-star"></i>',
            html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-wedding.html"><img src="assets/image/place/02.jpg" alt=""></a>',
                    '<span></span></div>',
                    '<div class="content"><div class="left"><h4 class="title"><a href="single-wedding.html">Program Place One</a></h4><span class="location">568 E 1st Ave, Miami</span></div>',
                    '<div class="right"><div class="type-wrap"><span class="price">$499.00<span>M</span></span><span class="type">For Rent</span></div></div></div></div></div>',
                    ].join(''),
            icon: 'assets/image/icon/map-icon.png',
        },
        {
            lat: 40.645610,
            lon: -74.012000,
            imageUrl: 'assets/image/place/03.png',
            title: 'Friuli-Venezia Giulia Two',
            address: '<i class="ti-target "></i> Alaska USA',
            price: '$3999.00',
            ratting: '<i class="ti-star"></i> <i class="ti-star"></i> <i class="ti-star"></i><i class="ti-star"></i><i class="ti-star"></i>',
            html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-wedding.html"><img src="assets/image/place/03.png" alt=""></a>',
                    '<span></span></div>',
                    '<div class="content"><div class="left"><h4 class="title"><a href="single-wedding.html">Friuli-Venezia Giulia Two</a></h4><span class="location">568 E 1st Ave, Miami</span></div>',
                    '<div class="right"><div class="type-wrap"><span class="price">$550<span>M</span></span><span class="type">For Rent</span></div></div></div></div></div>',
                    ].join(''),
            icon: 'assets/image/icon/map-icon.png',
        },
        {
            lat: 40.605250,
            lon:  -73.934903,
            imageUrl: 'assets/image/place/04.png',
            title: 'Friuli-Venezia Giulia Three',
            address: '<i class="ti-target "></i> Alaska USA',
            price: '$3999.00',
            ratting: '<i class="ti-star"></i> <i class="ti-star"></i> <i class="ti-star"></i><i class="ti-star"></i><i class="ti-star"></i>',
            html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-wedding.html"><img src="assets/image/place/04.png" alt=""></a>',
                    '<span></span></div>',
                    '<div class="content"><div class="left"><h4 class="title"><a href="single-wedding.html">Friuli-Venezia Giulia Three</a></h4><span class="location">568 E 1st Ave, Miami</span></div>',
                    '<div class="right"><div class="type-wrap"><span class="price">$450<span>M</span></span><span class="type">For Rent</span></div></div></div></div></div>',
                    ].join(''),
            icon: 'assets/image/icon/map-icon.png',
        },
        {
            lat: 40.668286,
            lon:  -74.085316,
            imageUrl: 'assets/image/place/05.png',
            title: 'Friuli-Venezia Giulia Four',
            address: '<i class="ti-target "></i> Alaska USA',
            price: '$3999.00',
            ratting: '<i class="ti-star"></i> <i class="ti-star"></i> <i class="ti-star"></i><i class="ti-star"></i><i class="ti-star"></i>',
            html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-wedding.html"><img src="assets/image/place/05.png" alt=""></a>',
                    '<span></span></div>',
                    '<div class="content"><div class="left"><h4 class="title"><a href="single-wedding.html">Friuli-Venezia Giulia Four</a></h4><span class="location">568 E 1st Ave, Miami</span></div>',
                    '<div class="right"><div class="type-wrap"><span class="price">$550<span>M</span></span><span class="type">For Rent</span></div></div></div></div></div>',
                    ].join(''),
            icon: 'assets/image/icon/map-icon.png',
        },
        {
            lat: 40.668286,
            lon:  -74.085316,
            imageUrl: 'assets/image/place/06.png',
            title: 'Friuli-Venezia Giulia Five',
            address: '<i class="ti-target "></i> Alaska USA',
            price: '$3999.00',
            ratting: '<i class="ti-star"></i> <i class="ti-star"></i> <i class="ti-star"></i><i class="ti-star"></i><i class="ti-star"></i>',
            html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-wedding.html"><img src="assets/image/place/06.png" alt=""></a>',
                    '<span></span></div>',
                    '<div class="content"><div class="left"><h4 class="title"><a href="single-wedding.html">Friuli-Venezia Giulia</a></h4><span class="location">568 E 1st Ave, Miami</span></div>',
                    '<div class="right"><div class="type-wrap"><span class="price">$550<span>M</span></span><span class="type">For Rent</span></div></div></div></div></div>',
                    ].join(''),
            icon: 'assets/image/icon/map-icon.png',
        }
    ];

    new Maplace({
        map_div: '#hero-map',
        controls_div: '.map-property-controls',
        controls_on_map: false,
        controls_type: 'list',
        controls_cssclass: 'map-property-area',
        view_all: false,
        locations: LocsB,
        map_options: {
            zoom: 12,
            scrollwheel: false,
            stopover: true,
            styles: [
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#F1F1F1"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "color": "#F1F1F1"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#fff"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#fff"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#F1F1F1"
                        },
                        {
                            "weight": 1.8
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#ECECEC"
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
                            "color": "#FF5151"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#fff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#F1F1F1"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#F9F9F9"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#B7B7B7"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#8b8b8b"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d6d6d6"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {},
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#EBEBEB"
                        }
                    ]
                }
            ] 
        }
    }).Load();

});

}


if($('#hero-map1').length){
$(function() {

    var LocsB = [
        {
            lat: 40.652981,
            lon: -73.866707,
            imageUrl: 'assets/image/venues/07.jpg',
            title: 'Friuli-Venezia Giulia',
            address: '<i class="ti-location-pin"></i> Alaska USA',
            price: '$3999.00',
            ratting: '<i class="ti-star"></i> <i class="ti-star"></i> <i class="ti-star"></i><i class="ti-star"></i><i class="ti-star"></i>',
            html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-wedding.html"><img src="assets/image/other/map-log.jpg" alt=""></a>',
                    '<span></span></div>',
                    '<div class="content"><div class="left"><h4 class="title"><a href="single-wedding.html">Friuli-Venezia Giulia</a></h4><span class="location">568 E 1st Ave, Miami</span></div>',
                    '<div class="right"><div class="type-wrap"><span class="price">$3999.00<span>M</span></span><span class="type">For Rent</span></div></div></div></div></div>',
                    ].join(''),
            icon: 'assets/image/icon/map-icon.png',
        },
        {
            lat: 40.627579,
            lon: -73.933228,
            imageUrl: 'assets/image/venues/06.jpg',
            title: 'Program Place One',
            address: '<i class="ti-location-pin "></i> Alaska USA',
            price: '$499.00',
            ratting: '<i class="ti-star"></i> <i class="ti-star"></i> <i class="ti-star"></i><i class="ti-star"></i><i class="ti-star"></i>',
            html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-wedding.html"><img src="assets/image/other/map-log.jpg" alt=""></a>',
                    '<span></span></div>',
                    '<div class="content"><div class="left"><h4 class="title"><a href="single-wedding.html">Program Place One</a></h4><span class="location">568 E 1st Ave, Miami</span></div>',
                    '<div class="right"><div class="type-wrap"><span class="price">$499.00<span>M</span></span><span class="type">For Rent</span></div></div></div></div></div>',
                    ].join(''),
            icon: 'assets/image/icon/map-icon.png',
        },
        {
            lat: 40.637480,
            lon: -73.919180,
            imageUrl: 'assets/image/venues/08.jpg',
            title: 'Friuli-Venezia Giulia',
            address: '<i class="ti-location-pin "></i> Alaska USA',
            price: '$3999.00',
            ratting: '<i class="ti-star"></i> <i class="ti-star"></i> <i class="ti-star"></i><i class="ti-star"></i><i class="ti-star"></i>',
            html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-wedding.html"><img src="assets/image/other/map-log.jpg" alt=""></a>',
                    '<span></span></div>',
                    '<div class="content"><div class="left"><h4 class="title"><a href="single-wedding.html">Friuli-Venezia Giulia</a></h4><span class="location">568 E 1st Ave, Miami</span></div>',
                    '<div class="right"><div class="type-wrap"><span class="price">$550<span>M</span></span><span class="type">For Rent</span></div></div></div></div></div>',
                    ].join(''),
            icon: 'assets/image/icon/map-icon.png',
        },
        {
            lat: 40.605250,
            lon:  -73.934903,
            imageUrl: 'assets/image/venues/09.jpg',
            title: 'Friuli-Venezia Giulia',
            address: '<i class="ti-location-pin"></i> Alaska USA',
            price: '$3999.00',
            ratting: '<i class="ti-star"></i> <i class="ti-star"></i> <i class="ti-star"></i><i class="ti-star"></i><i class="ti-star"></i>',
            html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-wedding.html"><img src="assets/image/other/map-log.jpg" alt=""></a>',
                    '<span></span></div>',
                    '<div class="content"><div class="left"><h4 class="title"><a href="single-wedding.html">Friuli-Venezia Giulia</a></h4><span class="location">568 E 1st Ave, Miami</span></div>',
                    '<div class="right"><div class="type-wrap"><span class="price">$550<span>M</span></span><span class="type">For Rent</span></div></div></div></div></div>',
                    ].join(''),
            icon: 'assets/image/icon/map-icon.png',
        },
        {
            lat: 40.629227,
            lon: -73.828151,
            imageUrl: 'assets/image/venues/10.jpg',
            title: 'Friuli-Venezia Giulia',
            address: '<i class="ti-location-pin"></i> Alaska USA',
            price: '$3999.00',
            ratting: '<i class="ti-star"></i> <i class="ti-star"></i> <i class="ti-star"></i><i class="ti-star"></i><i class="ti-star"></i>',
            html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-wedding.html"><img src="assets/image/other/map-log.jpg" alt=""></a>',
                    '<span></span></div>',
                    '<div class="content"><div class="left"><h4 class="title"><a href="single-wedding.html">Friuli-Venezia Giulia</a></h4><span class="location">568 E 1st Ave, Miami</span></div>',
                    '<div class="right"><div class="type-wrap"><span class="price">$550<span>M</span></span><span class="type">For Rent</span></div></div></div></div></div>',
                    ].join(''),
            icon: 'assets/image/icon/map-icon.png',
        },
        {
            lat: 40.644248,
            lon: -73.887191,
            imageUrl: 'assets/image/venues/11.jpg',
            title: 'Friuli-Venezia Giulia',
            address: '<i class="ti-location-pin"></i> Alaska USA',
            price: '$3999.00',
            ratting: '<i class="ti-star"></i> <i class="ti-star"></i> <i class="ti-star"></i><i class="ti-star"></i><i class="ti-star"></i>',
            html: ['<div class="property-item map-property-item"><div class="property-inner"><div class="image"><a href="single-wedding.html"><img src="assets/image/other/map-log.jpg" alt=""></a>',
                    '<span></span></div>',
                    '<div class="content"><div class="left"><h4 class="title"><a href="single-wedding.html">Friuli-Venezia Giulia</a></h4><span class="location">568 E 1st Ave, Miami</span></div>',
                    '<div class="right"><div class="type-wrap"><span class="price">$550<span>M</span></span><span class="type">For Rent</span></div></div></div></div></div>',
                    ].join(''),
            icon: 'assets/image/icon/map-icon.png',
        }


    ];

    new Maplace({
        map_div: '#hero-map1',
        controls_div: '.map-categories-controls',
        controls_on_map: false,
        controls_type: 'list',
        controls_cssclass: 'map-property-area',
        view_all: false,
        locations: LocsB,
        map_options: {
            zoom: 12.8,
            scrollwheel: false,
            stopover: true,
            styles: [
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#F1F1F1"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "stylers": [
                        {
                            "color": "#F1F1F1"
                        },
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#fff"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#fff"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#F1F1F1"
                        },
                        {
                            "weight": 1.8
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#ECECEC"
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
                            "color": "#FF5151"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#fff"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#F1F1F1"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#F9F9F9"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#B7B7B7"
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#8b8b8b"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#d6d6d6"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {},
                {
                    "featureType": "poi",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#EBEBEB"
                        }
                    ]
                }
            ] 
        }
    }).Load();

});

}







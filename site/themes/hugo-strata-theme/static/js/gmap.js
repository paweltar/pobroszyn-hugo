$(document).ready(function() {
  console.log('test');
});

function initMap() {
    var uluru = {
        lat: 50.786283,
        lng: 21.463281
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: uluru,
        styles: [
            {
                "stylers": [
                    {
                        "saturation": -17
                    }, {
                        "gamma": 0.36
                    }
                ]
            }, {
                "featureType": "administrative",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            }, {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            }, {
                "featureType": "road.highway",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }, {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            }, {
                "featureType": "road.local",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            }, {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            }, {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3f518c"
                    }
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    {
                        "color": "#84afa3"
                    }, {
                        "lightness": 52
                    }
                ]
            }
        ]
    });
    var marker = new google.maps.Marker({position: uluru, map: map});
}

/*************Map using mapbox-gl****************/
mapboxgl.accessToken = 'pk.eyJ1IjoiZmVpdGFuIiwiYSI6ImNqdXBxaGQwOTFxOTQ0ZHB3dTU5czZsMjMifQ.EjLC2hSAc-NlyQPa_rb9Mw';
        var map = new mapboxgl.Map({
            container: 'map'
            , style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
            attributionControl: false, //attributionText was here!:not(:work)
            center: [, ], // starting position lat,lng
            zoom: 9 // starting zoom
        });
        var marker = new mapboxgl.Marker({
            "color": "#489AFB"
        }).setLngLat([, ]).addTo(map);
        map.addControl(new mapboxgl.FullscreenControl());
        map.addControl(new mapboxgl.NavigationControl());
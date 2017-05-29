var latlng = L.latLng(49.453592, 11.077266);
var map = L.map('map').setView(latlng, 15);

/* 
 L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);


var Esri_WorldStreetMap = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
}).addTo(map);

 */

L.esri.basemapLayer("DarkGray").addTo(map);

var trainstation = L.icon({
    iconUrl: 'resources/bahn_3.png',
    shadowUrl: 'resources/bahn_3.png',

    iconSize: [20, 20], // size of the icon
    shadowSize: [20, 20], // size of the shadow
    iconAnchor: [20, 20], // point of the icon which will correspond to marker's location
    shadowAnchor: [20, 20], // the same for the shadow
    popupAnchor: [20, 20] // point from which the popup should open relative to the iconAnchor
});


var busstation = L.icon({
    iconUrl: 'resources/bus_3.png',
    shadowUrl: 'resources/bus_3.png',

    iconSize: [20, 20], // size of the icon
    shadowSize: [20, 20], // size of the shadow
    iconAnchor: [20, 20], // point of the icon which will correspond to marker's location
    shadowAnchor: [20, 20], // the same for the shadow
    popupAnchor: [20, 20] // point from which the popup should open relative to the iconAnchor
});

var substation = L.icon({
    iconUrl: 'resources/ubahn_3.png',
    shadowUrl: 'resources/ubahn_3.png',

    iconSize: [30, 30], // size of the icon
    shadowSize: [30, 30], // size of the shadow
    iconAnchor: [30, 30], // point of the icon which will correspond to marker's location
    shadowAnchor: [30, 30], // the same for the shadow
    popupAnchor: [30, 30] // point from which the popup should open relative to the iconAnchor
});



$.getJSON("resources/vag.json", function (data) {
    var items = [];
    var markers = new L.MarkerClusterGroup({
        iconCreateFunction: function (cluster) {
            var markers = cluster.getAllChildMarkers();
            var html = '<div class="circle"></div>';
            return L.divIcon({html: html, className: 'mycluster', iconSize: L.point(32, 32)});
        },
        spiderfyOnMaxZoom: true, showCoverageOnHover: true, zoomToBoundsOnClick: false, maxClusterRadius: 20, removeOutsideVisibleBounds: true
    });

    $.each(data, function (key, val) {

        var hSet = [];

        if (key === 'Haltestellen') {
            $.each(val, function (index, haltestelle) {

                if (typeof (haltestelle.Latitude) !== "undefined") {

                    if (hSet.indexOf(haltestelle.VGNKennung) === -1) {
                        hSet.push(haltestelle.VGNKennung)


                        var latlng = L.latLng(haltestelle.Latitude, haltestelle.Longitude);

                        if (haltestelle.Produkte.includes("Tram")) {
                            markers.addLayer(L.marker(latlng, {icon: trainstation}));
                            //  L.marker(latlng, {icon: trainstation}).addTo(map);
                        }
                        ;

                        if (haltestelle.Produkte.includes("Bus")) {
                            markers.addLayer(L.marker(latlng, {icon: busstation}));
                            // L.marker(latlng, {icon: busstation}).addTo(map);
                        }
                        ;

                        if (haltestelle.Produkte.includes("UBahn")) {
                            markers.addLayer(L.marker(latlng, {icon: substation}));
                            // L.marker(latlng, {icon: busstation}).addTo(map);
                        }
                        ;
                    }
                    ;
                }
                ;
            });
        }
    });


    map.addLayer(markers);
    //map.addLayer( markerClusters );

});

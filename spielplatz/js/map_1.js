var latlng = L.latLng(49.453592, 11.077266);
var latlnghome = L.latLng(49.453592, 11.077266);
var map = L.map('map').setView(latlng, 15);

/* 
 L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
 attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map); */


L.esri.basemapLayer("DarkGray").addTo(map);


$.getJSON("resources/vag.json", function (data) {
    var items = [];

    L.MakiMarkers.accessToken = "pk.eyJ1IjoibWVuZ2VybWFsdGUiLCJhIjoiY2oyazY1NDJmMDAwZzJxcGhuZXlvNml6cyJ9.mnawBolJxDGSpn4nZHNrjQ";
        // Specify a Maki icon name, hex color, and size (s, m, or l).
        // A list of available icon names can be found at
        //   https://raw.githubusercontent.com/mapbox/maki/master/layouts/all.json
        // Lowercase letters a-z and digits 0-9 can also be used. A value of null will result in no icon.
        // Color may also be set to null, which will result in a gray marker.


    var markers = L.markerClusterGroup({
        maxClusterRadius: function (zoom) {
            return (zoom <= 14) ? 200 : 1; // radius in pixels
        },
        spiderfyOnMaxZoom: false, showCoverageOnHover: true, zoomToBoundsOnClick: true, removeOutsideVisibleBounds: true});

    $.each(data, function (key, val) {

        var hSet = [];

        if (key === 'Haltestellen') {
            $.each(val, function (index, haltestelle) {

                if (typeof (haltestelle.Latitude) !== "undefined") {

                    if (hSet.indexOf(haltestelle.VGNKennung) === -1) {
                        hSet.push(haltestelle.VGNKennung)

                        var latlng = L.latLng(haltestelle.Latitude, haltestelle.Longitude);
                        // ziemlich slow ist ja aber nur Platzhalter
                        // var randomColor = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6);

                        var dist =  1-((latlnghome.distanceTo(latlng).toFixed(0) / 10000) * 1.6);
                        var color = getColor(dist);
                        console.log(dist);
  
                        var icon = L.MakiMarkers.icon({icon: "bus", color: color, size: "s"});
                        var marker = L.marker(latlng, {icon: icon});
                        var markerOptions =
                                {
                                    'maxWidth': '500',
                                    'className': 'custom'
                                };
                        marker.bindPopup(haltestelle.Haltestellenname, markerOptions).openPopup();
                        markers.addLayer(marker);
                        map.addLayer(markers);
                    }
                    ;
                }
                ;

            });
        }
    });


//guestimate meine GPS-Position
            L.control.locate().addTo(map);  
});

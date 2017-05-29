/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function startTrace() {
    var control = L.Routing.control({
        waypoints: [
            L.latLng(49.4480881582118, 11.0647882822154),
            L.latLng(49.4570318401078, 11.0892118095359)
        ]
    }).addTo(map);
    
    control.hide();
};



function getTrace(start, target) {

    $.getJSON("resources/vag.json", function (data) {
        var items = [];

        $.each(data, function (key, val) {

            var hSet = [];

            if (key === 'Haltestellen') {
                $.each(val, function (index, haltestelle) {

                    if (typeof (haltestelle.Latitude) !== "undefined") {

                        if (hSet.indexOf(haltestelle.VGNKennung) === -1) {
                            hSet.push(haltestelle.VGNKennung)

                            var latlng = L.latLng(haltestelle.Latitude, haltestelle.Longitude);

                            var dist = 1 - ((latlnghome.distanceTo(latlng).toFixed(0) / 10000) * 2.9);
                            var color = getColor(dist);

                            var icon;

                            if (haltestelle.Produkte.includes("Tram")) {
                                icon = L.MakiMarkers.icon({icon: "rail-light", color: color, size: "s"});
                                //  L.marker(latlng, {icon: trainstation}).addTo(map);
                            }
                            ;

                            if (haltestelle.Produkte.includes("Bus")) {
                                icon = L.MakiMarkers.icon({icon: "bus", color: color, size: "s"});
                            }
                            ;

                            if (haltestelle.Produkte.includes("UBahn")) {
                                icon = L.MakiMarkers.icon({icon: "rail", color: color, size: "m"});
                            }
                            ;

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
    });
};
    
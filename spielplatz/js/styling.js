var canvas = document.createElement("canvas");
canvas.id = 'myCanvas';
canvas.width = 101;
canvas.height = 1;

var context = canvas.getContext('2d');
context.rect(0, 0, canvas.width, canvas.height);

var grd = context.createLinearGradient(0, 0, canvas.width, canvas.height);

grd.addColorStop(0, '#FF0000');
grd.addColorStop(.5, '#FF9900');

grd.addColorStop(1, '#00FF00');
context.fillStyle = grd;
context.fill();

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
}

function getColor(input) {
    if (input > 1 || input < 0)
        return "#00FFFF";
    var p = context.getImageData(input * 100, 0, 1, 1).data;
    var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
    return hex;
}


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
    shadowSize: [40, 40], // size of the shadow
    iconAnchor: [30, 30], // point of the icon which will correspond to marker's location
    shadowAnchor: [30, 30], // the same for the shadow
    popupAnchor: [30, 30] // point from which the popup should open relative to the iconAnchor
});



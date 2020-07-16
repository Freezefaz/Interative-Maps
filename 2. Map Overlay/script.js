// map the argument refers to the map which we create using leaflet
function getRandomLatLng(map) {
    // get the boundaries of the map
    let bounds = map.getBounds();
    let southWest = bounds.getSouthWest();
    let northEast = bounds.getNorthEast();
    let lngSpan = northEast.lng - southWest.lng;
    let latSpan = northEast.lat - southWest.lat;

    let randomLng = Math.random() * lngSpan + southWest.lng;
    let randomLat = Math.random() * latSpan + southWest.lat;

    return [ randomLat, randomLng,];
}

let singapore = [ 1.29,103.85]; // Singapore latlng
let japan = [38.28, 140.46]; //Japan latlng
let busan = [35.1333869, 129.105835] //Busan

let map = L.map('map').setView(singapore, 15); //setview is to (center, followed by how much to zoom 
// smaller zoom out, bigger is to zoom in)

// setup the tile layers, visual part of the map
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

// Create a marker
let sgMarker = L.marker([1.29, 103.85]);
sgMarker.addTo(map);
sgMarker.bindPopup("<p>Singapore</p>");
sgMarker.addEventListener("click",function(){
    alert("Singapore");
})

let circle = L.circle([1.35166526, 103.773663572], {
    color: "red",
    fillColor:"orange",
    fillOpacity: 0.5,
    radius: 500
})

// add to map
circle.addTo(map);

// create marker cluster
let markerClusterLayer = L.markerClusterGroup();

for (let i = 0; i < 1000; i++) {
    let pos = getRandomLatLng(map);
    L.marker(pos).addTo(markerClusterLayer);
}

markerClusterLayer.addTo(map);



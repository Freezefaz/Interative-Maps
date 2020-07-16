function hdbMarkers() {
  axios
    .get("API/hdb.json").then(function(response) {
      markerClusterLayer.clearLayers();
      let hdbPositions = response.data
      console.log(hdbPositions)
      for (let h of hdbPositions){
        L.marker(h.coordinates).addTo(markerClusterLayer);
      }
    //   for (let n of hdbPositions){
    //     L.marker(n.names).addTo(markerClusterLayer1);
    //   }
      markerClusterLayer.addTo(map);
    });
}

function natureMarkers() {
  axios
    .get("API/nature.json").then(function(response) {
      markerClusterLayer1.clearLayers();
      let naturePositions = response.data
      console.log(naturePositions)
      for (let n of naturePositions){
        L.marker(n.coordinates).addTo(markerClusterLayer1);
      }
      markerClusterLayer1.addTo(map);
    });
}

function shopMarkers() {
  axios
    .get("API/shopping.json").then(function(response) {
      markerClusterLayer2.clearLayers();
      let shopPositions = response.data
      console.log(shopPositions)
      for (let s of shopPositions){
        L.marker(s.coordinates).addTo(markerClusterLayer2);
      }
      markerClusterLayer2.addTo(map);
    });
}

let singapore = [ 1.29,103.85];
let map = L.map("map").setView(singapore, 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

let markerClusterLayer = L.markerClusterGroup();
let markerClusterLayer1 = L.markerClusterGroup();
let markerClusterLayer2 = L.markerClusterGroup();

let group = L.layerGroup();
L.marker(hdbMarkers()).addTo(group);

let group1 = L.layerGroup();
L.marker(natureMarkers()).addTo(group1);

let group2 = L.layerGroup();
L.marker(shopMarkers()).addTo(group2);
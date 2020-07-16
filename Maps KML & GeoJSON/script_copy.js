main();

// Create a function to allow async to work
async function main() {
    let singapore = [ 1.29,103.85]; // Singapore latlng
    let map = L.map('map').setView(singapore, 13);

    // setup the tile layers
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
    }).addTo(map);

    // to wait for the function to load
//  let response = axios.get("cycle.geojson"); it will NOT wait and will load so it 

//  waiting will be slower as it waits for axios to finish then load to map
// if have await then it is a response
//  if not it is a request e.g axios.get("")
    let cycleResponse = await axios.get("cycle.geojson");
    // this is original code
    // let cycleLayer = L.geoJson(cycleResponse.data).addTo(map);

    let cycleLayer = L.geoJson(cycleResponse.data, {
        onEachFeature: function(feature, layer){
            // to allow viewing of any data from the file
            layer.bindPopup(feature.properties.Description);
        }
    }).addTo(map);


    //Check if json file is not working due to error
    let npResponse = await axios.get("npcycle.geojson");
    let npCycleLayer = L.geoJson(npResponse.data).addTo(map);

    // CSS for leaflet
    cycleLayer.setStyle ({
        "color":"red"
    })
}
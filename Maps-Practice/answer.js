// Make function to upload JSON file
// Find common variable and what needs to be changed
// JSON must have name and coordinates also put examples of JSON file
// addlayer is to create the marker and make it into a group
function addLayer(jsonFilename, map, color, baseLayers, layerName){
    // placing return makes it into a async function
    // make it return a promise
    return axios.get(jsonFilename).then(function(response){
        console.log(response.data);
        // create layer group
        let layer = L.layerGroup();
        for (let file of response.data) {
            let marker = L.marker(file.coordinates);
            //  To add color to font and name at popup
            marker.bindPopup(`<p style="color:${color}">${file.name}</p>`);
            // add marker to the layer
            marker.addTo(layer);
            console.log(marker);
        }
        console.log(map);
        // include layer into the name
        map.addLayer(layer);
        // like adding a new key in python dictionary
        baseLayers[layerName] = layer;
        

        // alternatively hdbLayer.addTo(map)

        // Load in JSON file
        // Use absolute url if its from external source
        // now is the layer make first then wait for the marker to be created
        // then add layer to the map so it will pop up one by one
        // let hdbLayer = L.layerGroup();
        // axios.get("API/hdb.json").then(function(response){
        //     console.log(response.data);
        //     // create layer group
        //     for (let hdb of response.data) {
        //         let marker = L.marker(hdb.coordinates);
        //         marker.bindPopup(`<p>${hdb.name}</p>`);
        //         // add marker to the layer
        //         marker.addTo(hdbLayer);
        //     }
        //     map.addLayer(hdbLayer);
        // // alternatively hdbLayer.addTo(map)
        // })
    })
}

// Jquery ready so that can load immediately
$(function(){

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

// make program modular and isolation
//  can add stuff and bugs are only in the function
let baseLayers = [];
// Make it into an array to wait all the layers to finish creating
let loadLayers = [
addLayer("API/hdb.json", map, "blue", baseLayers, "HDB"),
addLayer("API/nature.json", map, "red", baseLayers, "Nature" ),
addLayer("API/shopping.json", map, "green", baseLayers, "Shopping" )
];

// Wait for all layers to be created
    axios.all(loadLayers).then(function(){
        console.log("Load finished")
        // Must add to map if not won't appear
        L.control.layers(baseLayers).addTo(map);
    })

})
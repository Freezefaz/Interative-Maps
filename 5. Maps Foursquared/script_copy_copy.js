const Client_ID="J2K3RD50XETDCQZE3UE5EPPIOOEWBD3GTYFWKWYUMRXB5AS1";
const Client_SECRET="AL03XO453J5ZDDBY2S3WQA1A0ADVCYNDGNIAAMHIOVG5ZD1U";

let hotelsLoaded = 0;

$(function(){
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


    // get the api 
    // go json path finder to check the json format
    // another way
    let options = {
        params: {
            client_id: Client_ID,
            client_secret: Client_SECRET,
            v: "20200716",
            ll: singapore.join(","), //becomes "1.29,103.85"
            query: "hotels"
        }
    }
    axios.get("https://api.foursquare.com/v2/venues/explore", options).then(function(response){ 
            let hotels = response.data.response.groups[0].items;
            for (let h of hotels) {
                let location = h.venue.location;
                let marker = L.marker([location.lat, location.lng]);
                marker.bindPopup(`<p>${h.venue.name}</p>`);
                marker.addTo(map);
         } 
    })
})


   
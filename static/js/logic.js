//Initialize map and set view
let myMap = L.map("map", {
    center: [0, 0],
    zoom: 2
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//Earthquake data URL
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson";

//Fetch GeoJSON data
d3.json(url).then(function(response) {
    console.log(response);
    features = response.features;

    //Define marker size by magnitude
    function markerSize(mag) {
      return Math.sqrt(mag) * 50000;
    }

    //Define marker color by depth
    function markerColor(depth) {
        return depth > 90 ? "red" :
               depth > 70 ? "darkorange" :
               depth > 50 ? "orange" :
               depth > 30 ? "lightsalmon" :
               depth > 10 ? "yellowgreen" :
                            "green"; 
    }

    for (let i = 0; i < features.length; i++) {
        let location = features[i].geometry;
        if (location) {
        //console.log(location);
        earthquakesArray.push([location.coordinates[1], location.coordinates[0]]);
        }
    }

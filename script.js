// First add the map in between script tags
// Set default lat and long and zoom 

const map = L.map('map').setView([41.3828939, 2.1774322], 2);

L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
maxZoom: 20,
subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
attribution: 'Copyright Google Maps'
}).addTo(map);


// Code for changing marker color, position, and size
var purpleIcon = new L.Icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
            iconSize: [20, 35],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34]
});

// Add markers and set lat and long for each
// Create an array for multiple markers/locations

var locations = [
    ["San Diego, CA", 32.704288, -117.160156], // San Diego
    ["San Jose del Cabo, BCS, Mexico", 23.047119, -109.695389], // San Jose del Cabo
    ["Incheon, South Korea", 37.419560, 126.667101], // Incheon
    ["Phucket, Thailand", 8.0111129, 98.295735], // Phucket
    ["Vail, CO", 39.642960, -106.379219] // Vail
];

// For loop to add a marker for each item in the locations array
for (var i = 0; i < locations.length; i++) {
    marker = new L.marker([locations[i][1], locations[i][2]], {icon:purpleIcon})
        .bindPopup(locations[i][0])
        .addTo(map);
};
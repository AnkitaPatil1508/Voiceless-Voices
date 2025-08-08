
var map = L.map('map').setView([18.5204, 73.8567], 12);

// Add OpenStreetMap tiles with attribution
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// NGO locations with their names and coordinates
var ngoData = [
    {lat: 18.4574, lng: 73.8506, name: "Sinhagad Animal Welfare Charitable Trust"},
    {lat: 18.5366, lng: 73.8982, name: "Blue Cross Society of Pune Trust"},
    {lat: 18.4492, lng: 73.8570, name: "Universal Animal Welfare Society, Katraj"},
    {lat: 18.5273, lng: 73.7808, name: "RESQ Charitable Trust Wildlife TTC"},
    {lat: 18.5542, lng: 73.9271, name: "Wadgaonsheri Animal Saviour"},
    {lat: 18.6111, lng: 74.0071, name: "Animal Farm (Rescue Center)"},
    {lat: 18.4673, lng: 73.8949, name: "Sarpmitra Ganesh Mate | Snake Rescuer"},
    {lat: 18.5798, lng: 73.9308, name: "Paws Care"},
    {lat: 18.5312, lng: 73.9912, name: "Animal Rescue Trust"},
    {lat: 18.4648, lng: 73.9163, name: "Rescue Foundation Pune Shelter Home"},
    {lat: 18.5368, lng: 73.8777, name: "Wings For Dreams | Pune"},
    {lat: 18.5062, lng: 73.8078, name: "Dodo Animal Rescue Team (D.A.R.T )"}
];

// Add markers with popups for each NGO
ngoData.forEach(function(ngo) {
    L.marker([ngo.lat, ngo.lng])
     .addTo(map)
     .bindPopup("<b>" + ngo.name + "</b>");
});;

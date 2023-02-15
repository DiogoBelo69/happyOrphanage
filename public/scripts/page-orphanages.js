// create map
const map = L.map('mapid').setView([-17.8438576,-40.3379561], 16);

// create and add tileLayer

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// creat icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize:[50,68],
    iconAnchor: [50,68],
    popupAnchor:[120, 2]
})

//create popup overlay
const popup = L.popup({
    closeButton: false,
    className:'map-popus',
    minWidth:200,
    minHeight:240
}).setContent('Lar das meninas <a href= "orphanage.html?id=1" class="choose-orphanage"> <img src="./public/images/arrow-white.svg"> </a>')

// create and add marker

L.marker([-17.8438576,-40.3379561], {icon}).addTo(map)
    .bindPopup(popup)
    .openPopup();


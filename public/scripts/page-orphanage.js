const options = {
    dragging:false,
    touchZomm:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
}

// create map
const map = L.map('mapid', options).setView([-17.8438576,-40.3379561], 14);

// create and add tileLayer

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);


// creat icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize:[50,68],
    iconAnchor: [29,68],
    popupAnchor:[168, 2]
})
// create and add marker
L.marker([-17.8438576,-40.3379561], {icon}).addTo(map).openPopup();

/*image gallery*/

function selectImage(event){
    const button = event.currentTarget

    //remover todas as classes active
        const buttons = document.querySelectorAll(".images button")
        buttons.forEach(removeActiveClass)

        function removeActiveClass(button){
            button.classList.remove('active')
        }

    //selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img")
    
    //atualizar o conteudo de image
    imageContainer.src = image.src 
    // adicionar a classe .active para esse botao
    button.classList.add('active')
}


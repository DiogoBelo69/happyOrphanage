// create map
const map = L.map("mapid").setView([-17.8438576, -40.3379561], 16);

// create and add tileLayer

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// creat icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [50, 68],
  iconAnchor: [50, 68],
});

let marker;

map.on("click", (event) => {
 
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// adicionar o campo de fotos

function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector("#images");

  // pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll(".new-opload");

  // clone da ultima imagem adicionada
  const newFieldContainer =
    fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

  //verificar se o campo está vazio se sim não adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }

  //limpar o campo antes de adicionar ao contaienr de images.

  newFieldContainer.children[0].value = "";

  //adicionar o clone ao contaienr de #imagens
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;

  const fieldsContainer = document.querySelectorAll(".new-opload");
  if (fieldsContainer.length <= 1) {
    span.parentNode.children[0].value = "";
    return;
  }

  // deletar o campo
  span.parentNode.remove();
}


//select o yes or no

function toggleSelect(event){
    //retirar a class .active
    document.querySelectorAll('.button-select button')
    
    //forEach() = Para cada butão use a mesma função
    .forEach( (button) =>{ 
        button.classList.remove('active')
    })

    //colocar a class .active nesse botao clicado
    const button = event.currentTarget
    button.classList.add('active')
    // pegar o botao clicado

   

    //atualizar o meu input escondido com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]');

     //verificar se sim ou nao 
     input.value = button.dataset.value


}
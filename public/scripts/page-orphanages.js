//create map
const map = L.map("mapid").setView([-27.2121823, -49.6436447], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});


//funciton addMarker(orphanage){}
//forma desestruturada, para não precisar digitar orhapange.id, orphanage.name...
function addMarker({id, name, lat, lng}){

  //create popup overlay
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="orphanage?id=${id}"> <img src = "/images/arrow-white.svg"> </a>`
  );

  //create and add marker
  L.marker([lat, lng], {icon: icon})
    .addTo(map)
    .bindPopup(popup);

}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach(orphanageElement => {
  const orphanage = {
    id: orphanageElement.dataset.id,
    name: orphanageElement.dataset.name,
    lat: orphanageElement.dataset.lat,
    lng: orphanageElement.dataset.lng
  }
  addMarker(orphanage)
})


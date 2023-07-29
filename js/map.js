
let mapaInicial;

const map = L.map('map').setView([-35.6118, -65.4173], 4);

function initMap() {

    mapaInicial = {
        latlng: map.getCenter(),
        zoom: map.getZoom()
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const puntosMarcados = [
        { lat: -34.7502149076031, lng: -58.42033731187113, nombre: 'Buenos Aires - Laboratorio central' },
        { lat: -24.796249515643776, lng: -65.40694227696831, nombre: 'Salta' },
        { lat: -32.912215090852726, lng: -68.8408925754632, nombre: 'Mendoza' },
        { lat: -31.546679711809126, lng: -68.5369207755346, nombre: 'San Juan' },
        { lat: -38.926004702429275, lng: -68.10521625274592, nombre: 'Neuquén' },
        { lat: -45.7948537251709, lng: -67.47328540351415, nombre: 'Chubut' },
        { lat: -46.45161686122602, lng: -67.50912941696151, nombre: 'Santa Cruz' },
        { lat: -28.464300834039033, lng: -65.77699551801452, nombre: 'Catamarca' },
    ];

    puntosMarcados.forEach(punto => {
        const marker = L.marker([punto.lat, punto.lng]).addTo(map);
        marker.bindPopup(punto.nombre);
        marker.on('click', function () {
            map.flyTo([punto.lat, punto.lng], 14, {
                duration: 2,
                easeLinearity: 0.25
            });
        });
    });

    const islasMalvinasIcon = L.divIcon({
        className: 'custom-label-icon',
        html: 'Islas Malvinas',
        iconSize: [80, 25],
        iconAnchor: [40, 25],
    });

    L.marker([-51.7963, -59.5236], { icon: islasMalvinasIcon }).addTo(map);



}

function volverALocalizacionInicial() {
    map.flyTo(mapaInicial.latlng, mapaInicial.zoom, {
        duration: 2, 
        easeLinearity: 0.25
    });
}

document.addEventListener('DOMContentLoaded', initMap);
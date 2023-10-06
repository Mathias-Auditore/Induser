let mapaInicial;
let map;

function initMap() {

    const windowWidth = window.innerWidth;

    let mapCenter;
    let mapZoom;
    if (windowWidth <= 480) {
        // Configuración para mobile
        mapCenter = [-36.6118, -66.4173];
        mapZoom = 3.5;
    } else if (windowWidth <= 768) {
        // Configuración para tablets
        mapCenter = [-36.6118, -64.4173];
        mapZoom = 3.5;
    } else {
        // Configuración por defecto para desktop
        mapCenter = [-38.6118, -65.4173];
        mapZoom = 4;
    }

    map = L.map('map').setView(mapCenter, mapZoom);

    mapaInicial = {
        latlng: mapCenter,
        zoom: mapZoom
    }

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const puntosMarcados = [
        { lat: -34.7502149076031, lng: -58.42033731187113, nombre: 'Buenos Aires - Laboratorio central' },
        { lat: -24.796249515643776, lng: -65.40694227696831, nombre: 'Sede Salta' },
        { lat: -32.912215090852726, lng: -68.8408925754632, nombre: 'Sede Mendoza' },
        { lat: -31.546679711809126, lng: -68.5369207755346, nombre: 'Sede San Juan' },
        { lat: -38.926004702429275, lng: -68.10521625274592, nombre: 'Sede Neuquén' },
        { lat: -45.7948537251709, lng: -67.47328540351415, nombre: 'Sede Chubut' },
        { lat: -46.45161686122602, lng: -67.50912941696151, nombre: 'Sede Santa Cruz' },
        { lat: -28.464300834039033, lng: -65.77699551801452, nombre: 'Sede Catamarca' },
    ];

    fetch('./../sedes.json')
        .then(response => response.json())
        .then(data => {
            const sedesData = data;
            let imagenSede = document.getElementById('imagenSede');
            document.getElementById('nombreSede').textContent = sedesData.sedes[0].nombre;
            document.getElementById('direccionSede').textContent = sedesData.sedes[0].direccion;
            document.getElementById('contactoSede').textContent = sedesData.sedes[0].contacto;
            imagenSede.setAttribute('src', sedesData.sedes[0].urlImagen);
            puntosMarcados.forEach((punto, index) => {
                const marker = L.marker([punto.lat, punto.lng]).addTo(map);
                marker.bindPopup(punto.nombre);
                marker.on('click', function () {
                    map.flyTo([punto.lat, punto.lng], 14, {
                        duration: 2,
                        easeLinearity: 0.25
                    });
                    document.getElementById('nombreSede').textContent = sedesData.sedes[index].nombre;
                    document.getElementById('direccionSede').textContent = sedesData.sedes[index].direccion;
                    document.getElementById('contactoSede').textContent = sedesData.sedes[index].contacto;
                    imagenSede.setAttribute('src', sedesData.sedes[index].urlImagen)
                    document.getElementById('sede').style.display = 'block';
                });
            });
        })
        .catch(error => console.error("Error al cargar el archivo JSON: ", error));

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
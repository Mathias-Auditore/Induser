// BUSCADOR DE CONTENIDO

let bars_search = document.getElementById("ctn-bars-search");
let cover_ctn_search = document.getElementById("cover-ctn-search");
let inputSearch = document.getElementById("inputSearch");
let box_search = document.getElementById("box-search");


// FUNCIÓN PARA MOSTRAR EL BUSCADOR

function mostrar_buscador(){

    bars_search.style.top = "80px";
    cover_ctn_search.style.display = "block";
    inputSearch.focus();
}

// FUNCION PARA OCULTAR AL BUSCADOR

function ocutar_buscador(){
    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
}

// EJECUTANDO

document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocutar_buscador);
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

    if (inputSearch.value === ""){
        box_search.style.display = "none"
    }
    
}

// FUNCION PARA OCULTAR AL BUSCADOR

function ocutar_buscador(){
    bars_search.style.top = "-10px";
    cover_ctn_search.style.display = "none";
    inputSearch.value = "";
    box_search.style.display = "none"
}

// EJECUTANDO

document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("icon_search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", ocutar_buscador);


// Filtrado de busqueda



function buscador_interno (){
    filtro = inputSearch.value.toUpperCase();
    li = box_search.getElementsByTagName("li");

    // Recorriendo elementos a filtrar mediante los li
    for (i = 0; i < li.length; i++){

        a = li[i].getElementsByTagName("a")[0];
        let textValue = a.textContent || a.innerText;

        if(textValue.toUpperCase().indexOf(filtro) > -1){

            li[i].style.display = "";
            box_search.style.display = "block";

            if (inputSearch.value === ""){
                box_search.style.display = "none"
            }

        }  else{
            li[i].style.display = "none";
        }

    }

}

document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

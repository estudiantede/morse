/*
 * Función llamada cuando se pulsa el boton para traducir un texto en morse
 * LLama a la funcion de la API y luego muestra el resultado
 */
function traducir_desde_morse_a_texto() { 
    //Create an xml http request objcto
    let xhttp = new XMLHttpRequest();
    //Crea el parametro a pasar, mientras toma el valor del textarea a traducir
    let params = "texto=" + document.getElementById("morse_a_traducir").value
    xhttp.open('post', '/api/morse_a_texto', true) //Open a channel for communication asyncron (true)
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded') //No se que hace esto
    //Create a function that is called when the readyState changes
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = xhttp.responseText;
        }
        else if (this.readyState == 4  && this.status == 404) {
            document.getElementById("demo").innerHTML = "ERROR. NO SE PUDO COMPLETAR EL PEDIDO";
        }
    }

    //Sends the parametros and the solicitude to the rute
    xhttp.send(params);
}

/*
 * Función llamada cuando se pulsa el boton para traducir un codigo morse en texto
 * LLama a la funcion de la API y luego muestra el resultado
 */
function traducir_desde_texto_a_morse() { 
    //Create an xml http request objcto
    let xhttp = new XMLHttpRequest();

    //Crea el parametro a pasar, mientras toma el valor del textarea a traducir
    let params = "texto=" + document.getElementById("texto_a_traducir").value

    xhttp.open('post', '/api/texto_a_morse', true) //Open a channel for communication asyncron (true)
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded') //No se que hace esto

    //Create a function that is called when the readyState changes
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = xhttp.responseText;
        }
        else if (this.readyState == 4  && this.status == 404) {
            document.getElementById("demo").innerHTML = "ERROR. NO SE PUDO COMPLETAR EL PEDIDO";
        }
    }
    //Sends the parametros and the solicitude to the rute
    xhttp.send(params);
}
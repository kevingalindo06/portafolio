document.addEventListener("DOMContentLoaded", function() {

    let largo = document.getElementById("largo")
    let ancho = document.getElementById("ancho")
    let alto = document.getElementById("alto")
    let docificacion = document.getElementById("dosificacion")
    let verMetrosCubicos = document.getElementById("verm3")
    let cemento = document.getElementById("cemento")
    let arena = document.getElementById("arena")
    let grava = document.getElementById("grava")
    let agua = document.getElementById("agua")

    let Calcular = document.getElementById("Calcular")

    Calcular.addEventListener("click", function(event) {

        if (ancho == NaN || largo == NaN || alto == NaN || docificacion.value == 1) {

            alert("Por favor, ingrese valores numéricos válidos para ancho, largo, alto y selecciona una dosificacion.");
        } 

        else {
            let metrosCubicos = largo.value * ancho.value * alto.value
            let mostrarCemento = ""
            let mostrarArena = ""
            let mostrarGrava = ""
            let mostrarAgua = ""

            verMetrosCubicos.textContent = metrosCubicos
            
            switch (parseInt(docificacion.value)) {
            
                case 2:
                    //valores para dosificacion 1,2,2
                mostrarCemento = metrosCubicos * 8.4
                mostrarArena = metrosCubicos * 35
                mostrarGrava = metrosCubicos * 35
                mostrarAgua = metrosCubicos * 200

                    break;
                case 3:
                    //valores para dosificacion 1,2,3
                mostrarCemento = metrosCubicos * 7
                mostrarArena = metrosCubicos * 29
                mostrarGrava = metrosCubicos * 44
                mostrarAgua = metrosCubicos * 180
                break;

                case 4:
                    //valores para dosificacion 1,2,4
                mostrarCemento = metrosCubicos * 6
                mostrarArena = metrosCubicos * 25
                mostrarGrava = metrosCubicos * 50
                mostrarAgua = metrosCubicos * 170
                break;

                case 5:
                     //valores para dosificacion 1,3,3
                mostrarCemento = metrosCubicos * 6
                mostrarArena = metrosCubicos * 38
                mostrarGrava = metrosCubicos * 38
                mostrarAgua = metrosCubicos * 170
                break;

                case 6:
                     //valores para dosificacion 1,3,4
                mostrarCemento = metrosCubicos * 5.2
                mostrarArena = metrosCubicos * 33
                mostrarGrava = metrosCubicos * 44
                mostrarAgua = metrosCubicos * 185
                break;


            
                default:

            alert("seleccione una opcion de docificacion")
                    break;
            }

            cemento.textContent = mostrarCemento
            arena.textContent = mostrarArena
            grava.textContent = mostrarGrava
            agua.textContent = mostrarAgua
        }
    

        event.preventDefault()
    })


});
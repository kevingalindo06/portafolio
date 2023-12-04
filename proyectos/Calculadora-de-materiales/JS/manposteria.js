document.addEventListener("DOMContentLoaded", function() {

    let ancho = document.getElementById("ancho")
    let altura = document.getElementById("altura")
    let metrosCuadrados = document.getElementById("metrosM2")
    let docificacion = document.getElementById("dosificacion")

   
        
    
    

let Calcular = document.getElementById("calcular");

Calcular.addEventListener('click', function(event){

    if (ancho.value == 0|| altura.value == 0 || docificacion.value == 1) {

        alert("Por favor, ingrese valores numéricos válidos para ancho, altura y selecciona un tipo de ladrillo.");
    }
    else{
        let verMetrosCuadrados = ancho.value * altura.value
        metrosCuadrados.textContent = verMetrosCuadrados

        switch (parseInt(docificacion.value)) {
            
            case 2:
                //valores para dosificacion 1,2
            mostrarCemento = verMetrosCuadrados * 8.4
            mostrarArena = verMetrosCuadrados * 35
            mostrarAgua =verMetrosCuadrados * 200

                break;
            case 3:
                //valores para dosificacion 1,3
            mostrarCemento = verMetrosCuadrados * 7
            mostrarArena = verMetrosCuadrados * 29
            mostrarAgua = verMetrosCuadrados * 180
            break;

            case 4:
                //valores para dosificacion 1,4
            mostrarCemento = verMetrosCuadrados * 6
            mostrarArena = verMetrosCuadrados * 25
            mostrarAgua = verMetrosCuadrados * 170
            break;

            case 5:
                 //valores para dosificacion 1,5
            mostrarCemento = verMetrosCuadrados * 6
            mostrarArena = verMetrosCuadrados * 38
            mostrarAgua = verMetrosCuadrados * 170
            break;

            case 6:
                 //valores para dosificacion 1,6
            mostrarCemento = verMetrosCuadrados * 5.2
            mostrarArena = verMetrosCuadrados * 33
            mostrarAgua = verMetrosCuadrados * 185
            break;

            case 7:
                 //valores para dosificacion 1,7
            mostrarCemento = verMetrosCuadrados * 5.2
            mostrarArena = verMetrosCuadrados * 33
            mostrarAgua = verMetrosCuadrados * 185
            break;


        
            default:

        alert("seleccione una opcion de docificacion")
                break;
        }
    } 
   
    


    event.preventDefault()

})


})
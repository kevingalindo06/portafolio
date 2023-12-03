

document.addEventListener("DOMContentLoaded", function() {
    let Calcular = document.getElementById("calcular");
    let metrosM2 = document.getElementById("metrosM2")
    let pegante = document.getElementById("metros")
    let baldosas = document.getElementById("baldosas")
    let medidaBaldosa = document.getElementById("medidas")
    let verMedida = document.getElementById("verMedida")
    

    let mostrarResultado = document.getElementById("resultados")
     mostrarResultado.style.display = "none"
    Calcular.addEventListener("click", function(event) {
         let ancho = parseFloat(document.getElementById("ancho").value);
        let largo = parseFloat(document.getElementById("largo").value);

       
        if (ancho == NaN || largo == NaN || medidaBaldosa.value == 1) {
            alert("Por favor, ingrese valores numéricos válidos para ancho, largo y selecciona una medida de baldosa.");
        } else {
           let baldosaM2 
           let mostrarMedidas = ""
            switch (parseFloat(medidaBaldosa.value)) {
                case 2:
                    baldosaM2 = 25
                    mostrarMedidas = "20 x 20 centimetros"
                    break;
                case 3:
                    baldosaM2 = 11.1
                    mostrarMedidas = "30 x 30 centimetros"
                    break;
                case 4:
                     baldosaM2 = 6.25
                     mostrarMedidas = "40 x 40 centimetros"
                     break;
                 case 5:
                    baldosaM2 = 4
                    mostrarMedidas = "50 x 50 centimetros"
                    break;
                 case 6:
                    baldosaM2 = 12.5
                    mostrarMedidas = "20 x 40 centimetros"
                    break;

                default:
                    alert("elige una de las opciones")
                    break;
            }

            let metrosCuadrados = ancho * largo;


            metrosM2.textContent = metrosCuadrados
            pegante.textContent = metrosCuadrados * 5
            baldosas.textContent = metrosCuadrados*baldosaM2
           verMedida.textContent = mostrarMedidas
            let mostrarResultado = document.getElementById("resultados")
            mostrarResultado.style.display = "flex"
          

            
            event.preventDefault();
        }
    });
});


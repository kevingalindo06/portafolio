let mostrarSeccion = document.getElementById("resultado")
mostrarSeccion.style.display = "none";

let calculo = document.getElementById("enviar")
calculo.addEventListener('click', function (event) {




    let mts_1 = document.getElementById("m_1").value;
    let mts_2 = document.getElementById("m_2").value;

    mts_1 = parseFloat(mts_1);
    mts_2 = parseFloat(mts_2);



    if (mts_1 > 0 && mts_2 > 0) {

        calMetros_c = mts_1 * mts_2

       
        perimetro = mts_1 + mts_2 + mts_1 + mts_2 



        let metros_C = document.getElementById("mc");

        metros_C.innerHTML = calMetros_c.toFixed(2);


        let ocultarSeccion = document.getElementById("section_datos")
        ocultarSeccion.style.display = "none";

        let mostrarSeccion = document.getElementById("resultado")
        mostrarSeccion.style.display = "flex";



        calcularPVC(calMetros_c,perimetro)

    }



    else {

        alert("❌❌❌❌ Error: Debes escribir un valor  en cada una de las casillas para poder calcular tus materiales.");


    }


    function calcularPVC(calcularMc,per) {

        let tarjeta_pvc = document.getElementById("l_pvc")
        let tarjeta_omega = document.getElementById("omegas")
        let tarjeta_viguetas = document.getElementById("viguetas")
        let tarjeta_perimetral = document.getElementById("Perimetrales")
        let tarjeta_tornillosP = document.getElementById("tornillo_p")
        let tarjeta_tornillosG = document.getElementById("tornillo_g")
        let tarjeta_Angulos = document.getElementById("angulos")


        const laminas_sin = 1.785;
        const omegas_sin = 0.81
        const viguetas_sin = 0.46
        const perimetral_sin = per/5.95
        const angulos_sin = per/2.44
        const tornillos_psin = 11
        const tornillos_gsin = 8

        let laminas
        let omegas
        let viguetas
        let perimetral
        let angulos
        let tornillos_p
        let tornillos_g

        laminas = calcularMc/laminas_sin
        omegas = calcularMc*omegas_sin
        viguetas = calcularMc*viguetas_sin
        perimetral = perimetral_sin
        angulos = angulos_sin
        tornillos_p = calcularMc*tornillos_psin
        tornillos_g = calcularMc*tornillos_gsin

        tarjeta_pvc.innerHTML=laminas.toFixed(1)
        tarjeta_omega.innerHTML=omegas.toFixed(0)
        tarjeta_viguetas.innerHTML=viguetas.toFixed(0)
        tarjeta_perimetral.innerHTML=perimetral.toFixed(1)
        tarjeta_Angulos.innerHTML=angulos.toFixed(0)
        tarjeta_tornillosP.innerHTML=tornillos_p.toFixed(0)
        tarjeta_tornillosG.innerHTML=tornillos_g.toFixed(0)

       

    }


    event.preventDefault()
})








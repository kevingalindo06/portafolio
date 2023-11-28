


let calculo = document.getElementById("enviar")
calculo.addEventListener('click', function (event) {

  let mts_1 = document.getElementById("m_1").value;
  let mts_2 = document.getElementById("m_2").value;

  mts_1 = parseFloat(mts_1);
  mts_2 = parseFloat(mts_2);



  if (mts_1 > 0 && mts_2 > 0) {


    let ocultarSeccion = document.getElementById("section_datos")
    ocultarSeccion.style.display = "none";

    let mostrarSeccion = document.getElementById("opciones")
    mostrarSeccion.style.display = "flex";


  }



  else {

    alert("❌❌❌❌ Error: Debes escribir un valor en cada una de las casillas para poder calcular tus materiales.");


  }
  opcion1();
  opcion2();
  opcion3();

  function opcion1() {
    let metros = document.getElementById("mc")
    let tarjeta_pvc = document.getElementById("l_pvc")
    let tarjeta_omega = document.getElementById("omegas")
    let tarjeta_viguetas = document.getElementById("viguetas")
    let tarjeta_perimetral = document.getElementById("Perimetrales")
    let tarjeta_Angulos = document.getElementById("angulos")
    let tarjeta_tornillosP = document.getElementById("tornillo_p")
    let tarjeta_tornillosG = document.getElementById("tornillo_g")
    let mostrarMetros = document.getElementById("opcion_1");


    let metros_c = mts_1 * mts_2;
    let per = mts_1 + mts_1 + mts_2 + mts_2

    const laminas_sin = 1.785;
    const omegas_sin = 0.81
    const viguetas_sin = 0.46
    const perimetral_sin = per / 5.95
    const angulos_sin = per / 2.44
    const tornillos_psin = 11
    const tornillos_gsin = 8

    let laminas
    let omegas
    let viguetas
    let perimetral
    let angulos
    let tornillos_p
    let tornillos_g

    laminas = metros_c / laminas_sin
    omegas = metros_c * omegas_sin
    viguetas = metros_c * viguetas_sin
    perimetral = perimetral_sin
    angulos = angulos_sin
    tornillos_p = metros_c * tornillos_psin
    tornillos_g = metros_c * tornillos_gsin



    metros.innerHTML = metros_c.toFixed(2)
    tarjeta_pvc.innerHTML = laminas.toFixed(1)
    tarjeta_omega.innerHTML = omegas.toFixed(0)
    tarjeta_viguetas.innerHTML = viguetas.toFixed(0)
    tarjeta_perimetral.innerHTML = perimetral.toFixed(1)
    tarjeta_Angulos.innerHTML = angulos.toFixed(0)
    tarjeta_tornillosP.innerHTML = tornillos_p.toFixed(0)
    tarjeta_tornillosG.innerHTML = tornillos_g.toFixed(0)
    mostrarMetros.innerHTML = metros_c.toFixed(2)






  }

  function opcion2() {
    let metros = document.getElementById("mc_2")
    let tarjeta_pvc = document.getElementById("l_pvc_2")
    let tarjeta_omega = document.getElementById("omegas_2")
    let tarjeta_viguetas = document.getElementById("viguetas_2")
    let tarjeta_perimetral = document.getElementById("Perimetrales_2")
    let tarjeta_Angulos = document.getElementById("angulos_2")
    let tarjeta_tornillosP = document.getElementById("tornillo_p_2")
    let tarjeta_tornillosG = document.getElementById("tornillo_g_2")
    let l_grande = document.getElementById("l_grande")
    let infoDesperdicio = document.getElementById("desperdicio")

    let metros_c = mts_1 * mts_2;
    let per = mts_1 + mts_1 + mts_2 + mts_2


    const omegas_sin = 2.44
    const viguetas_sin = 2.44
    const perimetral_sin = per / 5.95
    const angulos_sin = per / 2.44
    const tornillos_psin = 11
    const tornillos_gsin = 8
    const anchoLamina = 0.30
    const largoLamina = 5.95

    let ml_g = 0
    let ml_c = 0

 // mirar cual es el lado mas grande
    if (mts_1 >= mts_2) {
      ml_g = mts_1;
      ml_c = mts_2;
      l_grande.innerHTML = ml_g;
    }

    else {

      ml_g = mts_2;
      ml_c = mts_1;
      l_grande.innerHTML = ml_g;

    }
    
    // calcular las viguetas
   
    let AgregarViguetas = 0;
    let totalViguetas = 1;
    let faltanteViguetas = 0;

    
    if (ml_c > viguetas_sin) {

      faltante = ml_c / viguetas_sin;
      AgregarViguetas = ml_g / 0.80;
      faltanteViguetas *= AgregarViguetas;
      totalViguetas =  faltante;

    }

    let AgregarOmegas = 0;
    let totalOmegas = 1;
    let faltanteOmegas = 0;

    
    if (ml_g > omegas_sin) {

      faltante = ml_g / viguetas_sin;
      AgregarOmegas = ml_c / 0.80;
      faltanteOmegas *= AgregarOmegas;
      totalOmegas =  faltante;

    }


    let desperdicio = largoLamina - ml_c
    let laminas = ml_g / anchoLamina
    let omegas = totalOmegas
    let viguetas = totalViguetas
    let perimetral = perimetral_sin
    let angulos = angulos_sin
    let tornillos_p = metros_c * tornillos_psin
    let tornillos_g = metros_c * tornillos_gsin
    


    metros.innerHTML = metros_c.toFixed(2)
    tarjeta_pvc.innerHTML = laminas.toFixed(1)
    tarjeta_omega.innerHTML = omegas.toFixed(0)
    tarjeta_viguetas.innerHTML = viguetas.toFixed(0)
    tarjeta_perimetral.innerHTML = perimetral.toFixed(1)
    tarjeta_Angulos.innerHTML = angulos.toFixed(0)
    tarjeta_tornillosP.innerHTML = tornillos_p.toFixed(0)
    tarjeta_tornillosG.innerHTML = tornillos_g.toFixed(0)
    infoDesperdicio.innerHTML = desperdicio.toFixed(2)




  }

  function opcion3() {
    let metros = document.getElementById("mc_3")
    let tarjeta_pvc = document.getElementById("l_pvc_3")
    let tarjeta_omega = document.getElementById("omegas_3")
    let tarjeta_viguetas = document.getElementById("viguetas_3")
    let tarjeta_perimetral = document.getElementById("Perimetrales_3")
    let tarjeta_Angulos = document.getElementById("angulos_3")
    let tarjeta_tornillosP = document.getElementById("tornillo_p_3")
    let tarjeta_tornillosG = document.getElementById("tornillo_g_3")

    let l_corto = document.getElementById("l_corto")
    let infoDesperdicio = document.getElementById("desperdicio_2")


    let metros_c = mts_1 * mts_2;
    let per = mts_1 + mts_1 + mts_2 + mts_2


    const omegas_sin = 2.44
    const viguetas_sin = 2.44
    const perimetral_sin = per / 5.95
    const angulos_sin = per / 2.44
    const tornillos_psin = 11
    const tornillos_gsin = 8
    const anchoLamina = 0.30
    const largoLamina = 5.95


    let ml_g = 0
    let ml_c = 0

    if (mts_1 <= mts_2) {
      ml_g = mts_2;
      ml_c = mts_1;
      l_corto.innerHTML = ml_c;
    }

    else {

      ml_g = mts_1;
      ml_c = mts_2;
      l_corto.innerHTML = ml_c;

    }

// calcular las viguetas
   
let AgregarViguetas = 0;
let totalViguetas = 1;
let faltanteViguetas = 0;


if (ml_c > viguetas_sin) {

  faltante = ml_c / viguetas_sin;
  AgregarViguetas = ml_g / 0.80;
  faltanteViguetas *= AgregarViguetas;
  totalViguetas =  faltante;

}

let AgregarOmegas = 0;
let totalOmegas = 1;
let faltanteOmegas = 0;


if (ml_c > omegas_sin) {

  faltante = ml_c / viguetas_sin;
  AgregarOmegas = ml_g / 0.70;
  faltanteOmegas *= AgregarOmegas;
  totalOmegas =  faltante;

}








    let desperdicio = largoLamina - ml_c
    let laminas = ml_g / anchoLamina
    let omegas = totalOmegas
    let viguetas = totalViguetas
    let perimetral = perimetral_sin
    let angulos = angulos_sin
    let tornillos_p = metros_c * tornillos_psin
    let tornillos_g = metros_c * tornillos_gsin


    metros.innerHTML = metros_c.toFixed(2)
    tarjeta_pvc.innerHTML = laminas.toFixed(1)
    tarjeta_omega.innerHTML = omegas.toFixed(0)
    tarjeta_viguetas.innerHTML = viguetas.toFixed(0)
    tarjeta_perimetral.innerHTML = perimetral.toFixed(1)
    tarjeta_Angulos.innerHTML = angulos.toFixed(0)
    tarjeta_tornillosP.innerHTML = tornillos_p.toFixed(0)
    tarjeta_tornillosG.innerHTML = tornillos_g.toFixed(0)
    infoDesperdicio.innerHTML = desperdicio.toFixed(2)
  }

  event.preventDefault();

})




function showContent() {
  let resultado1 = document.getElementById("resultado1");
  let resultado2 = document.getElementById("resultado2");
  let resultado3 = document.getElementById("resultado3");
  let opcion1 = document.getElementById("opcion1");
  let opcion2 = document.getElementById("opcion2");
  let opcion3 = document.getElementById("opcion3");

  if (opcion1.checked) {
    resultado1.style.display = 'flex';
  }

  else {
    resultado1.style.display = 'none';

  }

  if (opcion2.checked) {
    resultado2.style.display = 'flex';

  }

  else {

    resultado2.style.display = 'none';

  }

  if (opcion3.checked) {
    resultado3.style.display = 'flex';

  }

  else {

    resultado3.style.display = 'none';
  }
}


/*
  function calcularPVC(tarjeta_pvc,tarjeta_omega,tarjeta_viguetas,tarjeta_perimetral,tarjeta_tornillosP,tarjeta_tornillosG,tarjeta_Angulos) {

   
    const laminas_sin = 1.785;
    const omegas_sin = 0.81
    const viguetas_sin = 0.46
    //const perimetral_sin = per / 5.95
    const angulos_sin = per / 2.44
    const tornillos_psin = 11
    const tornillos_gsin = 8

    let laminas
    let omegas
    let viguetas
    let perimetral
    let angulos
    let tornillos_p
    let tornillos_g

    laminas = calcularMc / laminas_sin
    omegas = calcularMc * omegas_sin
    viguetas = calcularMc * viguetas_sin
    perimetral = perimetral_sin
    angulos = angulos_sin
    tornillos_p = calcularMc * tornillos_psin
    tornillos_g = calcularMc * tornillos_gsin

    tarjeta_pvc.innerHTML = laminas.toFixed(1)
    tarjeta_omega.innerHTML = omegas.toFixed(0)
    tarjeta_viguetas.innerHTML = viguetas.toFixed(0)
    tarjeta_perimetral.innerHTML = perimetral.toFixed(1)
    tarjeta_Angulos.innerHTML = angulos.toFixed(0)
    tarjeta_tornillosP.innerHTML = tornillos_p.toFixed(0)
    tarjeta_tornillosG.innerHTML = tornillos_g.toFixed(0)



  }


 
 



/*




// Importar la librería jsPDF
const { jsPDF } = window.jspdf;



// Manejador de eventos para el botón
document.getElementById("generatePdf").addEventListener("click", () => {
  // Crear un nuevo documento PDF
  const pdf = new jsPDF();

  // Configurar información de la factura
  const numeroFactura = "12345";
  const fechaFactura = "23/08/2023";
  const nombreCliente = "Cliente de Ejemplo";
  const direccionCliente = "123 Calle Principal";
  const ciudadCliente = "Ciudad Ejemplo";

  // Configurar detalles de la factura
  const detallesFactura = [
    { descripcion: "Laminas", cantidad: 5, precioUnitario: 10 },
    { descripcion: "Omegas", cantidad: 10, precioUnitario: 20 },
    { descripcion: "Viguetas", cantidad: 8, precioUnitario: 15 },
    { descripcion: "Let Perimetral", cantidad: 20, precioUnitario: 5 },
    { descripcion: "Let Angulos", cantidad: 15, precioUnitario: 8 },
    { descripcion: "Let Tornillos P", cantidad: 100, precioUnitario: 2 },
    { descripcion: "Let Tornillos G", cantidad: 50, precioUnitario: 3 },
    // Agrega más productos aquí
  ];

  // Establecer posición inicial para escribir contenido
  let y = 20;

  // Variable para alternar entre colores
  let alternatingColor = true;

  // Agregar contenido al PDF
  pdf.setFontSize(24);
  pdf.setTextColor("#3498db"); // Azul claro
  pdf.text("Factura", 105, y, "center");
  y += 15;

  pdf.setFontSize(14);
  pdf.setTextColor("#555");
  pdf.text(`Número de Factura: ${numeroFactura}`, 10, y);
  pdf.text(`Fecha: ${fechaFactura}`, 10, y + 10);

  y += 20;

  pdf.setTextColor("#333");
  pdf.text(`Cliente: ${nombreCliente}`, 10, y);
  pdf.text(`Dirección: ${direccionCliente}`, 10, y + 10);
  pdf.text(`Ciudad: ${ciudadCliente}`, 10, y + 20);

  y += 40;

  // Tabla de productos
  pdf.setFillColor(200, 200, 200);
  pdf.rect(10, y, 190, 10, "F");
  pdf.text("Descripción", 20, y + 8);
  pdf.text("Cantidad", 70, y + 8);
  pdf.text("Precio Unitario", 110, y + 8);
  pdf.text("Precio Total", 150, y + 8);
  y += 10;

  let total = 0;

  detallesFactura.forEach((producto) => {
    const precioTotal = producto.cantidad * producto.precioUnitario;

    // Cambiar el color de fondo según alternatingColor
    if (alternatingColor) {
      pdf.setFillColor(255, 255, 255);
      alternatingColor = false;
    } else {
      pdf.setFillColor(190, 190, 190);
      alternatingColor = true;
    }

    pdf.rect(10, y, 190, 10, "F");
    pdf.text(producto.descripcion, 20, y + 8);
    pdf.text(producto.cantidad.toString(), 70, y + 8);
    pdf.text(`$${producto.precioUnitario}`, 110, y + 8);
    pdf.text(`$${precioTotal}`, 150, y + 8);
    total += precioTotal;
    y += 10;
  });

  y += 10;
  pdf.text(`Total: $${total}`, 150, y);

  // Guardar el PDF
  pdf.save(`factura_${numeroFactura}.pdf`);
}); */

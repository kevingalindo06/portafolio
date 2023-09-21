
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



        calcularPVC(calMetros_c, perimetro)

    }



    else {

        alert("❌❌❌❌ Error: Debes escribir un valor  en cada una de las casillas para poder calcular tus materiales.");


    }

    function elegir(lado){
    
       let lado

    }


    function calcularPVC(calcularMc, per) {

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


    event.preventDefault()
})



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

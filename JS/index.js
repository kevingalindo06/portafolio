const app1 = document.getElementById('name');
const app2 = document.getElementById('nombre');
let mensaje = "Kevin Peña";


function nombre(app,mensaje) {

const typewriter = new Typewriter(app, {
    loop:true,
    delay:75
});

typewriter
.typeString(mensaje)
.pauseFor(500)
.start();

}

nombre(app1,mensaje);
nombre(app2,mensaje);

// funcion para aplicar estilo a la opcion seleccionada en el menu quita la previamente seleccionada

function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}


//funcion para mostrar el menu responsivo

function responsiveMenu(){
  
   let barra = document.getElementById('nav') 
   if(barra.className===""){
    barra.className = "responsive";
   }
   else{
    barra.className = "";
   }

   
}


//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {

    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("boostrap").classList.add("barra-progreso3");
        document.getElementById("react").classList.add("barra-progreso4");
    }

}


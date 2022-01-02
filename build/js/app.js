document.addEventListener('DOMContentLoaded', function(){

iniciarApp();

});

function iniciarApp(){
  navegacionFija();
  crearGaleria();
  scrollNav();

}

function navegacionFija(){
const barra = document.querySelector('.header');
const body = document.querySelector('body');
const sobreFestival = document.querySelector('.sobre-festival');
window.addEventListener('scroll', function (e) {


  if (sobreFestival.getBoundingClientRect().bottom < 0) {
 
    barra.classList.add('fijo');
    body.classList.add('body-scroll');
  } else {
    barra.classList.remove('fijo');
    body.classList.remove('body-scroll');

  }
});

}

function scrollNav(){

  const enlaces = document.querySelectorAll('.navegacion-principal a');
  enlaces.forEach(enlace =>{
    enlace.addEventListener('click' , function (e) {
      e.preventDefault();
      const seccionScroll = e.target.attributes.href.value;
      const seccion = document.querySelector(seccionScroll);
      seccion.scrollIntoView({behavior:"smooth"});
      console.log(seccion);
    })
  });

}
function crearGaleria(){
  const galeria= document.querySelector('.galeria-imagenes');
  // galeria.textContent = "Vamos a crear la galeria";

  for (let index = 1; index <= 12; index++) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
 
    <source srcset="build/img/thumb/${index}.webp" type="image/webp" />
    <source srcset="build/img/thumb/${index}.avif" type="image/avif" />
    <img loading="lazy" width="200" height="300" src="build/img/thumb/${index}.jpg" alt="Imagen galeria"/>
    `;
  imagen.onclick = function name() {
    mostrarImagen(index);
  }  
galeria.appendChild(imagen);
    
  }

  function mostrarImagen(id){

    console.log("Mostrar imagen ", id);
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
 
    <source srcset="build/img/grande/${id}.webp" type="image/webp" />
    <source srcset="build/img/grande/${id}.avif" type="image/avif" />
    <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="Imagen galeria"/>
    `;
// crea el overlay con la imagen
    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    overlay.onclick = function () {
      const body = document.querySelector('body');
      body.classList.remove('fijar-body');
      overlay.remove();
    }
// Boton para cerrar el modal
const cerrarModal = document.createElement('p');
cerrarModal.textContent = `X`;
cerrarModal.classList.add('btn-cerrar');
cerrarModal.onclick =  function () {
  const body = document.querySelector('body');
  body.classList.remove('fijar-body');
  overlay.remove();
}

overlay.appendChild(cerrarModal);

//añadirlo al html
    const body = document.querySelector('body');
    body.classList.add('fijar-body');
    body.appendChild(overlay);

  }

}
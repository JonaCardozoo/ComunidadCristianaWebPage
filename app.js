//Array de todos los versiculos

var verses = [
  "Porque donde dos o tres se reúnen en mi nombre, allí estoy yo en medio de ellos. - Mateo 18:20",
  "Que gobierne en sus corazones la paz de Cristo, a la cual fueron llamados en un solo cuerpo. Y sean agradecidos. - Colosenses 3:15",
  "Más bien, al vivir la verdad con amor, creceremos hasta ser en todo como aquel que es la cabeza, es decir, Cristo. - Efesios 4:15",
  "Les ruego, hermanos, que se cuiden de los que causan divisiones y dificultades, y van en contra de lo que a ustedes se les ha enseñado. Apártense de ellos. - Romanos 16:17"
];

var verseIndex = 0;
var verseElement = document.getElementById("verse");

function MostrarSiguiente() {
  // Selecciona el próximo versículo del array
  verseIndex = (verseIndex + 1) % verses.length;
  var nextVerse = verses[verseIndex];
  
  // Actualiza el contenido del elemento HTML con el versículo seleccionado
  verseElement.innerHTML = nextVerse;
}

// Llama a la función inicialmente para mostrar un versículo al cargar la página
MostrarSiguiente();

// Llama a la función cada 5 segundos para cambiar los versículos con transición
setInterval(function() {
  verseElement.classList.add("fade-out");
  setTimeout(function() {
    MostrarSiguiente();
    verseElement.classList.remove("fade-out");
  }, 500); // Duración de la transición en milisegundos (500ms = 0.5s)
}, 5000); // Intervalo de cambio de versículo en milisegundos (5000ms = 5s)
var backgrounds = [
  'foto1.jpeg',
  'foto2.jpeg', // Agrega las URLs de tus imágenes aquí
  'foto3.jpeg',
  // Puedes agregar más imágenes si lo deseas
];

var backgroundIndex = 0;
var photoElement = document.querySelector('.photo');

function cambiarFondo() {
  // Selecciona la siguiente imagen de fondo del array
  backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
  var nextBackground = backgrounds[backgroundIndex];
  
  // Cambia el fondo del elemento photo
  photoElement.style.backgroundImage = 'url(' + nextBackground + ')';
}

// Llama a la función inicialmente para mostrar una imagen al cargar la página
cambiarFondo();

// Llama a la función cada 5 segundos para cambiar el fondo con transición
setInterval(cambiarFondo, 5000); // Intervalo de cambio de fondo en milisegundos (5000ms = 5s)

function showSlides(className) {
  let slides = document.querySelectorAll("." + className + " .mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex[className]++;
  if (slideIndex[className] >= slides.length) {
    slideIndex[className] = 0;
  }
  slides[slideIndex[className]].style.display = "block";
}

// Iniciar slideshow para cada cuadro
var slideIndex = {
  "slideshow-container-campamento-jovenes": 0,
  "slideshow-container-otros-eventos": 0
};

showSlides("slideshow-container-campamento-jovenes");
showSlides("slideshow-container-otros-eventos");

// Cambiar diapositivas cada 5 segundos para cada cuadro
setInterval(function() {
  showSlides("slideshow-container-campamento-jovenes");
}, 5000);

setInterval(function() {
  showSlides("slideshow-container-otros-eventos");
}, 5000);
var modal = document.getElementById("myModal");
var eventos = document.querySelector(".slideshow-container-campamento-jovenes");
var span = document.getElementsByClassName("close")[0];
var body = document.body;

// Agrega un event listener al botón de eventos para abrir la modal
eventos.onclick = function() {
  modal.style.display = "block";
  // Agrega una clase al cuerpo para deshabilitar el desplazamiento cuando se abre la modal
  body.classList.add('modal-open');
}

// Agrega un event listener al botón de cierre para cerrar la modal
span.onclick = function() {
  modal.style.display = "none";
  // Elimina la clase del cuerpo para habilitar el desplazamiento nuevamente cuando se cierra la modal
  body.classList.remove('modal-open');
}

// Agrega un event listener para cerrar la modal si el usuario hace clic fuera de ella
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    // Elimina la clase del cuerpo para habilitar el desplazamiento nuevamente cuando se cierra la modal
    body.classList.remove('modal-open');
  }
}

var closeButton = document.querySelector('.close');
var modalVideo = document.getElementById('modalVideo');

// Agrega un event listener al botón de cierre
closeButton.addEventListener('click', function() {
  // Pausa el video cuando se cierra la modal
  modalVideo.pause();
});



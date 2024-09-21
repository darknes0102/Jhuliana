// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Vámonos de aqui", time: 2 },
  { text: "Acompáñame", time: 8 },
  { text: "Yo te cuidaré", time: 11 },
  { text: "Como en las pedas y todo lo demás", time: 19 },
  { text: "Corre y no vuelvas", time: 21 },
  { text: "Si quieres", time: 23 },
  { text: "Te ayudo a escapar", time: 26 },
  { text: "ah-ah", time: 28 },
  { text: "Corre, te sigo", time: 32   },
  { text: "Vámonos a cualquier lugar", time: 35 },
  { text: "Vámonos de viaje y no volver", time: 45 },
  { text: "Llegar a un hotel a coger", time: 52 },
  { text: "No importa, vamos a estar bien", time: 57 },
  { text: "Vamos a dejar nuestra ciudad", time: 66 },
  { text: "Comprarnos ropa de bazar", time: 72 },
  { text: "No importa todo lo demás", time: 78 },
  { text: "Ay, güey, qué felicidad!", time: 86 },
  { text: "De verte y luego tus labios besar", time: 91 },
  { text: "¡Ay, güey, qué felicidad!", time: 98 },
  { text: "De verte y luego tus pecas contar", time: 102 },
  { text: "¡Ay, que me pongo a pensar!", time: 108 },
  { text: "Que por fin 'tamos solos tú y yo, ya, a huevo", time: 112 },
  { text: "¡Ay, güey, qué felicidad!", time: 118 },

  { text: "Love.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6

  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
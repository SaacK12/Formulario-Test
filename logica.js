const palabras = [
  "marco", "matias", "eryn", "victoria", "susana", "luna", "sion", "tobias", "roman", "consejo", "tony",
  "bosque", "fuego", "lluvia", "gato", "perro", "cielo", "planta", "nube", "camino", "reloj",
  "sombrero", "ventana", "ciudad", "puerta", "montana", "playa", "sol", "estrella", "rio", "noche", "raton", "tigre", "elefante", "libro", "pagina", "teclado", "pantalla", "botella", "cuadro",
  "lapiz", "escuela", "jardin", "amigo", "piedra", "nieve", "avion", "tren", "barco", "musica", "zorro", "metal", "ajolote"
];
let palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)].toLowerCase();
console.log(palabraSecreta); //palabra aleatoria
let progreso = Array(palabraSecreta.length).fill("_,")
var vidas= 5
//Funcion
function logica() { 
let letraEncontrada = false; //flag
  console.log (letraEncontrada)
var letraIngresa= prompt("Ingrese una letra").toLowerCase();
  console.log(letraIngresa) 
//FOR
  for (let i = 0; i< palabraSecreta.length ; i++) {
    if (letraIngresa=== palabraSecreta[i])
      {progreso[i] = letraIngresa
        letraEncontrada= true; 
          document.getElementById("idProgreso").value= progreso
   }             
  }        
//resultados
if (letraEncontrada) {
  alert("¡Bien! La letra: "+ letraIngresa +" está en la palabra. "+" Progreso: "+progreso);
 } 
if (!letraEncontrada && vidas > 0) {
  vidas--; 
    alert("¡Error! Te quedan: "+vidas +" vidas. "+"Progreso: "+progreso)
      }

  if (!letraEncontrada && vidas < 1) {
      alert("Game Over! La palabra era: "+ palabraSecreta)
      reiniciarJuego ()
    }

    if (!progreso.includes("_,")) {
  alert("Sos el mas capo, adivinaste la palabra: "+ palabraSecreta); 
reiniciarJuego()
  }
}
//nueva partida
function reiniciarJuego() {
 palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)].toLowerCase();
  console.log(palabraSecreta); //palabra aleatoria
    progreso = Array(palabraSecreta.length).fill("_,")
      vidas= 5
        alert("Juego reiniciado. ¡Nueva palabra!");
}
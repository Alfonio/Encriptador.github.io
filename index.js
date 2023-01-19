/*
QUE TENGO QUE REEMPLAZAR?¿
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"
*/ 

// Encripta el texto ingresado
function encriptar() {
    // obtengo el elemento html que quiero reemplazar por medio de su id y le aplico LowerCase(minuscula)
    let texto = document.getElementById("text-entrada").value.toLowerCase();
    // las /letra de ejemplo/ son para indicar que letra va a cambiar
    var text_cifrado = texto.replace(/e/igm,"enter") 
    var text_cifrado = text_cifrado.replace(/o/igm,"ober") 
    var text_cifrado=  text_cifrado.replace(/i/igm,"imes") 
    var text_cifrado = text_cifrado.replace(/a/igm,"ai") 
    var text_cifrado = text_cifrado.replace(/u/igm,"ufat") 
    //igm, i afecta a minusculas o mayusculas, g a la linea u oracion y m a los parrafos

    document.getElementById("text-salida").innerHTML = text_cifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
};

// Lo mismo para desencriptar pero al revez 
function desencriptar() {
    let texto = document.getElementById("text-salida").value.toLowerCase();
    var text_cifrado = texto.replace(/enter/igm,"e") 
    var text_cifrado = text_cifrado.replace(/ober/igm,"o") 
    var text_cifrado = text_cifrado.replace(/imes/igm,"i") 
    var text_cifrado = text_cifrado.replace(/ai/igm,"a") 
    var text_cifrado = text_cifrado.replace(/ufat/igm,"u") 

    document.getElementById("text-salida").innerHTML = text_cifrado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
};
// Copia el texto encriptado
function copiar() {
     var contenido = document.querySelector("#text-salida")
    contenido.select();
    document.execCommand("copy");
    alert("Se copio el texto master🤙")
};


let sound_1 = new Audio();
sound_1.src = "./sonidos/boton-sonido.mp3"

let sound_2 = new Audio();
sound_2.src = "./sonidos/boton-sonido2.mp3"

// Cuando escribo que tenga sonidito facherito
 //  ./sonidos/tecla-sonido.mp3 

// Selecciona el elemento de input de entrada
var input = document.getElementById("text-entrada");
var sound_3 = new Audio("./sonidos/tecla-sonido.mp3");
var typing = false;
var timeoutId;


//  función para reproducir el sonido de tipeo
function playTypingSound() {
    sound_3.currentTime = 0;
    sound_3.play();
    clearTimeout(timeoutId);
    timeoutId = setTimeout(stopTypingSound, 1000);
}

// función para detener el sonido de tipeo
function stopTypingSound() {
    sound_3.pause();
}

// alerta si ingresa mayusculas
input.addEventListener("input", function() {
    if (input.value !== input.value.toLowerCase()) {
      alert("No se permiten mayúsculas!");
    }
  });

// reemplaza la letra mayuscula con una minuscula para que funcione
input.addEventListener("input", function() {
    if (input.value !== input.value.toLowerCase()) {
      input.value = input.value.toLowerCase();
    }
  });

//   Hace que primeramente elimine cualquier caracter especial ingresado y luego salga una alerta con el caracter especial que se ingreso diciendo que no se puede ingresar borrandolo
  const regex = /[^a-zA-Z0-9]/g;

  input.addEventListener("input", function() {
    let match = input.value.match(regex);
    if (match) {
      alert(`Caracteres inválidos: ${match.join(",")}`);
      input.value = input.value.toLowerCase().replace(regex,'');
    } else {
      input.value = input.value.toLowerCase();
    }
  });
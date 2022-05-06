var texto = document.querySelector("#textoEncriptar");
var datoscifrados = document.querySelector("#textoencriptado");
var botonencriptar = document.querySelector("#encriptar");
var copiar = document.querySelector("#copiarTexto");
var btndesencriptar = document.querySelector("#desencriptar");

ocultar();


function ocultar(){
    document.getElementById('copiarTexto').style.display = 'none';
    }

function mostrar(){
    document.getElementById('copiarTexto').style.display = 'block';
    }

botonencriptar.addEventListener("click", function(event){
    event.preventDefault();
    
    var datos = texto.value;
    if(datos.length != 0){
        var textoCifrado = datos.replace(/e/gi, "enter")
        .replace(/i/gi, "imes").
        replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        console.log(textoCifrado);
        datoscifrados.value = textoCifrado;
        texto.value = "";
        var imagen = document.querySelector("#imagenMuneco");
        imagen.classList.add("elementosacultos");
        var mensaje = document.querySelector("#mensajeEncontrado");
        mensaje.classList.add("elementosacultos");
        datoscifrados.classList.add("posiciontareincriptada");
        copiar.classList.add("copiarTexto");
        mostrar();
    }

});
btndesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    var datos = datoscifrados.value;
    if(datos.length != 0){
        var textoCifrado = datos.replace(/enter/gi, "e").
        replace(/imes/gi, "i").replace(/ai/gi, "a")
        .replace(/ober/gi, "o").replace(/ufat/gi, "u");
        datoscifrados.value = textoCifrado;
        texto.value = "";
    }

});

copiar.addEventListener("click", function(event){
    event.preventDefault();
    var content = datoscifrados;
    
    content.select();
    document.execCommand('copy');

})



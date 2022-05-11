
function selecion (elemento){
    var dato = document.querySelector(elemento);
    return dato;
}
 
var texto = selecion("#textoEncriptar");
var datoscifrados = selecion("#textoencriptado");
var botonencriptar = selecion("#encriptar");
var copiar = selecion("#btncopiar");
var btndesencriptar = selecion("#desencriptar");
var imagen = selecion("#imagenMuneco");
var imagen2 = selecion("#imagen2");
var parra = selecion("#imagenMuneco2");

//Funcionar para el boton encriptar
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
        imagen.setAttribute("id","ocultarimagen")
        parra.setAttribute("id","ocultarimagen")
        copiar.setAttribute("id","btncopiar2")
        imagen2.setAttribute("id","mostrarimagen")
    }

});

//funcion para el boton desencriptar
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

//funcion para el boton copiar
copiar.addEventListener("click", function(event){
    event.preventDefault();
    var content = datoscifrados;
    content.select();
    document.execCommand('copy');
    imagen.setAttribute("id","")
    parra.setAttribute("id","")
    copiar.setAttribute("id","btncopiar3")
    imagen2.setAttribute("id","")
    texto.value = datoscifrados.value;
    datoscifrados.value = "";


})



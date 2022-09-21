/*    challengeencriptador  */
function encriptar(){

    textoEncriptar = document.getElementById("texto").value;
    
}
    innerHTML = encriptar;

    function encriptar () {
        var texto = document.querySelector("#textarea").value;
        var textoCifrado = texto.replace (/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.querySelector("#textarea-resultado").value = textoCifrado;
        document.querySelector("#textarea").value;
        if (textoCifrado == texto || textoCifrado) {
            document.querySelector(".container_no_found").style.display = "none";
            document.querySelector(".textarea-resultado").style.display = "block";
            document.querySelector(".copiar").style.display = "block";
            if (window.innerWidth < 768) {
                document.querySelector(".footer").style.top = "950px";
            } else {
                document.querySelector(".footer").style.top = "auto";
            }
        } else {
            document.querySelector(".container_no_found").style.display = "block";
            document.querySelector(".textarea-resultado").style.display = "none";
            document.querySelector(".copiar").style.display = "none";
            if (window.innerWidth < 768) {
                document.querySelector(".footer").style.top = "800px";
            } else {
                document.querySelector(".footer").style.top = "auto";
            }
        }
    }
    var boton1 = document.querySelector("#encriptar"); boton1.onclick = encriptar;
    
    function desencriptar(){
        var texto = document.querySelector("#textarea").value;
        var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
        document.querySelector("#textarea-resultado").value = textoCifrado;
        document.querySelector("#textarea").value;
        if (textoCifrado == texto || textoCifrado) {
            document.querySelector(".container_no_found").style.display = "none";
            document.querySelector(".textarea-resultado").style.display = "block";
            document.querySelector(".copiar").style.display = "block";
            if (window.innerWidth < 768) {
                document.querySelector(".footer").style.top = "950px";
            } else {
                document.querySelector(".footer").style.top = "auto";
            }
        } else {
            document.querySelector(".container_no_found").style.display = "block";
            document.querySelector(".textarea-resultado").style.display = "none";
            document.querySelector(".copiar").style.display = "none";
            if (window.innerWidth < 768) {
                document.querySelector(".footer").style.top = "800px";
            } else {
                document.querySelector(".footer").style.top = "auto";
            }
        } 
    }
    var boton2 = document.querySelector("#desencriptar"); boton2.onclick = desencriptar;
        
    function copyToClipBoard() {
      var contentText = document.querySelector("#textarea-resultado");

      contentText.select();
      document.execCommand('copy');
      alert ("Copiado al portapapeles");
    }
    var boton3 = document.querySelector("#copiar"); boton3.onclick = copyToClipBoard;


/*const inputTexto = document.querySelector("#texto-a-encriptar").value;
const mensaje = document.querySelector("#texto-encriptado").value;


function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;  
    mensaje.style.backgroungImage="none"
}

function encriptar( stringEncriptada ){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for ( let i=0; i<matrizCodigo.length; i++ ){
        if ( stringEncriptada.includes (matrizCodigo[i][0]) ){
            stringEncriptada = stringEncriptada.replaceAll (matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    inputTexto.value= textoEncriptado
    
}

function desencriptar( stringDesencriptada ){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for ( let i=0; i<matrizCodigo.length; i++ ){
        if ( stringDesencriptada.includes (matrizCodigo[i][1]) ){
            stringDesencriptada = stringDesencriptada.replaceAll (matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value=""
    alert("texto copiado")
}*/
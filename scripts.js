const inputMensaje = document.querySelector("#texto-entrada");
const inputResultado = document.querySelector("#mensaje");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const btnBorrar = document.querySelector("#borrar");


function validarMinusculas(){
	var palabravalida =  /^[a-z]/;

	if( palabravalida.test(inputMensaje.value) ){
	
		return true;
	}else{
		alert('Palabra o texto no válido, sólo letras en minúsculas y sin acentos');
		return false;
	}
}
function encriptar (){
	if (validarMinusculas() == true){
		var mensaje = inputMensaje.value;
		var mensajeEncriptado = mensaje.replaceAll("e","enter").replaceAll("i","imes").replaceAll("o","ober").replaceAll("a","ai").replaceAll("u","ufat");
		inputResultado.value = mensajeEncriptado;
		inputMensaje.value ="";
		inputResultado.style.backgroundImage = "none";
	}

}

function desencriptar (){
	var mensajeEncriptado = inputMensaje.value;
	var mensaje = mensajeEncriptado.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ai","a").replaceAll("ufat","u");
	inputResultado.value = mensaje;
	limpiar();
}

function copiar() {
	var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}

function borrarTodo(){
	inputMensaje.value = "";
	inputResultado.value = "";
	inputResultado.style.backgroundImage = "url(img/Muñeco.png)";
}


btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
btnBorrar.onclick = borrarTodo;


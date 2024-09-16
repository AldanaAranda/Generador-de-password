let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let password = document.getElementById('contrasena');
let alerta = document.getElementById('mensaje')

let cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';


function generar(){
    let numeroIngresado = parseInt(cantidad.value);

    let contrasenia = '';

    for(let i = 0; i < numeroIngresado; i++){
        let caracterRandom = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)]
        contrasenia += caracterRandom;
    }

    password.value = contrasenia;

    validarContrasena(contrasenia);
}

function validarContrasena(contrasenia) {
    let tieneMayuscula = /[A-Z]/.test(contrasenia);
    let tieneMinuscula = /[a-z]/.test(contrasenia);
    let tieneNumero = /\d/.test(contrasenia);
    let tieneCaracterEspecial = /[!@#$%^&*()]/.test(contrasenia);

    if (contrasenia.length < 8 || !tieneMayuscula || !tieneMinuscula || !tieneNumero || !tieneCaracterEspecial) {
        alerta.innerHTML = "Tu contraseña es débil";
    }
    else {
        alerta.innerHTML = "Tu contraseña es fuerte";
    }

    validarContrasena(contrasenia);
}

function limpiarCampos() {
    cantidad.value = '';
    password.value = '';
    alerta.innerHTML = '';
}
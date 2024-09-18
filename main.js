let  cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseNa = document.getElementById('contrasena')
/*
const cadenaDeCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';


function generar (){

    let numeroDigitado = parseInt (cantidad.value);
    console.log(numeroDigitado);
    if (numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 8")
    }else{
        let password = "";
        for (let i = 0;  i < numeroDigitado ; i++){
            let caraterAletorio = cadenaDeCaracteres[Math.floor(Math.random() * cadenaDeCaracteres.length)];
            console.log(caraterAletorio);
            password+=caraterAletorio;
        }
        contraseNa.value = password;
    }
}
*/

const letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const caracteresEspeciales = '!@#$%^&*()';
const cadenaDeCaracteres = letrasMayusculas + letrasMinusculas + numeros + caracteresEspeciales;

function generar () {
    let numeroDigitado = parseInt(cantidad.value);
    console.log(numeroDigitado);

    if (numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
    } else {
        let password = "";

        // Aseguramos que haya al menos una mayúscula y un carácter especial
        password += letrasMayusculas[Math.floor(Math.random() * letrasMayusculas.length)];
        password += caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)];

        // Rellenamos el resto de la contraseña con caracteres aleatorios
        for (let i = 2; i < numeroDigitado; i++) {
            let caracterAleatorio = cadenaDeCaracteres[Math.floor(Math.random() * cadenaDeCaracteres.length)];
            console.log(caracterAleatorio);
            password += caracterAleatorio;
        }

        // Mezclamos los caracteres para que los primeros no siempre sean mayúsculas y especiales
        password = password.split('').sort(() => 0.5 - Math.random()).join('');

        contraseNa.value = password;
    }
}

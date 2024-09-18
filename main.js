let  cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contraseNa = document.getElementById('contrasena')

const cadenaDeCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';


function generar (){

    let numeroDigitado = parseInt (cantidad.value);
    console.log(numeroDigitado);
    if (numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que 8")
    }
    let password = "";
    for (let i = 0;  i < numeroDigitado ; i++){
        let caraterAletorio = cadenaDeCaracteres[Math.floor(Math.random() * cadenaDeCaracteres.length)];
        console.log(caraterAletorio);
        password+=caraterAletorio;
    }
    contraseNa.value = password;
}

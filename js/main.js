const nombre = prompt("Ingrese su nombre");

const apellido = prompt("Ingrese su apellido");

let edad = parseInt(prompt("Ingrese su edad"));

let telefono = parseInt(prompt("Ingrese su telefono"));

let categoria = prompt("Por ultimo ingrese su categoria ");

let añoDeNacimiento = 2026 - edad;

alert("Hola " + nombre + ". Gracias por registrarte en nuestra pagina de padel!!, tu apellido es " + apellido + ", tu telefono es " + telefono + ", tu año de nacimiento es " + añoDeNacimiento + " y tu categoria es " + categoria);

console.log(confirm("Esta conforme con los datos ingresados en su Ficha de Jugador de Padel?"));

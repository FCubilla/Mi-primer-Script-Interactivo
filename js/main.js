let nombre, apellido, edad, telefono, categoria, añoDeNacimiento;

let costoBaseInscripcion = 15000; // Precio base estándar del torneo

let costoFinal

function pedirDatos() {

      nombre = prompt("Ingrese su nombre");

      apellido = prompt("Ingrese su apellido");

      edad = parseInt(prompt("Ingrese su edad"));

      telefono = parseInt(prompt("Ingrese su telefono"));

      categoria = prompt("Por ultimo ingrese su categoria ");

      añoDeNacimiento = 2026 - edad;

alert("Hola " + nombre + ". Gracias por registrarte en nuestra pagina de padel!!, tu apellido es " + apellido + ", tu telefono es " + telefono + ", tu año de nacimiento es " + añoDeNacimiento + " y tu categoria es " + categoria);

let conforme = confirm("Esta conforme con los datos ingresados en su Ficha de Jugador de Padel?");

while (conforme === false) {
      alert("Por favor, vuelva a ingresar sus datos.");
      edad = parseInt(prompt("Ingrese su edad"));
      telefono = parseInt(prompt("Ingrese su telefono"));
      categoria = prompt("Por ultimo ingrese su categoria ");
      añoDeNacimiento = 2026 - edad;
      alert("Hola " + nombre + ". Gracias por actualizar tus datos en nuestra pagina de padel!!, tu apellido es " + apellido + ", tu telefono es " + telefono + ", tu año de nacimiento es " + añoDeNacimiento + " y tu categoria es " + categoria);
      conforme = confirm("ahora está conforme con los datos ingresados?");
}
alert("¡Perfecto! Tus datos han sido guardados en el sistema.");
}


function calcularInscripcion(edad, precioDelTorneo) {
    let costoInscripcion = precioDelTorneo;

// calculo si el jugador tiene derecho a descuento por ser menor de edad o veterano
if (edad < 18 || edad >= 40)
    costoInscripcion = costoInscripcion * 0.75; // 25% de descuento por edades especiales (Junior o Senior)
  return costoInscripcion;
}

const descuentosTurnos = (nombreDelJugador) => {
    alert("¡Hola " + nombreDelJugador + "! A continuación te mostramos los descuentos disponibles en alquiler de turnos según la hora del día.");

for (let hora = 10; hora <= 16; hora++) {
    // descuento que disminuye a medida que se acerca la hora pico
    let descuentoTurno = (17 - hora) * 5; 
   
      alert("Turno de las " + hora + ":00 hs ➔ ¡Tenés un " + descuentoTurno + "% de descuento en el alquiler de la cancha!");
}

}

pedirDatos();

costoFinal = calcularInscripcion(edad, costoBaseInscripcion);

if (edad < 18 || edad >= 40) {
    alert("¡Felicidades " + nombre + "! Por ser menor de edad o veterano, tenés un descuento del 25% en la inscripción al torneo. El costo final de tu inscripción es: $" + costoFinal);
} else {
    alert("El costo final de tu inscripción es: $" + costoFinal);
}

descuentosTurnos(nombre);

alert("¡Proceso finalizado! Gracias por registrarte en nuestra página de padel. ¡Te esperamos en el torneo!");

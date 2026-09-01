const nombre = prompt("Ingrese su nombre");

const apellido = prompt("Ingrese su apellido");

let edad = parseInt(prompt("Ingrese su edad"));

let telefono = parseInt(prompt("Ingrese su telefono"));

let categoria = prompt("Por ultimo ingrese su categoria ");

let añoDeNacimiento = 2026 - edad;

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

let costoInscripcion = 15000; // Precio base estándar del torneo

// calculo si el jugador tiene derecho a descuento por ser menor de edad o veterano
if (edad < 18 || edad >= 40) {
    costoInscripcion = costoInscripcion * 0.75; // 25% de descuento por edades especiales (Junior o Senior)
      alert("¡Felicidades! Por pertenecer a las categorías especiales (Menores o Veteranos), tenés un 25% de descuento en la inscripción. Valor final: $" + costoInscripcion);
} else {
      alert("tu categoria es " + categoria + ". Valor final: $" + costoInscripcion)
}

alert("Además, por registrarte en nuestra página de padel tenés un descuento en alquiler de turnos.")

for (let hora = 10; hora <= 16; hora++) {
    // descuento que disminuye a medida que se acerca la hora pico
    let descuentoTurno = (17 - hora) * 5; 
   
      alert("Turno de las " + hora + ":00 hs ➔ ¡Tenés un " + descuentoTurno + "% de descuento en el alquiler de la cancha!");
}

alert("¡Proceso finalizado! Tu inscripción al torneo está lista y tus descuentos de turnos fueron activados. ¡A entrenar!");
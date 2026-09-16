let nombre, apellido, edad, telefono, categoria, añoDeNacimiento;
let costoBaseInscripcion = 15000;
let costoFinal;

// Array con 5 jugadores
const listaJugadoresPadel = ["Rodrigo Alvarez", "Facundo Cubilla", "Alejo Aranda", "Felipe Palmieri", "Tomas Gonzalez"];

// 5. Reporte Iterativo: Función for...of
function mostrarListaJugadores() {
    let listaFinal = "JUGADORES INSCRIPTOS AL TORNEO:\n";
    
    for (const jugador of listaJugadoresPadel) {
        listaFinal += "Jugador: " + jugador + "\n";
    }
    console.log(listaFinal);
    alert(listaFinal);
}

function pedirDatos() {
    nombre = prompt("Ingrese su nombre");
    apellido = prompt("Ingrese su apellido");
    edad = parseInt(prompt("Ingrese su edad"));
    telefono = parseInt(prompt("Ingrese su telefono"));
    categoria = prompt("Por ultimo ingrese su categoria ");
    añoDeNacimiento = 2026 - edad;

    alert("Hola " + nombre + ". Gracias por registrarte en nuestro Torneo de Padel!!, tu apellido es " + apellido + ", tu telefono es " + telefono + ", tu año de nacimiento es " + añoDeNacimiento + " y tu categoria es " + categoria);

    let conforme = confirm("Esta conforme con los datos ingresados en su Ficha de Jugador?");

    while (conforme === false) {
          alert("Por favor, vuelva a ingresar sus datos.")
          edad = parseInt(prompt("Ingrese su edad"))
          telefono = parseInt(prompt("Ingrese su telefono"))
          categoria = prompt("Por ultimo ingrese su categoria ")
          añoDeNacimiento = 2026 - edad
          alert("Hola " + nombre + ". Gracias por actualizar tus datos en nuestro Torneo de Padel!!, tu apellido es " + apellido + ", tu telefono es " + telefono + ", tu año de nacimiento es " + añoDeNacimiento + " y tu categoria es " + categoria)
          conforme = confirm("ahora está conforme con los datos ingresados?")
    }
    alert("¡Perfecto! Tus datos han sido guardados en el sistema del Torneo de Padel.")
}

function calcularInscripcion(edad, precioDelTorneo) {
    let costoInscripcion = precioDelTorneo;
    if (edad < 18 || edad >= 40)
        costoInscripcion = costoInscripcion * 0.75; // 25% de descuento
    return costoInscripcion;
}

const descuentosTurnos = (nombreDelJugador) => {
    alert("¡Hola " + nombreDelJugador + "! A continuación te mostramos los descuentos disponibles en alquiler de turnos según la hora del día.");
    for (let hora = 10; hora <= 16; hora++) {
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

// 2. Manipulación Dinámica de Extremos

// pop: Eliminamos al último jugador original para liberar una vacante de forma lógica
let elementoEliminado = listaJugadoresPadel.pop();
    alert("Un jugador se dio de baja por lesion: " + elementoEliminado + " lo que libera una vacante en la lista.");

// uni nombre y apellido del usuario y dejo espacio para que quede bien
let nombreCompletoUsuario = nombre + " " + apellido;

// push: Agregamos al usuario en la vacante libre del final
listaJugadoresPadel.push(nombreCompletoUsuario);
    alert("Se te ha agregado en la vacante libre : " + nombreCompletoUsuario);

// unshift: Agregamos un jugador invitado al principio de la lista
listaJugadoresPadel.unshift("Fernando Belasteguín (Invitado)");
    alert("Tambien te informamos que se ha agregado un jugador invitado ESTRELLA a la lista del torneo: Fernando Belasteguín (Invitado)");

// Buscar jugador
let jugadorABuscar = prompt("Ingrese el NOMBRE y APELLIDO de un jugador para verificar si está inscripto:");

// includes: Verifica si existe el jugador buscado
if (listaJugadoresPadel.includes(jugadorABuscar)) {
    // indexOf: Informa en qué posición está
    let indiceEncontrado = listaJugadoresPadel.indexOf(jugadorABuscar);
    alert("¡Sí! " + jugadorABuscar + " está inscripto en el torneo. Se encuentra en la posición: " + indiceEncontrado);
} else {
    alert("El jugador " + jugadorABuscar + " no se encuentra registrado en el torneo.");
}

// Splice: Reemplazo de jugador
let indiceAReemplazar = 2;
let jugadorSuplente = "Carlos Tevez (Invitado por Sponsor)";

// Actualizamos la lista de jugadores reemplazando al jugador en el índice 2 con el suplente invitado por el sponsor.
listaJugadoresPadel.splice(indiceAReemplazar, 1, jugadorSuplente);

alert("¡Novedades del Torneo! Tuvimos una baja de último momento en la lista, y nuestro sponsor oficial ha invitado a un jugador. Podrás revisar la lista definitiva de juego al final");

mostrarListaJugadores();

alert("¡Proceso finalizado! Gracias por inscribirte al Torneo de Padel. ¡Te esperamos para disfrutar en la cancha y compartir con tus compañeros!");

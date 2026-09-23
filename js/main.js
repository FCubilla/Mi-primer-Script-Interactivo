function pedirDatos() {
    const nombre = prompt("Ingrese su nombre");
    const apellido = prompt("Ingrese su apellido");
    let edad = parseInt(prompt("Ingrese su edad"));
    let telefono = parseInt(prompt("Ingrese su telefono"));
    let categoria = prompt("Por ultimo ingrese su categoria ");
    let añoDeNacimiento = 2026 - edad;

    alert("Hola " + nombre + ". Gracias por registrarte en nuestra Pagina de Padel!!, tu apellido es " + apellido + ", tu telefono es " + telefono + ", tu año de nacimiento es " + añoDeNacimiento + " y tu categoria es " + categoria);

    let conforme = confirm("Esta conforme con los datos ingresados en su Ficha de Jugador?");

    while (conforme === false) {
          alert("Por favor, vuelva a ingresar sus datos.")
          edad = parseInt(prompt("Ingrese su edad"))
          telefono = parseInt(prompt("Ingrese su telefono"))
          categoria = prompt("Por ultimo ingrese su categoria ")
          añoDeNacimiento = 2026 - edad
          alert("Hola " + nombre + ". Gracias por actualizar tus datos en nuestra Pagina de Padel!!, tu apellido es " + apellido + ", tu telefono es " + telefono + ", tu año de nacimiento es " + añoDeNacimiento + " y tu categoria es " + categoria)
          conforme = confirm("ahora está conforme con los datos ingresados?")
    }
    alert("¡Perfecto! Tus datos han sido guardados en nuestra Pagina de Padel.")

    return { nombre:nombre,
         apellido:apellido,
        edad:edad,
        telefono:telefono,
        categoria:categoria,
        añoDeNacimiento:añoDeNacimiento
        };
}

const jugador = pedirDatos();
// Array con 5 jugadores
const listaJugadoresPadel = ["Rodrigo Alvarez", "Facundo Cubilla", "Alejo Aranda", "Felipe Palmieri", "Tomas Gonzalez"];
const costoBaseInscripcion = 15000;

function calcularInscripcion(edad, precioDelTorneo) {
    let costoInscripcion = precioDelTorneo;
    if (edad < 18 || edad >= 40)
        costoInscripcion = costoInscripcion * 0.75; // 25% de descuento
    return costoInscripcion;
}

const costoFinal = calcularInscripcion(jugador.edad, costoBaseInscripcion);

if (jugador.edad < 18 || jugador.edad >= 40) {
    alert("¡Felicidades " + jugador.nombre + "! Por ser menor de edad o veterano, tenés un descuento del 25% en la inscripción al torneo. El costo final de tu inscripción es: $" + costoFinal);
} else {
    alert("El costo final de tu inscripción seria de: $" + costoFinal);
}


const descuentosTurnos = (nombreDelJugador) => {
    alert("¡Hola " + nombreDelJugador + "! A continuación te mostramos los descuentos disponibles en alquiler de turnos según la hora del día.");
    for (let hora = 10; hora <= 16; hora++) {
        let descuentoTurno = (17 - hora) * 5; 
        alert("Turno de las " + hora + ":00 hs ➔ ¡Tenés un " + descuentoTurno + "% de descuento en el alquiler de la cancha!");
    }
}

descuentosTurnos(jugador.nombre);

const nombreCompleto = jugador.nombre + " " + jugador.apellido;
const quiereInscribirse = confirm("LLego el momento de la verdad, " + nombreCompleto + ". ¿Desea inscribirse al torneo ahora?");
if (quiereInscribirse) {
    listaJugadoresPadel.push(nombreCompleto);
    alert("¡Genial! " + nombreCompleto + " ha sido inscripto en el torneo.");
} else {
    alert("Has decidido no inscribirte en el torneo.");
}

const jugadorBaja = prompt("Ya estas inscripto en el torneo pero deseas darte de baja? Ingrese su NOMBRE y APELLIDO:");
if (!jugadorBaja) {
    alert("Perfecto, no hubo cambios en las inscripciones.");
} else {
    const indiceBaja = listaJugadoresPadel.indexOf(jugadorBaja);
    if (indiceBaja !== -1) {
        listaJugadoresPadel.splice(indiceBaja, 1);
        alert("El jugador " + jugadorBaja + " ha sido dado de baja del torneo.");
    } else {
        alert("El jugador " + jugadorBaja + " no se encuentra registrado en el torneo.");
    }
}

// Función for...of
function mostrarListaJugadores() {
    let listaFinal = "JUGADORES INSCRIPTOS AL TORNEO:\n";
    
    for (const jugador of listaJugadoresPadel) {
        listaFinal += "Jugador: " + jugador + "\n";
    }
    console.log(listaFinal);
    alert(listaFinal);
}


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

mostrarListaJugadores();

alert("¡Proceso finalizado! Gracias por inscribirte al Torneo de Padel. ¡Te esperamos para disfrutar en la cancha y compartir con tus compañeros!");

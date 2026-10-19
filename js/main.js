class Turno {
    constructor(cancha, dia, hora, precioBase) {
        this.cancha = cancha;
        this.dia = dia;
        this.hora = hora;
        this.precioBase = precioBase;
        this.reservadoPor = null;
    }

}

const canchas = ["Cancha 1", "Cancha 2", "Cancha 3", "Cancha 4"];

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
const horas = ["10:30", "12:00", "13:30", "15:00", "16:30"];

const precioPorHora = { "10:30": 2000, "12:00": 2500, "13:30": 3000, "15:00": 3500, "16:30": 4000 };
const descuentoPorHora = { "10:30": 35, "12:00": 25, "13:30": 20, "15:00": 10, "16:30": 5 };

const turnos = [];
for (const cancha of canchas) {
    for (const dia of dias) {
        for (const hora of horas) {
            turnos.push(new Turno(cancha, dia, hora, precioPorHora[hora]));
        }
    }
}


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



function mostrarTurnosDisponibles() {
    let listaTurnos = "TURNOS DISPONIBLES:\n";
    let hayDisponibles = false;
    for (const turno of turnos) {
        if (turno.reservadoPor === null) {
            listaTurnos += "Cancha: " + turno.cancha + ", Día: " + turno.dia + ", Hora: " + turno.hora + ", Precio: $" + turno.precioBase + "\n";
            hayDisponibles = true;
        }
    }
    if (hayDisponibles) {
        console.log(listaTurnos);
        alert(listaTurnos);
    } else {
        alert("No hay turnos disponibles.");
    }
}

function reservarTurno(jugadorActivo) {
        const diaDeseado = prompt("Ingrese el día deseado para reservar el turno:");
        const horaDeseada = prompt("Ingrese la hora deseada para reservar el turno:");

    if (diaDeseado === null || horaDeseada === null) {
        alert("Debe ingresar tanto el día como la hora deseada.");
    } else {
        const opciones = turnos.filter(turno => turno.dia.toLowerCase() === diaDeseado.toLowerCase() && turno.hora === horaDeseada && turno.reservadoPor === null);
    
        if (opciones.length === 0) {
            alert("No hay turnos disponibles para el día y hora seleccionados.");
        } else {
            const opcionesConPrecio = opciones.map((turno, indice) => {
                const descuento = descuentoPorHora[turno.hora];
                const precioFinal =
                    turno.precioBase * (1 - descuento / 100);
                return {
                    turno: turno,
                    numero: indice + 1,
                    descuento: descuento,
                    precioFinal: precioFinal
                };
            });
            let mensaje = "Elige una cancha:\n";
            opcionesConPrecio.forEach(opcion => {
                mensaje += opcion.numero + ". Cancha: " + opcion.turno.cancha + ", descuento: " + opcion.descuento + "%, precio final: $" + opcion.precioFinal + "\n";
            });
            const respuesta = prompt(mensaje);
            const numeroElegido = Number(respuesta);

            const turnoElegido = opcionesConPrecio.find(opcion => opcion.numero === numeroElegido);

            if (turnoElegido) {
                turnoElegido.turno.reservadoPor = jugadorActivo;

                alert("Turno reservado con exito por " + jugadorActivo.nombre + " " + jugadorActivo.apellido + " . El costo del turno es: $" + turnoElegido.precioFinal);
            } else {
                alert("La opción seleccionada no es válida.");
            }
        }
    }
}

const descuentosTurnos = (nombreDelJugador) => {
    alert("¡Hola " + nombreDelJugador + "! A continuación te mostramos los descuentos disponibles en alquiler de turnos según la hora del día.");
    
    horas.forEach(hora => {
        const descuentoTurno = descuentoPorHora[hora];
        alert("Turno de las " + hora + " hs ➔ ¡Tenés un " + descuentoTurno + "% de descuento en el alquiler de la cancha!");
    });
}


function inscribirseAlTorneo() {
    const nombreCompleto = jugador.nombre + " " + jugador.apellido;
    if (listaJugadoresPadel.includes(nombreCompleto)) {
    alert("Ya estás inscripto en el torneo, " + nombreCompleto + ".");
    } else {
        const costoFinal = calcularInscripcion(jugador.edad, costoBaseInscripcion);
        const quiereInscribirse = confirm("LLego el momento de la verdad, " + nombreCompleto + ". ¿Desea inscribirse al torneo ahora? El costo final es: $" + costoFinal);
        if (quiereInscribirse) {
        listaJugadoresPadel.push(nombreCompleto);
        alert("¡Genial! " + nombreCompleto + " ha sido inscripto en el torneo.");
        }
    }
}

function darseDeBajaTorneo() {
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
function buscarJugador() {
    const jugadorABuscar = prompt("Ingrese el NOMBRE y APELLIDO de un jugador para verificar si está inscripto:"); 
    if (!jugadorABuscar) {
        alert("No se ingresó ningún jugador.");
        return;
    }

// includes: Verifica si existe el jugador buscado
        if (listaJugadoresPadel.includes(jugadorABuscar)) {
    // indexOf: Informa en qué posición está
    let indiceEncontrado = listaJugadoresPadel.indexOf(jugadorABuscar);
    alert("¡Sí! " + jugadorABuscar + " está inscripto en el torneo. Se encuentra en la posición: " + indiceEncontrado);
} else {
    alert("El jugador " + jugadorABuscar + " no se encuentra registrado en el torneo.");
    }
}


let opcion = "";
let continuar = true;

while (opcion !== "8" && continuar) {
    opcion = prompt(
        "**MENU DE OPCIONES DE NUESTRA PAGINA DE PADEL**\n" +
        "1- Ver turnos disponibles\n" +
        "2- Reservar un turno\n" +
        "3- Inscribirse al torneo\n" +
        "4- Darse de baja del torneo\n" +
        "5- Mostrar lista de jugadores\n" +
        "6- Buscar jugador\n" +
        "7- Ver descuentos por turno\n" +
        "8- Salir\n" +
        "Ingrese el número de la opción deseada:"
    );

if (opcion === null) opcion = "8";

switch (opcion) {
    case "1":
        mostrarTurnosDisponibles();
        break;

        case "2":
        reservarTurno(jugador);
        break;

        case "3":
        inscribirseAlTorneo(jugador);
        break;
    
    case "4":
        darseDeBajaTorneo();
        break;

    case "5":
        mostrarListaJugadores();
        break;

    case "6":
        buscarJugador();
        break;

    case "7":
        descuentosTurnos(jugador.nombre);
        break;

    case "8":
        alert("¡Gracias por visitar nuestra página de Padel!");
        continuar = false;
        break;

    default:
        alert("Opción no válida. Por favor, ingrese un número del 1 al 8.");
        break;
}

}
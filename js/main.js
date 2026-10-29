
class Turno {
    constructor(id, cancha, dia, hora, precioBase) {
        this.id = id;
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

const turnos = [];
let contadorId = 1;

for (const cancha of canchas) {
    for (const dia of dias) {
        for (const hora of horas) {
            turnos.push(new Turno(contadorId, cancha, dia, hora, precioPorHora[hora]));
            contadorId++;
        }
    }
}

let jugadorActual = "";

//html elementos
const formJugador = document.getElementById("form-jugador");
const inputNombre = document.getElementById("input-nombre");
const jugadorActivo = document.getElementById("jugador-activo");
const mensaje = document.getElementById("mensaje");
const contenedorTurnos = document.getElementById("turnos-disponibles");

//registrando jugador

formJugador.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombreIngresado = inputNombre.value.trim();
    if (nombreIngresado !== "") {
        jugadorActual = nombreIngresado;
        jugadorActivo.textContent = "Jugador activo: " + jugadorActual;
        mensaje.textContent = "¡Bienvenido/a " + jugadorActual + "! Ya podés reservar tus turnos.";
        inputNombre.value = "";
        mostrarTurnosEnHTML();
    }
});

//funciones de turnos, reservar y cancelar

function mostrarTurnosEnHTML() {
    let tarjetas = "";

    canchas.forEach((cancha) => {
        let listaDeTurnos = "";

        turnos.forEach((turno) => {
            if (turno.cancha === cancha) {

                let estado = "";
                if (turno.reservadoPor === null) {
                    estado = "Disponible";
                } else {
                    estado = "Reservado por " + turno.reservadoPor;
                }

                let boton = "";
                if (turno.reservadoPor === null) {
                    boton = `<button class="boton-reserva" id="btn-reservar-${turno.id}">Reservar</button>`;
                } else if (
                    jugadorActual !== "" &&
                    turno.reservadoPor.toLowerCase() === jugadorActual.toLowerCase()
                ) {
                    boton = `<button class="boton-cancelar" id="btn-cancelar-${turno.id}">Cancelar</button>`;
                }

                listaDeTurnos += `<li>${turno.cancha}, Día: ${turno.dia}, Hora: ${turno.hora}, Precio: $${turno.precioBase} - Estado: ${estado} ${boton}</li>`;
            }
        });

        tarjetas += `<div class="turno"><h2>${cancha}</h2><ul>${listaDeTurnos}</ul></div>`;
    });

    contenedorTurnos.innerHTML = tarjetas;

    
    turnos.forEach((turno) => {
        const btnReservar = document.getElementById(`btn-reservar-${turno.id}`);
        if (btnReservar) {
            btnReservar.addEventListener("click", () => {
                if (jugadorActual === "") {
                    mensaje.textContent = "Por favor ingresá tu nombre arriba para poder reservar.";
                } else {
                    turno.reservadoPor = jugadorActual;
                    mensaje.textContent = `${jugadorActual} reservaste ${turno.cancha}, el ${turno.dia} a las ${turno.hora}.`;
                    mostrarTurnosEnHTML();
                }
            });
        }

        const btnCancelar = document.getElementById(`btn-cancelar-${turno.id}`);
        if (btnCancelar) {
            btnCancelar.addEventListener("click", () => {
                turno.reservadoPor = null;
                mensaje.textContent = `Cancelaste la reserva de ${turno.cancha}, el ${turno.dia} a las ${turno.hora}.`;
                mostrarTurnosEnHTML();
            });
        }
    });
}

mostrarTurnosEnHTML();

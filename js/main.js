
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

const reservasGuardadas = localStorage.getItem("reservas");
const turnos = reservasGuardadas ? JSON.parse(reservasGuardadas) : [] ;
    if(reservasGuardadas === null) {
let contadorId = 1;

const combinaciones = [];
canchas.forEach((cancha) => {
    dias.forEach((dia) => {
        combinaciones.push({ cancha: cancha, dia: dia });
    });
});

combinaciones.forEach((combinacion) => {
    horas.forEach((hora) => {
        turnos.push(new Turno(contadorId, combinacion.cancha, combinacion.dia, hora, precioPorHora[hora]));
        contadorId++;
    });
});
    }


let jugadorActual = "";

//html elementos
const formJugador = document.getElementById("form-jugador");
const inputNombre = document.getElementById("input-nombre");
const jugadorActivo = document.getElementById("jugador-activo");
const diaElegido = document.getElementById("dia-elegido");
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
    let grilla = 
                `<div class="grilla-cancha" style="grid-column: 1; grid-row: 1;">Horario</div>`

                canchas.forEach((cancha, indice) => {
                    grilla += `<div class="grilla-cancha" style="grid-column: ${indice + 2}; grid-row: 1;">${cancha}</div>`;
                });

                horas.forEach((hora, indice) => {
                    grilla += `<div class="grilla-hora" style="grid-column: 1; grid-row: ${indice + 2};">${hora}</div>`;
                });

                turnos.forEach((turno) => {
                    const { cancha, dia, hora, precioBase, reservadoPor, id } = turno;
                    if (dia === diaElegido.value) {
                        const columna = canchas.indexOf(cancha) + 2;
                        const fila = horas.indexOf(hora) + 2;
                        
                        if (columna >= 2 && fila >= 2) {
                            const posicion = `grid-column: ${columna}; grid-row: ${fila};`

                            if (reservadoPor === null) {
                                grilla += `<button class="boton-reserva" id="btn-reservar-${id}" style="${posicion}">Disponible - $${precioBase}</button>`
                            } else if (jugadorActual !== "" && reservadoPor.toLowerCase() === jugadorActual.toLowerCase()) {
                                grilla += `<button class="boton-cancelar" id="btn-cancelar-${id}" style="${posicion}">Cancelar</button>`;
                            } else {
                                grilla += `<div class="boton-reservado" id="btn-reservado-${id}" style="${posicion}">Reservado</div>`;
                            }
                        }
                    }
                });
                contenedorTurnos.innerHTML = grilla;
            

            turnos.forEach((turno) => {
                const { id, cancha, dia, hora } = turno;
                const botonReservar = document.getElementById(`btn-reservar-${id}`)
                if (botonReservar != null) {
                    botonReservar.addEventListener("click", () => {
                        if (jugadorActual === "") {
                            mensaje.textContent = "Por favor ingresá tu nombre arriba para poder reservar.";
                        } else {
                            turno.reservadoPor = jugadorActual
                            localStorage.setItem("reservas", JSON.stringify(turnos));
                            mensaje.textContent = `${jugadorActual} reservaste ${cancha}, el ${dia} a las ${hora}.`;
                            mostrarTurnosEnHTML();
                        }
                    })
                }
            const botonCancelar = document.getElementById(`btn-cancelar-${id}`);
            if (botonCancelar != null) {
                botonCancelar.addEventListener("click", () => {
                    turno.reservadoPor = null;
                    localStorage.setItem("reservas", JSON.stringify(turnos));
                    mensaje.textContent = `${jugadorActual} cancelaste ${cancha}, el ${dia} a las ${hora}.`;
                    mostrarTurnosEnHTML();
                });
            }
        });
            }

        diaElegido.addEventListener("change", mostrarTurnosEnHTML)
        mostrarTurnosEnHTML()
            


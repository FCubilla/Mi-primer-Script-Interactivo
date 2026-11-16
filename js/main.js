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
const horas = ["10:30", "12:00", "13:30", "15:00", "16:30"];

const reservasGuardadas = localStorage.getItem("reservas");
const turnos = reservasGuardadas
  ? JSON.parse(reservasGuardadas)
  : [
      // Cancha 1 - Lunes
      new Turno(1, "Cancha 1", "Lunes", "10:30", 2000),
      new Turno(2, "Cancha 1", "Lunes", "12:00", 2500),
      new Turno(3, "Cancha 1", "Lunes", "13:30", 3000),
      new Turno(4, "Cancha 1", "Lunes", "15:00", 3500),
      new Turno(5, "Cancha 1", "Lunes", "16:30", 4000),

      // Cancha 1 - Martes
      new Turno(6, "Cancha 1", "Martes", "10:30", 2000),
      new Turno(7, "Cancha 1", "Martes", "12:00", 2500),
      new Turno(8, "Cancha 1", "Martes", "13:30", 3000),
      new Turno(9, "Cancha 1", "Martes", "15:00", 3500),
      new Turno(10, "Cancha 1", "Martes", "16:30", 4000),

      // Cancha 1 - Miércoles
      new Turno(11, "Cancha 1", "Miércoles", "10:30", 2000),
      new Turno(12, "Cancha 1", "Miércoles", "12:00", 2500),
      new Turno(13, "Cancha 1", "Miércoles", "13:30", 3000),
      new Turno(14, "Cancha 1", "Miércoles", "15:00", 3500),
      new Turno(15, "Cancha 1", "Miércoles", "16:30", 4000),

      // Cancha 1 - Jueves
      new Turno(16, "Cancha 1", "Jueves", "10:30", 2000),
      new Turno(17, "Cancha 1", "Jueves", "12:00", 2500),
      new Turno(18, "Cancha 1", "Jueves", "13:30", 3000),
      new Turno(19, "Cancha 1", "Jueves", "15:00", 3500),
      new Turno(20, "Cancha 1", "Jueves", "16:30", 4000),

      // Cancha 1 - Viernes
      new Turno(21, "Cancha 1", "Viernes", "10:30", 2000),
      new Turno(22, "Cancha 1", "Viernes", "12:00", 2500),
      new Turno(23, "Cancha 1", "Viernes", "13:30", 3000),
      new Turno(24, "Cancha 1", "Viernes", "15:00", 3500),
      new Turno(25, "Cancha 1", "Viernes", "16:30", 4000),

      // Cancha 2 - Lunes
      new Turno(26, "Cancha 2", "Lunes", "10:30", 2000),
      new Turno(27, "Cancha 2", "Lunes", "12:00", 2500),
      new Turno(28, "Cancha 2", "Lunes", "13:30", 3000),
      new Turno(29, "Cancha 2", "Lunes", "15:00", 3500),
      new Turno(30, "Cancha 2", "Lunes", "16:30", 4000),

      // Cancha 2 - Martes
      new Turno(31, "Cancha 2", "Martes", "10:30", 2000),
      new Turno(32, "Cancha 2", "Martes", "12:00", 2500),
      new Turno(33, "Cancha 2", "Martes", "13:30", 3000),
      new Turno(34, "Cancha 2", "Martes", "15:00", 3500),
      new Turno(35, "Cancha 2", "Martes", "16:30", 4000),

      // Cancha 2 - Miércoles
      new Turno(36, "Cancha 2", "Miércoles", "10:30", 2000),
      new Turno(37, "Cancha 2", "Miércoles", "12:00", 2500),
      new Turno(38, "Cancha 2", "Miércoles", "13:30", 3000),
      new Turno(39, "Cancha 2", "Miércoles", "15:00", 3500),
      new Turno(40, "Cancha 2", "Miércoles", "16:30", 4000),

      // Cancha 2 - Jueves
      new Turno(41, "Cancha 2", "Jueves", "10:30", 2000),
      new Turno(42, "Cancha 2", "Jueves", "12:00", 2500),
      new Turno(43, "Cancha 2", "Jueves", "13:30", 3000),
      new Turno(44, "Cancha 2", "Jueves", "15:00", 3500),
      new Turno(45, "Cancha 2", "Jueves", "16:30", 4000),

      // Cancha 2 - Viernes
      new Turno(46, "Cancha 2", "Viernes", "10:30", 2000),
      new Turno(47, "Cancha 2", "Viernes", "12:00", 2500),
      new Turno(48, "Cancha 2", "Viernes", "13:30", 3000),
      new Turno(49, "Cancha 2", "Viernes", "15:00", 3500),
      new Turno(50, "Cancha 2", "Viernes", "16:30", 4000),

      // Cancha 3 - Lunes
      new Turno(51, "Cancha 3", "Lunes", "10:30", 2000),
      new Turno(52, "Cancha 3", "Lunes", "12:00", 2500),
      new Turno(53, "Cancha 3", "Lunes", "13:30", 3000),
      new Turno(54, "Cancha 3", "Lunes", "15:00", 3500),
      new Turno(55, "Cancha 3", "Lunes", "16:30", 4000),

      // Cancha 3 - Martes
      new Turno(56, "Cancha 3", "Martes", "10:30", 2000),
      new Turno(57, "Cancha 3", "Martes", "12:00", 2500),
      new Turno(58, "Cancha 3", "Martes", "13:30", 3000),
      new Turno(59, "Cancha 3", "Martes", "15:00", 3500),
      new Turno(60, "Cancha 3", "Martes", "16:30", 4000),

      // Cancha 3 - Miércoles
      new Turno(61, "Cancha 3", "Miércoles", "10:30", 2000),
      new Turno(62, "Cancha 3", "Miércoles", "12:00", 2500),
      new Turno(63, "Cancha 3", "Miércoles", "13:30", 3000),
      new Turno(64, "Cancha 3", "Miércoles", "15:00", 3500),
      new Turno(65, "Cancha 3", "Miércoles", "16:30", 4000),

      // Cancha 3 - Jueves
      new Turno(66, "Cancha 3", "Jueves", "10:30", 2000),
      new Turno(67, "Cancha 3", "Jueves", "12:00", 2500),
      new Turno(68, "Cancha 3", "Jueves", "13:30", 3000),
      new Turno(69, "Cancha 3", "Jueves", "15:00", 3500),
      new Turno(70, "Cancha 3", "Jueves", "16:30", 4000),

      // Cancha 3 - Viernes
      new Turno(71, "Cancha 3", "Viernes", "10:30", 2000),
      new Turno(72, "Cancha 3", "Viernes", "12:00", 2500),
      new Turno(73, "Cancha 3", "Viernes", "13:30", 3000),
      new Turno(74, "Cancha 3", "Viernes", "15:00", 3500),
      new Turno(75, "Cancha 3", "Viernes", "16:30", 4000),

      // Cancha 4 - Lunes
      new Turno(76, "Cancha 4", "Lunes", "10:30", 2000),
      new Turno(77, "Cancha 4", "Lunes", "12:00", 2500),
      new Turno(78, "Cancha 4", "Lunes", "13:30", 3000),
      new Turno(79, "Cancha 4", "Lunes", "15:00", 3500),
      new Turno(80, "Cancha 4", "Lunes", "16:30", 4000),

      // Cancha 4 - Martes
      new Turno(81, "Cancha 4", "Martes", "10:30", 2000),
      new Turno(82, "Cancha 4", "Martes", "12:00", 2500),
      new Turno(83, "Cancha 4", "Martes", "13:30", 3000),
      new Turno(84, "Cancha 4", "Martes", "15:00", 3500),
      new Turno(85, "Cancha 4", "Martes", "16:30", 4000),

      // Cancha 4 - Miércoles
      new Turno(86, "Cancha 4", "Miércoles", "10:30", 2000),
      new Turno(87, "Cancha 4", "Miércoles", "12:00", 2500),
      new Turno(88, "Cancha 4", "Miércoles", "13:30", 3000),
      new Turno(89, "Cancha 4", "Miércoles", "15:00", 3500),
      new Turno(90, "Cancha 4", "Miércoles", "16:30", 4000),

      // Cancha 4 - Jueves
      new Turno(91, "Cancha 4", "Jueves", "10:30", 2000),
      new Turno(92, "Cancha 4", "Jueves", "12:00", 2500),
      new Turno(93, "Cancha 4", "Jueves", "13:30", 3000),
      new Turno(94, "Cancha 4", "Jueves", "15:00", 3500),
      new Turno(95, "Cancha 4", "Jueves", "16:30", 4000),

      // Cancha 4 - Viernes
      new Turno(96, "Cancha 4", "Viernes", "10:30", 2000),
      new Turno(97, "Cancha 4", "Viernes", "12:00", 2500),
      new Turno(98, "Cancha 4", "Viernes", "13:30", 3000),
      new Turno(99, "Cancha 4", "Viernes", "15:00", 3500),
      new Turno(100, "Cancha 4", "Viernes", "16:30", 4000),
    ];

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
    mensaje.textContent =
      "¡Bienvenido/a " + jugadorActual + "! Ya podés reservar tus turnos.";
    inputNombre.value = "";
    mostrarTurnosEnHTML();
  }
});

//funciones de turnos, reservar y cancelar
function guardarReserva(turno, nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                turno.reservadoPor = nombre;
                localStorage.setItem("reservas", JSON.stringify(turnos));
                resolve();
            } catch {
                turno.reservadoPor = null;
                reject();
            }
        }, 2000);
    });
}

function mostrarTurnosEnHTML() {
  let grilla = `<div class="grilla-cancha" style="grid-column: 1; grid-row: 1;">Horario</div>`;

  canchas.forEach((cancha, indice) => {
    grilla =
      grilla +
      `<div class="grilla-cancha" style="grid-column: ${indice + 2}; grid-row: 1;">${cancha}</div>`;
  });

  horas.forEach((hora, indice) => {
    grilla =
      grilla +
      `<div class="grilla-hora" style="grid-column: 1; grid-row: ${indice + 2};">${hora}</div>`;
  });

  const turnosDelDia = turnos.filter((turno) => turno.dia === diaElegido.value);
  turnosDelDia.forEach((turno) => {
    const { cancha, hora, precioBase, reservadoPor, id } = turno;
    const columna = canchas.indexOf(cancha) + 2;
    const fila = horas.indexOf(hora) + 2;

    if (columna >= 2 && fila >= 2) {
      const posicion = `grid-column: ${columna}; grid-row: ${fila};`;

      if (reservadoPor === null) {
        grilla =
          grilla +
          `<button class="boton-reserva" id="btn-reservar-${id}" style="${posicion}">Disponible - $${precioBase}</button>`;
      } else if (
        jugadorActual !== "" &&
        reservadoPor.toLowerCase() === jugadorActual.toLowerCase()
      ) {
        grilla =
          grilla +
          `<button class="boton-cancelar" id="btn-cancelar-${id}" style="${posicion}">Cancelar</button>`;
      } else {
        grilla =
          grilla +
          `<div class="boton-reservado" id="btn-reservado-${id}" style="${posicion}">Reservado</div>`;
      }
    }
  });
  contenedorTurnos.innerHTML = grilla;

  turnos.forEach((turno) => {
    const { id, cancha, dia, hora } = turno;
    const botonReservar = document.getElementById(`btn-reservar-${id}`);
    if (botonReservar != null) {
      botonReservar.addEventListener("click", async () => {
        if (jugadorActual === "") {
          mensaje.textContent =
            "Por favor ingresá tu nombre arriba para poder reservar.";
        } else {
            const nombreReserva = jugadorActual;
            mensaje.textContent = "Procesando reserva, espere un momento...";
          try {
            await guardarReserva(turno, nombreReserva);
            mensaje.textContent = `${jugadorActual} reservaste ${cancha}, el ${dia} a las ${hora}.`;
          } catch {
            mensaje.textContent = `Error al reservar ${cancha}, el ${dia} a las ${hora}.`;
          } finally {
            mostrarTurnosEnHTML();
          }
        }
      });
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

diaElegido.addEventListener("change", mostrarTurnosEnHTML);
mostrarTurnosEnHTML();

setTimeout(() => {
  if(mensaje.textContent === "") {
    mensaje.textContent = "Bienvenido/a reserva tu turno y disfruta de la cancha.";
  }
}, 3000);
const canchas = ["Cancha 1", "Cancha 2", "Cancha 3", "Cancha 4"];
const horas = ["10:30", "12:00", "13:30", "15:00", "16:30"];

let turnos = [];
let jugadorActual = ""

//html elementos
const formJugador = document.getElementById("form-jugador");
const inputNombre = document.getElementById("input-nombre");
const jugadorActivo = document.getElementById("jugador-activo");
const diaElegido = document.getElementById("dia-elegido");
const mensaje = document.getElementById("mensaje");
const contenedorTurnos = document.getElementById("turnos-disponibles");
const url = "/db/data.json";

async function cargarTurnos() {
  try {
    const respuesta = await fetch(url);
    const data = await respuesta.json();
    const reservasGuardadas = localStorage.getItem("reservas");
    if (reservasGuardadas) {
      turnos = JSON.parse(reservasGuardadas);
    } else {
      turnos = data;
    }
    mostrarTurnosEnHTML();
  } catch {
    mensaje.textContent = "No se pudieron cargar los turnos.";
  } finally {
    if (mensaje.textContent === "Cargando turnos...") {
      mensaje.textContent = ""
    }
  }
}

cargarTurnos();

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
  let grilla = `<div class="grilla-cancha columna-1 fila-1">Horario</div>`;

  canchas.forEach((cancha, indice) => {
    grilla =
      grilla +
      `<div class="grilla-cancha columna-${indice + 2} fila-1">${cancha}</div>`;
  });

  horas.forEach((hora, indice) => {
    grilla =
      grilla +
      `<div class="grilla-hora columna-1 fila-${indice + 2}">${hora}</div>`;
  });

  const turnosDelDia = turnos.filter((turno) => turno.dia === diaElegido.value);
  turnosDelDia.forEach((turno) => {
    const { cancha, hora, precioBase, reservadoPor, id } = turno;
    const columna = canchas.indexOf(cancha) + 2;
    const fila = horas.indexOf(hora) + 2;

    if (columna >= 2 && fila >= 2) {
      const posicion = `columna-${columna} fila-${fila}`;

      if (reservadoPor === null) {
        grilla =
          grilla +
          `<button class="boton-reserva ${posicion}" id="btn-reservar-${id}">Disponible - $${precioBase}</button>`;
      } else if (
        jugadorActual !== "" &&
        reservadoPor.toLowerCase() === jugadorActual.toLowerCase()
      ) {
        grilla =
          grilla +
          `<button class="boton-cancelar ${posicion}" id="btn-cancelar-${id}">Cancelar</button>`;
      } else {
        grilla =
          grilla +
          `<div class="boton-reservado ${posicion}" id="btn-reservado-${id}">Reservado</div>`;
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
            Swal.fire({
            title: "Procesando reserva...",
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading()
          });
          try {
            await guardarReserva(turno, nombreReserva);
            Swal.fire({
            icon: "success",
            title: "¡Reserva confirmada!",
            text: `${cancha}, el ${dia} a las ${hora}`,
            timer: 2500,
            showConfirmButton: false
          });
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
        Swal.fire({
          title: "¿Cancelar la reserva?",
          text: `${cancha}, el ${dia} a las ${hora}`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, cancelar",
          cancelButtonText: "No, volver"
        }).then((resultado) => {
          if (resultado.isConfirmed) {
            turno.reservadoPor = null;
            localStorage.setItem("reservas", JSON.stringify(turnos));
            mensaje.textContent = `${jugadorActual} cancelaste ${cancha}, el ${dia} a las ${hora}.`;
            mostrarTurnosEnHTML();

            Toastify({
              text: "Reserva cancelada.",
              duration: 3000,
              gravity: "bottom",
              position: "center"
            }).showToast();
          }
        });
      });

    }
  });
}

diaElegido.addEventListener("change", mostrarTurnosEnHTML);

setTimeout(() => {
  if(mensaje.textContent === "") {
  Toastify({
  text: "¡Bienvenido/a! Reservá tu turno y disfrutá de la cancha.",
  duration: 3500,
  gravity: "bottom",
  position: "center",
  style: {
    background: "#2e687d"
  }
}).showToast();
  }
}, 3000);
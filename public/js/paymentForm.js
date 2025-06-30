//seleccionar el input del email y agregar un listener el evento onchange
// Seleccionar el input del email
const emailInput = document.getElementById("email");

// Verificar que el input exista antes de agregar el listener
if (emailInput) {
  emailInput.addEventListener("change", function () {
    console.log("El email cambió a:", emailInput.value);
  });
}

// Seleccionar el input del email KEYUP
//const emailInput = document.getElementById("email");

// Verificar que el input exista antes de agregar el listener
//if (emailInput) {
// emailInput.addEventListener("keyup", function () {
// Mostrar el valor actual del email en la consola
//   console.log("Email ingresado:", emailInput.value);
// });
//}

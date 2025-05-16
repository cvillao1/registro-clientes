document.addEventListener('DOMContentLoaded', function () {
  const formulario = document.getElementById('formularioClientes');
  const mensaje = document.getElementById('mensaje'); // Contenedor del mensaje

  formulario.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que se recargue la página

    // Llama a la función de validación
    if (validarFormulario()) {
      mostrarMensaje("¡Cliente registrado exitosamente!", "exito");
      formulario.reset(); // Limpia el formulario si se desea
    }
  });

  function validarFormulario() {
    // Obtener valores
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const cedula = document.getElementById('cedula').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const fecha = document.getElementById('fecha').value.trim();
    const ocupacion = document.getElementById('ocupacion').value.trim();
    const genero = document.getElementById('genero').value;

    // Validaciones
    if (!nombre || !apellido || !cedula || !correo || !telefono || !direccion || !fecha || !ocupacion || !genero) {
      mostrarMensaje("Por favor, complete todos los campos.", "error");
      return false;
    }

    if (!/^\d{10}$/.test(cedula)) {
      mostrarMensaje("La cédula debe tener 10 dígitos numéricos.", "error");
      return false;
    }

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
      mostrarMensaje("Ingrese un correo electrónico válido.", "error");
      return false;
    }

    if (!/^\d{10}$/.test(telefono)) {
      mostrarMensaje("El teléfono debe tener 10 dígitos numéricos.", "error");
      return false;
    }

    return true;
  }

  // Muestra el mensaje en el contenedor con clase personalizada
  function mostrarMensaje(texto, tipo) {
    mensaje.textContent = texto;
    mensaje.className = "mensaje " + tipo; // Cambia la clase según el tipo (exito o error)
  }
});

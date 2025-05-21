<script>
  // Función genérica para validar formularios
  function validarFormulario(formularioId, tipo) {
    const form = document.getElementById(formularioId);
    const inputs = form.querySelectorAll("input[required], select[required], textarea[required]");
    let valid = true;
    let mensaje = "";

    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        mensaje += `- El campo "${input.previousElementSibling.textContent}" es obligatorio.\n`;
      }
    });

    const docInput = form.querySelector('input[type="file"]');
    if (!docInput.files.length) {
      valid = false;
      mensaje += "- Debes subir un documento de identidad (Cédula o Pasaporte).\n";
    }

    const faceIDInput = form.querySelector('input[name="face_id"]');
    if (!faceIDInput || !faceIDInput.files.length) {
      valid = false;
      mensaje += "- Debes subir una foto tipo Face ID.\n";
    }

    if (!valid) {
      alert(`Por favor completa todos los campos requeridos para el ${tipo}:\n\n${mensaje}`);
    } else {
      alert(`${tipo} registrado exitosamente. Gracias por usar nuestra plataforma.`);
      console.log(`${tipo} - Datos del formulario listos para enviar:`);
      console.log(new FormData(form)); // simulación de envío
      form.reset();
    }
  }

  // Empleado
  document.getElementById("empleadoForm").addEventListener("submit", function (e) {
    e.preventDefault();
    validarFormulario("empleadoForm", "Empleado");
  });

  // Empleador
  document.getElementById("empleadorForm").addEventListener("submit", function (e) {
    e.preventDefault();
    validarFormulario("empleadorForm", "Empleador");
  });
</script>

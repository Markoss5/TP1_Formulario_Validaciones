// Función para validar el nombre
function verificarNombre() {
    let nombre = document.getElementById("nombre").value.trim();
    let error = document.getElementById("error-nombre");

    if (nombre.length < 3) {
        error.textContent = "Debe tener al menos 3 caracteres.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

// Función para validar email
function verificarEmail() {
    let email = document.getElementById("email").value.trim();
    let error = document.getElementById("error-email");
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
        error.textContent = "Email inválido.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

// Función para validar contraseña
function verificarContraseña() {
    let password = document.getElementById("password").value;
    let error = document.getElementById("error-password");

    if (password.length < 8 || !/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
        error.textContent = "Debe tener 8 caracteres, una letra y un número.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

// Función para confirmar contraseña
function verificarConfirmacion() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let error = document.getElementById("error-confirmPassword");

    if (confirmPassword !== password) {
        error.textContent = "Las contraseñas no coinciden.";
        return false;
    } else {
        error.textContent = "";
        return true;
    }
}

// Función para verificar si todo es válido antes de enviar
function verificarFormulario() {
    let valido = verificarNombre() && verificarEmail() && verificarContraseña() && verificarConfirmacion();

    if (valido) {
        alert("Registro exitoso!");
    } else {
        alert("Corrige los errores antes de continuar.");
    }
}

// Función para cambiar a modo oscuro
function darkModeToggle() {
    let body = document.body;
    let container = document.querySelector(".container");

    if (body.style.backgroundColor === "black") {
        body.style.background = "linear-gradient(to bottom, #d3d3d3, #a0a0a0)";
        container.style.background = "#1e1e1e";
    } else {
        body.style.background = "black";
        container.style.background = "#333";
    }
}

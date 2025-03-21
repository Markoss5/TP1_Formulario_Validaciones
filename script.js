// Función para validar el nombre
function verificarNombre() {
    let nombre = document.getElementById("nombre").value;
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
    let email = document.getElementById("email").value;
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

function verificarConfirmacion(){
    let contraseñaAvalidar = document.getElementById("confirmPassword").value;
    let contraseñaOriginal = document.getElementById("password").value;
    let error = document.getElementById("error-password");
    
    if (contraseñaAvalidar !== contraseñaOriginal){
        error.textContent = "La contraseña no coincide con la original";
        return false
    }else{
        error.textContent = "";
        return true
    }
}

function verificarFormulario(event){
    console.log(verificarNombre() , verificarEmail() ,verificarContraseña(), verificarConfirmacion())
    if (verificarNombre() == true && verificarEmail() == true && verificarContraseña()==true && verificarConfirmacion()==true)
    {
        alert("Formulario Enviado exitosamente");
    } else
    {
        event.preventDefault();
        alert("Corrija los Datos del formulario");
    }
}

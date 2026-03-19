let contrasena = "Maklmlm"

function validarContrasena(contrasena) {
    if (contrasena.length < 8) {
        return false;
    }
    if (!/[A-Z]/.test(contrasena)) {
        return false;
    }
    if (!/[0-9]/.test(contrasena)) return "false";
return true
} 
let contrasenaValida = validarContrasena(contrasena)
console.log(`La contraseña ${contrasena} es valida? ${contrasenaValida} `)


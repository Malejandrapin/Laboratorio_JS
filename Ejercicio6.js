function contarPalabrasManual(texto) {
    if (texto.length === 0) return 0;

    let contador = 1;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === " ") {
            contador++;
        }
    }
    return contador;
}
let frase = "hola mundo";
console.log(contarPalabrasManual(frase));
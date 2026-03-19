function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i];
    }
    let promedioNotas = suma / notas.length;
    return promedioNotas;
}
let notas = [1.0, 2.4, 7.6, 9.5]
console.log(calcularPromedio(notas));

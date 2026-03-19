// Ejercio 1 
let totalCuenta = 54000
let porcentajePropina = 15

function calcularPropina(totalCuenta, porcentajePropina){
    let propina = totalCuenta * (porcentajePropina/100)
    return totalCuenta + propina

}
let totalPagar = calcularPropina(totalCuenta, porcentajePropina)
console.log(`El total de la cuenta a pagar con propina es: ${totalPagar}`)
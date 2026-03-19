function retirarDinero(saldo, monto){
    if(monto > saldo){
        return "Fondos insuficientes"
    }
    let saldoActualizado = saldo - monto;
    return saldoActualizado
}
let saldo = 25000;
let monto = 5000;
let resultado = retirarDinero(saldo, monto)

console.log(resultado);

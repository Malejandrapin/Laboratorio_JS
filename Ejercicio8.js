function convertirMoneda(monto, monedaDestino){
    if(monedaDestino == "USD"){
        return monto * 0.00027;
    }
    if(monedaDestino == "EUR"){
        return monto * 0.00024;
    }
return "Moneda invalida"
}
let monto = 32000
let monedaDestino = "USD"

let monedaConvertida = convertirMoneda(monto, monedaDestino)
console.log(monedaConvertida);

const inventario = [
    { nombre: "Chaqueta", precio: 20 },
    { nombre: "Tenis", precio: 50 }
];

function buscarProducto(nombre, inventario) {
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre === nombre) {
            return inventario[i];
        }
        return null
    }
}
let resultado = buscarProducto("Chaqueta", inventario)
console.log(resultado);

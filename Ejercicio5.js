let usuarios = [{ 
    nombre: "Ana", edad: 25},
    {nombre: "Fabian", edad: 14}]

function filtrarUsuario(usuarios, edadMinima) {
    let cumplen = []
    for (let i = 0; i < usuarios.length; i++) {
        if(usuarios[i].edad >= edadMinima){
        cumplen.push(usuarios[i]);
        }

    }
   return cumplen;
}
let resultado = filtrarUsuario(usuarios, 18)
console.log(resultado);

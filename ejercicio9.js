
    // Ejercicio 9: Crear un array de autos y utilizar el método forEach para imprimir la 
    //descripción de cada auto.
autos = [
    {marca:"Ford",modelo: "Ka", año:"2000"},
    {marca: "Fiat",modelo: "Palio", año: "2005"},
    {marca:"Renault",modelo: "clio", año: "2010"},
    {marca: "Chevrolet",modelo: "Corsa", año: "2009"},
    {marca: "Ford",modelo: "Ranger", año: "2015"}
]

function descripcion(auto, indice) {
    console.log(`El auto ${indice + 1}: es un ${auto.marca} ${auto.modelo} y es del año ${auto.año}`);
}

autos.forEach((marca, indice) => descripcion(marca, indice));


// Ejercicio 5: Crear una función constructora para objetos auto.

function Autos(marca, modelo, año, color,sound) {
    this.marca = marca
    this.modelo = modelo
    this.año = año
    this.color = color
    this.sound = function () {
        return sound
    }
}
const autos = new Autos('Ford', 'Ka', 2010, 'Rojo', 'RunRun')

console.log(`El auto es: ${autos.marca} ${autos.modelo}, año ${autos.año}, color: ${autos.color}`);
console.log(`Y hace..${autos.sound()}`);
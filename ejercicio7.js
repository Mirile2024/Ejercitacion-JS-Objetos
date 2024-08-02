
    // Ejercicio 7: Crear un array de objetos utilizando una función constructora.

function indumentaria(descripcion, talle, color) {  //Funcion constructora
    this.descripcion = descripcion
    this.talle = talle
    this.color = function (){   //metodo
            return color
    }
}

const remera = new indumentaria('Manga Corta','M', 'Rojo')
console.log([remera.descripcion]) // Esto seria un Array
console.log([remera.talle])       // Esto seria un Array
console.log([remera.color()])       // Esto seria un Array



        
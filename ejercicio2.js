// Ejercicio 2: Añadir un método al objeto auto que devuelva una cadena con la descripción 
//del auto.

let auto = {
    marca: 'Ford',
   modelo: 'Tracker',
    año: '2000',
    descripcion(){
        return 'Descripcion del Auto:' + ' ' + this.marca + ' ' + this.modelo + ' ' + this.año; 
    },
}
console.log(auto.descripcion());


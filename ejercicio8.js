
    // Ejercicio 8: Añadir un método a la función constructora Auto para mostrar la 
    //descripción del auto.
    function Autos(marca, modelo, año, color,sound) {         // Esta seria la funcion constructora
        this.marca = marca
        this.modelo = modelo
        this.año = año
        this.color = color
        this.sound = function () {        // Este seria el metodo
            return sound
        }
    }
    const autos = new Autos('Ford', 'Ka', 2010, 'Rojo', 'RunRun')
    
    console.log(`El auto es: ${autos.marca} ${autos.modelo}, año ${autos.año}, color: ${autos.color}`);
    console.log(`Y hace..${autos.sound()}`);

    // Ejercicio 6: Utilizar un bucle for...in para iterar sobre las propiedades de un objeto auto.
    const auto = {
        marca: 'Ford',
        modelo: 'Ranger',
        color: 'Blanco',
        año: 2018
    };
    
    for (let dato in auto) {
        console.log(dato, auto[dato]);
    }


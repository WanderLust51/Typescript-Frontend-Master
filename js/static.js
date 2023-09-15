"use strict";
class Cliente {
    static informe() {
        console.log('Soy un cliente jaja');
    }
    constructor(nombre, cedula) {
        this.clave = '12345';
        this.nombre = nombre;
        this.cedula = cedula;
    }
}
Cliente.informe();
let juan = new Cliente('Juan', '30100200');
console.log(juan);

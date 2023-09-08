"use strict";
class Persona {
    constructor(nombre, cedula) {
        this.nombre = nombre;
        this.cedula = cedula;
    }
}
class ClienteBancario extends Persona {
    // private _saldo: number
    // private _claveSuiche: string = ''
    constructor(bankName, nombre, cedula) {
        super(nombre, cedula);
        this.nombreBanco = '';
        this.nombreBanco = bankName;
        // if (saldo){
        //     this._saldo = saldo
        // }else{
        //     this._saldo = 0
        // }
        // if (cedula){
        //     this.cedula = `V-${cedula}`
        // }else{
        //     this.cedula = ''
        // }
    }
}
// let carlo = new ClienteBancario('bnc', 500, 31412610)
// console.log(carlo)

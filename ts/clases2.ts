class Persona {
    public nombre: string
    public cedula: string

    constructor(nombre: string, cedula: string){
        
        this.nombre = nombre
        this.cedula = cedula

    }

}

class ClienteBancario extends Persona {
    public readonly nombreBanco: string = ''
    // private _saldo: number
    // private _claveSuiche: string = ''

    constructor(bankName: string, nombre: string, cedula: string){
        super(nombre, cedula)
        this.nombreBanco = bankName

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

    // get saldo():number {
    //     return this._saldo
    // }
    // set saldo(value : number) {
    //     this._saldo = value
    // }

}

// let carlo = new ClienteBancario('bnc', 500, 31412610)
// console.log(carlo)



class Cliente {
    public nombre: string
    public cedula: string
    static clave: string
    clave = '12345'

    static informe(){
        console.log('Soy un cliente jaja')
    }

    constructor(nombre: string, cedula: string){
        
        this.nombre = nombre
        this.cedula = cedula

    }
}

Cliente.informe()

let juan = new Cliente('Juan', '30100200')
console.log(juan)
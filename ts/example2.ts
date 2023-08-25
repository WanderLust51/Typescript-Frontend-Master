let sueldoBase, montoMensual : number
let esMayor : boolean
let edad : number
let sexo : string
let montoVendido : number
let porcentajeComision : number
let ingresoFinal : number

porcentajeComision = 0
montoVendido = 800000

function calcularPorcentaje(vendido: number, porcentajeComision : number) : number {
    if (vendido > 0 && vendido < 75000){
        return porcentajeComision * 0.05
    }
    if (vendido >= 90000 && vendido <200000){
        return porcentajeComision * 0.07
    }
    if (vendido >= 300000 && vendido <1000000){
        return porcentajeComision * 0.08
    }
    if (vendido >= 1500000){
        return porcentajeComision * 0.10
    }
    return porcentajeComision * 0.06
}

sueldoBase = 0
montoMensual = 0
ingresoFinal = 0
esMayor = true
edad = 40
sexo = 'm'

porcentajeComision = calcularPorcentaje(montoVendido, porcentajeComision)
ingresoFinal += sueldoBase + montoMensual + porcentajeComision

if (esMayor){
    if (sexo == 'm' && edad >= 55){
        ingresoFinal += 40000
    }
    if (sexo == 'h' && edad >= 60){
        ingresoFinal += 40000
    }
}


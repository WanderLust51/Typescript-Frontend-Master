enum bebida{
    Café,
    Te,
    Agua,
    Refresco,
    Jugo
}

let bebidaFavorita = bebida[2]
console.log('Mi bebida favorita es el', bebidaFavorita)

enum semana{
    l = 'Lunes',
    m = 'Martes',
    mi = 'Miércoles',
    j = 'Jueves',
    v = 'Viernes',
    s = 'Sábado',
    d = 'Domingo'
}

let diaDeHoy : semana = semana['v']
let diaFavorito : semana = semana.s

console.log('Mi día favorito es', diaFavorito, 'pero hoy es', diaDeHoy)
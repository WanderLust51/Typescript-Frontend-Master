interface Alumno{
    nombre : string
    nota : number
}

let miguel : Alumno
miguel = { nombre : 'miguel', nota : 14 }

let carlos : Alumno
carlos = { nombre : 'carlos', nota : 17 }


function procesarAlumno(alumno : Alumno){
    return `Alumno ${alumno.nombre} con nota ${alumno.nota}`
}

console.log(procesarAlumno(carlos))
"use strict";
let miguel;
miguel = { nombre: 'miguel', nota: 14 };
let carlos;
carlos = { nombre: 'carlos', nota: 17 };
function procesarAlumno(alumno) {
    return `Alumno ${alumno.nombre} con nota ${alumno.nota}`;
}
console.log(procesarAlumno(carlos));

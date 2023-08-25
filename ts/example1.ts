let nota1, nota2, nota3, notaFinal: number

nota1 = Math.round(Math.random() * 20)
nota2 = Math.round(Math.random() * 20)
nota3 = Math.round(Math.random() * 20)

notaFinal = Math.round((nota1 + nota2 + nota3)/3)

console.log(`La nota del 1er lapso es: ${nota1} pts`)
console.log(`La nota del 2do lapso es: ${nota2} pts`)
console.log(`La nota del 3er lapso es: ${nota3} pts`)

let pasando: boolean = notaFinal >= 10

if (pasando){
    console.log(`\nPasaste el semestre con ${notaFinal} pts`)
}
if (!pasando){
    console.log(`\nRaspaste con ${notaFinal} pts`)
}
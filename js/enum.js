"use strict";
var bebida;
(function (bebida) {
    bebida[bebida["Caf\u00E9"] = 0] = "Caf\u00E9";
    bebida[bebida["Te"] = 1] = "Te";
    bebida[bebida["Agua"] = 2] = "Agua";
    bebida[bebida["Refresco"] = 3] = "Refresco";
    bebida[bebida["Jugo"] = 4] = "Jugo";
})(bebida || (bebida = {}));
let bebidaFavorita = bebida[2];
console.log('Mi bebida favorita es el', bebidaFavorita);
var semana;
(function (semana) {
    semana["l"] = "Lunes";
    semana["m"] = "Martes";
    semana["mi"] = "Mi\u00E9rcoles";
    semana["j"] = "Jueves";
    semana["v"] = "Viernes";
    semana["s"] = "S\u00E1bado";
    semana["d"] = "Domingo";
})(semana || (semana = {}));
let diaDeHoy = semana['v'];
let diaFavorito = semana.s;
console.log('Mi día favorito es', diaFavorito, 'pero hoy es', diaDeHoy);

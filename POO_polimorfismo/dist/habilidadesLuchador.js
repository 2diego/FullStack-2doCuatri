"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanzaRocas = exports.EnfocarDefensa = void 0;
var Habilidad_1 = require("./Habilidad");
exports.EnfocarDefensa = new Habilidad_1.Habilidad("Enfocar Defensa", "Defensa", null, function (heroe) {
    heroe.defFisica += 10;
    heroe.atkFisico -= 5;
    console.log("".concat(heroe.nombre, " ha aumentado su defensa fisica pero reducido su ataque fisico."));
}, 1);
exports.LanzaRocas = new Habilidad_1.Habilidad("Lanza rocas", "Ataque", null, function (target) {
    var dmg = 30;
    target.vida -= dmg;
    console.log("".concat(target.nombre, " ha recibido un ataque con rocas y perdio ").concat(dmg, " puntos de vida."));
}, 2);

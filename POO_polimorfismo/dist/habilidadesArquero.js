"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meditacion = exports.FlechaPesada = exports.EnfocarAtaque = exports.EnfocarDefensa = void 0;
var Habilidad_1 = require("./Habilidad");
exports.EnfocarDefensa = new Habilidad_1.Habilidad("Enfocar Defensa", "Defensa", null, function (heroe) {
    heroe.defFisica += 5;
    heroe.atkFisico -= 4;
    heroe.defMagica += 5;
    heroe.atkMagico -= 4;
    console.log("".concat(heroe.nombre, " ha aumentado su defensa pero reducido su ataque."));
}, 1);
exports.EnfocarAtaque = new Habilidad_1.Habilidad("Enfocar Ataque", "Ataque", null, function (heroe) {
    heroe.atkFisico += 5;
    heroe.defFisica -= 4;
    heroe.atkMagico += 5;
    heroe.defMagica -= 4;
    console.log("".concat(heroe.nombre, " ha aumentado su ataque pero reducido su defensa."));
}, 1);
exports.FlechaPesada = new Habilidad_1.Habilidad("Flecha pesada", "Ataque", null, function (target) {
    var dmg = 30;
    target.vida -= dmg;
    console.log("".concat(target.nombre, " ha recibido un ataque con una flecha pesada y perdio ").concat(dmg, " puntos de vida."));
}, 2);
exports.Meditacion = new Habilidad_1.Habilidad("Meditacion", "Defensa", null, function (heroe) {
    heroe.vida += 30;
    heroe.atkMagico += 5;
    heroe.defMagica += 5;
    heroe.atkFisico += 5;
    heroe.defFisica += 5;
    console.log("".concat(heroe.nombre, " subio 5pts en todos sus stats y recupero 30 puntos de vida."));
}, 3);

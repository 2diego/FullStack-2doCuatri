"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meditacion = exports.Maldecir = exports.EnfocarAtaque = exports.EnfocarDefensa = void 0;
var Habilidad_1 = require("./Habilidad");
exports.EnfocarDefensa = new Habilidad_1.Habilidad("Enfocar Defensa", "Defensa", null, function (heroe) {
    heroe.defMagica += 3;
    heroe.defFisica += 3;
    console.log("".concat(heroe.nombre, " ha aumentado su defensa."));
}, 1);
exports.EnfocarAtaque = new Habilidad_1.Habilidad("Enfocar Ataque", "Ataque", null, function (heroe) {
    heroe.atkMagico += 1;
    heroe.atkFisico += 1;
    console.log("".concat(heroe.nombre, " ha aumentado su ataque."));
}, 1);
exports.Maldecir = new Habilidad_1.Habilidad("Maldecir", "Ataque", null, function (target) {
    var dmg = 5;
    target.defFisica -= dmg;
    target.atkFisico -= dmg;
    target.defMagica -= dmg;
    target.atkMagico -= dmg;
    console.log("".concat(target.nombre, " fue maldecido, su ataque y defensa disminuyeron ").concat(dmg, " puntos."));
}, 2);
exports.Meditacion = new Habilidad_1.Habilidad("Meditacion", "Defensa", null, function (heroe) {
    heroe.vida += 50;
    heroe.atkMagico += 4;
    heroe.atkFisico += 4;
    console.log("".concat(heroe.nombre, " subio 4pts de ataque y recupero toda su vida."));
}, 3);

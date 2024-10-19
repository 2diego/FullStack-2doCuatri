"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meditacion = exports.BolaDeFuego = exports.EnfocarAtaque = exports.EnfocarDefensa = void 0;
var Habilidad_1 = require("./Habilidad");
exports.EnfocarDefensa = new Habilidad_1.Habilidad("Enfocar Defensa", "Defensa", null, function (heroe) {
    heroe.defMagica += 5;
    heroe.atkMagico -= 4;
    console.log("".concat(heroe.nombre, " ha aumentado su defensa magica pero reducido su ataque magico."));
}, 1);
exports.EnfocarAtaque = new Habilidad_1.Habilidad("Enfocar Ataque", "Ataque", null, function (heroe) {
    heroe.atkMagico += 5;
    heroe.defMagica -= 4;
    console.log("".concat(heroe.nombre, " ha aumentado su ataque magico pero reducido su defensa magica."));
}, 1);
exports.BolaDeFuego = new Habilidad_1.Habilidad("Bola de Fuego", "Ataque", null, function (target) {
    var dmg = 30;
    target.vida -= dmg;
    console.log("".concat(target.nombre, " ha recibido una bola de fuego y perdio ").concat(dmg, " puntos de vida."));
}, 2);
exports.Meditacion = new Habilidad_1.Habilidad("Meditacion", "Defensa", null, function (heroe) {
    heroe.vida += 30;
    heroe.atkMagico += 5;
    heroe.defMagica += 5;
    heroe.atkFisico += 5;
    heroe.defFisica += 5;
    console.log("".concat(heroe.nombre, " subio 5pts en todos sus stats y recupero 30 puntos de vida."));
}, 3);

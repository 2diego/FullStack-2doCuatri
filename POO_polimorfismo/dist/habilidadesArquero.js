"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meditacion = exports.FlechaPesada = exports.EnfocarAtaque = exports.EnfocarDefensa = void 0;
var Habilidad_1 = require("./Habilidad");
exports.EnfocarDefensa = new Habilidad_1.Habilidad("Enfocar Defensa", "Defensa", null, function (heroe) {
    heroe.setDefFisica(heroe.getDefFisica() + 5);
    heroe.setAtkFisico(heroe.getAtkFisico() - 4);
    heroe.setDefMagica(heroe.getDefMagica() + 5);
    heroe.setAtkMagico(heroe.getAtkMagico() - 4);
    console.log("".concat(heroe.getName(), " ha aumentado su defensa pero reducido su ataque."));
}, 1);
exports.EnfocarAtaque = new Habilidad_1.Habilidad("Enfocar Ataque", "Ataque", null, function (heroe) {
    heroe.setAtkFisico(heroe.getAtkFisico() + 5);
    heroe.setDefFisica(heroe.getDefFisica() - 4);
    heroe.setAtkMagico(heroe.getAtkMagico() + 5);
    heroe.setDefMagica(heroe.getDefMagica() - 4);
    console.log("".concat(heroe.getName(), " ha aumentado su ataque pero reducido su defensa."));
}, 1);
exports.FlechaPesada = new Habilidad_1.Habilidad("Flecha pesada", "Ataque", null, function (target) {
    var dmg = 30;
    target.setVida(target.getVida() - dmg);
    console.log("".concat(target.getName(), " ha recibido un ataque con una flecha pesada y perdio ").concat(dmg, " puntos de vida."));
}, 2);
exports.Meditacion = new Habilidad_1.Habilidad("Meditacion", "Defensa", null, function (heroe) {
    heroe.setVida(heroe.getVida() + 30);
    heroe.setAtkMagico(heroe.getAtkMagico() + 5);
    heroe.setDefMagica(heroe.getDefMagica() + 5);
    heroe.setAtkFisico(heroe.getAtkFisico() + 5);
    heroe.setDefFisica(heroe.getDefFisica() + 5);
    console.log("".concat(heroe.getName(), " subio 5pts en todos sus stats y recupero 30 puntos de vida."));
}, 3);

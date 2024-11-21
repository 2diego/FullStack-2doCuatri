"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meditacion = exports.Maldecir = exports.EnfocarAtaque = exports.EnfocarDefensa = void 0;
var Habilidad_1 = require("./Habilidad");
exports.EnfocarDefensa = new Habilidad_1.Habilidad("Enfocar Defensa", "Defensa", null, function (heroe) {
    heroe.setDefMagica(heroe.getDefMagica() + 3);
    heroe.setDefFisica(heroe.getDefFisica() + 3);
    console.log("".concat(heroe.getName(), " ha aumentado su defensa."));
}, 1);
exports.EnfocarAtaque = new Habilidad_1.Habilidad("Enfocar Ataque", "Ataque", null, function (heroe) {
    heroe.setAtkMagico(heroe.getAtkMagico() + 1);
    heroe.setAtkFisico(heroe.getAtkFisico() + 1);
    console.log("".concat(heroe.getName(), " ha aumentado su ataque."));
}, 1);
exports.Maldecir = new Habilidad_1.Habilidad("Maldecir", "Ataque", null, function (target) {
    var dmg = 5;
    target.setDefFisica(target.getDefFisica() - dmg);
    target.setAtkFisico(target.getAtkFisico() - dmg);
    target.setDefMagica(target.getDefMagica() - dmg);
    target.setAtkMagico(target.getAtkMagico() - dmg);
    console.log("".concat(target.getName(), " fue maldecido, su ataque y defensa disminuyeron ").concat(dmg, " puntos."));
}, 2);
exports.Meditacion = new Habilidad_1.Habilidad("Meditacion", "Defensa", null, function (heroe) {
    heroe.setVida(heroe.getVida() + 50);
    heroe.setAtkMagico(heroe.getAtkMagico() + 4);
    heroe.setAtkFisico(heroe.getAtkFisico() + 4);
    console.log("".concat(heroe.getName(), " subio 4pts de ataque y 50 puntos de vida."));
}, 3);

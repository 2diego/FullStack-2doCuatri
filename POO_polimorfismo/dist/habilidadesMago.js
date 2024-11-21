"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meditacion = exports.BolaDeFuego = exports.EnfocarAtaque = exports.EnfocarDefensa = void 0;
var Habilidad_1 = require("./Habilidad");
exports.EnfocarDefensa = new Habilidad_1.Habilidad("Enfocar Defensa", "Defensa", null, function (heroe) {
    heroe.setDefMagica(heroe.getDefMagica() + 5);
    heroe.setAtkMagico(heroe.getAtkMagico() - 4);
    console.log("".concat(heroe.getName(), " ha aumentado su defensa magica pero reducido su ataque magico."));
}, 1);
exports.EnfocarAtaque = new Habilidad_1.Habilidad("Enfocar Ataque", "Ataque", null, function (heroe) {
    heroe.setAtkMagico(heroe.getAtkMagico() + 5);
    heroe.setDefMagica(heroe.getDefMagica() - 4);
    console.log("".concat(heroe.getName(), " ha aumentado su ataque magico pero reducido su defensa magica."));
}, 1);
exports.BolaDeFuego = new Habilidad_1.Habilidad("Bola de Fuego", "Ataque", null, function (target) {
    var dmg = 30;
    target.setVida(target.getVida() - dmg);
    console.log("".concat(target.getName(), " ha recibido una bola de fuego y perdio ").concat(dmg, " puntos de vida."));
}, 2);
exports.Meditacion = new Habilidad_1.Habilidad("Meditacion", "Defensa", null, function (heroe) {
    heroe.setVida(heroe.getVida() + 30);
    heroe.setAtkMagico(heroe.getAtkMagico() + 5);
    heroe.setDefMagica(heroe.getDefMagica() + 5);
    heroe.setAtkFisico(heroe.getAtkFisico() + 5);
    heroe.setDefFisica(heroe.getDefFisica() + 5);
    console.log("".concat(heroe.getName(), " subio 5pts en todos sus stats y recupero 30 puntos de vida."));
}, 3);

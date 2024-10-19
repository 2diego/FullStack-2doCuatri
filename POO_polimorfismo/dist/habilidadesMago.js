"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BolaDeFuego = exports.EnfocarDefensa = void 0;
var Habilidad_1 = require("./Habilidad");
exports.EnfocarDefensa = new Habilidad_1.Habilidad("Enfocar Defensa", "Defensa", null, function (heroe) {
    heroe.defMagica += 10;
    heroe.atkMagico -= 5;
    console.log("".concat(heroe.nombre, " ha aumentado su defensa magica pero reducido su ataque magico."));
}, 1);
exports.BolaDeFuego = new Habilidad_1.Habilidad("Bola de Fuego", "Ataque", null, function (target) {
    var dmg = 30;
    target.vida -= dmg;
    console.log("".concat(target.nombre, " ha recibido una bola de fuego y perdio ").concat(dmg, " puntos de vida."));
}, 2);

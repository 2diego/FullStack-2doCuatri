"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlechaPesada = exports.EnfocarDefensa = void 0;
var Habilidad_1 = require("./Habilidad");
exports.EnfocarDefensa = new Habilidad_1.Habilidad("Enfocar Defensa", "Defensa", null, function (heroe) {
    heroe.defFisica += 10;
    heroe.atkFisico -= 5;
    heroe.defMagica += 10;
    heroe.atkMagico -= 5;
    console.log("".concat(heroe.nombre, " ha aumentado su defensa pero reducido su ataque."));
}, 1);
exports.FlechaPesada = new Habilidad_1.Habilidad("Flecha pesada", "Ataque", null, function (target) {
    var dmg = 30;
    target.vida -= dmg;
    console.log("".concat(target.nombre, " ha recibido un ataque con una flecha pesada y perdio ").concat(dmg, " puntos de vida."));
}, 2);

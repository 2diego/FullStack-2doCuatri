"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heroe = void 0;
var Heroe = /** @class */ (function () {
    function Heroe(nuevoNombre) {
        this.nivel = 1;
        this.experiencia = 0;
        this.nombre = nuevoNombre;
    }
    Heroe.prototype.sumarExperiencia = function (dmg) {
        this.experiencia += dmg;
        console.log("".concat(this.nombre, " ha ganado ").concat(dmg, " puntos de experiencia. Experiencia total: ").concat(this.experiencia));
        this.verificarNivel();
    };
    Heroe.prototype.verificarNivel = function () {
        if (this.experiencia >= 100) {
            this.nivel++;
            this.experiencia -= 100;
            console.log("".concat(this.nombre, " ha subido de nivel! Ahora es nivel ").concat(this.nivel, "."));
        }
    };
    return Heroe;
}());
exports.Heroe = Heroe;

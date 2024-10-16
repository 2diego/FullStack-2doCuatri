"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heroe = void 0;
var Heroe = /** @class */ (function () {
    function Heroe(nuevoNombre) {
        this.nivel = 1;
        this.experiencia = 0; // if exp > 100, level up (recursiva)
        this.nombre = nuevoNombre;
    }
    return Heroe;
}());
exports.Heroe = Heroe;

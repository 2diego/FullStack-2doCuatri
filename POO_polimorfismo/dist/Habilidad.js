"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Habilidad = void 0;
var Habilidad = /** @class */ (function () {
    function Habilidad(nuevaHabilidad, nuevoTipo, nuevoUsuario, nuevoEfecto, nivelMinimo) {
        this.nombre = nuevaHabilidad;
        this.tipo = nuevoTipo;
        this.usuario = nuevoUsuario;
        this.efecto = nuevoEfecto;
        this.nivel = nivelMinimo;
    }
    Habilidad.prototype.habilidadAtk = function (heroe, target) {
        if (this.verificarAcceso(heroe)) {
            this.efecto(target);
        }
    };
    Habilidad.prototype.habilidadDef = function (heroe) {
        if (this.verificarAcceso(heroe)) {
            this.efecto(heroe);
        }
    };
    Habilidad.prototype.verificarAcceso = function (heroe) {
        if (heroe.nivel < this.nivel) {
            console.log("Necesitas ser nivel ".concat(this.nivel, " para usar esta habilidad."));
            return false;
        }
        if (!(heroe instanceof this.usuario.constructor)) {
            console.log("".concat(heroe.nombre, " no puede usar esta habilidad, solo ").concat(this.usuario.constructor.name, " puede."));
            return false;
        }
        return true;
    };
    return Habilidad;
}());
exports.Habilidad = Habilidad;

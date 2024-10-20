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
    //GETTERS
    Habilidad.prototype.getNombre = function () {
        return this.nombre;
    };
    Habilidad.prototype.getNivel = function () {
        return this.nivel;
    };
    Habilidad.prototype.getTipo = function () {
        return this.tipo;
    };
    //SETTERS
    Habilidad.prototype.setUsuario = function (nuevoUsuario) {
        this.usuario = nuevoUsuario;
    };
    //METODOS
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
        if (heroe.getNivel() < this.getNivel()) {
            console.log("Necesitas ser nivel ".concat(this.getNivel(), " para usar esta habilidad."));
            return false;
        }
        return true;
    };
    return Habilidad;
}());
exports.Habilidad = Habilidad;

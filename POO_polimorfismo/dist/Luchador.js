"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Luchador = void 0;
var Heroe_1 = require("./Heroe");
var Habilidad_1 = require("./Habilidad");
var habilidadesLuchador_1 = require("./habilidadesLuchador");
var Luchador = /** @class */ (function (_super) {
    __extends(Luchador, _super);
    function Luchador(nuevoNombre) {
        var _this = _super.call(this, nuevoNombre) || this;
        _this.habilidades = [];
        _this.vida = 100;
        _this.atkFisico = 25;
        _this.atkMagico = 0;
        _this.defFisica = 15;
        _this.defMagica = 5;
        _this.habilidades = [habilidadesLuchador_1.EnfocarDefensa, habilidadesLuchador_1.LanzaRocas];
        habilidadesLuchador_1.EnfocarDefensa.usuario = _this;
        habilidadesLuchador_1.LanzaRocas.usuario = _this;
        habilidadesLuchador_1.Meditacion.usuario = _this;
        return _this;
    }
    Luchador.prototype.ataqueMagico = function (heroe) {
        var dmg = this.atkMagico * (1 - (heroe.defMagica / 100));
        heroe.vida -= dmg;
        console.log("".concat(heroe.nombre, " recibio un ataque de ").concat(dmg, " puntos de vida de ").concat(this.nombre));
        this.sumarExperiencia(dmg);
    };
    Luchador.prototype.ataqueFisico = function (heroe) {
        var dmg = this.atkFisico * (1 - (heroe.defFisica / 100));
        heroe.vida -= dmg;
        console.log("".concat(heroe.nombre, " recibio un ataque de ").concat(dmg, " puntos de vida de ").concat(this.nombre));
        this.sumarExperiencia(dmg);
    };
    Luchador.prototype.defensaMagica = function () {
        this.defMagica = this.defMagica * 1.20;
        console.log("".concat(this.nombre, " aumento su defensa magica un 20%"));
    };
    Luchador.prototype.defensaFisica = function () {
        this.defFisica = this.defFisica * 1.20;
        console.log("".concat(this.nombre, " aumento su defensa fisica un 20%"));
    };
    Luchador.prototype.curar = function () {
        this.vida += 20;
        console.log("".concat(this.nombre, " se curo 10 puntos de vida"));
    };
    Luchador.prototype.usarHabilidad = function (heroe, target) {
        var random = Math.floor(Math.random() * this.habilidades.length);
        if (this.habilidades[random].tipo == "Defensa") {
            this.habilidades[random].habilidadDef(heroe);
        }
        else {
            this.habilidades[random].habilidadAtk(heroe, target);
        }
    };
    Luchador.prototype.abrirCaja = function () {
        var nuevaHabilidad = Math.floor(Math.random() * 2) + 1;
        switch (nuevaHabilidad) {
            case 1:
                this.habilidades.push(new Habilidad_1.Habilidad("Estirar", "Defensa", null, function (heroe) {
                    console.log("".concat(heroe.nombre, " esta elongando, pierde este turno."));
                }, 1));
                this.abrioCaja = true;
                break;
            case 2:
                this.habilidades.push(new Habilidad_1.Habilidad("Destructor", "Ataque", null, function (target) {
                    var dmg = 60;
                    target.vida -= dmg;
                    console.log("".concat(target.nombre, " ha recibido un ataque demasiado fuerte y perdio ").concat(dmg, " puntos de vida."));
                }, 2));
                this.abrioCaja = true;
                break;
        }
        console.log("".concat(this.nombre, " abrio la caja"));
    };
    return Luchador;
}(Heroe_1.Heroe));
exports.Luchador = Luchador;

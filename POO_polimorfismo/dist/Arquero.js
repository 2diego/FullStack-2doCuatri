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
exports.Arquero = void 0;
var Heroe_1 = require("./Heroe");
var Habilidad_1 = require("./Habilidad");
var habilidadesArquero_1 = require("./habilidadesArquero");
var Arquero = /** @class */ (function (_super) {
    __extends(Arquero, _super);
    function Arquero(nuevoNombre) {
        var _this = _super.call(this, nuevoNombre) || this;
        _this.habilidades = [];
        _this.vida = 150;
        _this.atkFisico = 20;
        _this.atkMagico = 10;
        _this.defFisica = 5;
        _this.defMagica = 5;
        _this.habilidades = [habilidadesArquero_1.EnfocarDefensa, habilidadesArquero_1.FlechaPesada];
        habilidadesArquero_1.EnfocarDefensa.usuario = _this;
        habilidadesArquero_1.FlechaPesada.usuario = _this;
        habilidadesArquero_1.Meditacion.usuario = _this;
        return _this;
    }
    Arquero.prototype.ataqueMagico = function (heroe) {
        var dmg = this.atkMagico * (1 - (heroe.defMagica / 100));
        heroe.vida -= dmg;
        console.log("".concat(heroe.nombre, " recibio un ataque de ").concat(dmg, " puntos de vida de ").concat(this.nombre));
        this.sumarExperiencia(dmg);
    };
    Arquero.prototype.ataqueFisico = function (heroe) {
        var dmg = this.atkFisico * (1 - (heroe.defFisica / 100));
        heroe.vida -= dmg;
        console.log("".concat(heroe.nombre, " recibio un ataque de ").concat(dmg, " puntos de vida de ").concat(this.nombre));
        this.sumarExperiencia(dmg);
    };
    Arquero.prototype.defensaMagica = function () {
        this.defMagica = this.defMagica * 1.20;
        console.log("".concat(this.nombre, " aumento su defensa magica un 20%"));
    };
    Arquero.prototype.defensaFisica = function () {
        this.defFisica = this.defFisica * 1.20;
        console.log("".concat(this.nombre, " aumento su defensa fisica un 20%"));
    };
    Arquero.prototype.curar = function () {
        this.vida += 20;
        console.log("".concat(this.nombre, " se curo 20 puntos de vida"));
    };
    Arquero.prototype.usarHabilidad = function (heroe, target) {
        var random = Math.floor(Math.random() * this.habilidades.length);
        if (this.habilidades[random].tipo == "Defensa") {
            this.habilidades[random].habilidadDef(heroe);
        }
        else {
            this.habilidades[random].habilidadAtk(heroe, target);
        }
    };
    Arquero.prototype.abrirCaja = function () {
        var nuevaHabilidad = Math.floor(Math.random() * 2) + 1;
        switch (nuevaHabilidad) {
            case 1:
                this.habilidades.push(new Habilidad_1.Habilidad("Juntar flechas", "Defensa", null, function (heroe) {
                    console.log("".concat(heroe.nombre, " esta juntando flechas, pierde este turno."));
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
    return Arquero;
}(Heroe_1.Heroe));
exports.Arquero = Arquero;

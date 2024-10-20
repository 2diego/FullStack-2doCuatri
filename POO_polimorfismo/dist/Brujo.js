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
exports.Brujo = void 0;
var Heroe_1 = require("./Heroe");
var Habilidad_1 = require("./Habilidad");
var habilidadesBrujo_1 = require("./habilidadesBrujo");
var Brujo = /** @class */ (function (_super) {
    __extends(Brujo, _super);
    function Brujo(nuevoNombre) {
        var _this = _super.call(this, nuevoNombre) || this;
        _this.habilidades = [];
        _this.setVida(50);
        _this.setAtkFisico(2, "Bandada de cuervos");
        _this.setAtkMagico(5, "Mal de ojo");
        _this.setDefFisica(50);
        _this.setDefMagica(50);
        _this.habilidades = [habilidadesBrujo_1.EnfocarDefensa, habilidadesBrujo_1.Maldecir];
        habilidadesBrujo_1.EnfocarDefensa.setUsuario(_this);
        habilidadesBrujo_1.Maldecir.setUsuario(_this);
        habilidadesBrujo_1.Meditacion.setUsuario(_this);
        return _this;
    }
    Brujo.prototype.getHabilidades = function () {
        return this.habilidades.map(function (hab) { return hab.getNombre(); });
    };
    Brujo.prototype.ataqueMagico = function (target) {
        var dmg = this.getAtkMagico() * (1 - (target.getDefMagica() / 100));
        target.setVida(target.getVida() - dmg);
        console.log("".concat(target.getName(), " recibio un ataque de ").concat(dmg, " puntos de vida de ").concat(this.getName()));
        this.sumarExperiencia(dmg);
    };
    Brujo.prototype.ataqueFisico = function (target) {
        var repetir = Math.floor(Math.random() * 3) + 1;
        var dmg = (this.getAtkFisico() * (1 - (target.getDefFisica() / 100))) * repetir;
        target.setVida(target.getVida() - dmg);
        console.log("".concat(target.getName(), " recibio un ataque ").concat(repetir, " cuervo/s por un total de ").concat(dmg, " puntos de vida de ").concat(this.getName()));
        this.sumarExperiencia(dmg);
    };
    Brujo.prototype.defensaMagica = function () {
        this.setDefMagica(this.getDefMagica() * 1.20);
        console.log("".concat(this.getName(), " aumento su indice de defensa magica un 20%"));
    };
    Brujo.prototype.defensaFisica = function () {
        this.setDefFisica(this.getDefFisica() * 1.20);
        console.log("".concat(this.getName(), " aumento su indice de defensa fisica un 20%"));
    };
    Brujo.prototype.curar = function () {
        this.setVida(this.getVida() + 30);
        console.log("".concat(this.getName(), " aumento 30 puntos de vida"));
    };
    Brujo.prototype.usarHabilidad = function (heroe, target) {
        var random = Math.floor(Math.random() * this.habilidades.length);
        if (this.habilidades[random].getTipo() == "Defensa") {
            this.habilidades[random].habilidadDef(heroe);
        }
        else {
            this.habilidades[random].habilidadAtk(heroe, target);
        }
    };
    Brujo.prototype.abrirCaja = function () {
        var nuevaHabilidad = Math.floor(Math.random() * 2) + 1;
        switch (nuevaHabilidad) {
            case 1:
                this.habilidades.push(new Habilidad_1.Habilidad("Rezar", "Defensa", null, function (heroe) {
                    console.log("".concat(heroe.getName(), " esta hablando en un idioma extra\u00F1o, no tiene ningun efecto."));
                }, 1));
                this.setAbrioCaja(true);
                break;
            case 2:
                this.habilidades.push(new Habilidad_1.Habilidad("Destructor", "Ataque", null, function (target) {
                    var dmg = 60;
                    target.setVida(target.getVida() - dmg);
                    console.log("".concat(target.getName(), " ha recibido un ataque demasiado fuerte y perdio ").concat(dmg, " puntos de vida."));
                }, 2));
                this.setAbrioCaja(true);
                break;
        }
        console.log("".concat(this.getName(), " abrio la caja"));
    };
    return Brujo;
}(Heroe_1.Heroe));
exports.Brujo = Brujo;

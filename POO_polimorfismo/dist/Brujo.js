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
var habilidadesBrujo_1 = require("./habilidadesBrujo");
var Brujo = /** @class */ (function (_super) {
    __extends(Brujo, _super);
    function Brujo(nuevoNombre) {
        var _this = _super.call(this, nuevoNombre) || this;
        _this.habilidades = [];
        _this.vida = 50;
        _this.atkFisico = 1;
        _this.atkMagico = 1;
        _this.defFisica = 20;
        _this.defMagica = 20;
        _this.habilidades = [habilidadesBrujo_1.EnfocarDefensa, habilidadesBrujo_1.Maldecir];
        habilidadesBrujo_1.EnfocarDefensa.usuario = _this;
        habilidadesBrujo_1.Maldecir.usuario = _this;
        habilidadesBrujo_1.Meditacion.usuario = _this;
        return _this;
    }
    Brujo.prototype.ataqueMagico = function (heroe) {
        var dmg = this.atkMagico * (1 - (heroe.defMagica / 100));
        heroe.vida -= dmg;
        console.log("".concat(heroe.nombre, " recibio un ataque de ").concat(dmg, " puntos de vida de ").concat(this.nombre));
        this.sumarExperiencia(dmg);
    };
    Brujo.prototype.ataqueFisico = function (heroe) {
        var dmg = this.atkFisico * (1 - (heroe.defFisica / 100));
        heroe.vida -= dmg;
        console.log("".concat(heroe.nombre, " recibio un ataque de ").concat(dmg, " puntos de vida de ").concat(this.nombre));
        this.sumarExperiencia(dmg);
    };
    Brujo.prototype.defensaMagica = function () {
        this.defMagica = this.defMagica * 1.20;
        console.log("".concat(this.nombre, " aumento su defensa magica un 20%"));
    };
    Brujo.prototype.defensaFisica = function () {
        this.defFisica = this.defFisica * 1.20;
        console.log("".concat(this.nombre, " aumento su defensa fisica un 20%"));
    };
    Brujo.prototype.curar = function () {
        this.vida += 20;
        console.log("".concat(this.nombre, " se curo 40 puntos de vida"));
    };
    Brujo.prototype.usarHabilidad = function (heroe, target) {
        var random = Math.floor(Math.random() * this.habilidades.length);
        if (this.habilidades[random].tipo == "Defensa") {
            this.habilidades[random].habilidadDef(heroe);
        }
        else {
            this.habilidades[random].habilidadAtk(heroe, target);
        }
    };
    return Brujo;
}(Heroe_1.Heroe));
exports.Brujo = Brujo;

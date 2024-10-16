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
exports.Mago = void 0;
var Heroe_1 = require("./Heroe");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nuevoNombre) {
        var _this = _super.call(this, nuevoNombre) || this;
        _this.vida = 100;
        _this.atkFisico = 0;
        _this.atkMagico = 10;
        _this.defFisica = 10;
        _this.defMagica = 20;
        return _this;
    }
    Mago.prototype.ataqueMagico = function (heroe) {
        var dmg = this.atkMagico * (1 - (heroe.defMagica / 100));
        heroe.vida -= dmg;
        console.log("".concat(heroe.nombre, " recibio un ataque de ").concat(dmg, " puntos de vida de ").concat(this.nombre));
    };
    Mago.prototype.ataqueFisico = function (heroe) {
        var dmg = this.atkFisico * (1 - (heroe.defFisica / 100));
        heroe.vida -= dmg;
        console.log("".concat(heroe.nombre, " recibio un ataque de ").concat(dmg, " puntos de vida de ").concat(this.nombre));
    };
    Mago.prototype.defensaMagica = function () {
        this.defMagica = this.defMagica * 1.20;
        console.log("".concat(this.nombre, " aumento su defensa magica un 20%"));
    };
    Mago.prototype.defensaFisica = function () {
        this.defFisica = this.defFisica * 1.20;
        console.log("".concat(this.nombre, " aumento su defensa fisica un 20%"));
    };
    Mago.prototype.curar = function () {
        this.vida += 20;
        console.log("".concat(this.nombre, " se curo 20 puntos de vida"));
    };
    return Mago;
}(Heroe_1.Heroe));
exports.Mago = Mago;

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
var Luchador = /** @class */ (function (_super) {
    __extends(Luchador, _super);
    function Luchador(nuevoNombre) {
        var _this = _super.call(this, nuevoNombre) || this;
        _this.vida = 100;
        _this.atkFisico = 25;
        _this.atkMagico = 0;
        _this.defFisica = 20;
        _this.defMagica = 5;
        return _this;
    }
    Luchador.prototype.ataqueMagico = function (heroe) {
        var dmg = this.atkMagico * (1 - (heroe.defMagica / 100));
        heroe.vida -= dmg;
        console.log("".concat(heroe.nombre, " recibio un ataque de ").concat(dmg, " puntos de vida de ").concat(this.nombre));
    };
    Luchador.prototype.ataqueFisico = function (heroe) {
        var dmg = this.atkFisico * (1 - (heroe.defFisica / 100));
        heroe.vida -= dmg;
        console.log("".concat(heroe.nombre, " recibio un ataque de ").concat(dmg, " puntos de vida de ").concat(this.nombre));
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
    return Luchador;
}(Heroe_1.Heroe));
exports.Luchador = Luchador;

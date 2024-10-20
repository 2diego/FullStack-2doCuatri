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
        _this.setVida(150);
        _this.setAtkFisico(20, "Flecha certera");
        _this.setAtkMagico(8, "Lluvia de flechas");
        _this.setDefFisica(50);
        _this.setDefMagica(10);
        _this.habilidades = [habilidadesArquero_1.EnfocarDefensa, habilidadesArquero_1.EnfocarAtaque, habilidadesArquero_1.FlechaPesada, habilidadesArquero_1.Meditacion];
        habilidadesArquero_1.EnfocarDefensa.setUsuario(_this);
        habilidadesArquero_1.EnfocarAtaque.setUsuario(_this);
        habilidadesArquero_1.FlechaPesada.setUsuario(_this);
        habilidadesArquero_1.Meditacion.setUsuario(_this);
        return _this;
    }
    Arquero.prototype.getHabilidades = function () {
        var _this = this;
        var habilidadesDesbloqueadas = this.habilidades.filter(function (hab) { return hab.getNivel() <= _this.getNivel(); });
        return habilidadesDesbloqueadas.map(function (hab) { return hab.getNombre(); });
    };
    Arquero.prototype.ataqueFisico = function (target) {
        var dmg = this.getAtkFisico() * (1 - (target.getDefFisica() / 100));
        target.setVida(target.getVida() - dmg);
        console.log("".concat(target.getName(), " recibio un ataque de ").concat(dmg, " puntos de vida de ").concat(this.getName()));
        this.sumarExperiencia(dmg);
    };
    Arquero.prototype.ataqueMagico = function (target) {
        var repetir = Math.floor(Math.random() * 3) + 1;
        var dmg = (this.getAtkMagico() * (1 - (target.getDefFisica() / 100))) * repetir;
        target.setVida(target.getVida() - dmg);
        console.log("".concat(target.getName(), " recibio un ataque de ").concat(repetir, " flecha/s por un total de ").concat(dmg, " puntos de vida de ").concat(this.getName()));
        this.sumarExperiencia(dmg);
    };
    Arquero.prototype.defensaMagica = function () {
        this.setDefMagica(this.getDefMagica() * 1.20);
        console.log("".concat(this.getName(), " aumento su indice de defensa magica un 20%"));
    };
    Arquero.prototype.defensaFisica = function () {
        this.setDefFisica(this.getDefFisica() * 1.20);
        console.log("".concat(this.getName(), " aumento su indice de defensa fisica un 20%"));
    };
    Arquero.prototype.curar = function () {
        this.setVida(this.getVida() + 30);
        console.log("".concat(this.getName(), " aumento 30 puntos de vida"));
    };
    Arquero.prototype.usarHabilidad = function (heroe, target) {
        var habilidadesDesbloqueadas = this.habilidades.filter(function (hab) { return hab.getNivel() <= heroe.getNivel(); });
        var random = Math.floor(Math.random() * habilidadesDesbloqueadas.length);
        if (habilidadesDesbloqueadas[random].getTipo() == "Defensa") {
            habilidadesDesbloqueadas[random].efectoHabilidad(heroe);
        }
        else {
            habilidadesDesbloqueadas[random].efectoHabilidad(target);
        }
    };
    Arquero.prototype.abrirCaja = function () {
        var nuevaHabilidad = Math.floor(Math.random() * 2) + 1;
        switch (nuevaHabilidad) {
            case 1:
                this.habilidades.push(new Habilidad_1.Habilidad("Juntar flechas", "Defensa", null, function (heroe) {
                    console.log("".concat(heroe.getName(), " esta juntando flechas, pierde este turno."));
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
    return Arquero;
}(Heroe_1.Heroe));
exports.Arquero = Arquero;

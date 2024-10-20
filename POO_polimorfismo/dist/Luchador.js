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
        _this.setVida(100);
        _this.setAtkFisico(25, "Uppercut");
        _this.setAtkMagico(0, "Golpe energetico destructor");
        _this.setDefFisica(30);
        _this.setDefMagica(10);
        _this.habilidades = [habilidadesLuchador_1.EnfocarDefensa, habilidadesLuchador_1.EnfocarAtaque, habilidadesLuchador_1.LanzaRocas, habilidadesLuchador_1.Meditacion];
        habilidadesLuchador_1.EnfocarDefensa.setUsuario(_this);
        habilidadesLuchador_1.EnfocarAtaque.setUsuario(_this);
        habilidadesLuchador_1.LanzaRocas.setUsuario(_this);
        habilidadesLuchador_1.Meditacion.setUsuario(_this);
        return _this;
    }
    Luchador.prototype.getHabilidades = function () {
        var _this = this;
        var habilidadesDesbloqueadas = this.habilidades.filter(function (hab) { return hab.getNivel() <= _this.getNivel(); });
        return habilidadesDesbloqueadas.map(function (hab) { return hab.getNombre(); });
    };
    Luchador.prototype.ataqueMagico = function (target) {
        console.log("".concat(this.getName(), " se concentra pero no ocurre nada..."));
    };
    Luchador.prototype.ataqueFisico = function (target) {
        var dmg = this.getAtkFisico() * (1 - (target.getDefFisica() / 100));
        target.setVida(target.getVida() - dmg);
        console.log("".concat(target.getName(), " recibio un ataque de ").concat(dmg, " puntos de vida de ").concat(this.getName()));
        this.sumarExperiencia(dmg);
    };
    Luchador.prototype.defensaMagica = function () {
        this.setDefMagica(this.getDefMagica() * 1.20);
        console.log("".concat(this.getName(), " aumento su indice de defensa magica un 20%"));
    };
    Luchador.prototype.defensaFisica = function () {
        this.setDefFisica(this.getDefFisica() * 1.20);
        console.log("".concat(this.getName(), " aumento su indice de defensa fisica un 20%"));
    };
    Luchador.prototype.curar = function () {
        this.setVida(this.getVida() + 20);
        console.log("".concat(this.getName(), " aumento 20 puntos de vida"));
    };
    Luchador.prototype.usarHabilidad = function (heroe, target) {
        var habilidadesDesbloqueadas = this.habilidades.filter(function (hab) { return hab.getNivel() <= heroe.getNivel(); });
        var random = Math.floor(Math.random() * habilidadesDesbloqueadas.length);
        if (habilidadesDesbloqueadas[random].getTipo() == "Defensa") {
            habilidadesDesbloqueadas[random].habilidadDef(heroe);
        }
        else {
            habilidadesDesbloqueadas[random].habilidadAtk(heroe, target);
        }
    };
    Luchador.prototype.abrirCaja = function () {
        var nuevaHabilidad = Math.floor(Math.random() * 2) + 1;
        switch (nuevaHabilidad) {
            case 1:
                this.habilidades.push(new Habilidad_1.Habilidad("Estirar", "Defensa", null, function (heroe) {
                    console.log("".concat(heroe.getName(), " esta elongando, pierde este turno."));
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
    return Luchador;
}(Heroe_1.Heroe));
exports.Luchador = Luchador;

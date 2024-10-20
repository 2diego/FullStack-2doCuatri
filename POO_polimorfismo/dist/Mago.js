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
var Habilidad_1 = require("./Habilidad");
var habilidadesMago_1 = require("./habilidadesMago");
var habilidadesLuchador_1 = require("./habilidadesLuchador");
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nuevoNombre) {
        var _this = _super.call(this, nuevoNombre) || this;
        _this.habilidades = [];
        _this.setVida(100);
        _this.setAtkFisico(0, "Rayo");
        _this.setAtkMagico(25, "Liberar energia");
        _this.setDefFisica(7);
        _this.setDefMagica(30);
        _this.habilidades = [habilidadesMago_1.EnfocarDefensa, habilidadesLuchador_1.EnfocarAtaque, habilidadesMago_1.BolaDeFuego, habilidadesMago_1.Meditacion];
        habilidadesMago_1.EnfocarDefensa.setUsuario(_this);
        habilidadesLuchador_1.EnfocarAtaque.setUsuario(_this);
        habilidadesMago_1.BolaDeFuego.setUsuario(_this);
        habilidadesMago_1.Meditacion.setUsuario(_this);
        return _this;
    }
    Mago.prototype.getHabilidades = function () {
        var _this = this;
        var habilidadesDesbloqueadas = this.habilidades.filter(function (hab) { return hab.getNivel() <= _this.getNivel(); });
        return habilidadesDesbloqueadas.map(function (hab) { return hab.getNombre(); });
    };
    Mago.prototype.ataqueMagico = function (target) {
        var dmg = this.getAtkMagico() * (1 - (target.getDefMagica() / 100));
        target.setVida(target.getVida() - dmg);
        console.log("".concat(target.getName(), " recibio un ataque de ").concat(dmg, " puntos de vida de ").concat(this.getName()));
        this.sumarExperiencia(dmg);
    };
    Mago.prototype.ataqueFisico = function (target) {
        var random = Math.floor(Math.random() * 10) + 1;
        if (random <= 8) {
            var dmg = (this.getAtkFisico() * (1 - (target.getDefFisica() / 100))) + 20;
            target.setVida(target.getVida() - dmg);
            console.log("Las nubes favorecen a ".concat(this.getName(), ", ").concat(target.getName(), " recibio un ataque de ").concat(dmg, " puntos de vida"));
            this.sumarExperiencia(dmg);
        }
        else {
            console.log("No hay nubes, ".concat(this.getName(), " no pudo lanzar un rayo"));
        }
    };
    Mago.prototype.defensaMagica = function () {
        this.setDefMagica(this.getDefMagica() * 1.20);
        console.log("".concat(this.getName(), " aumento su indice de defensa magica un 20%"));
    };
    Mago.prototype.defensaFisica = function () {
        this.setDefFisica(this.getDefFisica() * 1.20);
        console.log("".concat(this.getName(), " aumento su indice de defensa fisica un 20%"));
    };
    Mago.prototype.curar = function () {
        this.setVida(this.getVida() + 20);
        console.log("".concat(this.getName(), " aumento 20 puntos de vida"));
    };
    Mago.prototype.usarHabilidad = function (heroe, target) {
        var habilidadesDesbloqueadas = this.habilidades.filter(function (hab) { return hab.getNivel() <= heroe.getNivel(); });
        var random = Math.floor(Math.random() * habilidadesDesbloqueadas.length);
        if (habilidadesDesbloqueadas[random].getTipo() == "Defensa") {
            habilidadesDesbloqueadas[random].efectoHabilidad(heroe);
        }
        else {
            habilidadesDesbloqueadas[random].efectoHabilidad(target);
        }
    };
    Mago.prototype.abrirCaja = function () {
        var nuevaHabilidad = Math.floor(Math.random() * 2) + 1;
        switch (nuevaHabilidad) {
            case 1:
                this.habilidades.push(new Habilidad_1.Habilidad("Levitar", "Defensa", null, function (heroe) {
                    console.log("".concat(heroe.getName(), " esta levitando, no tiene ningun efecto."));
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
    return Mago;
}(Heroe_1.Heroe));
exports.Mago = Mago;

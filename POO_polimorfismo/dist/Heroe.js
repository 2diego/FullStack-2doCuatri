"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Heroe = void 0;
var Heroe = /** @class */ (function () {
    function Heroe(nuevoNombre) {
        this.nivel = 1;
        this.experiencia = 0;
        this.atkFisico = { puntos: 0, name: "Ataque Fisico" };
        this.atkMagico = { puntos: 0, name: "Ataque Magico" };
        this.abrioCaja = false;
        this.nombre = nuevoNombre;
    }
    //GETTERS
    Heroe.prototype.getName = function () {
        return this.nombre;
    };
    Heroe.prototype.getNivel = function () {
        return this.nivel;
    };
    Heroe.prototype.getVida = function () {
        return this.vida;
    };
    Heroe.prototype.getAtkFisico = function () {
        return this.atkFisico.puntos;
    };
    Heroe.prototype.getNombreAtkFisico = function () {
        return this.atkFisico.name;
    };
    Heroe.prototype.getAtkMagico = function () {
        return this.atkMagico.puntos;
    };
    Heroe.prototype.getNombreAtkMagico = function () {
        return this.atkMagico.name;
    };
    Heroe.prototype.getDefFisica = function () {
        return this.defFisica;
    };
    Heroe.prototype.getDefMagica = function () {
        return this.defMagica;
    };
    Heroe.prototype.getAbrioCaja = function () {
        return this.abrioCaja;
    };
    //SETTERS
    Heroe.prototype.setNivel = function (nuevoNivel) {
        this.nivel = nuevoNivel;
    };
    Heroe.prototype.setVida = function (nuevaVida) {
        this.vida = nuevaVida;
    };
    Heroe.prototype.setAtkFisico = function (puntos, name) {
        this.atkFisico.puntos = puntos;
        this.atkFisico.name = name;
    };
    Heroe.prototype.setAtkMagico = function (puntos, name) {
        this.atkMagico.puntos = puntos;
        this.atkMagico.name = name;
    };
    Heroe.prototype.setDefFisica = function (nuevoDefFisica) {
        this.defFisica = nuevoDefFisica;
    };
    Heroe.prototype.setDefMagica = function (nuevoDefMagica) {
        this.defMagica = nuevoDefMagica;
    };
    Heroe.prototype.setAbrioCaja = function (nuevoAbrioCaja) {
        this.abrioCaja = nuevoAbrioCaja;
    };
    Heroe.prototype.sumarExperiencia = function (dmg) {
        this.experiencia += dmg;
        console.log("".concat(this.nombre, " ha ganado ").concat(dmg, " puntos de experiencia. Experiencia total: ").concat(this.experiencia));
        this.verificarNivel();
    };
    Heroe.prototype.verificarNivel = function () {
        if (this.experiencia >= 100) {
            this.nivel++;
            this.experiencia -= 100;
            console.log("".concat(this.nombre, " ha subido de nivel! Ahora es nivel ").concat(this.nivel, "."));
        }
    };
    return Heroe;
}());
exports.Heroe = Heroe;

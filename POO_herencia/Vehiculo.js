"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, year) {
        this.marca = marca;
        this.modelo = modelo;
        this.year = year;
    }
    //Setters
    Vehiculo.prototype.setMarca = function (nuevaMarca) {
        this.marca = nuevaMarca;
    };
    Vehiculo.prototype.setModelo = function (nuevoModelo) {
        this.modelo = nuevoModelo;
    };
    Vehiculo.prototype.setYear = function (nuevoYear) {
        this.year = nuevoYear;
    };
    //Getters
    Vehiculo.prototype.getMarca = function () {
        return this.marca;
    };
    Vehiculo.prototype.getModelo = function () {
        return this.modelo;
    };
    Vehiculo.prototype.getYear = function () {
        return this.year;
    };
    Vehiculo.prototype.getPatente = function () {
        return this.patente;
    };
    return Vehiculo;
}());
exports.Vehiculo = Vehiculo;

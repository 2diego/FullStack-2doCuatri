"use strict";
/*Implementar la clase RegistroAutomotor
(Autos, Motos, Camiones) y deben tener los
metodos:
• AgregarVehiculo, get y set, modificar un
vehiculo, dar de baja*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motos = void 0;
var Motos = /** @class */ (function () {
    function Motos(nuevaMarca, nuevoModelo, nuevoAño, nuevaPatente) {
        this.marca = nuevaMarca;
        this.modelo = nuevoModelo;
        this.año = nuevoAño;
        this.patente = nuevaPatente;
    }
    //GET
    Motos.prototype.getMarca = function () {
        return this.marca;
    };
    Motos.prototype.getModelo = function () {
        return this.modelo;
    };
    Motos.prototype.getAño = function () {
        return this.año;
    };
    Motos.prototype.getPatente = function () {
        return this.patente;
    };
    //SET
    Motos.prototype.setMarca = function (nuevaMarca) {
        this.marca = nuevaMarca;
    };
    Motos.prototype.setModelo = function (nuevoModelo) {
        this.modelo = nuevoModelo;
    };
    Motos.prototype.setAño = function (nuevoAño) {
        this.año = nuevoAño;
    };
    Motos.prototype.setPatente = function (nuevaPatente) {
        this.patente = nuevaPatente;
    };
    return Motos;
}());
exports.Motos = Motos;

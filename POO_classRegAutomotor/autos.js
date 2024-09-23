"use strict";
/*Implementar la clase RegistroAutomotor
(Autos, Motos, Camiones) y deben tener los
metodos:
• AgregarVehiculo, get y set, modificar un
vehiculo, dar de baja*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autos = void 0;
var Autos = /** @class */ (function () {
    function Autos(nuevaMarca, nuevoModelo, nuevoAño, nuevaPatente) {
        this.marca = nuevaMarca;
        this.modelo = nuevoModelo;
        this.año = nuevoAño;
        this.patente = nuevaPatente;
    }
    //GET
    Autos.prototype.getMarca = function () {
        return this.marca;
    };
    Autos.prototype.getModelo = function () {
        return this.modelo;
    };
    Autos.prototype.getAño = function () {
        return this.año;
    };
    Autos.prototype.getPatente = function () {
        return this.patente;
    };
    //SET
    Autos.prototype.setMarca = function (nuevaMarca) {
        this.marca = nuevaMarca;
    };
    Autos.prototype.setModelo = function (nuevoModelo) {
        this.modelo = nuevoModelo;
    };
    Autos.prototype.setAño = function (nuevoAño) {
        this.año = nuevoAño;
    };
    Autos.prototype.setPatente = function (nuevaPatente) {
        this.patente = nuevaPatente;
    };
    return Autos;
}());
exports.Autos = Autos;

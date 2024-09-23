"use strict";
/*Implementar la clase RegistroAutomotor
(Autos, Motos, Camiones) y deben tener los
metodos:
• AgregarVehiculo, get y set, modificar un
vehiculo, dar de baja*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Camiones = void 0;
var Camiones = /** @class */ (function () {
    function Camiones(nuevaMarca, nuevoModelo, nuevoAño, nuevaPatente) {
        this.marca = nuevaMarca;
        this.modelo = nuevoModelo;
        this.año = nuevoAño;
        this.patente = nuevaPatente;
    }
    //GET
    Camiones.prototype.getMarca = function () {
        return this.marca;
    };
    Camiones.prototype.getModelo = function () {
        return this.modelo;
    };
    Camiones.prototype.getAño = function () {
        return this.año;
    };
    Camiones.prototype.getPatente = function () {
        return this.patente;
    };
    //SET
    Camiones.prototype.setMarca = function (nuevaMarca) {
        this.marca = nuevaMarca;
    };
    Camiones.prototype.setModelo = function (nuevoModelo) {
        this.modelo = nuevoModelo;
    };
    Camiones.prototype.setAño = function (nuevoAño) {
        this.año = nuevoAño;
    };
    Camiones.prototype.setPatente = function (nuevaPatente) {
        this.patente = nuevaPatente;
    };
    return Camiones;
}());
exports.Camiones = Camiones;

"use strict";
/*Implementar la clase RegistroAutomotor
(Autos, Motos, Camiones) y deben tener los
metodos:
• AgregarVehiculo, get y set, modificar un
vehiculo, dar de baja*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegAutomotor = void 0;
var RegAutomotor = /** @class */ (function () {
    function RegAutomotor(nuevaLocalidad, registrarAuto, registrarCamion, registrarMotos) {
        this.regAutos = [];
        this.regCamiones = [];
        this.regMotos = [];
        this.localidad = nuevaLocalidad;
        if (registrarAuto !== undefined) {
            this.regAutos.push(registrarAuto);
        }
        else {
            return;
        }
        if (registrarCamion !== undefined) {
            this.regCamiones.push(registrarCamion);
        }
        else {
            return;
        }
        if (registrarMotos !== undefined) {
            this.regMotos.push(registrarMotos);
        }
        else {
            return;
        }
    }
    //GET
    RegAutomotor.prototype.getAutos = function () {
        return this.regAutos;
    };
    RegAutomotor.prototype.getCamiones = function () {
        return this.regCamiones;
    };
    RegAutomotor.prototype.getMotos = function () {
        return this.regMotos;
    };
    //ADD
    RegAutomotor.prototype.addAuto = function (nuevoAuto) {
        this.regAutos.push(nuevoAuto);
    };
    RegAutomotor.prototype.addCamion = function (nuevoCamion) {
        this.regCamiones.push(nuevoCamion);
    };
    RegAutomotor.prototype.addMoto = function (nuevaMoto) {
        this.regMotos.push(nuevaMoto);
    };
    //DELETE
    RegAutomotor.prototype.deleteAuto = function (patente) {
        var index = this.regAutos.findIndex(function (auto) { return auto.getPatente() === patente; });
        if (index !== -1) {
            this.regAutos.splice(index, 1);
            return true;
        }
        return false;
    };
    RegAutomotor.prototype.deleteCamion = function (patente) {
        var index = this.regCamiones.findIndex(function (camion) { return camion.getPatente() === patente; });
        if (index !== -1) {
            this.regCamiones.splice(index, 1);
            return true;
        }
        return false;
    };
    RegAutomotor.prototype.deleteMoto = function (patente) {
        var index = this.regMotos.findIndex(function (moto) { return moto.getPatente() === patente; });
        if (index !== -1) {
            this.regMotos.splice(index, 1);
            return true;
        }
        return false;
    };
    return RegAutomotor;
}());
exports.RegAutomotor = RegAutomotor;

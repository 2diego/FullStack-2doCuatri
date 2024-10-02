"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegAutomotor = void 0;
var RegAutomotor = /** @class */ (function () {
    function RegAutomotor(nuevaLocalidad) {
        this.regAutos = [];
        this.regMotos = [];
        this.regCamiones = [];
        this.localidad = nuevaLocalidad;
    }
    //Setters
    RegAutomotor.prototype.setLocalidad = function (nuevaLocalidad) {
        this.localidad = nuevaLocalidad;
    };
    RegAutomotor.prototype.addAuto = function (nuevoAuto) {
        this.regAutos.push(nuevoAuto);
    };
    RegAutomotor.prototype.addMoto = function (nuevaMoto) {
        this.regMotos.push(nuevaMoto);
    };
    RegAutomotor.prototype.addCamion = function (nuevoCamion) {
        this.regCamiones.push(nuevoCamion);
    };
    //Getters
    RegAutomotor.prototype.getLocalidad = function () {
        return this.localidad;
    };
    RegAutomotor.prototype.getAutos = function () {
        return this.regAutos;
    };
    RegAutomotor.prototype.getMotos = function () {
        return this.regMotos;
    };
    RegAutomotor.prototype.getCamiones = function () {
        return this.regCamiones;
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

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RegAutomotor_1 = require("./RegAutomotor");
var Auto_1 = require("./Auto");
var Moto_1 = require("./Moto");
var Camion_1 = require("./Camion");
var readlineSync = require("readline-sync");
var regAutomotor = new RegAutomotor_1.RegAutomotor("Buenos Aires");
function crearAuto() {
    var marca = readlineSync.question("Marca del Auto: ");
    var modelo = readlineSync.question("Modelo del Auto: ");
    var year = parseInt(readlineSync.question("Anio del Auto: "));
    var patente = readlineSync.question("Patente del Auto (6 digitos): ");
    var auto = new Auto_1.Auto(marca, modelo, year, patente);
    regAutomotor.addAuto(auto);
    console.log("Auto ".concat(marca, " ").concat(modelo, " ").concat(year, " patente ").concat(patente, " agregado con exito."));
}
function crearMoto() {
    var marca = readlineSync.question("Marca de la Moto: ");
    var modelo = readlineSync.question("Modelo de la Moto: ");
    var year = parseInt(readlineSync.question("Anio de la Moto: "));
    var patente = readlineSync.question("Patente de la Moto (4 digitos): ");
    var moto = new Moto_1.Moto(marca, modelo, year, patente);
    regAutomotor.addMoto(moto);
    console.log("Moto ".concat(marca, " ").concat(modelo, " ").concat(year, " patente ").concat(patente, " agregada con exito."));
}
function crearCamion() {
    var marca = readlineSync.question("Marca del Camion: ");
    var modelo = readlineSync.question("Modelo del Camion: ");
    var year = parseInt(readlineSync.question("Anio del Camion: "));
    var patente = readlineSync.question("Patente del Camion (8 digitos): ");
    var camion = new Camion_1.Camion(marca, modelo, year, patente);
    regAutomotor.addCamion(camion);
    console.log("Camion ".concat(marca, " ").concat(modelo, " ").concat(year, " patente ").concat(patente, " agregado con exito."));
}
function verVehiculos() {
    console.log("\nAutos registrados:");
    regAutomotor.getAutos().forEach(function (auto) {
        console.log("- ".concat(auto.getMarca(), " ").concat(auto.getModelo(), " (").concat(auto.getYear(), ") - Patente: ").concat(auto.getPatente()));
    });
    console.log("\nMotos registradas:");
    regAutomotor.getMotos().forEach(function (moto) {
        console.log("- ".concat(moto.getMarca(), " ").concat(moto.getModelo(), " (").concat(moto.getYear(), ") - Patente: ").concat(moto.getPatente()));
    });
    console.log("\nCamiones registrados:");
    regAutomotor.getCamiones().forEach(function (camion) {
        console.log("- ".concat(camion.getMarca(), " ").concat(camion.getModelo(), " (").concat(camion.getYear(), ") - Patente: ").concat(camion.getPatente()));
    });
}
function borrarVehiculo() {
    var tipo = readlineSync.question("¿Que tipo de vehiculo desea borrar? (auto/moto/camion): ").toLowerCase();
    var patente = readlineSync.question("Ingrese la patente del vehiculo a borrar: ");
    var eliminado = false;
    switch (tipo) {
        case 'auto':
            eliminado = regAutomotor.deleteAuto(patente);
            break;
        case 'moto':
            eliminado = regAutomotor.deleteMoto(patente);
            break;
        case 'camion':
            eliminado = regAutomotor.deleteCamion(patente);
            break;
        default:
            console.log("Tipo de vehiculo no reconocido.");
    }
    if (eliminado) {
        console.log("Vehiculo con patente ".concat(patente, " eliminado con exito."));
    }
    else {
        console.log("No se encontro un vehiculo con la patente ".concat(patente, "."));
    }
}
function menu() {
    while (true) {
        console.log("\n=== Registro Automotor ===");
        console.log("1. Crear Auto");
        console.log("2. Crear Moto");
        console.log("3. Crear Camion");
        console.log("4. Ver Vehiculos");
        console.log("5. Borrar Vehiculo");
        console.log("6. Salir");
        var opcion = readlineSync.question("Seleccione una opcion: ");
        switch (opcion) {
            case '1':
                crearAuto();
                break;
            case '2':
                crearMoto();
                break;
            case '3':
                crearCamion();
                break;
            case '4':
                verVehiculos();
                break;
            case '5':
                borrarVehiculo();
                break;
            case '6':
                console.log("Saliendo del programa...");
                return;
            default:
                console.log("Opcion no valida, intente de nuevo.");
        }
    }
}
menu();

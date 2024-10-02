"use strict";
/*Implementar la clase RegistroAutomotor
(Autos, Motos, Camiones) y deben tener los
metodos:
• AgregarVehiculo, get y set, modificar un
vehiculo, dar de baja*/
Object.defineProperty(exports, "__esModule", { value: true });
var autos_1 = require("./autos");
var camiones_1 = require("./camiones");
var motos_1 = require("./motos");
var regAutomotor_1 = require("./regAutomotor");
var regAutomotorOlavarria = new regAutomotor_1.RegAutomotor("Olavarría");
var auto_1 = new autos_1.Autos("Ford", "Focus", 2010, "AAA111");
var auto_2 = new autos_1.Autos("Fiat", "Uno", 2012, "BBB222");
var camion_1 = new camiones_1.Camiones("Mercedes Benz", "Marca", 2019, "CCC333");
var camion_2 = new camiones_1.Camiones("Scania", "Marca2", 2010, "DDD444");
var moto_1 = new motos_1.Motos("Zanella", "Motito", 2004, "EEE555");
var moto_2 = new motos_1.Motos("Harley Davidson", "Chopper", 2013, "FFF666");
//add
regAutomotorOlavarria.addAuto(auto_1);
regAutomotorOlavarria.addAuto(auto_2);
regAutomotorOlavarria.addCamion(camion_1);
regAutomotorOlavarria.addCamion(camion_2);
regAutomotorOlavarria.addMoto(moto_1);
regAutomotorOlavarria.addMoto(moto_2);
//get
var autosOlavarria = regAutomotorOlavarria.getAutos();
console.log("Get antes del delete: ");
console.log(autosOlavarria);
//delete
regAutomotorOlavarria.deleteAuto("BBB222");
console.log("Get despues del delete: ");
console.log(autosOlavarria);
//set
var camionesOlavarria = regAutomotorOlavarria.getCamiones();
console.log("Camiones antes del set: ");
console.log(camionesOlavarria);
camion_1.setAño(2022);
camion_2.setPatente("SET123");
console.log("Camiones despues del set: ");
console.log(camionesOlavarria);

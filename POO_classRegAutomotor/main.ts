/*Implementar la clase RegistroAutomotor
(Autos, Motos, Camiones) y deben tener los
metodos:
• AgregarVehiculo, get y set, modificar un
vehiculo, dar de baja*/


/* preg
*extends
*get/set keywords
*/

import { Autos } from "./autos";
import { Camiones } from "./camiones";
import { Motos } from "./motos";
import { RegAutomotor } from "./regAutomotor";

const regAutomotorOlavarria = new RegAutomotor("Olavarría");

let auto_1 = new Autos("Ford", "Focus", 2010, "AAA111");
let auto_2 = new Autos("Fiat", "Uno", 2012, "BBB222");
let camion_1 = new Camiones("Mercedes Benz", "Marca", 2019, "CCC333");
let camion_2 = new Camiones("Scania", "Marca2", 2010, "DDD444");
let moto_1 = new Motos("Zanella", "Motito", 2004, "EEE555");
let moto_2 = new Motos("Harley Davidson", "Chopper", 2013, "FFF666");

//add
regAutomotorOlavarria.addAuto(auto_1);
regAutomotorOlavarria.addAuto(auto_2);
regAutomotorOlavarria.addCamion(camion_1);
regAutomotorOlavarria.addCamion(camion_2);
regAutomotorOlavarria.addMoto(moto_1);
regAutomotorOlavarria.addMoto(moto_2);

//get
let autosOlavarria = regAutomotorOlavarria.getAutos();
console.log("Get antes del delete: ")
console.log(autosOlavarria)

//delete
regAutomotorOlavarria.deleteAuto("BBB222");
console.log("Get despues del delete: ")
console.log(autosOlavarria)

/*Implementar la clase RegistroAutomotor
(Autos, Motos, Camiones) y deben tener los
metodos:
• AgregarVehiculo, get y set, modificar un
vehiculo, dar de baja*/

import { Autos } from "./autos";
import { Camiones } from "./camiones";
import { Motos } from "./motos";

export class RegAutomotor {
  private regAutos: Autos[];
  private regCamiones: Camiones[];
  private regMotos: Motos[];

  constructor (registrarAuto?: Autos, registrarCamion?: Camiones, registrarMotos?: Motos) {
    if (registrarAuto != undefined) {
      this.regAutos.push(registrarAuto)
    } else {
      return
    }

    if (registrarCamion != undefined) {
      this.regCamiones.push(registrarCamion)
    } else {
      return
    }

    if (registrarMotos != undefined) {
      this.regMotos.push(registrarMotos)
    } else {
      return
    }
  }
}
/*Implementar la clase RegistroAutomotor
(Autos, Motos, Camiones) y deben tener los
metodos:
• AgregarVehiculo, get y set, modificar un
vehiculo, dar de baja*/

import { Autos } from "./autos";
import { Camiones } from "./camiones";
import { Motos } from "./motos";

export class RegAutomotor {
  private localidad: string;
  private regAutos: Autos[] = [];
  private regCamiones: Camiones[] = [];
  private regMotos: Motos[] = [];

  constructor (nuevaLocalidad: string, registrarAuto?: Autos, registrarCamion?: Camiones, registrarMotos?: Motos) { //DEBERIA ESTAR VACIO?
    
    this.localidad = nuevaLocalidad;

    if (registrarAuto !== undefined) {
      this.regAutos.push(registrarAuto)
    } else {
      return
    }

    if (registrarCamion !== undefined) {
      this.regCamiones.push(registrarCamion)
    } else {
      return
    }

    if (registrarMotos !== undefined) {
      this.regMotos.push(registrarMotos)
    } else {
      return
    }
  }
//GET
  public getLocalidad(): string {
    return this.localidad;
  }

  public getAutos(): Autos[] {
    return this.regAutos;
  }

  public getCamiones(): Camiones[] { 
    return this.regCamiones;
  }

  public getMotos(): Motos[] {
    return this.regMotos;
  }
//ADD
  public addAuto(nuevoAuto: Autos): void {
    this.regAutos.push(nuevoAuto);
  }

  public addCamion(nuevoCamion: Camiones): void {
    this.regCamiones.push(nuevoCamion);
  }

  public addMoto(nuevaMoto: Motos): void {
    this.regMotos.push(nuevaMoto);
  }
//DELETE
  public deleteAuto(patente: string): boolean {
    let index = this.regAutos.findIndex(auto => auto.getPatente() === patente);
    if (index !== -1) {
      this.regAutos.splice(index, 1);
      return true;
    }
    return false;
  }

  public deleteCamion(patente: string): boolean {
    let index = this.regCamiones.findIndex(camion => camion.getPatente() === patente);
    if (index !== -1) {
      this.regCamiones.splice(index, 1);
      return true;
    }
    return false;
  }

  public deleteMoto(patente: string): boolean {
    let index = this.regMotos.findIndex(moto => moto.getPatente() === patente);
    if (index !== -1) {
      this.regMotos.splice(index, 1);
      return true;
    }
    return false;
  }

}
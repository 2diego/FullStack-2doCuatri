import { Vehiculo } from "./Vehiculo";

export class RegAutomotor {
  private regAutos: Vehiculo[] = [];
  private regMotos: Vehiculo[] = [];
  private regCamiones: Vehiculo[] = [];
  private localidad: string;

  constructor(nuevaLocalidad: string) {
    this.localidad = nuevaLocalidad;
  }

  //Setters
  public setLocalidad(nuevaLocalidad: string) {
    this.localidad = nuevaLocalidad;
  }

  public addAuto(nuevoAuto: Vehiculo): void {
    this.regAutos.push(nuevoAuto);
  }

  public addMoto(nuevaMoto: Vehiculo): void {
    this.regMotos.push(nuevaMoto);
  }

  public addCamion(nuevoCamion: Vehiculo): void {
    this.regCamiones.push(nuevoCamion);
  }

  //Getters
  public getLocalidad(): string {
    return this.localidad;
  }

  public getAutos(): Vehiculo[] {
    return this.regAutos;
  }

  public getMotos(): Vehiculo[] {
    return this.regMotos;
  } 

  public getCamiones(): Vehiculo[] {
    return this.regCamiones;
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
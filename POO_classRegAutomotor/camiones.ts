/*Implementar la clase RegistroAutomotor
(Autos, Motos, Camiones) y deben tener los
metodos:
• AgregarVehiculo, get y set, modificar un
vehiculo, dar de baja*/

export class Camiones {
  private marca: string;
  private modelo: string;
  private año: number;
  private patente: string;

  constructor (nuevaMarca: string, nuevoModelo: string, nuevoAño: number, nuevaPatente: string) {
    this.marca = nuevaMarca;
    this.modelo = nuevoModelo;
    this.año = nuevoAño;
    this.patente = nuevaPatente;
  }

  public getMarca(): string {
    return this.marca;
  }

  public getModelo(): string {
    return this.modelo;
  }

  public getAño(): number {
    return this.año;
  }

  public getPatente(): string {
    return this.patente;
  }

  public setMarca(nuevaMarca: string): void {
    this.marca = nuevaMarca;
  }

  public setModelo(nuevoModelo: string): void {
    this.modelo = nuevoModelo;
  }

  public setAño(nuevoAño: number): void {
    this.año = nuevoAño;
  }

  public setPatente(nuevaPatente: string): void {
    this.patente = nuevaPatente;
  }

}
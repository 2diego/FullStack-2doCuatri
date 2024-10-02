import { Vehiculo } from "./Vehiculo";

export class Auto extends Vehiculo {
  constructor(marca: string, modelo: string, year: number, patente: string) {
    super(marca, modelo, year);
    this.setPatente(patente);
  }

//Setters
public setPatente(nuevaPatente: string) {
  if (nuevaPatente.length == 6) {
    this.patente = nuevaPatente;
} else {
    console.log("La patente debe ser de 6 caracteres");
    }
  }
}
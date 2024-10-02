export class Vehiculo {
  private marca: string;
  private modelo: string;
  private year: number;
  protected patente!: string;

  constructor (marca: string, modelo: string, year: number) {
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
  }

  //Setters
  public setMarca(nuevaMarca: string) {
    this.marca = nuevaMarca;
  }

  public setModelo(nuevoModelo: string) {
    this.modelo = nuevoModelo;
  }

  public setYear(nuevoYear: number) {
    this.year = nuevoYear;
  }


  //Getters
  public getMarca(): string {
    return this.marca;
  }

  public getModelo(): string {
    return this.modelo;
  }

  public getYear(): number {
    return this.year;
  }

  public getPatente(): string {
    return this.patente;
  }
}
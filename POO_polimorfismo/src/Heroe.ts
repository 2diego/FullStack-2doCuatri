export abstract class Heroe {
  public nombre: string;
  public nivel: number = 1;
  public experiencia: number = 0; // if exp > 100, level up (recursiva)
  public vida: number;
  public atkFisico: number;
  public atkMagico: number;
  public defFisica: number;
  public defMagica: number;

  constructor(nuevoNombre: string) {
    this.nombre = nuevoNombre
  }

 abstract ataqueMagico(heroe: Heroe): void;

 abstract ataqueFisico(heroe: Heroe): void;

 abstract defensaMagica(): void;

 abstract defensaFisica(): void;

 abstract curar(): void;
}
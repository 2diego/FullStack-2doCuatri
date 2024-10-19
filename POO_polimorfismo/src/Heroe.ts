export abstract class Heroe {
  public nombre: string;
  public nivel: number = 1;
  public experiencia: number = 0;
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

 abstract usarHabilidad(heroe: Heroe, target?: Heroe): void;

 public sumarExperiencia(dmg: number): void {
  this.experiencia += dmg;
  console.log(`${this.nombre} ha ganado ${dmg} puntos de experiencia. Experiencia total: ${this.experiencia}`);
  this.verificarNivel();
}

private verificarNivel(): void {
  if (this.experiencia >= 100) {
    this.nivel++;
    this.experiencia -= 100;
    console.log(`${this.nombre} ha subido de nivel! Ahora es nivel ${this.nivel}.`);
  }
}
}
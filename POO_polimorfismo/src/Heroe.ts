export abstract class Heroe {
  private nombre: string;
  private nivel: number = 1;
  private experiencia: number = 0;
  private vida: number;
  private atkFisico: number;
  private atkMagico: number;
  private defFisica: number; //porcentaje
  private defMagica: number; //porcentaje
  private abrioCaja: boolean = false;

  constructor(nuevoNombre: string) {
    this.nombre = nuevoNombre
  }

  //GETTERS
public getName(): string {
  return this.nombre
}

public getNivel(): number {
  return this.nivel
}

public getVida(): number {
  return this.vida
}

public getAtkFisico(): number {
  return this.atkFisico
}

public getAtkMagico(): number {
  return this.atkMagico
}

public getDefFisica(): number {
  return this.defFisica
}

public getDefMagica(): number {
  return this.defMagica
}

public getAbrioCaja(): boolean {
  return this.abrioCaja
}

//SETTERS
public setNivel(nuevoNivel: number): void {
  this.nivel = nuevoNivel;
}

public setVida(nuevaVida: number): void {
  this.vida = nuevaVida;
}

public setAtkFisico(nuevoAtkFisico: number): void {
  this.atkFisico = nuevoAtkFisico;
}

public setAtkMagico(nuevoAtkMagico: number): void {
  this.atkMagico = nuevoAtkMagico;
}

public setDefFisica(nuevoDefFisica: number): void {
  this.defFisica = nuevoDefFisica;
}

public setDefMagica(nuevoDefMagica: number): void {
  this.defMagica = nuevoDefMagica;
}

public setAbrioCaja(nuevoAbrioCaja: boolean): void {
  this.abrioCaja = nuevoAbrioCaja;
}

//METODOS
 abstract ataqueMagico(target: Heroe): void;

 abstract ataqueFisico(target: Heroe): void;

 abstract defensaMagica(): void;

 abstract defensaFisica(): void;

 abstract curar(): void;

 abstract usarHabilidad(heroe: Heroe, target?: Heroe): void;

 abstract abrirCaja(): void;

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
import { Heroe } from "./Heroe";

export class Luchador extends Heroe {
  constructor(nuevoNombre: string) {
    super(nuevoNombre);
    this.vida = 100;
    this.atkFisico = 25;
    this.atkMagico = 0;
    this.defFisica = 20;
    this.defMagica = 5;
  }
  ataqueMagico(heroe: Heroe): void {
    let dmg = this.atkMagico * (1 - (heroe.defMagica/100))
    heroe.vida -= dmg;
    console.log(`${heroe.nombre} recibio un ataque de ${dmg} puntos de vida de ${this.nombre}`);
  }
  ataqueFisico(heroe: Heroe): void {
    let dmg = this.atkFisico * (1 - (heroe.defFisica/100))
    heroe.vida -= dmg;
    console.log(`${heroe.nombre} recibio un ataque de ${dmg} puntos de vida de ${this.nombre}`);
  }
  defensaMagica() {
    this.defMagica = this.defMagica * 1.20;
    console.log(`${this.nombre} aumento su defensa magica un 20%`);
  }
  defensaFisica(): void {
    this.defFisica = this.defFisica * 1.20;
    console.log(`${this.nombre} aumento su defensa fisica un 20%`);
  }
  curar(): void {
    this.vida += 20;
    console.log(`${this.nombre} se curo 10 puntos de vida`);
  }
}
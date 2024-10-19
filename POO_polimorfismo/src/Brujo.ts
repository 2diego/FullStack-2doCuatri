import { Heroe } from "./Heroe";
import { Habilidad } from "./Habilidad";
import { EnfocarDefensa, Maldecir, Meditacion } from "./habilidadesBrujo";

export class Brujo extends Heroe {
  public habilidades: Habilidad[] = [];
  constructor(nuevoNombre: string) {
    super(nuevoNombre);
    this.vida = 50;
    this.atkFisico = 1;
    this.atkMagico = 1;
    this.defFisica = 20;
    this.defMagica = 20;
    this.habilidades = [EnfocarDefensa, Maldecir];

    EnfocarDefensa.usuario = this;
    Maldecir.usuario = this;
    Meditacion.usuario = this;
  }
  public ataqueMagico(heroe: Heroe): void {
    let dmg = this.atkMagico * (1 - (heroe.defMagica/100))
    heroe.vida -= dmg;
    console.log(`${heroe.nombre} recibio un ataque de ${dmg} puntos de vida de ${this.nombre}`);
    this.sumarExperiencia(dmg);
  }
  public ataqueFisico(heroe: Heroe): void {
    let dmg = this.atkFisico * (1 - (heroe.defFisica/100))
    heroe.vida -= dmg;
    console.log(`${heroe.nombre} recibio un ataque de ${dmg} puntos de vida de ${this.nombre}`);
    this.sumarExperiencia(dmg);
  }
  public defensaMagica() {
    this.defMagica = this.defMagica * 1.20;
    console.log(`${this.nombre} aumento su defensa magica un 20%`);
  }
  public defensaFisica(): void {
    this.defFisica = this.defFisica * 1.20;
    console.log(`${this.nombre} aumento su defensa fisica un 20%`);
  }
  public curar(): void {
    this.vida += 20;
    console.log(`${this.nombre} se curo 40 puntos de vida`);
  }

  public usarHabilidad(heroe: Heroe, target?: Heroe): void {
    let random = Math.floor(Math.random() * this.habilidades.length);
     if (this.habilidades[random].tipo == "Defensa") {
      this.habilidades[random].habilidadDef(heroe);
     } else {
      this.habilidades[random].habilidadAtk(heroe, target);
     }
  }
}
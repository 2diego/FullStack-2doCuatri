import { Heroe } from "./Heroe";
import { Habilidad } from "./Habilidad";
import { EnfocarDefensa, LanzaRocas, Meditacion } from "./habilidadesLuchador";

export class Luchador extends Heroe {
  public habilidades: Habilidad[] = [];
  constructor(nuevoNombre: string) {
    super(nuevoNombre);
    this.vida = 100;
    this.atkFisico = 25;
    this.atkMagico = 0;
    this.defFisica = 15;
    this.defMagica = 5;
    this.habilidades = [EnfocarDefensa, LanzaRocas];

    EnfocarDefensa.usuario = this;
    LanzaRocas.usuario = this;
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
    console.log(`${this.nombre} se curo 10 puntos de vida`);
  }

  public usarHabilidad(heroe: Heroe, target?: Heroe): void {
    let random = Math.floor(Math.random() * this.habilidades.length);
     if (this.habilidades[random].tipo == "Defensa") {
      this.habilidades[random].habilidadDef(heroe);
     } else {
      this.habilidades[random].habilidadAtk(heroe, target);
     }
  }

  public abrirCaja(): void {
    let nuevaHabilidad = Math.floor(Math.random() * 2) + 1;
    switch (nuevaHabilidad) {
      case 1:
        this.habilidades.push(new Habilidad(
          "Salto alto",
          "Defensa",
          null,
          (heroe: Heroe) => {
            console.log(`${heroe.nombre} ha saltado muy alto, no tiene ningun efecto.`);
          },
          1
        ));
        this.abrioCaja = true;
        break;
      case 2:
        this.habilidades.push(new Habilidad(
          "Destructor",
          "Ataque",
          null,
          (target: Heroe) => {
            let dmg = 60;
            target.vida -= dmg;
            console.log(`${target.nombre} ha recibido un ataque demasiado fuerte y perdio ${dmg} puntos de vida.`);
          },
          2
        ));
        this.abrioCaja = true;
        break;
    }
    console.log(`${this.nombre} abrio la caja`);
  }
}
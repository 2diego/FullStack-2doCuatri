import { Heroe } from "./Heroe";
import { Habilidad } from "./Habilidad";
import { EnfocarDefensa, BolaDeFuego, Meditacion } from "./habilidadesMago";

export class Mago extends Heroe {
  public habilidades: Habilidad[] = [];
  constructor(nuevoNombre: string) {
    super(nuevoNombre);
    this.setVida(100);
    this.setAtkFisico(0);
    this.setAtkMagico(20);
    this.setDefFisica(7);
    this.setDefMagica(30);
    this.habilidades = [EnfocarDefensa, BolaDeFuego];

    EnfocarDefensa.setUsuario(this);
    BolaDeFuego.setUsuario(this);
    Meditacion.setUsuario(this);
  }
  
  public getHabilidades(): Habilidad[] {
    return this.habilidades;
  }

  public ataqueMagico(target: Heroe): void {
    let dmg = this.getAtkMagico() * (1 - (target.getDefMagica()/100))
    target.setVida(target.getVida() - dmg);
    console.log(`${target.getName()} recibio un ataque de ${dmg} puntos de vida de ${this.getName()}`);
    this.sumarExperiencia(dmg);
  }
  public ataqueFisico(target: Heroe): void {
    let dmg = this.getAtkFisico() * (1 - (target.getDefFisica()/100))
    target.setVida(target.getVida() - dmg);
    console.log(`${target.getName()} recibio un ataque de ${dmg} puntos de vida de ${this.getName()}`);
    this.sumarExperiencia(dmg);
  }
  public defensaMagica() {
    this.setDefMagica(this.getDefMagica() * 1.20);
    console.log(`${this.getName()} aumento su indice de defensa magica un 20%`);
  }
  public defensaFisica(): void {
    this.setDefFisica(this.getDefFisica() * 1.20);
    console.log(`${this.getName()} aumento su indice de defensa fisica un 20%`);
  }
  public curar(): void {
    this.setVida(this.getVida() + 20);
    console.log(`${this.getName()} aumento 20 puntos de vida`);
  }

  public usarHabilidad(heroe: Heroe, target?: Heroe): void {
    let random = Math.floor(Math.random() * this.habilidades.length);
     if (this.habilidades[random].getTipo() == "Defensa") {
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
          "Levitar",
          "Defensa",
          null,
          (heroe: Heroe) => {
            console.log(`${heroe.getName()} esta levitando, no tiene ningun efecto.`);
          },
          1
        ));
        this.setAbrioCaja(true);
        break;
      case 2:
        this.habilidades.push(new Habilidad(
          "Destructor",
          "Ataque",
          null,
          (target: Heroe) => {
            let dmg = 60;
            target.setVida(target.getVida() - dmg);
            console.log(`${target.getName()} ha recibido un ataque demasiado fuerte y perdio ${dmg} puntos de vida.`);
          },
          2
        ));
        this.setAbrioCaja(true);
        break;
    }
    console.log(`${this.getName()} abrio la caja`);
  }
}
import { Heroe } from "./Heroe";
import { Habilidad } from "./Habilidad";
import { EnfocarAtaque, EnfocarDefensa, LanzaRocas, Meditacion } from "./habilidadesLuchador";

export class Luchador extends Heroe {
  public habilidades: Habilidad[] = [];
  constructor(nuevoNombre: string) {
    super(nuevoNombre);
    this.setVida(100);
    this.setAtkFisico(25, "Uppercut");
    this.setAtkMagico(0, "Golpe energetico destructor");
    this.setDefFisica(30);
    this.setDefMagica(10);
    this.habilidades = [EnfocarDefensa, EnfocarAtaque, LanzaRocas, Meditacion];

    EnfocarDefensa.setUsuario(this);
    EnfocarAtaque.setUsuario(this);
    LanzaRocas.setUsuario(this);
    Meditacion.setUsuario(this);
  }

  public getHabilidades(): String[] {
    let habilidadesDesbloqueadas = this.habilidades.filter((hab) => hab.getNivel() <= this.getNivel());
    return habilidadesDesbloqueadas.map((hab) => hab.getNombre());
  }

  public ataqueMagico(target: Heroe): void {
    console.log(`${this.getName()} se concentra pero no ocurre nada...`);
  }

  public ataqueFisico(target: Heroe): void {
    let dmg: number = this.getAtkFisico() * (1 - (target.getDefFisica()/100))
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
    let habilidadesDesbloqueadas = this.habilidades.filter((hab) => hab.getNivel() <= heroe.getNivel());
    let random: number = Math.floor(Math.random() * habilidadesDesbloqueadas.length);
     if (habilidadesDesbloqueadas[random].getTipo() == "Defensa") {
      habilidadesDesbloqueadas[random].efectoHabilidad(heroe);
     } else {
      habilidadesDesbloqueadas[random].efectoHabilidad(target);
     }
  }

  public abrirCaja(): void {
    let nuevaHabilidad: number = Math.floor(Math.random() * 2) + 1;
    switch (nuevaHabilidad) {
      case 1:
        this.habilidades.push(new Habilidad(
          "Estirar",
          "Defensa",
          null,
          (heroe: Heroe) => {
            console.log(`${heroe.getName()} esta elongando, pierde este turno.`);
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
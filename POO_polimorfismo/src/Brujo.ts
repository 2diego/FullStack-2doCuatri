import { Heroe } from "./Heroe";
import { Habilidad } from "./Habilidad";
import { EnfocarDefensa, Maldecir, Meditacion } from "./habilidadesBrujo";
import { EnfocarAtaque } from "./habilidadesLuchador";

export class Brujo extends Heroe {
  public habilidades: Habilidad[] = [];
  constructor(nuevoNombre: string) {
    super(nuevoNombre);
    this.setVida(50);
    this.setAtkFisico(2, "Bandada de cuervos");
    this.setAtkMagico(5, "Mal de ojo");
    this.setDefFisica(50);
    this.setDefMagica(50);
    this.habilidades = [EnfocarDefensa, EnfocarAtaque, Maldecir, Meditacion];

    EnfocarDefensa.setUsuario(this);
    EnfocarAtaque.setUsuario(this);
    Maldecir.setUsuario(this);
    Meditacion.setUsuario(this);
  }

  public getHabilidades(): String[] {
    let habilidadesDesbloqueadas = this.habilidades.filter((hab) => hab.getNivel() <= this.getNivel());
    return habilidadesDesbloqueadas.map((hab) => hab.getNombre());
  }

  public ataqueMagico(target: Heroe): void {
    let dmg: number = this.getAtkMagico() * (1 - (target.getDefMagica()/100))
    target.setVida(target.getVida() - dmg);
    console.log(`${target.getName()} recibio un ataque de ${dmg} puntos de vida de ${this.getName()}`);
    this.sumarExperiencia(dmg);
  }

  public ataqueFisico(target: Heroe): void {
    let repetir: number = Math.floor(Math.random() * 3) + 1;
    let dmg: number = (this.getAtkFisico() * (1 - (target.getDefFisica()/100))) * repetir;
    target.setVida(target.getVida() - dmg);
    console.log(`${target.getName()} recibio un ataque ${repetir} cuervo/s por un total de ${dmg} puntos de vida de ${this.getName()}`);
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
    this.setVida(this.getVida() + 30);
    console.log(`${this.getName()} aumento 30 puntos de vida`);
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
          "Rezar",
          "Defensa",
          null,
          (heroe: Heroe) => {
            console.log(`${heroe.getName()} esta hablando en un idioma extraño, no tiene ningun efecto.`);
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
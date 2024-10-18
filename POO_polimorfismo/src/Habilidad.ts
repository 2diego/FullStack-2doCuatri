import { Heroe } from "./Heroe";
import { Luchador } from "./Luchador";
import { Mago } from "./Mago";
import { Arquero } from "./Arquero";

export class Habilidad {
  public nombre: string;
  public usuario: Mago | Arquero | Luchador;
  private efecto: (heroe?: Heroe, target?: Heroe) => void;
  public nivel: number;
  constructor(nuevaHabilidad: string, nuevoUsuario: Mago | Arquero | Luchador, nuevoEfecto: (heroe?: Heroe, target?: Heroe) => void, nivelMinimo: number) {
    this.nombre = nuevaHabilidad;
    this.usuario = nuevoUsuario;
    this.efecto = nuevoEfecto;
    this.nivel = nivelMinimo
  }

  public habilidadAtk(heroe: Heroe, target: Heroe): void {
    if (heroe.nivel >= this.nivel) {
      if (heroe instanceof this.usuario.constructor) {
        this.efecto(target);
      } else {
        console.log(`${heroe.nombre} no puede usar esta habilidad, solo ${this.usuario.constructor.name} puede.`);
      }
    } else {
      console.log(`Necesitas ser nivel ${this.nivel} para usar esta habilidad.`);
    }
  }

  public habilidadDef(heroe: Heroe): void {
    if (heroe.nivel >= this.nivel) {
      if (heroe instanceof this.usuario.constructor) {
        this.efecto(heroe);
      } else {
        console.log(`${heroe.nombre} no puede usar esta habilidad, solo ${this.usuario.constructor.name} puede.`);
      }
    } else {
      console.log(`Necesitas ser nivel ${this.nivel} para usar esta habilidad.`);
    }
  }
}
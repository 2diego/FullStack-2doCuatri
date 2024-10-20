import { Heroe } from "./Heroe";
import { Luchador } from "./Luchador";
import { Mago } from "./Mago";
import { Arquero } from "./Arquero";
import { Brujo } from "./Brujo";

export class Habilidad {
  private nombre: string;
  private tipo: string;
  private usuario: Mago | Arquero | Luchador | Brujo;
  private efecto: (heroe?: Heroe, target?: Heroe) => void;
  private nivel: number;
  constructor(nuevaHabilidad: string, nuevoTipo: string, nuevoUsuario: Mago | Arquero | Luchador | Brujo, nuevoEfecto: (heroe?: Heroe, target?: Heroe) => void, nivelMinimo: number) {
    this.nombre = nuevaHabilidad;
    this.tipo = nuevoTipo; 
    this.usuario = nuevoUsuario;
    this.efecto = nuevoEfecto;
    this.nivel = nivelMinimo
  }

  //GETTERS
  public getNivel(): number {
    return this.nivel;
  }

  public getTipo(): string {
    return this.tipo;
  }

//SETTERS
  public setUsuario(nuevoUsuario: Mago | Arquero | Luchador | Brujo): void {
    this.usuario = nuevoUsuario;
  }

//METODOS
  public habilidadAtk(heroe: Heroe, target: Heroe): void {
    if (this.verificarAcceso(heroe)) {
      this.efecto(target);
    }
  }

  public habilidadDef(heroe: Heroe): void {
    if (this.verificarAcceso(heroe)) {
      this.efecto(heroe);
    }
  }

  private verificarAcceso(heroe: Heroe): boolean {
    if (heroe.getNivel() < this.getNivel()) {
      console.log(`Necesitas ser nivel ${this.getNivel()} para usar esta habilidad.`);
      return false;
    }
    
    if (!(heroe instanceof this.usuario.constructor)) {
      console.log(`${heroe.getName()} no puede usar esta habilidad, solo ${this.usuario.constructor.name} puede.`);
      return false;
    }

    return true;
  }
}
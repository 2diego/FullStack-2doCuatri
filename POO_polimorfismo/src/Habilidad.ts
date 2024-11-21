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
  public getNombre(): string {
    return this.nombre;
  }

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
  public efectoHabilidad(target: Heroe): void {
      this.efecto(target);
  }
}
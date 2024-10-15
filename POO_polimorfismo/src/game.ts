import { Heroe } from "./Heroe";
import { Luchador } from "./Luchador";
import { Mago } from "./Mago";
import { Arquero } from "./Arquero";
import * as readlineSync from 'readline-sync';

// Ingresar nombre
// Elegir clase
// Match vs pc
function game(): void {
  console.log("--- BIENVENIDO A HEROES VS CPU ---");

  let nombre: string = readlineSync.question("Ingresa tu nombre: ");

  function playerClase(): Heroe {
    let clase: number = Number(readlineSync.question(`
      Clases disponibles:
    1. Luchador
    2. Mago
    3. Arquero
    Ingresa el numero de la clase de tu personaje: `));

    while (isNaN(clase) || clase < 1 || clase > 3) {
      console.log("Error: Debes ingresar un número valido entre 1 y 3.");
      clase = Number(readlineSync.question("Por favor, elige nuevamente: "));
    }

    switch (clase) {
      case 1:
        console.log("Has elegido luchador");
        return new Luchador(nombre);
      case 2:
        console.log("Has elegido mago");
        return new Mago(nombre);
      case 3:
        console.log("Has elegido arquero");
        return new Arquero(nombre);
      default:
        throw new Error("Error inesperado al seleccionar clase de jugador.");
    }
  };
  let player: Heroe = playerClase();

  function cpuClase(): Heroe {
    let random: number = Math.floor(Math.random() * 3) + 1;
    switch (random) {
      case 1:
        console.log("La CPU ha elegido luchador");
        return new Luchador("cpu");
      case 2:
        console.log("La CPU ha elegido mago");
        return new Mago("cpu");
      case 3:
        console.log("La CPU ha elegido arquero");
        return new Arquero("cpu");
      default:
        throw new Error("Error inesperado al asignar clase a la CPU.");
    }
  };
  let cpu: Heroe = cpuClase();

  while (player.vida > 0) {
    
  }

};

game();
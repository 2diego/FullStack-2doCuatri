import { Heroe } from "./Heroe";
import { Luchador } from "./Luchador";
import { Mago } from "./Mago";
import { Arquero } from "./Arquero";
import * as readlineSync from 'readline-sync';

export function game(): void {

  let nombre: string = readlineSync.question("Ingresa tu nombre: ");

  // Setup jugador
  function playerClase(): Heroe {
    let clase: number = Number(readlineSync.question(`
      Clases disponibles:
    1. Luchador
    2. Mago
    3. Arquero
    Ingresa el numero de la clase de tu personaje: `));

    while (isNaN(clase) || clase < 1 || clase > 3) {
      console.log("\nError: Debes ingresar un número valido entre 1 y 3.");
      clase = Number(readlineSync.question("\nPor favor, elige nuevamente: "));
    }

    switch (clase) {
      case 1:
        console.log("\nHas elegido luchador");
        return new Luchador(nombre);
      case 2:
        console.log("\nHas elegido mago");
        return new Mago(nombre);
      case 3:
        console.log("\nHas elegido arquero");
        return new Arquero(nombre);
      default:
        throw new Error("\nError inesperado al seleccionar clase de jugador.");
    }
  };
  let player: Heroe = playerClase();

  // Setup CPU
  function cpuClase(): Heroe {
    let random: number = Math.floor(Math.random() * 3) + 1;
    switch (random) {
      case 1:
        console.log("\nLa CPU ha elegido luchador");
        return new Luchador("CPU_Luchador");
      case 2:
        console.log("\nLa CPU ha elegido mago");
        return new Mago("CPU_Mago");
      case 3:
        console.log("\nLa CPU ha elegido arquero");
        return new Arquero("CPU_Arquero");
      default:
        throw new Error("\nError inesperado al asignar clase a la CPU.");
    }
  };

  // Combate por turnos
  function combate(player: Heroe, cpu: Heroe): void {
    console.log(`\n${player.nombre} se enfrentara a ${cpu.nombre}... `);

    while (player.vida > 0 && cpu.vida > 0) {
      // Turno del jugador
      console.log(`\n--- Turno de ${player.nombre} ---`);
      let accionJugador: number = Number(readlineSync.question(`\n
        Elige una accion:
        1. Ataque fisico
        2. Ataque magico
        3. Defensa fisica
        4. Defensa magica
        5. Curarse
        Ingresa el numero de tu accion: `));

      while (isNaN(accionJugador) || accionJugador < 1 || accionJugador > 5) {
        console.log("\nError: Debes ingresar un numero valido entre 1 y 5.");
        accionJugador = Number(readlineSync.question("\nPor favor, elige nuevamente: "));
      }

      switch (accionJugador) {
        case 1:
          console.log("\nEl jugador realiza un ataque fisico");
          player.ataqueFisico(cpu);
          break;
        case 2:
          console.log("\nEl jugador realiza un ataque magico");
          player.ataqueMagico(cpu);
          break;
        case 3:
          console.log("\nEl jugador aumenta su defensa fisica");
          player.defensaFisica();
          break;
        case 4:
          console.log("\nEl jugador aumenta su defensa magica");
          player.defensaMagica();
          break;
        case 5:
          console.log("\nEl jugador se cura");
          player.curar();
          break;
        default:
          throw new Error("\nError inesperado al seleccionar accion del jugador.");
      }

      // Verificar si la CPU ha sido derrotada
      if (cpu.vida <= 0) {
        console.log(`\n${cpu.nombre} ha sido derrotado. ¡Has ganado esta ronda!`);
        //player.vida = Math.min(player.vida + 30, 100); // Recuperar 30 puntos de vida sin superar 100
        //log player recupero vida
        return;
      }

      // Turno de la CPU
      console.log(`\n--- Turno de ${cpu.nombre} ---`);
      let accionCPU: number = Math.floor(Math.random() * 5) + 1;

      switch (accionCPU) {
        case 1:
          console.log("\nLa CPU realiza un ataque fisico");
          cpu.ataqueFisico(player);
          break;
        case 2:
          console.log("\nLa CPU realiza un ataque magico");
          cpu.ataqueMagico(player);
          break;
        case 3:
          console.log("\nLa CPU aumenta su defensa fisica");
          cpu.defensaFisica();
          break;
        case 4:
          console.log("\nLa CPU aumenta su defensa magica");
          cpu.defensaMagica();
          break;
        case 5:
          console.log("\nLa CPU se cura");
          cpu.curar();
          break;
        default:
          throw new Error("\nError inesperado al seleccionar accion del CPU.");
      }

      // Verificar si el jugador ha sido derrotado
      if (player.vida <= 0) {
        console.log(`\n${player.nombre} ha sido derrotado. ¿Deseas jugar de nuevo? (S/N)`);
        let reiniciar = readlineSync.question("\nIngresa S para jugar de nuevo o N para salir: ").toUpperCase();
        if (reiniciar === 'S') {
          game();
          } else {
            process.exit();
            }
      }

      // Mostrar la vida restante de ambos personajes
      console.log(`\nVida de ${player.nombre}: ${player.vida}`);
      console.log(`\nVida de ${cpu.nombre}: ${cpu.vida}`);
    }
  }

  // Iniciar la primera ronda
  let ronda: number = 1;
  while (player.vida > 0) {
    console.log(`\n--- Ronda ${ronda} ---`);
    let cpu: Heroe = cpuClase(); // Nueva CPU en cada ronda
    combate(player, cpu);
    ronda++;
  }

};
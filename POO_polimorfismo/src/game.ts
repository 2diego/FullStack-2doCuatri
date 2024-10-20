import { Heroe } from "./Heroe";
import { Luchador } from "./Luchador";
import { Mago } from "./Mago";
import { Arquero } from "./Arquero";
import { Brujo } from "./Brujo";
import * as readlineSync from 'readline-sync';

export function game(): void {

  let nombre: string = readlineSync.question(`\nIngresa tu nombre: `);

  // Setup jugador
  function playerClase(): Arquero | Luchador | Mago | Brujo {
    let clase: number = Number(readlineSync.question(`
  Clases disponibles:
    1. Luchador
    2. Mago
    3. Arquero
    4. Brujo
  Ingresa el numero de la clase de tu personaje: `));

    while (isNaN(clase) || clase < 1 || clase > 4) {
      console.log("\nError: Debes ingresar un número valido entre 1 y 4.");
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
      case 4:
        console.log("\nHas elegido brujo");
        return new Brujo(nombre);
      default:
        throw new Error("\nError inesperado al seleccionar clase de jugador.");
    }
  };
  let player: Arquero | Luchador | Mago | Brujo = playerClase();

  // Setup CPU
  function cpuClase(): Heroe {
    let random: number = Math.floor(Math.random() * 4) + 1;
    switch (random) {
      case 1:
        console.log("La CPU ha elegido luchador");
        return new Luchador("CPU_Luchador");
      case 2:
        console.log("La CPU ha elegido mago");
        return new Mago("CPU_Mago");
      case 3:
        console.log("La CPU ha elegido arquero");
        return new Arquero("CPU_Arquero");
      case 4:
        console.log("La CPU ha elegido brujo");
        return new Brujo("CPU_Brujo");
      default:
        throw new Error("\nError inesperado al asignar clase a la CPU.");
    }
  };

  // Combate por turnos
  function combate(player: Arquero | Luchador | Mago | Brujo, cpu: Heroe): void {
    console.log(`\n${player.getName()} se enfrentara a ${cpu.getName()}... `);

    while (player.getVida() > 0 && cpu.getVida() > 0) {
      // Turno del jugador
      console.log(`\n--- Turno de ${player.getName()} (${player.getVida()}HP) ---`);
      let accionJugador: number = Number(readlineSync.question(`Elige una accion:
          1. Realizar ataque fisico                                       --${player.getNombreAtkFisico()} (Puntos de ataque fisico: ${player.getAtkFisico()})
          2. Realizar ataque magico                                       --${player.getNombreAtkMagico()} (Puntos de ataque magico: ${player.getAtkMagico()})
          3. Aumentar la defensa fisica                                   --Indice de defensa fisica: ${player.getDefFisica()}
          4. Aumentar la defensa magica                                   --Indice de defensa magica: ${player.getDefMagica()}
          5. Curarse
          6. Usar una habilidad al azar                                   --Habilidades disponibles: ${player.getHabilidades().join(", ")}
        Ingresa el numero de tu accion: `));

      while (isNaN(accionJugador) || accionJugador < 1 || accionJugador > 6) {
        console.log("\nError: Debes ingresar un numero valido entre 1 y 6.");
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
        case 6:
          console.log(`\n${player.getName()} ha usado una habilidad:`);
          player.usarHabilidad(player, cpu);
          break;
        default:
          throw new Error("\nError inesperado al seleccionar accion del jugador.");
      }

      // Verificar si la CPU ha sido derrotada
      if (cpu.getVida() <= 0) {
        console.log(`\n${cpu.getName()} ha sido derrotado. ¡Has ganado esta ronda!`);

        if (player.getAbrioCaja() === false) {
          let ganarCaja = Math.floor(Math.random() * 10) + 1;
          if (ganarCaja > 7) {
            console.log(`\n${cpu.getName()} ha dropeado una caja!`);
            player.abrirCaja();
          }
        }
        //player.vida = Math.min(player.vida + 30, 100); // Recuperar 30 puntos de vida sin superar 100
        //log player recupero vida
        return;
      }

      // Turno de la CPU
      console.log(`\n--- Turno de ${cpu.getName()} ---`);
      let accionCPU: number = Math.floor(Math.random() * 6) + 1;

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
        case 6:
          console.log("\nLa CPU usa una habilidad");
          cpu.usarHabilidad(cpu, player);
          break;
        default:
          throw new Error("\nError inesperado al seleccionar accion del CPU.");
      }

      // Verificar si el jugador ha sido derrotado
      if (player.getVida() <= 0) {
        console.log(`\n${player.getName()} ha sido derrotado. ¿Deseas jugar de nuevo? (S/N)`);
        let reiniciar = readlineSync.question("\nIngresa S para jugar de nuevo o N para salir: ").toUpperCase();
        if (reiniciar === 'S') {
          game();
          } else {
            process.exit();
            }
      }

      // Mostrar la vida restante de ambos personajes
      console.log(`\nVida de ${player.getName()}: ${player.getVida()}`);
      console.log(`\nVida de ${cpu.getName()}: ${cpu.getVida()}`);
    }
  }

  // Iniciar la primera ronda
  let ronda: number = 1;
  while (player.getVida() > 0) {
    let cpu: Heroe = cpuClase();
    cpu.setNivel(ronda);
    console.log(`\n--- Ronda ${ronda} ---`);
    combate(player, cpu);
    ronda++;
  }

};
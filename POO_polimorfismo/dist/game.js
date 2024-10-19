"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.game = void 0;
var Luchador_1 = require("./Luchador");
var Mago_1 = require("./Mago");
var Arquero_1 = require("./Arquero");
var Brujo_1 = require("./Brujo");
var readlineSync = __importStar(require("readline-sync"));
function game() {
    var nombre = readlineSync.question("Ingresa tu nombre: ");
    // Setup jugador
    function playerClase() {
        var clase = Number(readlineSync.question("\n      Clases disponibles:\n    1. Luchador\n    2. Mago\n    3. Arquero\n    4. Brujo\n    Ingresa el numero de la clase de tu personaje: "));
        while (isNaN(clase) || clase < 1 || clase > 4) {
            console.log("\nError: Debes ingresar un número valido entre 1 y 4.");
            clase = Number(readlineSync.question("\nPor favor, elige nuevamente: "));
        }
        switch (clase) {
            case 1:
                console.log("\nHas elegido luchador");
                return new Luchador_1.Luchador(nombre);
            case 2:
                console.log("\nHas elegido mago");
                return new Mago_1.Mago(nombre);
            case 3:
                console.log("\nHas elegido arquero");
                return new Arquero_1.Arquero(nombre);
            case 4:
                console.log("\nHas elegido brujo");
                return new Brujo_1.Brujo(nombre);
            default:
                throw new Error("\nError inesperado al seleccionar clase de jugador.");
        }
    }
    ;
    var player = playerClase();
    // Setup CPU
    function cpuClase() {
        var random = Math.floor(Math.random() * 4) + 1;
        switch (random) {
            case 1:
                console.log("\nLa CPU ha elegido luchador");
                return new Luchador_1.Luchador("CPU_Luchador");
            case 2:
                console.log("\nLa CPU ha elegido mago");
                return new Mago_1.Mago("CPU_Mago");
            case 3:
                console.log("\nLa CPU ha elegido arquero");
                return new Arquero_1.Arquero("CPU_Arquero");
            case 4:
                console.log("\nLa CPU ha elegido brujo");
                return new Brujo_1.Brujo("CPU_Brujo");
            default:
                throw new Error("\nError inesperado al asignar clase a la CPU.");
        }
    }
    ;
    // Combate por turnos
    function combate(player, cpu) {
        console.log("\n".concat(player.nombre, " se enfrentara a ").concat(cpu.nombre, "... "));
        while (player.vida > 0 && cpu.vida > 0) {
            // Turno del jugador
            console.log("\n--- Turno de ".concat(player.nombre, " ---"));
            var accionJugador = Number(readlineSync.question("\n\n        Elige una accion:\n        1. Ataque fisico\n        2. Ataque magico\n        3. Defensa fisica\n        4. Defensa magica\n        5. Curarse\n        6. Usar una habilidad\n        Ingresa el numero de tu accion: "));
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
                    console.log("\nElige una habilidad:");
                    player.usarHabilidad(player, cpu);
                    break;
                default:
                    throw new Error("\nError inesperado al seleccionar accion del jugador.");
            }
            // Verificar si la CPU ha sido derrotada
            if (cpu.vida <= 0) {
                console.log("\n".concat(cpu.nombre, " ha sido derrotado. \u00A1Has ganado esta ronda!"));
                //player.vida = Math.min(player.vida + 30, 100); // Recuperar 30 puntos de vida sin superar 100
                //log player recupero vida
                return;
            }
            // Turno de la CPU
            console.log("\n--- Turno de ".concat(cpu.nombre, " ---"));
            var accionCPU = Math.floor(Math.random() * 6) + 1;
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
            if (player.vida <= 0) {
                console.log("\n".concat(player.nombre, " ha sido derrotado. \u00BFDeseas jugar de nuevo? (S/N)"));
                var reiniciar = readlineSync.question("\nIngresa S para jugar de nuevo o N para salir: ").toUpperCase();
                if (reiniciar === 'S') {
                    game();
                }
                else {
                    process.exit();
                }
            }
            // Mostrar la vida restante de ambos personajes
            console.log("\nVida de ".concat(player.nombre, ": ").concat(player.vida));
            console.log("\nVida de ".concat(cpu.nombre, ": ").concat(cpu.vida));
        }
    }
    // Iniciar la primera ronda
    var ronda = 1;
    while (player.vida > 0) {
        console.log("\n--- Ronda ".concat(ronda, " ---"));
        var cpu = cpuClase();
        cpu.nivel = ronda;
        combate(player, cpu);
        ronda++;
    }
}
exports.game = game;
;

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
    var nombre = readlineSync.question("\nIngresa tu nombre: ");
    // Setup jugador
    function playerClase() {
        var clase = Number(readlineSync.question("\n  Clases disponibles:\n    1. Luchador\n    2. Mago\n    3. Arquero\n    4. Brujo\n  Ingresa el numero de la clase de tu personaje: "));
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
                console.log("La CPU ha elegido luchador");
                return new Luchador_1.Luchador("CPU_Luchador");
            case 2:
                console.log("La CPU ha elegido mago");
                return new Mago_1.Mago("CPU_Mago");
            case 3:
                console.log("La CPU ha elegido arquero");
                return new Arquero_1.Arquero("CPU_Arquero");
            case 4:
                console.log("La CPU ha elegido brujo");
                return new Brujo_1.Brujo("CPU_Brujo");
            default:
                throw new Error("\nError inesperado al asignar clase a la CPU.");
        }
    }
    ;
    // Combate por turnos
    function combate(player, cpu) {
        console.log("\n".concat(player.getName(), " se enfrentara a ").concat(cpu.getName(), "... "));
        while (player.getVida() > 0 && cpu.getVida() > 0) {
            // Turno del jugador
            console.log("\n--- Turno de ".concat(player.getName(), " (").concat(player.getVida(), "HP) ---"));
            var accionJugador = Number(readlineSync.question("Elige una accion:\n          1. Realizar ataque fisico                                       --".concat(player.getNombreAtkFisico(), " (Puntos de ataque fisico: ").concat(player.getAtkFisico(), ")\n          2. Realizar ataque magico                                       --").concat(player.getNombreAtkMagico(), " (Puntos de ataque magico: ").concat(player.getAtkMagico(), ")\n          3. Aumentar la defensa fisica                                   --Indice de defensa fisica: ").concat(player.getDefFisica(), "\n          4. Aumentar la defensa magica                                   --Indice de defensa magica: ").concat(player.getDefMagica(), "\n          5. Curarse\n          6. Usar una habilidad al azar                                   --Habilidades disponibles: ").concat(player.getHabilidades().join(", "), "\n        Ingresa el numero de tu accion: ")));
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
                    console.log("\n".concat(player.getName(), " ha usado una habilidad:"));
                    player.usarHabilidad(player, cpu);
                    break;
                default:
                    throw new Error("\nError inesperado al seleccionar accion del jugador.");
            }
            // Verificar si la CPU ha sido derrotada
            if (cpu.getVida() <= 0) {
                console.log("\n".concat(cpu.getName(), " ha sido derrotado. \u00A1Has ganado esta ronda!"));
                if (player.getAbrioCaja() === false) {
                    var ganarCaja = Math.floor(Math.random() * 10) + 1;
                    if (ganarCaja > 7) {
                        console.log("\n".concat(cpu.getName(), " ha dropeado una caja!"));
                        player.abrirCaja();
                    }
                }
                //player.vida = Math.min(player.vida + 30, 100); // Recuperar 30 puntos de vida sin superar 100
                //log player recupero vida
                return;
            }
            // Turno de la CPU
            console.log("\n--- Turno de ".concat(cpu.getName(), " ---"));
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
            if (player.getVida() <= 0) {
                console.log("\n".concat(player.getName(), " ha sido derrotado. \u00BFDeseas jugar de nuevo? (S/N)"));
                var reiniciar = readlineSync.question("\nIngresa S para jugar de nuevo o N para salir: ").toUpperCase();
                if (reiniciar === 'S') {
                    game();
                }
                else {
                    process.exit();
                }
            }
            // Mostrar la vida restante de ambos personajes
            console.log("\nVida de ".concat(player.getName(), ": ").concat(player.getVida()));
            console.log("\nVida de ".concat(cpu.getName(), ": ").concat(cpu.getVida()));
        }
    }
    // Iniciar la primera ronda
    var ronda = 1;
    while (player.getVida() > 0) {
        var cpu = cpuClase();
        cpu.setNivel(ronda);
        console.log("\n--- Ronda ".concat(ronda, " ---"));
        combate(player, cpu);
        ronda++;
    }
}
exports.game = game;
;

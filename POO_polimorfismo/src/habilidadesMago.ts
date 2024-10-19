import { Habilidad } from "./Habilidad";
import { Heroe } from "./Heroe";

export const EnfocarDefensa = new Habilidad(
  "Enfocar Defensa",
  "Defensa",
  null,
  (heroe: Heroe) => {
    heroe.defMagica += 5;
    heroe.atkMagico -= 4;
    console.log(`${heroe.nombre} ha aumentado su defensa magica pero reducido su ataque magico.`);
  },
  1
);

export const EnfocarAtaque = new Habilidad(
  "Enfocar Ataque",
  "Ataque",
  null,
  (heroe: Heroe) => {
    heroe.atkMagico += 5;
    heroe.defMagica -= 4;
    console.log(`${heroe.nombre} ha aumentado su ataque magico pero reducido su defensa magica.`);
  },
  1
);

export const BolaDeFuego = new Habilidad(
  "Bola de Fuego",
  "Ataque",
  null,
  (target: Heroe) => {
    let dmg = 30;
    target.vida -= dmg;
    console.log(`${target.nombre} ha recibido una bola de fuego y perdio ${dmg} puntos de vida.`);
  },
  2
);
import { Habilidad } from "./Habilidad";
import { Heroe } from "./Heroe";

export const EnfocarDefensa = new Habilidad(
  "Enfocar Defensa", 
  "Defensa",
  null,
  (heroe: Heroe) => {
    heroe.defFisica += 5;
    heroe.atkFisico -= 4;
    heroe.defMagica += 5;
    heroe.atkMagico -= 4;
    console.log(`${heroe.nombre} ha aumentado su defensa pero reducido su ataque.`);
  },
  1
);

export const EnfocarAtaque = new Habilidad(
  "Enfocar Ataque",
  "Ataque",
  null,
  (heroe: Heroe) => {
    heroe.atkFisico += 5;
    heroe.defFisica -= 4;
    heroe.atkMagico += 5;
    heroe.defMagica -= 4;
    console.log(`${heroe.nombre} ha aumentado su ataque pero reducido su defensa.`);
  },
  1
)

export const FlechaPesada = new Habilidad(
  "Flecha pesada",
  "Ataque",
  null,
  (target: Heroe) => {
    let dmg = 30;
    target.vida -= dmg;
    console.log(`${target.nombre} ha recibido un ataque con una flecha pesada y perdio ${dmg} puntos de vida.`);
  },
  2
);

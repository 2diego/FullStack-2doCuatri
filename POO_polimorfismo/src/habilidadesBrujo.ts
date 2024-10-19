import { Habilidad } from "./Habilidad";
import { Heroe } from "./Heroe";

export const EnfocarDefensa = new Habilidad(
  "Enfocar Defensa",
  "Defensa",
  null,
  (heroe: Heroe) => {
    heroe.defMagica += 3;
    heroe.defFisica += 3;
    console.log(`${heroe.nombre} ha aumentado su defensa.`);
  },
  1
);

export const EnfocarAtaque = new Habilidad(
  "Enfocar Ataque",
  "Ataque",
  null,
  (heroe: Heroe) => {
    heroe.atkMagico += 1;
    heroe.atkFisico += 1;
    console.log(`${heroe.nombre} ha aumentado su ataque.`);
  },
  1
);

export const Maldecir = new Habilidad(
  "Maldecir",
  "Ataque",
  null,
  (target: Heroe) => {
    let dmg = 5;
    target.defFisica -= dmg;
    target.atkFisico -= dmg;
    target.defMagica -= dmg;
    target.atkMagico -= dmg;
    console.log(`${target.nombre} fue maldecido, su ataque y defensa disminuyeron ${dmg} puntos.`);
  },
  2
);

export const Meditacion = new Habilidad(
  "Meditacion",
  "Defensa",
  null,
  (heroe: Heroe) => {
    heroe.vida += 50;
    heroe.atkMagico += 4;
    heroe.atkFisico += 4;
    console.log(`${heroe.nombre} subio 4pts de ataque y recupero toda su vida.`);
  },
  3
);

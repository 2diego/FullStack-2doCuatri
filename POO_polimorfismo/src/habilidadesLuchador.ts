import { Heroe } from "./Heroe";
import { Habilidad } from "./Habilidad";

export const EnfocarDefensa = new Habilidad(
  "Enfocar Defensa",
  "Defensa",
  null,
  (heroe: Heroe) => {
    heroe.defFisica += 5;
    heroe.atkFisico -= 4;
    console.log(`${heroe.nombre} ha aumentado su defensa fisica pero reducido su ataque fisico.`);
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
    console.log(`${heroe.nombre} ha aumentado su ataque fisico pero reducido su defensa fisica.`);
  },
  1
)

export const LanzaRocas = new Habilidad(
  "Lanza rocas",
  "Ataque",
  null,
  (target: Heroe) => {
    let dmg = 30;
    target.vida -= dmg;
    console.log(`${target.nombre} ha recibido un ataque con rocas y perdio ${dmg} puntos de vida.`);
  },
  2
);

export const Meditacion = new Habilidad(
  "Meditacion",
  "Defensa",
  null,
  (heroe: Heroe) => {
    heroe.vida += 30;
    heroe.atkMagico += 5;
    heroe.defMagica += 5;
    heroe.atkFisico += 5;
    heroe.defFisica += 5;
    console.log(`${heroe.nombre} subio 5pts en todos sus stats y recupero 30 puntos de vida.`);
  },
  3
);
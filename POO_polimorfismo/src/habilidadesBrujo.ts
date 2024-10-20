import { Habilidad } from "./Habilidad";
import { Heroe } from "./Heroe";

export const EnfocarDefensa = new Habilidad(
  "Enfocar Defensa",
  "Defensa",
  null,
  (heroe: Heroe) => {
    heroe.setDefMagica(heroe.getDefMagica() + 3);
    heroe.setDefFisica(heroe.getDefFisica() + 3);
    console.log(`${heroe.getName()} ha aumentado su defensa.`);
  },
  1
);

export const EnfocarAtaque = new Habilidad(
  "Enfocar Ataque",
  "Ataque",
  null,
  (heroe: Heroe) => {
    heroe.setAtkMagico(heroe.getAtkMagico() + 1);
    heroe.setAtkFisico(heroe.getAtkFisico() + 1);
    console.log(`${heroe.getName()} ha aumentado su ataque.`);
  },
  1
);

export const Maldecir = new Habilidad(
  "Maldecir",
  "Ataque",
  null,
  (target: Heroe) => {
    let dmg = 5;
    target.setDefFisica(target.getDefFisica() - dmg);
    target.setAtkFisico(target.getAtkFisico() - dmg);
    target.setDefMagica(target.getDefMagica() - dmg);
    target.setAtkMagico(target.getAtkMagico() - dmg);
    console.log(`${target.getName()} fue maldecido, su ataque y defensa disminuyeron ${dmg} puntos.`);
  },
  2
);

export const Meditacion = new Habilidad(
  "Meditacion",
  "Defensa",
  null,
  (heroe: Heroe) => {
    heroe.setVida(heroe.getVida() + 50);
    heroe.setAtkMagico(heroe.getAtkMagico() + 4);
    heroe.setAtkFisico(heroe.getAtkFisico() + 4);
    console.log(`${heroe.getName()} subio 4pts de ataque y 50 puntos de vida.`);
  },
  3
);

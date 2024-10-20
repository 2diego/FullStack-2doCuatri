import { Habilidad } from "./Habilidad";
import { Heroe } from "./Heroe";

export const EnfocarDefensa = new Habilidad(
  "Enfocar Defensa", 
  "Defensa",
  null,
  (heroe: Heroe) => {
    heroe.setDefFisica(heroe.getDefFisica() + 5);
    heroe.setAtkFisico(heroe.getAtkFisico() - 4);
    heroe.setDefMagica(heroe.getDefMagica() + 5);
    heroe.setAtkMagico(heroe.getAtkMagico() - 4);
    console.log(`${heroe.getName()} ha aumentado su defensa pero reducido su ataque.`);
  },
  1
);

export const EnfocarAtaque = new Habilidad(
  "Enfocar Ataque",
  "Ataque",
  null,
  (heroe: Heroe) => {
    heroe.setAtkFisico(heroe.getAtkFisico() + 5);
    heroe.setDefFisica(heroe.getDefFisica() - 4);
    heroe.setAtkMagico(heroe.getAtkMagico() + 5);
    heroe.setDefMagica(heroe.getDefMagica() - 4);
    console.log(`${heroe.getName()} ha aumentado su ataque pero reducido su defensa.`);
  },
  1
)

export const FlechaPesada = new Habilidad(
  "Flecha pesada",
  "Ataque",
  null,
  (target: Heroe) => {
    let dmg = 30;
    target.setVida(target.getVida() - dmg);
    console.log(`${target.getName()} ha recibido un ataque con una flecha pesada y perdio ${dmg} puntos de vida.`);
  },
  2
);

export const Meditacion = new Habilidad(
  "Meditacion",
  "Defensa",
  null,
  (heroe: Heroe) => {
    heroe.setVida(heroe.getVida() + 30);
    heroe.setAtkMagico(heroe.getAtkMagico() + 5);
    heroe.setDefMagica(heroe.getDefMagica() + 5);
    heroe.setAtkFisico(heroe.getAtkFisico() + 5);
    heroe.setDefFisica(heroe.getDefFisica() + 5);
    console.log(`${heroe.getName()} subio 5pts en todos sus stats y recupero 30 puntos de vida.`);
  },
  3
);

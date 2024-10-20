import { Heroe } from "./Heroe";
import { Habilidad } from "./Habilidad";

export const EnfocarDefensa = new Habilidad(
  "Enfocar Defensa",
  "Defensa",
  null,
  (heroe: Heroe) => {
    heroe.setDefFisica(heroe.getDefFisica() + 5);
    heroe.setAtkFisico(heroe.getAtkFisico() - 4);
    console.log(`${heroe.getName()} ha aumentado su defensa fisica pero reducido su ataque fisico.`);
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
    console.log(`${heroe.getName()} ha aumentado su ataque fisico pero reducido su defensa fisica.`);
  },
  1
)

export const LanzaRocas = new Habilidad(
  "Lanza rocas",
  "Ataque",
  null,
  (target: Heroe) => {
    let dmg = 30;
    target.setVida(target.getVida() - dmg);
    console.log(`${target.getName()} ha recibido un ataque con rocas y perdio ${dmg} puntos de vida.`);
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
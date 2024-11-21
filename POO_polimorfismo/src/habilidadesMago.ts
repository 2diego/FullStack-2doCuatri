import { Habilidad } from "./Habilidad";
import { Heroe } from "./Heroe";

export const EnfocarDefensa = new Habilidad(
  "Enfocar Defensa",
  "Defensa",
  null,
  (heroe: Heroe) => {
    heroe.setDefMagica(heroe.getDefMagica() + 5);
    heroe.setAtkMagico(heroe.getAtkMagico() - 4);
    console.log(`${heroe.getName()} ha aumentado su defensa magica pero reducido su ataque magico.`);
  },
  1
);

export const EnfocarAtaque = new Habilidad(
  "Enfocar Ataque",
  "Ataque",
  null,
  (heroe: Heroe) => {
    heroe.setAtkMagico(heroe.getAtkMagico() + 5);
    heroe.setDefMagica(heroe.getDefMagica() - 4);
    console.log(`${heroe.getName()} ha aumentado su ataque magico pero reducido su defensa magica.`);
  },
  1
);

export const BolaDeFuego = new Habilidad(
  "Bola de Fuego",
  "Ataque",
  null,
  (target: Heroe) => {
    let dmg = 30;
    target.setVida(target.getVida() - dmg);
    console.log(`${target.getName()} ha recibido una bola de fuego y perdio ${dmg} puntos de vida.`);
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

Juego de Combate por Turnos

Descripción
Juego por turnos donde el jugador elige un héroe entre diferentes clases disponibles para enfrentarse a un enemigo controlado por la CPU.

Clases de Héroes Disponibles
Luchador: ataques físicos fuertes y defensa física.
Mago: ataques mágicos y defensa mágica.
Arquero: equilibrado.
Brujo: defensivo, reduce stats del oponente.

Mecánica del Combate
El combate ocurre por turnos, donde el jugador y la CPU alternan acciones. En cada turno, los jugadores pueden:
  Atacar físicamente.
  Atacar mágicamente.
  Aumentar su defensa física.
  Aumentar su defensa mágica.
  Curarse.
  Usar una habilidad especial (varía según la clase).

Habilidades Especiales
Cada clase tiene habilidades únicas que se activan bajo ciertas condiciones, como ser de la clase correcta o tener un nivel mínimo. Las habilidades pueden ser de ataque o de defensa.
Actualmente las habilidades que se ejecutan son al azar pero se planea añadir la capacidad de elegir la habilidad.

Diseño del Código
Estructura de Clases
  Heroe (clase abstracta): Define los métodos y atributos comunes para todas las clases de héroes, como el nombre, vida, nivel, y métodos para ataques y defensas.
  Las subclases que extienden a Heroe son: Luchador, Mago, Arquero y Brujo.

  Subclases de Heroe: Cada clase de héroe implementa sus propios ataques y defensas, y pueden tener atributos y habilidades únicas.

  Habilidad: Representa una habilidad especial que puede ser usada por los héroes. Cada habilidad está asociada a una clase específica y requiere un nivel mínimo para poder ser usada.
  Existen habilidades tanto de ataque como de defensa.

Flujo del Juego
  Inicialización: El jugador elige un nombre y una clase de héroe. La CPU elige una clase al azar.
  Combate: El jugador y la CPU alternan turnos para realizar ataques, defenderse, curarse o usar habilidades.
  Rondas: Si el jugador gana, pasa a la siguiente ronda con un enemigo más fuerte. El juego continúa hasta que el jugador es derrotado o decide terminar.

Archivos
  Heroe.ts: Clase abstracta que define los métodos y atributos comunes.
  Luchador.ts, Mago.ts, Arquero.ts, Brujo.ts: Subclases de Heroe, que implementan los métodos de ataque, defensa y curación.
  Habilidad.ts: Define las habilidades especiales que los héroes pueden usar.
  game.ts: Controla el flujo del juego, incluyendo la lógica de combate y la interacción entre el jugador y la CPU.
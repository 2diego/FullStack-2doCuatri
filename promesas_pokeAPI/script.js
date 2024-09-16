document.addEventListener('DOMContentLoaded', () => {
  const tablero = document.getElementById('tablero');
  const reiniciarBtn = document.getElementById('reiniciar-btn');
  const mensajeError = document.createElement('p');
  let primeraEleccion = true;
  let segundaEleccion = false;
  let primerCarta = null;
  let segundaCarta = null;
  let parejas = [];

  /* Obtener imagenes de Pokemon desde la PokeAPI

  function fetchPokemonImages() {
  const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8].map(i => Math.floor(Math.random() * 150) + 1);

  return Promise.all(pokemonIds.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)))
    .then(responses => Promise.all(responses.map(res => res.json())))
    .then(pokemons => pokemons.map(pokemon => ({
      name: pokemon.name,
      image: pokemon.sprites.front_default
    })));
}
    
  */

  // Obtener imagenes de Pokemon desde la PokeAPI
  async function fetchPokemon() {
    const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8].map(i => Math.floor(Math.random() * 150) + 1); // 8 Pokémon aleatorios

    try {
      const responses = await Promise.all(pokemonIds.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)));
      const pokemones = await Promise.all(responses.map(res => res.json()));
      
      return pokemones.map(pokemon => ({
        name: pokemon.name,
        image: pokemon.sprites.front_default
      }));
    } catch (error) {
      mostrarError();
      return [];
    }
  }

  // Mostrar mensaje de error en pantalla
  function mostrarError() {
    mensajeError.textContent = "Error al conectar con el servidor.";
    mensajeError.style.color = 'red';
    mensajeError.style.textAlign = 'center';
    tablero.innerHTML = '';
    tablero.style.display = 'flex'
    tablero.appendChild(mensajeError);
  }

  // Inicializar el juego
  async function repartir() {
    tablero.innerHTML = '';
    parejas = [];
    
    // Crear parejas y mezclar
    const pokemones = await fetchPokemon();
    parejas = [...pokemones, ...pokemones];
    parejas.sort(() => Math.random() - 0.5);

    // Crear cartas
    parejas.forEach(pokemon => {
      const carta = document.createElement('div');
      carta.classList.add('carta');
      carta.innerHTML = `
        <div class="dorso"><img src="imagenes/dorso.jpg" alt="dorso carta"></div>
        <div class="frente"><img src="${pokemon.image}" alt="${pokemon.name}"></div>
      `;
      carta.addEventListener('click', verCarta);
      tablero.appendChild(carta);
    });
  }

  // Voltear carta
  function verCarta() {
    if (segundaEleccion || this === primerCarta) return; // No permite voltear más de dos cartas o la primera una segunda vez
    
    this.classList.add('vista');

    if (primeraEleccion) {
      primeraEleccion = false;
      primerCarta = this;
      return;
    }

    segundaCarta = this;
    verificarCoincidencia();
  }

  // Comprobar si hay coincidencia
  function verificarCoincidencia() {
    segundaEleccion = true;
    const primerPokemon = primerCarta.querySelector('.frente img').alt;
    const segundoPokemon = segundaCarta.querySelector('.frente img').alt;

    if (primerPokemon === segundoPokemon) {
      coincidencia();
    } else {
      discrepancia();
    }
  }

  // Deshabilitar las cartas que coinciden
  function coincidencia() {
    primerCarta.removeEventListener('click', verCarta);
    segundaCarta.removeEventListener('click', verCarta);
    resetEleccion();
  }

  // Voltear las cartas si no coinciden
  function discrepancia() {
    setTimeout(() => {
      primerCarta.classList.remove('vista');
      segundaCarta.classList.remove('vista');
      resetEleccion();
    }, 750);
  }

  // Reiniciar elección
  function resetEleccion() {
    primeraEleccion = true;
    segundaEleccion = false;
    primerCarta = null;
    segundaCarta = null;
  }

  // Reiniciar juego
  reiniciarBtn.addEventListener('click', repartir);

  // Iniciar el juego por primera vez
  repartir();
});

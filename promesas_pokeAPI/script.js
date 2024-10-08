document.addEventListener('DOMContentLoaded', () => {
  const tablero = document.getElementById('tablero');
  const reiniciarBtn = document.getElementById('reiniciar-btn');
  const mensajeError = document.createElement('p');
  let primeraEleccion = true;
  let segundaEleccion = false;
  let primerCarta = null;
  let segundaCarta = null;
  let parejas = [];

  // Obtener datos de Pokemon desde la PokeAPI
  async function fetchPokemon() {
    const pokemonIds = [1, 2, 3, 4, 5, 6, 7, 8].map(i => Math.floor(Math.random() * 151) + 1); // 8 Pokémon aleatorios

    try {
      const responses = await Promise.all(pokemonIds.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)));
      const pokemones = await Promise.all(responses.map(res => res.json()));

      const pokemonData = await Promise.all(pokemones.map(async pokemon => {
        
        const types = await Promise.all(pokemon.types.map(async typeInfo => {
          const response = await fetch(typeInfo.type.url);
          const typeData = await response.json();

          const icon = typeData.sprites["generation-viii"]["sword-shield"].name_icon;

          return {
            name: typeInfo.type.name,
            url: typeInfo.type.url,
            icon: icon
          };
        }));

        return {
          name: pokemon.name,
          image: pokemon.sprites.other["official-artwork"].front_default,
          id: pokemon.id,
          types: types
        };
      }));

      return pokemonData;
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
    tablero.style.display = 'flex';
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
      
      const tiposHtml = pokemon.types.map(type => `
          <img class="type-icon" src="${type.icon}" alt="${type.name}"/>
      `).join(' ');

      const pokeID = (id) => {
        let idStr = id.toString();
        if (idStr.length < 2) {
          return "00" + idStr
        } if (idStr.length < 3) {
            return "0" + idStr
          } else 
              return idStr
      }

      carta.innerHTML = `
        <div class="dorso"><img src="imagenes/pokedorso.jpg" alt="dorso carta"></div>
        <div class="frente">
          <div class="top-container">
            <p class="number">#${pokeID(pokemon.id)}</p>
          </div>
          <img class="poke-img" src="${pokemon.image}" alt="${pokemon.name}">
          <p class="poke-name">${pokemon.name.toUpperCase()}</p>
          ${tiposHtml}
          </div>
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

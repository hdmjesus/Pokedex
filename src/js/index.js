const $pokedex = document.getElementById('pokedex');




(async() => {

    function pokemonTemplate(pokemon) {
        return `  <article class="pokemon">
        <figure class="pokemon__imagen">
            <img src="${pokemon.sprites.front_default}" alt="Pokemon">
        </figure>
        <div class="pokemon__contenido">
            <div class="pokemon__title">
                <h2>${pokemon.species.name}</h2>
            </div>
            <div class="pokemon__detalles">
                <div class="pokemon__habilidades">
                    <h3>Habilidades</h3>
                    <p class="habilidad"><abbr title="Habilidad"><i class="fas fa-dna"></i> <span>${pokemon.abilities[0].ability.name}</span>  </abbr></p>
                    <p class="habilidad"><abbr title="Habilidad"><i class="fas fa-dna"></i><span>${pokemon.abilities[1].ability.name}</span></abbr></p>

                </div>
                <div class="pokemon__estadisticas">
                    <h3>Estadisticas</h3>
                    <p><abbr title="Vida"><i class="fas fa-heart vida"></i><span >${pokemon.stats[5].base_stat}</span></abbr> </p>
                    <p><abbr title="Ataque"><i class="fas fa-burn ataque"></i> <span ></span>${pokemon.stats[4].base_stat}</span></abbr></p>
                    <p><abbr title="Tipo"><i class="fas fa-dice-d6 tipo"></i> <span >${pokemon.types[0].type.name}</span></abbr></p>
                </div>
            </div>
        </div>

    </article>`
    }

    async function getData(URL, id) {
        const response = await fetch(`${URL}${id}`)
        const data = await response.json()
        return data


    }

    function onError(id) {
        console.log(`Sucedió un error al obtener el personaje ${id}`)
    }

    async function getCharacter() {
        const URL = 'https://pokeapi.co/api/v2/pokemon/'
        var ids = []
        for (let i = 1; ids.length <= 20; i++) {
            ids.push(i)
        }

        var promesas = ids.map(id => getData(URL, id))

        try {
            const personajes = await Promise.all(promesas)
            renderPokemon(personajes)
        } catch (id) {
            onError(id)
        }

    }

    function renderPokemon(characters) {
        characters.forEach(pokemon => {
            const html = pokemonTemplate(pokemon)
            $pokedex.innerHTML += html
        });

    }
    getCharacter()



})();
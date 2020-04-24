const $pokedex = document.getElementById('pokedex');




(async() => {

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

        console.log(ids)
        var promesas = ids.map(id => getData(URL, id))

        try {
            const personajes = await Promise.all(promesas)
            console.log(personajes)
        } catch (id) {
            onError(id)
        }

    }

    getCharacter()



})();
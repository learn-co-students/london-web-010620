const pokemonUrl = "http://localhost:3000/pokemon"
const newPokemonObj = formObj => {
    return {
        name: formObj.name,
        stats:[{value:formObj.hp, name:"hp"}],
        sprites:{
            front: formObj.frontUrl,
            back: formObj.backUrl
        }
    }
}

export const getPokemon = () => {
    return fetch(pokemonUrl)
    .then(res => res.json())
}

export const postPokemon = formObj => {
    const newPokemon = newPokemonObj(formObj)
    return fetch(pokemonUrl,{
        method: "POST",
        headers:{"content-type":"application/json"},
        body: JSON.stringify(newPokemon)
    })
}
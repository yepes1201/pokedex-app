

export const searchPokemon = async (pokemon) => {

    const lowerCasePoke = pokemon.toLowerCase();

    let url = `https://pokeapi.co/api/v2/pokemon/${lowerCasePoke}`;

    try{
        const data = await (await fetch(url)).json();
        return data;
    }catch(e){
        
    }
}


export const getPokemons = async (url) => {

    try{
        const resp = await fetch(url);
        const data = await resp.json();
    
        return data;
    }catch(e){
        return e;
    }

}

export const getPokemonByUrl = async (url) => {
    try{
        const resp = await fetch(url);
        const data = await resp.json();
        return data;
    }catch(e){
        return e;
    }
}
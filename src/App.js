import React, { useState } from 'react';

import { Navbar } from './components/Navbar/Navbar';
import { Pokedex } from './components/Pokedex/Pokedex';
import { Pokemon } from './components/Pokemon/Pokemon';
import { Searchbar } from './components/Searchbar/Searchbar';

export const App = () => {

    const [searching, setSearching] = useState(false);
    const [pokemon, setPokemon] = useState('');

    return (
        <div>
            <Navbar />
            <Searchbar
                setSearching={setSearching}
                searching={searching}
                setPokemon={setPokemon}
            />
            {
                searching
                    ? <Pokemon
                        pokeName={pokemon}
                        setSearching={setSearching}
                    />
                    : <Pokedex />
            }
        </div>
    )
}
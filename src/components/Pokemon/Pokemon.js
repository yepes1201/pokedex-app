import React, { useEffect, useState } from 'react'
import { searchPokemon } from '../../helpers/fetch'
import { LoadingScreen } from '../PokeGrid/LoadingScreen';
import { PokeInfo } from './PokeInfo';
import { PokemonNotFound } from './PokemonNotFound';

export const Pokemon = ({ pokeName, setSearching }) => {


    const [pokemon, setPokemon] = useState({
        found: false,
        loading: true
    });

    useEffect(() => {
        setPokemon({
            found: false,
            loading: true
        });

        const poke = async () => {
            const data = await searchPokemon(pokeName);
            if (data) {
                setPokemon({
                    ...data,
                    found: true,
                    loading: false
                });
            } else {
                setPokemon({
                    found: false,
                    loading: false
                });
            }
        }

        poke();
    }, [pokeName]);

    if (pokemon.loading) {
        return <LoadingScreen />
    }

    return (
        <div>
            {
                pokemon.found
                    ? <PokeInfo
                        pokemon={pokemon}
                    />
                    : <PokemonNotFound />
            }

            <button
                className=' mt-5 btn back-btn'
                onClick={() => {
                    setSearching(prevVal => !prevVal);
                }}
            >
                Go Back
            </button>
        </div>
    )
}

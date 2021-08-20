import React, { useEffect, useState } from 'react';
import { getPokemonByUrl, getPokemons } from '../../helpers/fetch';
import { LoadingScreen } from './LoadingScreen';
import { PokeCard } from './PokeCard';

export const PokeGrid = ({url, links, setPagination}) => {

    const [pokeState, setPokeState] = useState({
        loading: true,
        pokemons: [],
        totalPokemons: 0,
    });

    const {
        loading,
        pokemons,
        totalPokemons
    } = pokeState;

    useEffect(() => {
        setPagination(prevVal => {
            return {
                ...prevVal,
                totalPages: totalPokemons/25,
            }
        });
    },[totalPokemons, setPagination])



    useEffect(() => {
        setPokeState(prevVal => {
            return {
                ...prevVal,
                loading: true,
            }
        })

        const fetchPokemons = async () => {
            const data = await getPokemons(url);
            const promises = data.results.map(async (pokemon) => {
                return await getPokemonByUrl(pokemon.url);
            });

            const pokeData = await Promise.all(promises);


            setPokeState({
                pokemons: pokeData,
                totalPokemons: data.count,
                loading: false,
            })

            links.current = {
                next: data.next,
                previous: data.previous
            }
        }
        fetchPokemons();
    }, [url, links]);

    return (
        <div className='pokegrid__container mt-5'>
            {
                loading
                    ? <LoadingScreen />
                    : pokemons.map(pokemon => {
                        return (
                            <PokeCard
                                key={pokemon.name}
                                name={pokemon.name}
                                imgUrl={pokemon.sprites.front_default}
                                types={pokemon.types}
                            />
                        )
                    })
            }
        </div>
    )
}

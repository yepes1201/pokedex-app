import React from 'react'
import { useForm } from '../../hooks/useForm'

export const Searchbar = (
    {
        setSearching,
        setPokemon,
    }
) => {

    const [inputValue, handleInputChange] = useForm({
        pokeName: ''
    });

    const { pokeName } = inputValue;

    return (
        <div className='searchbar__container mt-5'>
            <div>
                <input
                    className='searchbar__input'
                    name='pokeName'
                    type='text'
                    placeholder='Pikachu...'
                    value={pokeName}
                    onChange={handleInputChange}
                />
                <button
                    className='btn'
                    onClick={() => {
                        setPokemon(pokeName);
                        setSearching(true);
                    }}
                >
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    )
}

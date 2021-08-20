import React from 'react'

export const PokeInfo = ({pokemon}) => {
    return (
        <div className='container mt-5 animate__animated animate__fadeIn'>
            <div className='pokemon__container'>
                <div>
                    <img
                        className='pokemon__img'
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                    />
                </div>
                <div className='pokemon__info'>
                    <div className='pokemon__title'>
                        <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                        <span>#{pokemon.id}</span>
                    </div>
                    <div className='pokemon__body mt-2 info-division'>
                        <p className='pokemon__body-desc'>Base experience: <span>{pokemon.baseXp}</span></p>
                    </div>
                    <div className='pokemon__body mt-2 info-division'>
                        <p className='pokemon__body-desc'>Height: <span>{pokemon.height}</span></p>
                    </div>
                    <div className='pokemon__body  mt-2 info-division'>
                        {pokemon.types.map((types,i) => {
                            return (
                                <p key={i+pokemon.name + pokemon.id} className='pokemon__types'>
                                    {types.type.name.charAt(0).toUpperCase() + types.type.name.slice(1)}
                                </p>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

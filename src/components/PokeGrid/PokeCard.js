import React from 'react'

export const PokeCard = ({
    name,
    imgUrl,
    id,
    types
}) => {
    return (
        <div className='pokecard__container'>
            <div>
                <img
                    src={imgUrl}
                    alt={name}
                    className='pokecard__img'
                />
            </div>
            <div className='pokecard__info-container'>
                <h4 className='pokecard__title'>{name}</h4>
                <div>
                    {
                        types.map(types => {
                            return (
                                <span key={types.type.name} className='pokecard__types'>{types.type.name.charAt(0).toUpperCase() + types.type.name.slice(1)}</span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

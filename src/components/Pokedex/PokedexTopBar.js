import React from 'react'

export const PokedexTopBar = ({
    nextPage,
    prevPage,
    actualPage,
    totalPages,
}) => {

    

    return (
        <div className='pokedex__container'>
            <h1 className='pokedex__title'>Pokedex</h1>
            <div>
                <button
                    className='btn'
                    onClick={prevPage}
                >
                    <i className="fas fa-chevron-left"></i>
                </button>

                <span> {actualPage}/{Math.round(totalPages)} </span>

                <button
                    className='btn'
                    onClick={nextPage}
                >
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
    )
}

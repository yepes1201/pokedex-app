import React, { useRef, useState } from 'react'
import { PokeGrid } from '../PokeGrid/PokeGrid'
import { PokedexTopBar } from './PokedexTopBar'

export const Pokedex = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const [pagination, setPagination] = useState({
        url: 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=25',
        totalPages: 0,
        currentPage: 1
    });

    const links = useRef({
        next: null,
        previous: null
    });

    const nextPage = () => {
        if (currentPage < pagination.totalPages) {
            setCurrentPage(currentPage + 1);
            setPagination({
                ...pagination,
                url: links.current.next,
                currentPage: currentPage
            });
        }
    }

    const previousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setPagination({
                ...pagination,
                url: links.current.previous,
                currentPage: currentPage,
            })
        }
    }

    return (
        <div className='container mt-5'>
            <PokedexTopBar
                nextPage={nextPage}
                prevPage={previousPage}
                totalPages={pagination.totalPages}
                actualPage={currentPage}
            />
            <div className='animate__animated animate__fadeIn'>
                <PokeGrid
                    url={pagination.url}
                    setPagination={setPagination}
                    links={links}
                />
            </div>
        </div>
    )
}

/* Компонент отвечает за поисковую строку */

import React from 'react'
import './SearchFC.css'

export interface SearchProps {
    image: string,
    button: string
}

export const SearchFC: React.FC<{searchItems: SearchProps[]}> = ({ searchItems }) => {
    return (
        <div className='search-container'>
            {searchItems.map((item, index) => (
                <div className='search-component' key={index}>
                    <img className='search-image' src={item.image} alt='search-logo' />
                    <input className='search-input' type='text' />
                    <button className='search-button'>{item.button}</button>
                </div>
            ))}
        </div>
    )
}

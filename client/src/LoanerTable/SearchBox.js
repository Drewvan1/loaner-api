import React from 'react'

const SearchBox = ({ onSearchChange }) => {
    return (
        <div className= 'pa2'> 
            <input 
                className='pa3 ba br2 b--black bg-lightest-blue'
                type='search' 
                placeholder='search'
                onChange={onSearchChange}
                >
            </input>
        </div>
    )
}

export default SearchBox
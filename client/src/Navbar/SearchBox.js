import React from 'react'

const SearchBox = ({ onSearchChange }) => {
    return (
        <div className= 'pa2 mr3'> 
            <input 
                className='pa2 bg-lightest-blue'
                type='search' 
                placeholder='search loaners'
                onChange={onSearchChange}
                >
            </input>
        </div>
    )
}

export default SearchBox
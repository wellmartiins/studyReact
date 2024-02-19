import React from 'react'
import P from 'prop-types'
import './style.css'

export const TextInput = ({searchValue, handleChange}) => {
    return (
        <input
            placeholder='Type your search'
            className='text-input'
            type="seach"
            onChange={handleChange}
            value={searchValue}
        />
    )
}

TextInput.propTypes = {
  searchValue: P.string.isRequired,
  handleChange: P.func.isRequired,
}

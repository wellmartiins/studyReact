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
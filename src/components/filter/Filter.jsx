import React from 'react'

function Filter({ filter, handleFilter }) {
    return (
        <div>
            <label htmlFor='search'>Find contacts by name</label>
            <input type="text" htmlFor="search" name="filter" value={filter} onChange={handleFilter} />
        </div>
    )
}

export default Filter

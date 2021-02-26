import React from 'react'
import PropTypes from 'prop-types'
import styles from "./Filter.module.css"

function Filter({ filter, handleFilter }) {
    return (
        <div>
            <label htmlFor='search' className={styles.label} >Find contacts by name</label>
            <input type="text" className={styles.input} name="search" value={filter}
                onChange={handleFilter} placeholder="Name*" />
        </div>
    )
}

export default Filter

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleFilter: PropTypes.func.isRequired,
}
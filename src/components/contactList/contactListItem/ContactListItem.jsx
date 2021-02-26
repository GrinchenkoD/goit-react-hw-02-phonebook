import React from 'react'
import PropTypes from 'prop-types'
import styles from "./ContactListItem.module.css"


function ContactListItem({ name, number, id, handleRemove }) {
    return (
        <li className={styles.item}>
            <p className={styles.text}>{name} :</p>
            <p className={styles.text}>{number}</p>
            <button className={styles.deleteBtn} type='button' data-id={id} onClick={handleRemove}>Delete</button>
        </li>
    )
}

export default ContactListItem

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    handleRemove: PropTypes.func.isRequired
}
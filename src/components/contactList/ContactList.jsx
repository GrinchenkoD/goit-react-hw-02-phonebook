import React from 'react'
import ContactListItem from './contactListItem';
import PropTypes from 'prop-types'


function ContactList({ contacts, handleRemove, filter }) {
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
    return (
        <ul>
            {filteredContacts.map((contact) => {
                return (
                    <ContactListItem key={contact.id} handleRemove={handleRemove} {...contact} />
                )
            })}
        </ul>
    )
}

export default ContactList

ContactList.defaultProps = {
    contacts: [],
    filter: '',
}

ContactList.propTypes = {
    contacts: PropTypes.array,
    handleRemove: PropTypes.func.isRequired,
    filter: PropTypes.string
}
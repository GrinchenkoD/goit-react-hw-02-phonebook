import React, { Component } from 'react'
import styles from "./ContactsForm.module.css"


const initialState = {
    name: '',
    number: '',
}

export default class ContactsForm extends Component {

    state = {
        ...initialState
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({ [name]: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const { name, number } = this.state
        this.props.addContact(name, number)
        this.setState({ ...initialState })
    }


    render() {

        const { name, number } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit} className={styles.form}>
                    <label htmlFor="name" className={styles.label} >Name</label>
                    <input type="text" name="name" value={name} onChange={this.handleChange}
                        placeholder="Name*" required className={styles.input} />

                    <label htmlFor="number" className={styles.label}>Number</label>
                    <input type="tel" name="number" value={number} onChange={this.handleChange}
                        placeholder="Phone number*" required className={styles.input} />

                    <button type="submit" className={styles.submitBtn}>Add contact</button>
                </form>

            </div>
        )
    }
}

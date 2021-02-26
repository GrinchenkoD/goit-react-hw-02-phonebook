import React, { Component } from 'react'


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
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name" >Name</label>
                    <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Имя*" required />

                    <label htmlFor="number">Number</label>
                    <input type="tel" name="number" value={number} onChange={this.handleChange} placeholder="Номер телефона*" required />

                    <button type="submit" >Add contact</button>
                </form>

            </div>
        )
    }
}

import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';

import Filter from './filter';
import ContactsForm from './contactForm';
import ContactList from './contactList/ContactList';
import styles from "./App.module.css"

const initialState= {
  filter: ''
  }

class App extends Component {

  state = {
     contacts: [],
   ...initialState
  }
  
  addContact = (name, number) => {
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`)
      return; 
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { name, number, id: uuidv4() }],
      }))
    }
}
 
  handleChange = (event) => {
    const name = event.target.name;
    this.setState({[name]: event.target.value})
  }

  handleFilter = event => {
    this.setState({ filter: event.target.value });
  };

  handleRemove = (event) => {
    const id = event.target.dataset.id
    this.setState((prevState) => {
      const contacts = prevState.contacts.filter(contact => contact.id !== id);
      return {contacts}
    })    
  } 

  render() {
   
    const { filter}=this.state

    return (
      <div className={styles.container}>
        <h1 className={styles.mainTitle}>Phonebook</h1>
        <ContactsForm addContact={this.addContact }/>
        <h2 className={styles.title}>Contacts</h2>
        <Filter filter={filter} handleFilter={this.handleFilter} />
        {this.state.contacts.length>0 ? (
          <ContactList contacts={this.state.contacts} handleRemove={this.handleRemove} filter={filter} />
        ) : ( <h3 className={styles.noContacts}>There are no added contacts yet</h3>)
        }
        </div>
      
    );
  }}

export default App;

import './App.css';
import { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import Filter from './filter';
import ContactsForm from './contactsForm';

const initialState= {
  name: '',
  number: '',
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
      <div className="App">
        <h1>Phonebook</h1>

        <ContactsForm addContact={this.addContact }/>


        <h2>Contacts</h2>
        <Filter filter={filter} handleFilter={this.handleFilter} />

        <ul>
          {this.state.contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase())).map((contact) => {
            return (
              <li key={contact.id} >
                <p>{contact.name}</p>
                <p>{contact.number}</p>
                <button type='button' data-id={contact.id} onClick={this.handleRemove}>Delete</button>
              </li>
          )})}
        </ul>


      </div>
      
    );
  }}

export default App;

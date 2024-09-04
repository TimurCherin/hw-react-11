import './App.css';
import React, { Component } from "react";
import ContactList from './components/ContactsList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import ContactFilter from './components/ContactFilter/ContactFilter';

class App extends Component {
  state = {
    contacts: [{
      name: "Kiril",
      phone: 322112356,
      id: "1",
    }, {
      name: "Stepan",
      phone: 123124234,
      id: "2",
    },],
    filter: ''
  }

  addContact = (contact) => {
    this.setState(prevState => {
      if (this.state.contacts.map((obj) => obj.name.toLocaleLowerCase()).includes(contact[0].name.toLocaleLowerCase())) {
        alert("Вже є")
      } else {
        return ({ contacts: [...contact, ...prevState.contacts] })
      }
    })
  }

  addFilter = (filterValue) => {
    this.setState({ filter: filterValue })
  }

  render() {
    const filteredContacts = this.state.contacts.filter((contact) => contact.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase()))
    const allContacts = this.state.filter ? filteredContacts : this.state.contacts
    console.log(allContacts)
    return (
      <>
        <ContactForm addContact={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        <ContactFilter addFilter={this.addFilter}></ContactFilter>
        <ContactList contacts={allContacts}></ContactList>

      </>
    )
  }
}
export default App
import './App.css';
import React, { Component } from "react";
import ContactList from './components/ContactsList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import ContactFilter from './components/ContactFilter/ContactFilter';

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      this.setState({ contacts: JSON.parse(savedContacts) });
    }
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
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

  delContact = (id) => {
    this.setState(prevState => {
      const newContacts = prevState.contacts.filter((obj) => obj.id !== id)
      return ({ contacts: newContacts })
    })
  }

  render() {
    const filteredContacts = this.state.contacts.filter((contact) => contact.name.toLocaleLowerCase().includes(this.state.filter.toLocaleLowerCase()))
    const allContacts = this.state.filter ? filteredContacts : this.state.contacts
    return (
      <>
        <ContactForm addContact={this.addContact}></ContactForm>
        <h2>Contacts</h2>
        <ContactFilter addFilter={this.addFilter}></ContactFilter>
        <ContactList contacts={allContacts} delContact={this.delContact}></ContactList>

      </>
    )
  }
}
export default App
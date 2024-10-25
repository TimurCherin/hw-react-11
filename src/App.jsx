import './App.css';
import React, { useState, useEffect } from "react";
import ContactList from './components/ContactsList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import ContactFilter from './components/ContactFilter/ContactFilter';

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    if (contacts.some((obj) => obj.name.toLocaleLowerCase() === contact.name.toLocaleLowerCase())) {
      alert("Вже є");
    } else {
      setContacts((prevContacts) => [contact, ...prevContacts]);
    }
  };

  const addFilter = (filterValue) => {
    setFilter(filterValue);
  };

  const delContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((obj) => obj.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  const allContacts = filter ? filteredContacts : contacts;

  return (
    <>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <ContactFilter addFilter={addFilter} />
      <ContactList contacts={allContacts} delContact={delContact} />
    </>
  );
}

export default App;
import React, { Component } from "react";
import { nanoid } from "nanoid";
import { FormWrap } from "./ContactForm.styled";

function ContactForm({ addContact }) {
    const handleSubmit = (e) => {
        e.preventDefault()
        const inputName = e.currentTarget.elements.name.value
        const inputNumber = e.currentTarget.elements.number.value
        const newContact = [{
            name: inputName,
            phone: inputNumber,
            id: nanoid(),
        }]
        e.currentTarget.reset()
        addContact(newContact)
    }
    return (
        <>
            <FormWrap>
                <form onSubmit={handleSubmit}>
                    <h2>Phonebook</h2>
                    <label for="nameId">Name</label>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        id="nameId"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    <label for="numberId">Number</label>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        id="numberId"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                    <button type="submit">Add contact</button>
                </form>
            </FormWrap>
        </>
    )
}
export default ContactForm
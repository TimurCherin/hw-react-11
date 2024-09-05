import React from "react";
import { ListWrap, ListBtn } from "./ContactList.styled";

function ContactList({ contacts, delContact }) {
    return (
        contacts ?
            contacts.map(({ name, phone, id }) => {
                return (<ListWrap key={id}>
                    <p>{name}</p>
                    <p>{phone}</p>
                    <ListBtn onClick={() => delContact(id)}>Del</ListBtn>
                </ListWrap>)
            }) : ""
    );
}

export default ContactList
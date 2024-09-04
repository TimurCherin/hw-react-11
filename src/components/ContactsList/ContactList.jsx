import React from "react";

function ContactList({ contacts }) {
    return (
        contacts ?
            contacts.map((obj) => {
                return (<div key={1}>
                    <p>{obj.name}</p>
                    <p>{obj.phone}</p>
                </div>)
            }) : ""
    );
}

export default ContactList
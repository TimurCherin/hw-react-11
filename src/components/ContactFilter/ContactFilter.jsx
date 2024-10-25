import React from "react";

function ContactFilter({ addFilter }) {
    const filterName = (e) => {
        const inputValue = e.currentTarget.value;
        addFilter(inputValue);
    };

    return (
        <form>
            <label htmlFor="filter">Find contact by name</label>
            <input
                onChange={filterName}
                type="text"
                name="filter"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                id="filter"
                required
            />
        </form>
    );
}

export default ContactFilter;
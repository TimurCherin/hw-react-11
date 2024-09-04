import React, { Component } from "react";

class ContactFilter extends Component {
    filterName = (e) => {
        const inputValue = e.currentTarget.value
        this.props.addFilter(inputValue)
    }
    render() {
        return (
            <>
                <form>
                    <label for="filter">Find contact by name</label>
                    <input onChange={this.filterName}
                        type="text"
                        name="filter"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        id="filter"
                        required
                    />
                </form>
            </>
        )
    }
}

export default ContactFilter
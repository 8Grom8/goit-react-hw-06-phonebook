import { Component } from "react";
import { connect } from "react-redux";

import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import List from "./ContactList/ContactList";
import {
  addNewContact,
  removeContact,
} from "../../redux/contacts/contacts.actions";

class Contact extends Component {
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

    render() {
      const {
        items,
        filter,
        handleChange,
        handleSubmit,
        handleDelete
      } = this.props;
         return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={handleChange} />
        <List items={items} handleDelete={handleDelete} />
      </div>
    );
  }
}

const mapState = (state) => {
  const items = state.contacts.items;
  const filter = state.contacts.filter;

  const formattedFilter = filter.toLowerCase().trim();
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(formattedFilter)
  );
  return {
    items: filteredItems,
    originalItems: items,
  };
};

const mapDispatch = {
  handleSubmit: addNewContact,
  handleDelete: removeContact,
};

export default connect(mapState, mapDispatch )(Contact);

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
  state = {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

    render() {
    const { items, filter } = this.state;
    // const formattedFilter = filter.toLowerCase().trim();
    // const filteredItems = items.filter((item) =>
    //   item.name.toLowerCase().includes(formattedFilter)
    // );

    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={this.props.handleSubmit} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={this.props.handleChange} />
        <List items={items} handleDelete={this.props.handleDelete} />
      </div>
    );
  }
}

const mapState = (state) => {
  const items = state.contacts.items;
  const filter = state.contacts.filter;

  const formattedFilter = filter.toLowerCase().trim();
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(formattedFilter)
  );
  return {
    items: filteredItems,
    originalItems: items,

    // filter: state.contacts.filter,
  }
}

// const mapDispatch = (dispatch) => {
//   return {
//     addNewContact: (payload) => dispatch(addNewContact(payload))
//   }
// }

const mapDispatch = {
  handleDelete: removeContact,
 
};

export default connect(mapState, mapDispatch )(Contact);

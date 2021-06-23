import React, { Component } from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";
import css from "./ContactForm.module.css";
import { connect } from "react-redux";
import { addNewContact } from "../../../redux/contacts/contacts.actions";


class ContactForm extends Component {
  static propTypes = {
    addNewContact: PropTypes.func.isRequired,
    items: PropTypes.array,
  };

  state = {
    term: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { term } = this.state;

    if (!term) {
      alert("Поле не может быть пустым!");
      return;
    }

    const isDuplicate = this.props.items.some((item) => item.title === term);
    if (isDuplicate) {
      alert("Такоe имя уже существует " + term);
      return;
    }

    const newContact = {
      id: uuid(),
      title: term,
    };

    this.props.addNewContact(newContact);
  };

  render() {
    return (
      <>
        <form className={css.form} onSubmit={this.onSubmit}>
          <label htmlFor={css.labelStyles}>Name</label>
          <input
            name="term"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
            value={this.state.term}
          />
          <label htmlFor={css.labelStyles}>Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
          <button type="submit" className={css.btnStyle}>
            Add
          </button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.contacts.items,
});

const mapDispatchToProps = {
  addNewContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

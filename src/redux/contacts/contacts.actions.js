import { createAction } from "@reduxjs/toolkit";

const ADD_NEW_CONTACT = "contacts/addNewContact";
const REMOVE_CONTACT = "contacts/removeContact";
const FILTER_CHANGE = "contacts/filterChange";


const addNewContact = createAction(ADD_NEW_CONTACT);

const filterChange = createAction(FILTER_CHANGE, (payload) => ({
  payload: payload.target.value,
}));

const removeContact = createAction(REMOVE_CONTACT);

export { addNewContact, filterChange, removeContact };
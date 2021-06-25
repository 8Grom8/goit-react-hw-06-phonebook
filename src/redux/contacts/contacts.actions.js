import { createAction } from "@reduxjs/toolkit";

const addNewContact = createAction("contacts/addNewContact");
const filterChange = createAction("contacts/removeContact");
const removeContact = createAction("contacts/filterChange");

export { addNewContact, filterChange, removeContact };
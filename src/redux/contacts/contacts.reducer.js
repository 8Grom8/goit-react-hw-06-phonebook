import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { addNewContact, filterChange, removeContact } from "./contacts.actions";

const items = createReducer([], {
  [addNewContact]: (state, action) => [action.payload, ...state],
  [removeContact]: (state, action) =>
    state.filter((item) => item.id !== action.payload),
});

const filter = createReducer("", {
  [filterChange]: (_, action) => action.payload,
});

const contactsReducer = combineReducers({
  items,
  filter,
});

export default contactsReducer;
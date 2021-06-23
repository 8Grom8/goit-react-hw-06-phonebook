import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsReducer from "./contacts/contacts.reducer";

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};

const persistedReducer = persistReducer(persistConfig, contactsReducer);

const store = configureStore({
  devTools: true,
  reducer: {
      contacts: persistedReducer,
  },
});

const persistedStore = persistStore(store);

export { store, persistedStore };

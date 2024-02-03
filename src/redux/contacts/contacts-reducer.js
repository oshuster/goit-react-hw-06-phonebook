import { createReducer } from '@reduxjs/toolkit';
import { addContact, delContact } from './contacts-action';

const initialState = [];

// const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case addContact.type:
//       return [...state, action.payload];
//     case delContact.type:
//       return state.filter(contact => contact.id !== action.payload);
//     default:
//       return state;
//   }
// };
const contactsReducer = createReducer(initialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      return [...state, action.payload];
    })
    .addCase(delContact, (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    });
});

export default contactsReducer;

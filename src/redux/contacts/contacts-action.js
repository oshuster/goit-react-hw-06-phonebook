import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

import { ADD_CONTACT, DEL_CONTACT } from './contacts-constants';

// const addContact = payload => {
//   return {
//     type: ADD_CONTACT,
//     payload: {
//       id: nanoid(),
//       ...payload,
//     },
//   };
// };

// const delContact = payload => {
//   return {
//     type: DEL_CONTACT,
//     payload,
//   };
// };

export const addContact = createAction(ADD_CONTACT, contact => {
  return {
    payload: {
      id: nanoid(),
      ...contact,
    },
  };
});
export const delContact = createAction(DEL_CONTACT);

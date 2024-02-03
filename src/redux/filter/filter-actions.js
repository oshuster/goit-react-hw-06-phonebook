import { SET_FILTER } from './filter-constants';
import { createAction } from '@reduxjs/toolkit';

// export const setFilter = payload => {
//   return {
//     type: SET_FILTER,
//     payload,
//   };
// };

export const setFilter = createAction(SET_FILTER);

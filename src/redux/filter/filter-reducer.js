import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './filter-actions';
const initialState = '';

// const filterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case setFilter.type:
//       return action.payload;

//     default:
//       return state;
//   }
// };
const filterReducer = createReducer(initialState, builder => {
  builder.addCase(setFilter, (_, action) => {
    return action.payload;
  });
});

export default filterReducer;

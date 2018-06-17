// Action - an object that get's sent to the store
// Describes type of to take -

////////////////////////////////
// These are ACTION GENERATORS
////////////////////////////////

import uuid from 'uuid';

// ADD_EXPENSE
export const addExpense = ({description = 'none provided', note = 'none', amount = 0, createdAt = 0}={}) => ({
  type: 'ADD_EXPENSE', // Uppercase convention in REDUX
  expense : {
    id: uuid(),
    description: description,
    note: note,
    amount: amount,
    createdAt: createdAt
  }
});

// REMOVE_EXPENSE by description
// export const removeExpense = ({description}={}) => ({
//   type: 'REMOVE_EXPENSE',
//   id: description
// });

// REMOVE_EXPENSE by ID
export const removeExpense = ({id}={}) => ({
  type: 'REMOVE_EXPENSE',
  id: id 
});

// EDIT_EXPENSE
export const editExpense = (expenseIdToEdit, updates) => ({
  type: 'EDIT_EXPENSE',
  expenseIdToEdit,
  updates
});

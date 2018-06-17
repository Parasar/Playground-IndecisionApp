////////////////////////////
// EXPENSES reducer
////////////////////////////
const expensesReducerDefaults = [
  // {
  //   id: '',
  //   description: '',
  //   note: '',
  //   amount: 0,
  //   createdAt: 0
  // }
];

const expensesReducer = (state = expensesReducerDefaults, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // return state.concat(action.expense);
      return [
        ...state,
        action.expense
      ];

    case 'REMOVE_EXPENSE':
    return state.filter(({id}) => {
      return id !== action.id
    });

    case 'EDIT_EXPENSE':
    return state.map((expense)=> {
      if (expense.id === action.expenseIdToEdit) {
        return {
          ...expense,
          ...action.updates
        };
      }
      else {
        return expense;
      }
    });

    default: return state;

  }

};

export default expensesReducer;

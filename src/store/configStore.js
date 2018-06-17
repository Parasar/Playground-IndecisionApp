import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expensesReducer.js';
import filtersReducer from '../reducers/filtersReducer.js';

//---------------------------------------------//
// CREATE STORE with multiple combined Reducers
//---------------------------------------------//

const configStore = createStore(combineReducers(
  {
    expenses: expensesReducer,
    filters : filtersReducer
  }
),
//Redux devtools for chrome
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configStore;

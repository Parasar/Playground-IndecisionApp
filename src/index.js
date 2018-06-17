import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
// react redux import
import { Provider } from 'react-redux';
import './index.css';
// import App from './App';
import AppRouter from './routers/AppRouter.js';
import registerServiceWorker from './registerServiceWorker';
// eslint-disable-next-line
// import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

///////////////////////////
// REDUX
///////////////////////////

// Multiple Redux files
// -------------------
import store from './store/configStore.js';
import {addExpense, removeExpense} from './actions/expenses.js';
import {sortByDate, setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/getVisibleExpenses';


const expense1 = store.dispatch(addExpense({
  description: 'water bill',
  note: 'for January',
  amount: 300,
  createdAt: 2000
}));

const expense3 = store.dispatch(addExpense({
  description: 'Gas bill',
  note: 'for January',
  amount: 2500,
  createdAt: -1000
}));

const expense2 = store.dispatch(addExpense({
  description: 'watter bill',
  note: 'for February',
  amount: 400,
  createdAt: 7003
}));

console.log(store.getState());

// store.dispatch(removeExpense({
//   name: 'water bill'
// }));


// store.dispatch(sortByDate());
// store.dispatch(setTextFilter('water'));




// setTimeout(() => {
//   store.dispatch(setTextFilter('water'));
//   const filters = store.getState().filters;
//   const expenses = store.getState().expenses;
//   console.log(filters, expenses);
//
//   const ans = getVisibleExpenses(expenses, filters);
//   console.log(ans);
//
// }, 3000);


// store.dispatch(setTextFilter('rent'));


///////////////////////////
// RENDER to NODE
///////////////////////////

// Setting up react-redux via Provider(provides store info to components)
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();



////////////////////
///  Extras
////////////////////

// Get the state of the store each time

// store.subscribe(()=> {
//   console.log(typeof store.getState());
// });

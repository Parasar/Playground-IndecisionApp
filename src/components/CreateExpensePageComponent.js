import React from 'react';
import ExpenseForm from '../components/ExpenseForm';
import {connect} from 'react-redux';
import {addExpense} from './../actions/expenses.js';
// import store from './../store/configStore.js';



const CreateExpensePageComponent = (props) => {
  return (
    <div>
      <p>Add an Expense</p>
      <ExpenseForm
        onSubmit={(expense) => {
          console.log(expense);
          props.dispatch(addExpense(expense));
          props.history.push('/dashboard')
          // console.log(store.getState());
        }}
      />
    </div>
  );
};

export default connect()(CreateExpensePageComponent);

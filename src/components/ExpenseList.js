import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/getVisibleExpenses'

const ExpenseList = (props) => (
  <div>
    <h1>This is a list of expenses</h1> <br />
    {/* {props.expenses.length} */}


    {props.expenses.map((expense, i) => {
      return <ExpenseListItem {...expense} key={expense.id}/>
    })}
  </div>
);

// Func that maps state to props
// returns an object with the state
const mapStateToProps = (state) => {
  return {
    expenses: getVisibleExpenses(state.expenses, state.filters)
    // name: 'parasar'
    // expenses: state.expenses,
    // filters: state.filters,
  };
};

// From API of react-redux
export default connect(mapStateToProps)(ExpenseList);
// export default ExpenseList;






//*****************//
//***** NOTES *****//
//*****************//
// This is presentational component that allows us to simply write
// how stuff looks like without having to worry about checking for state updates
// Redux (mapping of store's state to props) takes care of it.

// The goal is to write as many presentational components as possible

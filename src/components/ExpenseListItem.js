import React from 'react';
import {connect} from 'react-redux';
import {removeExpense} from '../actions/expenses';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';


const ExpenseListItem = ({props, dispatch, id, description, note, amount, createdAt}) => (
  <div>
    {/*
      <h2>Expense # {id}</h2>
    */}
    <Link to={`/edit/${id}`}><h3>Description:{description}, Note: {note}</h3> </Link>
    <p>Amount:{amount}</p>
    <p>Created at:{createdAt}</p>
    <button onClick={ () => {
      dispatch(removeExpense({id}));
      console.log('poof!');
    }}>Remove</button>
  </div>
);




const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  }
}

export default connect(mapStateToProps)(ExpenseListItem);




// Just props
// that has expenses in it
//
// const ExpenseListItem = (props) => (
//   <div>
//     <h2>Expense # {props.expense.id}</h2>
//     <h3>Description:{props.expense.description}, Note: {props.expense.note}</h3>
//     <p>Amount:{props.expense.amount}</p>
//     <p>Created at:{props.expense.createdAt}</p>
//   </div>
// );

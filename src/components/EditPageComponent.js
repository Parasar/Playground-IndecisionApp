import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {editExpense} from './../actions/expenses.js';

const EditPageComponent = (props) => {
  console.log(props);

  const style = {
    fontSize: '150 px',
    color: 'rgba(0,0,255,1)'
  }

  return (
    <div>
      <p style={style}>You are editing page with id {props.match.params.id} </p>

      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense)=> {
          props.dispatch(editExpense(props.match.params.id, expense));
          props.history.push('/dashboard')
        }}
      />
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return{
    expense: state.expenses.find((expense)=> {
    return expense.id === props.match.params.id
    })
  };
};

export default connect(mapStateToProps)(EditPageComponent);

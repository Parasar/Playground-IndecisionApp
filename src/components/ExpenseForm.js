import React, {Component} from 'react';
import store from './../store/configStore.js';
import {addExpense, removeExpense} from './../actions/expenses.js';
import {connect} from 'react-redux';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


class ExpenseForm extends Component {

constructor(props){
  super(props);

  this.state = {
    description: props.expense? props.expense.description : '',
    note: props.expense? props.expense.note : '',
    amount: props.expense? (props.expense.amount).toString() : '',
    createdAt: props.expense? moment(props.expense.createdAt) : moment(),
    datepickerFocused: false,
    errorMessage: ''
  };
};


  resetState = {
    description: '',
    note: '',
    amount: 0,
    createdAt: moment(),
    datepickerFocused: false
  };

  render(){

    const handleSubmit = (e) => {
      e.preventDefault();
      // console.log('button cliked!');
      // console.log(this.state);

      // Validation check
      if (!this.state.description || !this.state.amount) {
        this.setState({errorMessage: 'No details entered!'});
        return;
      }

      // Add an expense to the store (by calling instance prop method)
      this.props.onSubmit({
        description: this.state.description,
        note: this.state.note,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: moment().valueOf()
      });

      // Resetting the form
      this.setState(this.resetState);

      // SETTIN EXPENSE DIRECTLY
      ////////////////////////////////
      // const expense = store.dispatch(addExpense(this.state));
      // // console.log(store.getState());
      // // this.setState(this.resetState);
    };

    // Momentjs messing around...
    // const now = new moment();
    // console.log(now);
    // console.log(now.hour());

    const onDescriptionChange = (e) => {
      this.setState({description: e.target.value});
    };

    const onNoteChange = (e) => {
      this.setState({note: e.target.value});
    };

    const onAmountChange = (e) => {
      let amount = e.target.value;
      if(!amount || amount.match(/^\d{1,}(?:\.\d{0,2})?$/)) {
        this.setState(() => ({amount}));
      }
    };

    return(

      <div>
        <form>
          {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
          <br />

          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={onDescriptionChange}
          />
          <br/>

          <textarea
            type="textarea"
            placeholder="Note"
            value={this.state.note}
            onChange={onNoteChange}
          />
          <br/>

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={
              (date) => {this.setState({createdAt: date}); }}
            focused={this.state.datepickerFocused}
            onFocusChange={ ({focused}) => {
              this.setState({datepickerFocused: focused});
            }}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <br />

          <input
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            parse={value => !value ? null : Number(value)}
            onChange={onAmountChange}
          />
          <br/>

          <button
            onClick={handleSubmit}
          >Submit </button>

        </form>
      </div>
    );
  }
}

export default connect()(ExpenseForm);

// const expense1 = store.dispatch(addExpense({
//   description: 'water bill',
//   note: 'for January',
//   amount: 300,
//   createdAt: 2000
// }));

// onChange={(e) => {
//   let amount = e.target.value;
//   if ( amount.match(/^\d*(\.\d{0,2})?$/)) {
//     this.setState({'amount': amount});
//   }
// }}



////////////////////////////////////////////
///// Never pass the whole state object
///// use individual data and send touchstart
////////////////////////////////////////////

import React from 'react';
import {connect} from 'react-redux';
import {sortByDate, sortByAmount, setTextFilter} from '../actions/filters';

const style= {
  border: `1px solid #222`,
  backGroundColor: '#bfbfbf'
}

const ExpenseListSearchFilter = (props) => (
  <div>

    {/* Could use defaultValue='Gas' to set initial value  */}
    <input type='text'
      style={style}
      value={props.filters.text}
      onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />

    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        (e.target.value === "date")? props.dispatch(sortByDate()): props.dispatch(sortByAmount());
        console.log(e.target.value);
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>

  </div>
);

const mapStateToProps = (state) => {
  return {
    // expenses: getVisibleExpenses(state.expenses, state.filters)
    // name: 'parasar'
    // expenses: state.expenses,
    filters: state.filters
  };
}
export default connect(mapStateToProps)(ExpenseListSearchFilter);


// Get the event target value
// console.log(e.target.value);

// map state to props, so shows current state
// console.log(props);

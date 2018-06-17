import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListSearchFilter from './ExpenseListSearchFilter';

const DashboardPageComponent = () => {
  return (
    <div>
      <p>Im a dashboard page</p>
      <ExpenseListSearchFilter />
      <ExpenseList />
    </div>
  );
};

export default DashboardPageComponent;

//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////
///////   FILTER EXPENSES    ////////
/////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// expense data
// {
//   id: '',
//   description: '',
//   note: '',
//   amount: 0,
//   createdAt: 0
// }

// Timestamps milliseconds
// 1st Jan 1970 (Unix epoch) === 0 timestamp
// 334000, 10, -1200


const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  // return expenses
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    // const textMatch = expense.description.toLowerCase() === text.toLowerCase();
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;

  }).sort((a,b) => {
      if (sortBy === 'date') {
        console.log('by date');
        return a.createdAt < b.createdAt ? 1: -1;
      }
      else if (sortBy === 'amount') {
        console.log('by amount');
        return a.amount < b.amount ? 1: -1;
      }
      return null;
  });
};

export default getVisibleExpenses;

const editExpense = (newExpense, expenses) => {
  const newExpenses = expenses.map((element) => {
    if (element.id !== newExpense.id) {
      return element;
    }
    return { ...element, ...newExpense };
  });
  // const newExpensesWithNewExpense = [...newExpenses, newExpense];
  return newExpenses.sort((a, b) => a.id - b.id);
};

export default editExpense;

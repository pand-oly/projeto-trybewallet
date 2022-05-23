function calcTotal(expenses) {
  const totalValue = expenses.reduce((acc, expense) => {
    const convertValue = expense.value * expense.exchangeRates[expense.currency].ask;
    const sum = acc + convertValue;
    return sum;
  }, 0);
  return totalValue.toFixed(2);
}

export default calcTotal;

export const USER_EMAIL = 'USER_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const GET_EXCHANGE_RATES = 'GET_EXCHANGE_RATES';
export const REMOVE_EXPENSE_ARRAY = 'REMOVE_EXPENSE_ARRAY';
export const ADC_TOTAL_EXPENSES = 'ADC_TOTAL_EXPENSES';
export const TOTAL_EXPENSE_SUM = 'TOTAL_EXPENSE_SUM';
export const TOTAL_EXPENSE_SUB = 'TOTAL_EXPENSE_SUB';

export const userEmail = (email) => ({
  type: 'USER_EMAIL', email,
});

export const getCurrenciesApi = (currencies) => ({
  type: 'GET_CURRENCIES', currencies,
});

export const adcExpense = (expenses) => ({
  type: 'ADD_EXPENSES', expenses,
});

export const getExchangeRatesApi = (exchangeRates) => ({
  type: 'GET_EXCHANGE_RATES', exchangeRates,
});

export const totalExpenseSum = (value) => ({
  type: 'TOTAL_EXPENSE_SUM', value,
});

export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE_ARRAY', id,
});

export const totalExpenseSub = (value) => ({
  type: 'TOTAL_EXPENSE_SUB', value,
});

export const actionTunk = (action) => {
  const URL_API = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    try {
      const response = await fetch(URL_API);
      const data = await response.json();
      delete data.USDT;
      return dispatch(action(data));
    } catch (error) {
      return error;
    }
  };
};

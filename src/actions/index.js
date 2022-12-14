export const USER_EMAIL = 'USER_EMAIL';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const GET_EXCHANGE_RATES = 'GET_EXCHANGE_RATES';
export const REMOVE_EXPENSE_ARRAY = 'REMOVE_EXPENSE_ARRAY';
export const ADC_TOTAL_EXPENSES = 'ADC_TOTAL_EXPENSES';
export const EXPENSE_FOR_T0_EDIT = 'EXPENSE_FOR_T0_EDIT';
export const EXPENSE_EDITED = 'EXPENSE_EDITED';

export const userEmail = (email) => ({
  type: USER_EMAIL, email,
});

export const getCurrenciesApi = (currencies) => ({
  type: GET_CURRENCIES, currencies,
});

export const adcExpense = (rates, expense) => ({
  type: ADD_EXPENSES, payload: { ...expense, exchangeRates: rates },
});

export const getExchangeRatesApi = (exchangeRates) => ({
  type: GET_EXCHANGE_RATES, exchangeRates,
});

export const removeExpense = (id) => ({
  type: REMOVE_EXPENSE_ARRAY, id,
});

export const editExpense = (expense) => ({
  type: EXPENSE_FOR_T0_EDIT, expense,
});

export const adcExpenseEdited = (newExpense) => ({
  type: EXPENSE_EDITED, newExpense,
});

export const actionTunkCurrencies = () => {
  const URL_API = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    const response = await fetch(URL_API);
    const data = await response.json();
    delete data.USDT;
    return dispatch(getCurrenciesApi(data));
  };
};

export const actionTunkRates = (expense) => {
  const URL_API = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    const response = await fetch(URL_API);
    const data = await response.json();
    delete data.USDT;
    dispatch(adcExpense(data, expense));
  };
};

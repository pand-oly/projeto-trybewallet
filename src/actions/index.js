export const USER_EMAIL = 'USER_EMAIL';
export const CURRENCIES = 'CURRENCIES';
export const EXPENSES = 'EXPENSES';

export const userEmail = (email) => ({
  type: 'USER_EMAIL', email,
});

export const getCurrenciesApi = (currencies) => ({
  type: 'CURRENCIES', currencies,
});

export const adcExpense = (expenses) => ({
  type: 'EXPENSES', expenses,
});

export const actionTunk = () => {
  const URL_API = 'https://economia.awesomeapi.com.br/json/all';
  return async (dispatch) => {
    try {
      const response = await fetch(URL_API);
      const data = await response.json();
      delete data.USDT;
      return dispatch(getCurrenciesApi(data));
    } catch (error) {
      return error;
    }
  };
};

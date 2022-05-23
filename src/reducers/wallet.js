import {
  GET_CURRENCIES, ADD_EXPENSES, GET_EXCHANGE_RATES,
  REMOVE_EXPENSE_ARRAY, TOTAL_EXPENSE_SUM, TOTAL_EXPENSE_SUB,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  exchangeRates: {},
  totalExpenses: 0,
};

const resultCalcTotal = (total, valor) => Number(total) + Number(valor);
const resultSubTotal = (total, valor) => Number(total) - Number(valor);

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CURRENCIES:
    return {
      ...state,
      currencies: Object.keys(action.currencies),
    };
  case ADD_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  case GET_EXCHANGE_RATES:
    return {
      ...state,
      exchangeRates: action.exchangeRates,
    };
  case TOTAL_EXPENSE_SUM:
    return {
      ...state,
      totalExpenses: resultCalcTotal(state.totalExpenses, action.value),
    };
  case TOTAL_EXPENSE_SUB:
    return {
      ...state,
      totalExpenses: resultSubTotal(state.totalExpenses, action.value),
    };
  case REMOVE_EXPENSE_ARRAY:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.id),
    };
  default:
    return state;
  }
}

export default walletReducer;

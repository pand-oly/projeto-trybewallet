import {
  GET_CURRENCIES, ADD_EXPENSES, EXPENSE_EDITED,
  REMOVE_EXPENSE_ARRAY, EXPENSE_FOR_T0_EDIT,
} from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  toEdit: '',
  editMode: false,
};

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
      expenses: [...state.expenses, action.payload],
    };
  case REMOVE_EXPENSE_ARRAY:
    return {
      ...state,
      expenses: state.expenses.filter(({ id }) => id !== action.id),
    };
  case EXPENSE_FOR_T0_EDIT:
    return {
      ...state,
      toEdit: action.expense,
      editMode: true,
    };
  case EXPENSE_EDITED:
    return {
      ...state,
      expenses: [...state.expenses].map((expense) => (
        expense.id === state.toEdit.id ? { ...expense, ...action.newExpense } : expense
      )),
      editMode: false,
    };
  default:
    return state;
  }
}

export default walletReducer;

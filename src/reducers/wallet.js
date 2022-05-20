const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'CURRENCIES':
    return {
      ...state,
      currencies: Object.keys(action.currencies),
    };
  case 'EXPENSES':
    return {
      ...state,
      expenses: [action.expenses],
    };
  default:
    return state;
  }
}

export default walletReducer;

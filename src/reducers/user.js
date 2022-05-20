const INITIAL_STATE = {
  email: 'test@test.com',
};

function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'USER_EMAIL':
    return { ...state, email: action.email };
  default:
    return state;
  }
}

export default loginReducer;

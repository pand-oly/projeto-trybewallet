function validExpenseForm(stateObj) {
  const arrayKeys = Object.keys(stateObj);
  let response = {};
  arrayKeys.forEach((key) => {
    if (stateObj[key] === '' && key === 'value') {
      response = { ...response, [key]: 0 };
    } else if (stateObj[key] === '' && key === 'description') {
      response = { ...response, [key]: 'Não especificado' };
    } else {
      response = { ...response, [key]: stateObj[key] };
    }
  });
  return response;
}

export default validExpenseForm;

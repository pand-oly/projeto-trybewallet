import React from 'react';
import PropTypes from 'prop-types';

function InputEl(props) {
  const { name, id, checkFormValid, value } = props;
  return (
    <input
      id={ id }
      type={ name }
      name={ name }
      value={ value }
      placeholder={ name }
      data-testid={ id }
      onChange={ checkFormValid }
    />
  );
}

InputEl.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checkFormValid: PropTypes.func.isRequired,
};

export default InputEl;

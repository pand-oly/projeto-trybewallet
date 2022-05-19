import React from 'react';
import PropTypes from 'prop-types';

function InputEl(props) {
  const { name, id, checkFormValid, value, type } = props;
  return (
    <input
      id={ id }
      type={ type }
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
  type: PropTypes.string.isRequired,
};

export default InputEl;

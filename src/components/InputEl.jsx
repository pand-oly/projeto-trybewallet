import React from 'react';
import PropTypes from 'prop-types';

function InputEl(props) {
  const { name, id, handeChange, value, type, placeholder } = props;
  return (
    <input
      id={ id }
      type={ type }
      name={ name }
      value={ value }
      placeholder={ placeholder }
      data-testid={ id }
      onChange={ handeChange }
    />
  );
}

InputEl.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handeChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputEl;

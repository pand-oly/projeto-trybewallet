import React from 'react';
import PropTypes from 'prop-types';

function SelectEl(props) {
  const { nameElement, arrayOptions, handeChange, name, id } = props;
  return (
    <label htmlFor={ id }>
      {nameElement}
      <select onChange={ handeChange } name={ name } id={ id } data-testid={ id }>
        {arrayOptions && arrayOptions.map((item, index) => (
          <option key={ index }>{item}</option>
        ))}
      </select>
    </label>
  );
}

SelectEl.propTypes = {
  nameElement: PropTypes.string.isRequired,
  arrayOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  handeChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default SelectEl;

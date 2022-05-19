import React from 'react';
import PropTypes from 'prop-types';

function ButtonEl(props) {
  const { state, name, handeSubimit } = props;
  return (
    <button type="submit" disabled={ state } onClick={ handeSubimit }>{name}</button>
  );
}

ButtonEl.propTypes = {
  state: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  handeSubimit: PropTypes.func.isRequired,
};

export default ButtonEl;

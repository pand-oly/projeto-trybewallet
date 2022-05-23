import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import calcTotal from './service/calcTotal';

function Header(props) {
  const { email, expenses = 0 } = props;
  return (
    <header>
      <div>Wallet Logo</div>
      <div>
        <p data-testid="email-field">
          <span>Email: </span>
          {email}
        </p>
      </div>
      <div>
        <span>Despesa Total: R$ </span>
        <span data-testid="total-field">{calcTotal(expenses)}</span>
        <span data-testid="header-currency-field"> BRL</span>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(Header);

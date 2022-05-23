import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Header(props) {
  const { email, totalExpenses = 0 } = props;
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
        <span data-testid="total-field">{totalExpenses.toFixed(2)}</span>
        <span data-testid="header-currency-field"> BRL</span>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  totalExpenses: state.wallet.totalExpenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  totalExpenses: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Header);

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Header(props) {
  const { email } = props;
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
        Despesa Total: R$
        <span data-testid="total-field"> 0,00 </span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    </header>
  );
}

const mapStateToProps = (state) => ({
  email: state.user.email,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);

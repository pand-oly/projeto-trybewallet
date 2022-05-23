import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ExpenseList from '../components/ExpenseList';
import { actionTunkCurrencies, getCurrenciesApi } from '../actions';
import FormeExpense from '../components/FormeExpense';

class Wallet extends React.Component {
  componentDidMount() {
    const { requestApi } = this.props;

    requestApi(getCurrenciesApi);
  }

  render() {
    return (
      <div>
        <Header />
        <FormeExpense />
        <ExpenseList />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestApi: () => dispatch(actionTunkCurrencies()),
});

Wallet.propTypes = {
  requestApi: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);

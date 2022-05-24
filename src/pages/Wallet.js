import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FormExpense from '../components/FormExpense';
import FormEdit from '../components/FormEdit';
import ExpenseList from '../components/ExpenseList';
import { actionTunkCurrencies, getCurrenciesApi } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { requestApi } = this.props;

    requestApi(getCurrenciesApi);
  }

  render() {
    const { editMode } = this.props;
    return (
      <div>
        <Header />
        {editMode ? (<FormEdit />) : (<FormExpense />)}
        <ExpenseList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  editMode: state.wallet.editMode,
});

const mapDispatchToProps = (dispatch) => ({
  requestApi: () => dispatch(actionTunkCurrencies()),
});

Wallet.propTypes = {
  editMode: PropTypes.bool.isRequired,
  requestApi: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);

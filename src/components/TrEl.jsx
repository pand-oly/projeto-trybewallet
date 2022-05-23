import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from './Loading';
import { removeExpense, totalExpenseSub } from '../actions';
import currencyConverter from './service/currencyConverter';

class TrEl extends Component {
  constructor() {
    super();
    this.state = { isloading: true, expense: {} };
  }

  componentDidMount() {
    const { expense } = this.props;
    const { value, exchangeRates, currency } = expense;

    const convertedValue = currencyConverter(
      Number(value), Number(exchangeRates[currency].ask),
    );
    this.setState({ isloading: false, expense, convertedValue });
  }

  delet = () => {
    const { handleClickExcluir, handleTotalSub, expense } = this.props;
    const { convertedValue } = this.state;

    handleClickExcluir(expense.id);
    handleTotalSub(convertedValue);
  }

  render() {
    const { expense, isloading, convertedValue } = this.state;
    const {
      id, description, tag, method, value, currency, exchangeRates,
    } = expense;
    return isloading ? (<Loading />) : (
      <tr id={ id }>
        <th>{description}</th>
        <th>{tag}</th>
        <th>{method}</th>
        <th>{value}</th>
        <th>{currency}</th>
        <th>{exchangeRates[currency].ask}</th>
        <th>{convertedValue}</th>
        <th>{exchangeRates[currency].name.split('/')[1]}</th>
        <th>
          <button type="button" onClick={ console.log(id) }>
            Editar
          </button>
          <button type="button" onClick={ this.delet }>
            Excluir
          </button>
        </th>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // handleClickEditar: () => dispatch(),
  handleClickExcluir: (id) => dispatch(removeExpense(id)),
  handleTotalSub: (value) => dispatch(totalExpenseSub(value)),
});

TrEl.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    exchangeRates: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
  handleClickExcluir: PropTypes.func.isRequired,
  // handleClickEditar: PropTypes.func.isRequired,
  handleTotalSub: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(TrEl);

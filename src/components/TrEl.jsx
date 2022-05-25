import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from './Loading';
import { removeExpense, editExpense } from '../actions';
import currencyConverter from './service/currencyConverter';

class TrEl extends Component {
  constructor() {
    super();
    this.state = { isloading: true };
  }

  componentDidMount() {
    this.setState({ isloading: false });
  }

  edit = () => {
    const { expense, handleClickEditar } = this.props;
    handleClickEditar(expense);
  };

  delet = () => {
    const { handleClickExcluir, expense } = this.props;
    handleClickExcluir(expense.id);
  }

  render() {
    const { isloading } = this.state;
    const { expense } = this.props;
    const {
      description, tag, method, value, currency, exchangeRates,
    } = expense;
    console.log(expense);
    return isloading ? (<Loading />) : (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{Number(value).toFixed(2)}</td>
        <td>{exchangeRates[currency].name}</td>
        <td>{Number(exchangeRates[currency].ask).toFixed(2)}</td>
        <td>
          {currencyConverter(Number(value), Number(exchangeRates[currency].ask))}
        </td>
        <td>Real</td>
        <td>
          <button data-testid="edit-btn" type="button" onClick={ this.edit }>
            Editar
          </button>
          <button data-testid="delete-btn" type="button" onClick={ this.delet }>
            Excluir
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handleClickEditar: (expense) => dispatch(editExpense(expense)),
  handleClickExcluir: (id) => dispatch(removeExpense(id)),
});

TrEl.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.number || PropTypes.string,
    currency: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    exchangeRates: PropTypes.objectOf(PropTypes.object).isRequired,
  }).isRequired,
  handleClickExcluir: PropTypes.func.isRequired,
  handleClickEditar: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(TrEl);

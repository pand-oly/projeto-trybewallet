import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputEl from './InputEl';
import SelectEl from './SelectEl';
import ButtonEl from './ButtonEl';
import {
  adcExpense, totalExpenseSum, getExchangeRatesApi, actionTunk,
} from '../actions';
import validExpenseForm from './service/validExpenseForm';
import currencyConverter from './service/currencyConverter';

const STANDARD_TAG = 'Alimentação';

class FormeExpense extends Component {
  constructor(props) {
    super(props);

    const { arrayExpenses } = props;
    this.state = {
      id: arrayExpenses.length,
      value: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: STANDARD_TAG,
      description: '',
    };
  }

  componentDidMount() {
    const { requestApi } = this.props;

    requestApi(getExchangeRatesApi);
  }

  handeChange = ({ target: { name, value } }) => {
    if (name === 'value' && value < 0) {
      value = 0;
    }
    this.setState({ [name]: value });
  }

  handeSubimit = () => {
    const { addExpenses, exchangeRates, calcTotal } = this.props;
    this.setState({ exchangeRates }, () => {
      const validated = validExpenseForm(this.state);
      const { id, currency, value } = validated;

      const cuvertedValue = currencyConverter(
        Number(value), Number(exchangeRates[currency].ask),
      );

      addExpenses(validated);
      calcTotal(cuvertedValue);

      this.setState({
        id: id + 1,
        value: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: STANDARD_TAG,
        description: '',
      });
    });
  }

  render() {
    const { value, currency, method, tag, description } = this.state;
    const { currencies } = this.props;
    return (
      <fieldset>
        <InputEl
          id="value-input"
          type="number"
          name="value"
          value={ value }
          placeholder="Valor"
          handeChange={ this.handeChange }
        />
        <SelectEl
          id="coin-input"
          name="currency"
          value={ currency }
          nameElement="Moeda"
          arrayOptions={ currencies }
          handeChange={ this.handeChange }
        />
        <SelectEl
          id="method-input"
          name="method"
          value={ method }
          nameElement="Metodo de Pagamento"
          arrayOptions={ ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'] }
          handeChange={ this.handeChange }
        />
        <SelectEl
          id="tag-input"
          name="tag"
          value={ tag }
          nameElement="Tag:"
          arrayOptions={ ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'] }
          handeChange={ this.handeChange }
        />
        <InputEl
          type="text"
          name="description"
          value={ description }
          id="description-input"
          placeholder="Descrição"
          handeChange={ this.handeChange }
        />
        <ButtonEl
          name="Adicionar despesa"
          state={ false }
          handeSubimit={ this.handeSubimit }
        />
      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  arrayExpenses: state.wallet.expenses,
  currencies: state.wallet.currencies,
  exchangeRates: state.wallet.exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  addExpenses: (state) => dispatch(adcExpense(state)),
  calcTotal: (state) => dispatch(totalExpenseSum(state)),
  requestApi: (action) => dispatch(actionTunk(action)),
});

FormeExpense.propTypes = {
  addExpenses: PropTypes.func.isRequired,
  arrayExpenses: PropTypes.arrayOf(PropTypes.object).isRequired,
  calcTotal: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  exchangeRates: PropTypes.objectOf(PropTypes.object).isRequired,
  requestApi: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormeExpense);

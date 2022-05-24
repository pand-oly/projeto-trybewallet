import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputEl from './InputEl';
import SelectEl from './SelectEl';
import ButtonEl from './ButtonEl';
import { adcExpenseEdited } from '../actions';
import validExpenseForm from './service/validExpenseForm';

class FormEdit extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      currency: '',
      method: '',
      tag: '',
      description: '',
    };
  }

  componentDidMount() {
    const { expense } = this.props;

    this.setState({
      value: expense.value,
      currency: expense.currency,
      method: expense.method,
      tag: expense.tag,
      description: expense.description,
    });
  }

  handeChange = ({ target: { name, value } }) => {
    if (name === 'value' && value < 0) {
      value = 0;
    }
    this.setState({ [name]: value });
  }

  handeSubimit = () => {
    const { dispatch } = this.props;

    const validated = validExpenseForm(this.state);
    dispatch(adcExpenseEdited(validated));
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
          id="currency-input"
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
          name="Editar despesa"
          state={ false }
          handeSubimit={ this.handeSubimit }
        />
      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  expense: state.wallet.toEdit,
  currencies: state.wallet.currencies,
});

FormEdit.propTypes = {
  expense: PropTypes.shape({
    value: PropTypes.number,
    currency: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(FormEdit);

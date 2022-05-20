import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputEl from './InputEl';
import SelectEl from './SelectEl';
import ButtonEl from './ButtonEl';
import { adcExpense } from '../actions';

class FormeExpense extends Component {
  constructor() {
    super();
    this.state = {
      valueDispesa: '', moeda: '', metodoPagamento: '', tag: '', description: '',
    };
  }

  handeChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handeSubimit = (event) => {
    event.preventDefault();
    const { expenses } = this.props;
    expenses(this.state);
  }

  render() {
    const { valueDispesa, moeda, metodoPagamento, tag, description } = this.state;
    const { currencies } = this.props;
    return (
      <fieldset>
        <InputEl
          id="value-input"
          type="number"
          name="valueDispesa"
          value={ valueDispesa }
          placeholder="Valor"
          handeChange={ this.handeChange }
        />
        <SelectEl
          id="coin-input"
          name="moeda"
          value={ moeda }
          nameElement="Moeda"
          arrayOptions={ currencies }
          handeChange={ this.handeChange }
        />
        <SelectEl
          id="method-input"
          name="metodoPagamento"
          value={ metodoPagamento }
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
          name="Adicionar dispesa"
          state={ false }
          handeSubimit={ this.handeSubimit }
        />
      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  expenses: (state) => dispatch(adcExpense(state)),
});

FormeExpense.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  expenses: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormeExpense);

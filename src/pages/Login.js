import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import InputEl from '../components/InputEl';
import ButtonEl from '../components/ButtonEl';
import { userEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = { disabled: true, email: '', password: '' };
  }

  handeChange = ({ target: { name, value } }) => {
    const REGEX_EMAIL_VALID = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
    const MIN_PASSWORD_CHAR = 6;

    this.setState({ [name]: value }, () => {
      const { email, password } = this.state;

      if (REGEX_EMAIL_VALID.test(email) && password.length >= MIN_PASSWORD_CHAR) {
        this.setState({ disabled: false });
      } else {
        this.setState({ disabled: true });
      }
    });
  }

  handeSubimit = (event) => {
    const { history, email } = this.props;
    const { email: state } = this.state;
    event.preventDefault();
    email(state);
    history.push('/carteira');
  };

  render() {
    const { disabled, email, password } = this.state;
    return (
      <fieldset>
        <h2>Login</h2>
        <InputEl
          id="email-input"
          name="email"
          type="email"
          value={ email }
          checkFormValid={ this.handeChange }
        />
        <InputEl
          id="password-input"
          name="password"
          type="password"
          value={ password }
          checkFormValid={ this.handeChange }
        />
        <ButtonEl state={ disabled } name="Entrar" handeSubimit={ this.handeSubimit } />
      </fieldset>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  email: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  email: (state) => dispatch(userEmail(state)),
});

export default connect(null, mapDispatchToProps)(Login);

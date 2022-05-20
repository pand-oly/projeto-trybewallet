import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import { actionTunk } from '../actions';
import FormeExpense from '../components/FormeExpense';

class Wallet extends React.Component {
  componentDidMount() {
    const { requestApi } = this.props;

    requestApi(actionTunk());
  }

  render() {
    return (
      <div>
        <Header />
        <FormeExpense />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestApi: () => dispatch(actionTunk()),
});

Wallet.propTypes = {
  requestApi: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);

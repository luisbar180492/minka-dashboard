/********************
 * From third party *
 ********************/
import React from 'react';
import Box from 'grommet/components/Box';
import LoginForm from 'grommet/components/LoginForm';
import Spinning from 'grommet/components/icons/Spinning';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { replace } from 'react-router-redux';
/****************
 * From project *
 ****************/
import BasisComponent from 'basisComponent';
import { TXT_4 } from 'common/string';
import { HOME } from 'common/config';
import { SIGN_IN } from 'common/actions';
import actionBuilder from 'common/actionBuilder';

class Login extends BasisComponent {

  onSubmit = (data) => {
    this.props.signIn(data.username, data.password);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.wasASuccess)
      this.props.goToHome();
  }

  render() {
    const { errorMessage, isRunning } = this.props;

    return (
      <Box
        flex={true}
        justify={'center'}
        align={'center'}>

        <LoginForm
          title={TXT_4.toUpperCase()}
          onSubmit={this.onSubmit}
          errors={[errorMessage]}
          logo={isRunning && <Spinning/>}/>
      </Box>
    );
  }
}

const mapStateToProps = (state) => ({
  wasASuccess: state
    .rootReducer
    .stateReducer
    .signInReducer
    .status
    .wasASuccess,
  errorMessage: state
    .rootReducer
    .stateReducer
    .signInReducer
    .status
    .error
    .errorMessage,
  isRunning: state
    .rootReducer
    .stateReducer
    .signInReducer
    .status
    .error
    .isRunning,
});

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch(actionBuilder(SIGN_IN, { email, password })),
  goToHome: () => dispatch(replace(HOME)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login));

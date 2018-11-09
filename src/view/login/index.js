/********************
 * From third party *
 ********************/
import React from 'react';
import Box from 'grommet/components/Box';
import LoginForm from 'grommet/components/LoginForm';
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
    const { errorMessage } = this.props;

    return (
      <Box
        flex={true}
        justify={'center'}
        align={'center'}>

        <LoginForm
          title={TXT_4.toUpperCase()}
          onSubmit={this.onSubmit}
          errors={[errorMessage]}/>
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
});

const mapDispatchToProps = dispatch => ({
  signIn: (email, password) => dispatch(actionBuilder(SIGN_IN, { email, password })),
  goToHome: () => dispatch(replace(HOME)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login));

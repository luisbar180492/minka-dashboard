/********************
 * From third party *
 ********************/
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
/****************
 * From project *
 ****************/
import BasisComponent from 'basisComponent';
import PrivateRoute from './privateRoute';
import { Login, Home, NotFound, Account } from 'view';
import { LOGIN, HOME, ACCOUNT } from 'common/config';
/**
 * It has all routes and manages them
 */
class Router extends BasisComponent {

  render() {
    const { checked, location, authenticated } = this.props;

    return (
      checked &&
      <Switch location={location}>
        <PrivateRoute exact path={ACCOUNT} component={this.renderAccount} authenticated={authenticated}/>
        <PrivateRoute exact path={HOME} component={this.renderHome} authenticated={authenticated}/>
        <Route exact path={LOGIN} component={this.renderLogin}/>
        <Route component={this.renderNotFound}/>
      </Switch>
    );
  }

  renderAccount = () => {

    return (
      <Account/>
    );
  }

  renderHome = () => {

    return (
      <Home/>
    );
  }

  renderLogin = () => {

    return (
      <Login/>
    );
  }

  renderNotFound = () => {

    return (
      <NotFound/>
    );
  }
}

const mapStateToProps = (state) => ({
  checked: state
  .rootReducer
  .sessionReducer
  .checked,
  authenticated: state
  .rootReducer
  .sessionReducer
  .authenticated,
});

export default withRouter(connect(
  mapStateToProps,
)(Router));

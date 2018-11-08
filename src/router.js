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
import PrivateRoute from 'privateRoute';
import { Login, Home, NotFound } from 'view';
import { LOGIN, HOME } from 'config';
/**
 * It has all routes and manages them
 */
class Router extends BasisComponent {

  render() {
    const { checked, location, authenticated } = this.props;

    return (
      checked &&
      <Switch location={location}>
        <PrivateRoute exact path={HOME} component={this.renderHome} authenticated={authenticated}/>
        <Route exact path={LOGIN} component={this.renderLogin}/>
        <Route component={this.renderNotFound}/>
      </Switch>
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

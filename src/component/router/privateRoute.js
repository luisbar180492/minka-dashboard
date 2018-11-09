/********************
 * From third party *
 ********************/
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
/****************
 * From project *
 ****************/
import { LOGIN } from 'common/config';

class PrivateRoute extends Component {

  render() {
    const { authenticated, component, ...other } = this.props;

    return (
      <Route
        {...other}
        render={this.renderComponent}
      />
    );
  }

  renderComponent = () => {
    const { authenticated, component, location } = this.props;

    return (
      authenticated
      ?
        React.createElement(component, this.props)
      :
        <Redirect
          to={LOGIN}
          from={location.pathname}/>
    );
  }
}

export default PrivateRoute;

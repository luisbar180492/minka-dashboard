/********************
 * From third party *
 ********************/
import React from 'react';
import { Route, Switch } from 'react-router-dom';
/****************
 * From project *
 ****************/
import BasisComponent from 'basisComponent';
import { Home, Another, NotFound } from 'view';
import { HOME, ANOTHER } from 'config';
/**
 * It has all routes and manages them
 */
class Router extends BasisComponent {
  
  constructor(props) {
    super(props);
    //Listeners
    this._renderHome = this.renderHome.bind(this);
    this._renderAnother = this.renderAnother.bind(this);
    this._renderNotFound = this.renderNotFound.bind(this);
  }

  render() {

    return (
      <Switch location={this.props.location}>
        <Route exact path={HOME} render={this._renderHome}/>
        <Route exact path={ANOTHER} render={this._renderAnother}/>
        <Route render={this._renderNotFound}/>
      </Switch>
    );
  }
  
  renderHome() {
    
    return (
      <Home
        data={this.props.data}/>
    );
  }

  renderAnother() {
    
    return (
      <Another/>
    );
  }
  
  renderNotFound() {
    
    return (
      <NotFound/>
    );
  }
}

export default Router;
/***********************
 * Node modules import *
 ***********************/
import React, { Component } from 'react';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
/******************
 * Project import *
 ******************/
import {
  HOME,
  ANOTHER,
} from '../../config';
import {
  Home,
  Another,
  NotFound
} from '../../component';
/**
 * It renders the first view to be shown
 */
class Main extends Component {
  
  constructor(props) {
    super(props);
    //Listeners
    this._renderHome = this.renderHome.bind(this);
    this._renderAnother = this.renderAnother.bind(this);
    this._renderNotFound = this.renderNotFound.bind(this);
  }

  render() {

    return (
      <App
        centered={false}>
        <Box
          full={true}>

          <Switch location={this.props.location}>
            <Route exact path={HOME} render={this._renderHome}/>
            <Route exact path={ANOTHER} render={this._renderAnother}/>
            <Route render={this._renderNotFound}/>
          </Switch>

        </Box>
      </App>
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

const mapStateToProps = state => ({
  data: state
    .rootReducer
    .dataReducer
    .defaultReducer
    .useCaseReducer.data,
});

export default withRouter(connect(
  mapStateToProps
)(Main));

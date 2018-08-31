/***********************
 * Node modules import *
 ***********************/
import React from 'react';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { replace } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
/******************
 * Project import *
 ******************/
import './fadeRightToLeft.css';
import BasisComponent from 'basisComponent';
import {
  HOME,
  ANOTHER,
} from 'config';
import {
  Home,
  Another,
  NotFound,
  ErrorBoundary
} from 'component';
/**
 * It renders the first view to be shown
 */
class Main extends BasisComponent {
  
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
        id={'container'}
        centered={false}>
        <ErrorBoundary
          replace={this.props.replace}>
          <TransitionGroup
            component={null}>
            <CSSTransition
              key={this.props.location.key}
              classNames={'fade-right-to-left'}
              timeout={{
                enter: 500,
                exit: 500
              }}>
              <Box
                full={true}>
                <Switch location={this.props.location}>
                  <Route exact path={HOME} render={this._renderHome}/>
                  <Route exact path={ANOTHER} render={this._renderAnother}/>
                  <Route render={this._renderNotFound}/>
                </Switch>
              </Box>
            </CSSTransition>
          </TransitionGroup>
        </ErrorBoundary>
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
  
  componentDidMount() {
    window.$('#container').niceScroll({
      cursorborder: '1px solid #424242',
      cursorcolor: '#424242',
      cursorwidth: '5px',
    });
  }
}

const mapStateToProps = state => ({
  data: state
    .rootReducer
    .dataReducer
    .defaultReducer
    .useCaseReducer.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  replace: replace,
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));

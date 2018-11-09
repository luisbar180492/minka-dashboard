/********************
 * From third party *
 ********************/
import React from 'react';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import PropTypes from 'prop-types';
/****************
 * From project *
 ****************/
import BasisComponent from 'basisComponent';
import { ErrorBoundary, TransitionAnimator, Drawer, Router } from 'component';
import { HOME, ACCOUNT } from 'common/config';
/**
 * Wrapper for whole the app
 */
class Wrapper extends BasisComponent {

  render() {

    return (
      <App
        centered={false}>
        <ErrorBoundary
          replace={this.props.replace}>
          <TransitionAnimator
            transitionKey={this.props.location.pathname}>
            <Box
              full={true}
              colorIndex={'neutral-1'}>
              {this.renderRouter()}
              {this.renderDrawer()}
            </Box>
          </TransitionAnimator>
        </ErrorBoundary>
      </App>
    );
  }

  renderDrawer() {

    return (
      this.props.location.pathname === HOME ||
      this.props.location.pathname === ACCOUNT
      ? <Drawer
          pathname={this.props.location.pathname}/>
      : null
    );
  }

  renderRouter() {

    return (
      <Router
        location={this.props.location}/>
    );
  }
}

Wrapper.propTypes = {
  replace: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export default Wrapper;

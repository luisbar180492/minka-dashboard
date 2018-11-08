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
import Router from 'router';
import { ErrorBoundary, TransitionAnimator } from 'component';
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
              <Router
                location={this.props.location}/>
            </Box>
          </TransitionAnimator>
        </ErrorBoundary>
      </App>
    );
  }
}

Wrapper.propTypes = {
  replace: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export default Wrapper;

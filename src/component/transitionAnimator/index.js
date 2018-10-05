/********************
 * From third party *
 ********************/
import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
/****************
 * From project *
 ****************/
import './animation.css';
import BasisComponent from 'basisComponent';
/**
 * It manages the animations for view transitions
 */
class TransitionAnimator extends BasisComponent {

  render() {

    return (
      <TransitionGroup
        component={null}>
        <CSSTransition
          key={this.props.transitionKey}
          classNames={'fade'}
          timeout={1000}>
          {this.props.children}
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

TransitionAnimator.propTypes = {
  transitionKey: PropTypes.string.isRequired,
};

export default TransitionAnimator;
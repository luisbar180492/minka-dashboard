/********************
 * From third party *
 ********************/
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { replace } from 'react-router-redux';
import { bindActionCreators } from 'redux';
/****************
 * From project *
 ****************/
import BasisComponent from 'basisComponent';
import { Wrapper } from 'component';
/**
 * It renders the wrapper which contains the error boundary,
 * the transition animator and the router
 */
class Main extends BasisComponent {

  render() {

    return (
      <Wrapper
        replace={this.props.replace}
        location={this.props.location}/>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => bindActionCreators({
  replace: replace,
}, dispatch);

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));
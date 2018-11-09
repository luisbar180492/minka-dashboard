/********************
 * From third party *
 ********************/
import React from 'react';
import Box from 'grommet/components/Box';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
/****************
 * From project *
 ****************/
import BasisComponent from 'basisComponent';

class Home extends BasisComponent {

  render() {

    return (
      <Box
        flex={true}
        justify={'center'}
        align={'center'}>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

export default withRouter(connect(
  mapStateToProps,
)(Home));

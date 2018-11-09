/********************
 * From third party *
 ********************/
import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
/****************
 * From project *
 ****************/
import BasisComponent from 'basisComponent';

class Account extends BasisComponent {

  render() {

    return (
      <Box
        flex={true}
        justify={'center'}
        align={'center'}>

        <Heading
          align={'center'}
          truncate={true}>
          {'ACCOUNT'}
        </Heading>
      </Box>
    );
  }
}

const mapStateToProps = state => ({
  state: state
});

export default withRouter(connect(
  mapStateToProps,
)(Account));

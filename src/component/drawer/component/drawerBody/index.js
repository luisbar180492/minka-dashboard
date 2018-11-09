/********************
 * From third party *
 ********************/
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { replace } from 'react-router-redux';
/****************
 * From project *
 ****************/
import { HOME, ACCOUNT } from 'config';
import { TXT_6, TXT_7 } from 'string';

class DrawerBody extends Component {

  render() {

    return (
      <Box
        flex
        justify={'center'}
        pad={{ horizontal: 'medium' }}>

        <Box
          onClick={this.props.goToHome}>
          <Heading
            tag={'h3'}
            strong={this.props.pathname === HOME}>
            {TXT_6}
          </Heading>
        </Box>

        <Box
          onClick={this.props.goToAccount}>
          <Heading
            tag={'h3'}
            strong={this.props.pathname === ACCOUNT}>
            {TXT_7}
          </Heading>
        </Box>
      </Box>
    );
  }
}

DrawerBody.propTypes = {
  pathname: PropTypes.string,
};

const mapDispatchToProps = dispatch => ({
  goToHome: () => dispatch(replace(HOME)),
  goToAccount: () => dispatch(replace(ACCOUNT)),
});

export default withRouter(connect(
  null,
  mapDispatchToProps
)(DrawerBody));

/********************
 * From third party *
 ********************/
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Logout from 'grommet/components/icons/base/Logout';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { replace } from 'react-router-redux'
/****************
 * From project *
 ****************/
import { LOGIN } from 'common/config';
import { TXT_8 } from 'common/string';
import actionBuilder from 'common/actionBuilder';
import { SIGN_OUT } from 'common/actions';

class DrawerFooter extends Component {

  render() {

    return (
      <Box
        direction={'row'}
        align={'center'}
        responsive={false}
        onClick={this.onSignOutClicked}>

        <Box
          pad={'medium'}>
          <Logout/>
        </Box>

        <Heading
          truncate
          margin={'none'}
          tag={'h3'}>
          {TXT_8}
        </Heading>
      </Box>
    );
  }

  onSignOutClicked = () => {
    this.props.signOut();
  }
}

const mapStateToProps = state => ({
  state: state,
});

const mapDispatchToProps = dispatch => ({
  goLogin: () => dispatch(replace(LOGIN)),
  signOut: () => dispatch(actionBuilder(SIGN_OUT)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerFooter));

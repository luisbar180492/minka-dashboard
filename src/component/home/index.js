/***********************
 * Node modules import *
 ***********************/
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import PropTypes from 'prop-types';
/******************
 * Project import *
 ******************/
import { TXT_2 } from '../../string';
import { ANOTHER } from '../../config';
/**
 * It renders the home component
 */
class Home extends Component {
  
  render() {

    return (
      <Box
        {...this.props}
        flex={true}
        justify={'center'}
        align={'center'}
        colorIndex={'neutral-1'}>
        <Heading>
          {this.props.data}
        </Heading>

        <Button
          label={TXT_2}
          accent={false}
          critical={false}
          primary={true}
          secondary={false}
          plain={false}
          fill={false}
          type={'button'}
          path={ANOTHER}
          method={'replace'}/>
      </Box>
    );
  }
}

Home.propTypes = {
  data: PropTypes.string,
};

export default Home;
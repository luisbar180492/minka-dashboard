/***********************
 * Node modules import *
 ***********************/
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
/******************
 * Project import *
 ******************/
import { TXT_1 } from '../../string';
/**
 * It renders the notFound component
 */
class NotFound extends Component {

  render() {

    return (
      <Box
        flex={true}
        justify={'center'}
        align={'center'}
        colorIndex={'accent-1'}>
        <Heading>
          {TXT_1}
        </Heading>
      </Box>
    );
  }
}

export default NotFound;
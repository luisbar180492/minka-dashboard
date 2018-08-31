/***********************
 * Node modules import *
 ***********************/
import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
/******************
 * Project import *
 ******************/
import BasisComponent from 'basisComponent';
import { TXT_1 } from 'string';
/**
 * It renders the notFound component
 */
class NotFound extends BasisComponent {

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
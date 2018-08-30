/***********************
 * Node modules import *
 ***********************/
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
/******************
 * Project import *
 ******************/
import { TXT_3 } from '../../string';
import { HOME } from '../../config';
/**
 * It renders the another component
 */
class Another extends Component {
  
  render() {

    return (
      <Box
        flex={true}
        justify={'center'}
        align={'center'}
        colorIndex={'neutral-1'}>

        <Button
          label={TXT_3}
          accent={false}
          critical={false}
          primary={true}
          secondary={false}
          plain={false}
          fill={false}
          type={'button'}
          path={HOME}
          method={'replace'}/>
      </Box>
    );
  }
}

export default Another;
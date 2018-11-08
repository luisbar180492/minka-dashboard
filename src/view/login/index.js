/********************
 * From third party *
 ********************/
import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
/****************
 * From project *
 ****************/
import BasisComponent from 'basisComponent';

class Login extends BasisComponent {

  render() {

    return (
      <Box
        flex={true}
        justify={'center'}
        align={'center'}>

        <Heading
          align={'center'}
          truncate={true}>
          {'LOGIN'}
        </Heading>
      </Box>
    );
  }
}

export default Login;

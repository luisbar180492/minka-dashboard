/********************
 * From third party *
 ********************/
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import User from 'grommet/components/icons/base/User';
/****************
 * From project *
 ****************/
import { TXT_5 } from 'common/string';

class DrawerHeader extends Component {

  render() {

    return (
      <Box
        direction={'row'}
        align={'center'}
        responsive={false}>

        <Box
          pad={'medium'}>
          <User
            size={'medium'}/>
        </Box>

        <Heading
          truncate
          margin={'none'}>
          {TXT_5}
        </Heading>
      </Box>
    );
  }
}

export default DrawerHeader;

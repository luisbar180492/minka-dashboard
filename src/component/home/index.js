/***********************
 * Node modules import *
 ***********************/
import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import PropTypes from 'prop-types';
/******************
 * Project import *
 ******************/
import BasisComponent from 'basisComponent';
import { TXT_2, TXT_6, TXT_7 } from 'string';
import { ANOTHER } from 'config';
/**
 * It renders the home component
 */
class Home extends BasisComponent {
  
  render() {

    return (
      <Box
        {...this.props}
        flex={true}
        justify={'center'}
        align={'center'}
        colorIndex={'neutral-1'}>
        
        <Heading
          align={'center'}
          truncate={true}>
          {this.props.data}
        </Heading>

        <Heading
          align={'center'}
          truncate={true}>
          {this.state.isSmartphone ? TXT_7 : TXT_6}
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
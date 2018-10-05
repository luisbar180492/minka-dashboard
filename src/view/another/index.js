/********************
 * From third party *
 ********************/
import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Paragraph from 'grommet/components/Paragraph';
/****************
 * From project *
 ****************/
import style from './style';
import BasisComponent from 'basisComponent';
import { TXT_3, TXT_8, TXT_9 } from 'string';
import { HOME } from 'config';
/**
 * It renders the another component
 */
class Another extends BasisComponent {
  
  render() {

    return (
      <Box
        flex={true}
        justify={'center'}
        align={'center'}>
        
        <Heading
          align={'center'}
          truncate={true}>
          {TXT_8}
        </Heading>

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
          
        <Paragraph
          id={'paragraph'}
          style={style.paragraph}>
          {TXT_9}
        </Paragraph>
      </Box>
    );
  }
  
  componentDidMount() {
    super.componentDidMount();
    window.$('#paragraph').niceScroll({
      cursorborder: '1px solid #424242',
      cursorcolor: '#424242',
      cursorwidth: '5px',
    });
  }
}

export default Another;
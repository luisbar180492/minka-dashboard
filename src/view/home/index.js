/********************
 * From third party *
 ********************/
import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
/****************
 * From project *
 ****************/
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
        flex={true}
        justify={'center'}
        align={'center'}>
        
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

const mapStateToProps = state => ({
  data: state
    .rootReducer
    .dataReducer
    .defaultReducer
    .useCaseReducer.data,
});

export default withRouter(connect(
  mapStateToProps,
)(Home));
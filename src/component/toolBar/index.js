/********************
 * From third party *
 ********************/
import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious';
import PropTypes from 'prop-types';
/****************
 * From project *
 ****************/
import style from './style';

class ToolBar extends Component {

  render() {

    return (
      <Box
        responsive={false}
        pad={'small'}
        colorIndex={'light-1'}
        direction={'row'}>
        {
          this.props.onBackButtonClicked &&
          <Button
            style={style.backButton}
            icon={<LinkPreviousIcon/>}
            onClick={this.props.onBackButtonClicked}/>
        }
        <Heading
          truncate
          margin={'none'}>
          {this.props.title}
        </Heading>
      </Box>
    );
  }
}

ToolBar.propTypes = {
  title: PropTypes.string,
  onBackButtonClicked: PropTypes.func,
};

ToolBar.defaultProps = {
  title: 'Title'
};

export default ToolBar;

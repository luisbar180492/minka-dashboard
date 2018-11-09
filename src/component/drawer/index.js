/********************
 * From third party *
 ********************/
import React from 'react';
import Box from 'grommet/components/Box';
import PropTypes from 'prop-types';
/****************
 * From project *
 ****************/
import style from './style';
import BasisComponent from 'basisComponent';
import { DrawerButton, DrawerHeader, DrawerBody, DrawerFooter } from './component/';

class Drawer extends BasisComponent {

  constructor(props) {
    super(props);

    this._onDrawerButtonClicked = this.onDrawerButtonClicked.bind(this);

    this.state = {
      visible: false,
    };
  }

  render() {

    return (
      <Box
        id={'drawer'}
        style={style(this.props, this.state).drawerContainer}>

        <Box
          colorIndex={'accent-2'}
          style={style(this.props, this.state).drawerContent}>
          <DrawerHeader/>
          <DrawerBody
            pathname={this.props.pathname}/>
          <DrawerFooter/>
        </Box>

        <DrawerButton
          onButtonClicked={this._onDrawerButtonClicked}
          drawerWidth={this.props.drawerWidth}
          mobileDrawerWidth={this.props.mobileDrawerWidth}/>
      </Box>
    );
  }

  onDrawerButtonClicked(visible) {
    this.setState({visible})
  }
}

Drawer.propTypes = {
  drawerWidth: PropTypes.string,
  mobileDrawerWidth: PropTypes.string,
  pathname: PropTypes.string,
};

Drawer.defaultProps = {
  drawerWidth: '25vw',
  mobileDrawerWidth: '75vw',
};

export default Drawer;

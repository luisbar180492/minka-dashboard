/***********************
 * Node modules import *
 ***********************/
import React, { Component } from 'react';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
/**
 * It renders the first view to be shown
 */
class Main extends Component {

  render() {

    return (
      <App
        centered={false}>
        <Box
          full={true}
          colorIndex={'accent-1'}>
        </Box>
      </App>
    );
  }
}

export default Main;
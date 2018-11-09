/********************
 * From third party *
 ********************/
import React from 'react';
import PropTypes from 'prop-types';
/****************
 * From project *
 ****************/
import BasisComponent from 'basisComponent';
import style from './style';

class DrawerButton extends BasisComponent {

  constructor(props) {
    super(props);

    this._onButtonClicked = this.onButtonClicked.bind(this);

    this.state = {
      drawerButtonExpanded: false,
    };
  }

  render() {
    const drawerButtonExpanded = this.state.drawerButtonExpanded ? style(this.props, this.state).drawerButtonExpanded : {};
    const firstLineInverted = this.state.drawerButtonExpanded ? style(this.props, this.state).firstLineInverted : {};
    const secondLineInverted = this.state.drawerButtonExpanded ? style(this.props, this.state).secondLineInverted : {};

    return (
      <div
        style={{...style(this.props, this.state).drawerButton, ...drawerButtonExpanded}}
        onClick={this._onButtonClicked}>
        <span style={{...style(this.props, this.state).firstLine, ...firstLineInverted}}></span>
        <span style={{...style(this.props, this.state).secondLine, ...secondLineInverted}}></span>
      </div>
    );
  }

  onButtonClicked() {
    this.setState({ drawerButtonExpanded: !this.state.drawerButtonExpanded }, () => {
      this.props.onButtonClicked(this.state.drawerButtonExpanded);
    });
  }
}

DrawerButton.propTypes = {
  drawerWidth: PropTypes.string,
  mobileDrawerWidth: PropTypes.string,
  onButtonClicked: PropTypes.func.isRequired,
};

DrawerButton.defaultProps = {
  drawerWidth: '25vw',
  mobileDrawerWidth: '75vw',
};

export default DrawerButton;

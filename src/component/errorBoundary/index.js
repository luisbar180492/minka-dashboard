/***********************
 * Node modules import *
 ***********************/
import React, { PureComponent } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Heading from 'grommet/components/Heading';
import Close from 'grommet/components/icons/base/Close'
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Paragraph from 'grommet/components/Paragraph';
import PropTypes from 'prop-types';
/******************
 * Project import *
 ******************/
import style from './style';
import { TXT_4, TXT_5 } from '../../string';
import { HOME } from '../../config';
/**
 * It catchs all errors
 */
class ErrorBoundary extends PureComponent {
  
  constructor(props) {
    super(props);
    //State
    this.state = {
      error: null,
      errorInfo: null
    };
    //Listeners
    this._onClosePressed = this.onClosePressed.bind(this);
  }

  render() {

    if (this.state.error)
      return (
        <Box
          full={true}
          justify={'center'}
          colorIndex={'neutral-1'}>
          {this.renderCloseButton()}
          {this.renderApologizedMessage()}
          {this.renderDetailError()}
        </Box>
      );

    return this.props.children;
  }
  
  renderCloseButton() {
    
    return (
      <Button
        style={style.closeButton}
        icon={<Close/>}
        onClick={this._onClosePressed}/>
    );
  }
  
  renderApologizedMessage() {
    
    return (
      <Heading
        tag={'h3'}
        align={'center'}>
        {TXT_4}
      </Heading>
    );
  }
  
  renderDetailError() {
    
    return (
      <Accordion
        style={style.accordion}>
        <AccordionPanel
          heading={TXT_5}>
          <Paragraph
            style={style.paragraph}>
            {this.state.error.toString()}
          </Paragraph>
          <Paragraph
            style={style.paragraph}>
            {this.state.errorInfo.componentStack}
          </Paragraph>
        </AccordionPanel>
      </Accordion>
    );
  }
  
  componentDidCatch(error, errorInfo) {
    this.setState({ error: error, errorInfo: errorInfo });
    //TODO: send error to crash service
  }
  
  onClosePressed(event) {
    this.setState({ error: null, errorInfo: null });
    this.props.replace(HOME);
  }
}

ErrorBoundary.propTypes = {
  replace: PropTypes.func.isRequired,
};

export default ErrorBoundary;
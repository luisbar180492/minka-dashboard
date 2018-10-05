/********************
 * From third party *
 ********************/
import { PureComponent } from 'react';
import Responsive from 'grommet/utils/Responsive';
/**
 * Basis component in order to be inherited by other components
 */
class BasisComponent extends PureComponent {
  
  constructor(props) {
    super(props);
    //Global variables
    this.responsive = null;
    //Listeners
    this._onResponsive = this.onResponsive.bind(this);
    //State
    this.state = {
      isSmartphone: false,
    };
  }

  componentDidMount () {
    this.responsive = Responsive.start(this._onResponsive);
  }

  componentWillUnmount() {
    this.responsive.stop();
  }

  onResponsive(isSmartphone) {
    this.setState({isSmartphone});
  }
}

export default BasisComponent;
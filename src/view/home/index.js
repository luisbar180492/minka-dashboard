/********************
 * From third party *
 ********************/
import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Column, Table, AutoSizer, WindowScroller } from 'react-virtualized';
import 'react-virtualized/styles.css';
/****************
 * From project *
 ****************/
import BasisComponent from 'basisComponent';
import { FETCH_ACTIONS } from 'common/actions';
import actionBuilder from 'common/actionBuilder';
import style from './style';

class Home extends BasisComponent {

  componentDidMount() {
    super.componentDidMount();
    this.props.fetchActions();
  }

  render() {

    return (
      <Box
        flex={true}
        style={style.container}>
        <WindowScroller>
          {this.renderAutoSizer.bind(this)}
        </WindowScroller>
      </Box>
    );
  }

  renderAutoSizer = ({ height, isScrolling, onChildScroll, scrollTop }) => {

    return (
      <AutoSizer>
        {this.renderTable.bind(this)}
      </AutoSizer>
    );
  }

  renderTable = ({ width, height }) => {

    return (
      <Table
        noRowsRenderer={this.renderNoRows}
        width={width}
        height={height}
        headerHeight={50}
        rowHeight={53}
        rowCount={this.props.actions.length}
        rowGetter={this.renderData}>
        {!!this.props.actions.length && ['id', 'descripción'].map(this.renderColumn)}
      </Table>
    );
  }

  renderNoRows = () => {

    return (
      <Box
        flex
        align={'center'}>
        <Heading
          tag={'h3'}>
          {'No hay datos'}
        </Heading>
      </Box>
    );
  }

  renderData = ({ index }) => {

    return (this.props.actions[index]);
  }

  renderColumn = (label, index) => {

    return (
      <Column
        key={index}
        label={label}
        dataKey={['id', 'description'][index]}
        width={Math.max(document.documentElement.clientWidth, window.innerWidth || 0)}/>
    );
  }
}

const mapStateToProps = state => ({
  actions: state
  .rootReducer
  .stateReducer
  .fetchActionsReducer
  .actions
});

const mapDispatchToProps = dispatch => ({
  fetchActions: () => dispatch(actionBuilder(FETCH_ACTIONS)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));

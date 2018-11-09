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
import { FETCH_ACCOUNTS } from 'common/actions';
import actionBuilder from 'common/actionBuilder';
import style from './style';

class Account extends BasisComponent {

  componentDidMount() {
    super.componentDidMount();
    this.props.fetchAccounts();
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
        rowCount={this.props.accounts.length}
        rowGetter={this.renderData}>
        {!!this.props.accounts.length && ['id', 'nombre'].map(this.renderColumn)}
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

    return (this.props.accounts[index]);
  }

  renderColumn = (label, index) => {

    return (
      <Column
        key={index}
        label={label}
        dataKey={['id', 'name'][index]}
        width={Math.max(document.documentElement.clientWidth, window.innerWidth || 0)}/>
    );
  }
}

const mapStateToProps = state => ({
  accounts: state
  .rootReducer
  .stateReducer
  .fetchAccountsReducer
  .accounts
});

const mapDispatchToProps = dispatch => ({
  fetchAccounts: () => dispatch(actionBuilder(FETCH_ACCOUNTS)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Account));

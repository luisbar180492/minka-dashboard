/********************
 * From third party *
 ********************/
import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
/****************
 * From project *
 ****************/
import BasisComponent from 'basisComponent';
import actionBuilder from '../../common/actionBuilder';
import { FETCH_POKEMONS } from '../../common/actions';
import { TXT_2, TXT_6, TXT_7, TXT_10 } from 'string';
import { ANOTHER } from 'config';
/**
 * It renders the home component
 */
class Home extends BasisComponent {

  constructor(props) {
    super(props);

    this._onFetchPokemonsButtonClicked = this.onFetchPokemonsButtonClicked.bind(this)
    this._renderPokemonName = this.renderPokemonName.bind(this);
  }

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

        <br/>

        <Button
          label={TXT_10}
          accent={false}
          critical={false}
          primary={true}
          secondary={false}
          plain={false}
          fill={false}
          type={'button'}
          onClick={this._onFetchPokemonsButtonClicked}/>

        <List>
          {this.props.pokemons.map(this._renderPokemonName)}
        </List>
      </Box>
    );
  }

  onFetchPokemonsButtonClicked() {
    this.props.fetchPokemons();
  }

  renderPokemonName(item, index) {

    return (
      <ListItem
        key={item.name}>
        {item.name}
      </ListItem>
    );
  }
}

const mapStateToProps = state => ({
  data: state
    .rootReducer
    .stateReducer
    .fetchPokemonsReducer.data,
  pokemons: state
    .rootReducer
    .stateReducer
    .fetchPokemonsReducer.pokemons,
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: () => dispatch(actionBuilder(FETCH_POKEMONS)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));

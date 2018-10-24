/********************
 * From third party *
 ********************/
import React from 'react';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Paragraph from 'grommet/components/Paragraph';
import Spinning from 'grommet/components/icons/Spinning';
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
          accent={true}
          critical={false}
          primary={false}
          secondary={false}
          plain={false}
          fill={false}
          type={'button'}
          onClick={this._onFetchPokemonsButtonClicked}
          icon={this.props.pokemonsAreFetching ? <Spinning size={'small'}/> : null}/>

        <Box
          basis={'1/3'}>
          <Paragraph
            id={'paragraph'}
            align={'center'}
            size={'large'}>
            {this.props.pokemons.map(this._renderPokemonName)}
          </Paragraph>
        </Box>
      </Box>
    );
  }

  componentDidMount() {
    super.componentDidMount();
    window.$('#paragraph').niceScroll({
      cursorborder: '1px solid #424242',
      cursorcolor: '#424242',
      cursorwidth: '5px',
    });
  }

  onFetchPokemonsButtonClicked() {
    this.props.fetchPokemons();
  }

  renderPokemonName(item, index) {

    return (item.name + '\n');
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
  pokemonsAreFetching: state
    .rootReducer
    .stateReducer
    .fetchPokemonsReducer
    .statusOfFetchingPokemons
    .isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchPokemons: () => dispatch(actionBuilder(FETCH_POKEMONS)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));

import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            indexPokemon: 0,
            pokeTypes: props.pokemons.reduce((acc, current) =>
                acc.includes(current.type) ? acc : acc.concat(current.type),
                [ 'All' ]),
            currentPokeList: props.pokemons,
        };

        this.changePokemon = this.changePokemon.bind(this);
        this.filterTypes = this.filterTypes.bind(this);
    }

    changePokemon() {
        this.setState(prev => this.state.indexPokemon < this.state.currentPokeList.length - 1
            ? { indexPokemon: prev.indexPokemon + 1 }
            : { indexPokemon: 0 }
        );
    }

    filterTypes(chosenType) {
        const { pokemons } = this.props;
        this.setState({ indexPokemon: 0 });
        this.setState(() => chosenType === 'All'
            ? { currentPokeList: pokemons }
            : { currentPokeList: pokemons.filter(poke => poke.type === chosenType) }
        );
    }

    render() {

        return (
            <div className="pokedex">

                <div className="pokemonCard">
                    {this.state.currentPokeList.map((pokemon) => {
                        return <Pokemon key={pokemon.id} pokemon={pokemon} />;
                    })[ this.state.indexPokemon ]}
                </div>

                <div className="proximo">
                    <button className="bt bt-next" onClick={this.changePokemon}>Next Pokemon</button>
                </div>

                <div className="pokeType">
                    {this.state.pokeTypes.map(pokeType =>
                        <button className="bt"
                            key={pokeType}
                            onClick={() => this.filterTypes(pokeType)}>
                            {pokeType}
                        </button>)
                    }
                </div>


            </div>
        );
    }
}
export default Pokedex;
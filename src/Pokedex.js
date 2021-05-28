import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
    constructor (props) {
        super(props);

        const pokemons = this.props.pokemons;

        this.state = {
            indexPokemon: 0,
            pokemons: pokemons,
        };

        this.nextPokemon = this.nextPokemon.bind(this);
    }

    nextPokemon() {
        this.setState((backIndex, _props) => ({
            indexPokemon: backIndex.indexPokemon + 1,
        }));
        if (this.state.indexPokemon >= this.state.pokemons.length - 1) {
            this.setState({
                indexPokemon: 0,
            });
        }
    }

    render() {

        return (
            <div className="pokedex">

                <div className="pokemonCard">
                    {
                        <Pokemon key={this.state.pokemons[ this.state.indexPokemon ].id}
                            pokemon={this.state.pokemons[ this.state.indexPokemon ]}
                        />
                    }
                </div>

                <div className="nextPokemon">
                    <button className="bt bt-next" onClick={this.nextPokemon}>Próximo Pokemon</button>
                </div>

            </div>
        );
    }
}
export default Pokedex;
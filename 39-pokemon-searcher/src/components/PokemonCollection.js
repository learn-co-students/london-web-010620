import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  generatePokemonCards = () => {
    const { pokemons } = this.props 
    return pokemons.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.id} />)
  }
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.generatePokemonCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection

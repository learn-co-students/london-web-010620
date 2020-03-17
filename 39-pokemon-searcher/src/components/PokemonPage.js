import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'
import { getPokemon } from '../API'
import FilterOptions from './filterOptions'

class PokemonPage extends React.Component {
  state = {
    pokemons: [],
    filter: "",
    sortType: "default"
  }
  // needs async keyword to work with await
  componentDidMount(){
    // const pokemons = await getPokemon()
    // this.setState({pokemons})
    this.updatePokemonState()
  }

  updatePokemonState = () => {
    getPokemon()
    .then(pokemons => {
      this.setState({
        pokemons
      })
    })
  }

  onChange = (event) => {
    const filter = event.target.value
    this.setState({filter})
  }

  filteredPokemonList = () => {
    return this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.filter))
  }

  setSortType = sortType => {
    this.setState({sortType})
  }

  render() {
    const sortedPokemon = this.filteredPokemonList().sort((a,b)=> {
      if (this.state.sortType === "default") {
        return 0
      } else if(this.state.sortType === "abc") {
        return a.name.localeCompare(b.name)
      }
    })
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm updatePokemonState={this.updatePokemonState}/>
        <br />
        <Search onChange={this.onChange} />
        <br />
        <FilterOptions setSortType={this.setSortType} />
        <br />
        <PokemonCollection pokemons={sortedPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage

import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state = {
    toggle: false
  }

  frontBackToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  render() {
    const {pokemon} = this.props
    const sprite = this.state.toggle ? pokemon.sprites.back : pokemon.sprites.front

    
    return (
      <Card onClick={this.frontBackToggle}>
        <div>
          <div className="image">
            <img alt="oh no!" src={sprite}/>
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.stats.find(stat => stat.name === "hp").value}
              {/* {pokemon.stats[pokemon.stats.length-1].value} */}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

import React from 'react'
import { Form } from 'semantic-ui-react'
import { postPokemon } from '../API'

class PokemonForm extends React.Component {
    state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }

    handleChange = event => {
      const inputType = event.target.name
      const inputValue = event.target.value
      this.setState((state)=> {
        state[inputType] = inputValue
        return state
      })
    }

    handleSubmit = event => {
      event.preventDefault()
      postPokemon(this.state)
      .then(this.props.updatePokemonState)
      event.target.reset()
    }
  

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm

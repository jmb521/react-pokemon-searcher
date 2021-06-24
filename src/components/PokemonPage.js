import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [], 
    searchResults: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
    .then(response => response.json())
    .then(response => {
      this.setState({
        pokemons: response
      })
    })
  }

  addNewPokemon = ({name, hp, sprites}) => {
    fetch("http://localhost:3000/pokemon", {
      method: "POST", 
      headers: {
        "content-type": "application/json"
      }, 
      body: JSON.stringify({
        name, hp, sprites
      })
    })
    .then(response => response.json())
    .then(response => {
      console.log("add - response", response)
      this.setState({
        pokemons: [...this.state.pokemons, response]
      })
    })
  }
  onSearch = (search) => {
    
    const results = this.state.pokemons.filter(pokemon => pokemon.name.includes(`${search}`))
    console.log("results", results)
    this.setState({
      searchResults: results
    })
  }
  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon}/>
        <br />
        <Search onSearch={this.onSearch}/>
        <br />
        <PokemonCollection pokemons={this.state.searchResults.length > 0 ? this.state.searchResults : this.state.pokemons}/>
      </Container>
    )
  }
}

export default PokemonPage

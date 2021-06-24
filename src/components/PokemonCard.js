import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
  //  console.log("this.props.pokemon", this.props.pokemon.sprites)
    return (
      <Card>
        <div>
          <div className="image">
            <img src={this.props.pokemon.sprites.front }alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard


PokemonCard.DefaultProps = {
  src: "https://curriculum-content.s3.amazonaws.com/react/pokemon.gif"
}
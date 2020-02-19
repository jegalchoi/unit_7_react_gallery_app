import React, { Component } from 'react'

import Header from './Header'
import Player from './Player'
import { AddPlayerForm } from './AddPlayerForm'

export default class App extends Component {
  state = {
    players: [
      {
        name: 'a',
        id: 1,
        score: 0
      },
      {
        name: 'b',
        id: 2,
        score: 0
      },
      {
        name: 'c',
        id: 3,
        score: 0
      },
      {
        name: 'd',
        id: 4,
        score: 0
      }
    ],
    prevPlayerId: 4
  }
  handleAddPlayer = name => {
    this.setState(prevState => ({
      players: [
        ...prevState.players,
        { name,
          id: prevState.prevPlayerId + 1,
          score: 0
        }
      ]
    }))
  }
  handleRemovePlayer = id => {
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }))
  }
  handleScoreChange = (idx, delta) => {
    this.setState(prevState => {
      let newState = {players: { ...prevState.players}}
      newState.players[idx].score = prevState.players[idx].score + delta
      return newState.players
    })
  }
  render() {
    const initialPlayers = this.state.players
    return (
      <div className="scoreboard">
        <Header
          players={ initialPlayers }
        />
        {initialPlayers.map((player, idx) =>
          <Player
            name={ player.name }
            score={ player.score }
            id={ player.id }
            idx={ idx }
            key={ player.id.toString() }
            removePlayer={ this.handleRemovePlayer }
            ScoreChange={ this.handleScoreChange }
          />
        )}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    )
  }
}

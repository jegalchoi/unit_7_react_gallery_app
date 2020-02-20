import React, { Component } from 'react'

const ScoreboardContext = React.createContext()

export const Consumer = ScoreboardContext.Consumer

export class Provider extends Component {
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
        {
          name,
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
      let newState = { players: { ...prevState.players } }
      newState.players[idx].score = prevState.players[idx].score + delta
      return newState.players
    })
  }
  getHighScore = () => {
    const scores = this.state.players.map(player => player.score)
    const highScore = Math.max(...scores)
    if (highScore) {
      return highScore
    }
    return null
  }
  render() {
    return (
      <ScoreboardContext.Provider value={{
        players: this.state.players,
        removePlayer: this.handleRemovePlayer,
        scoreChange: this.handleScoreChange,
        highScore: this.getHighScore,
        addPlayer: this.handleAddPlayer
      }}>
        {this.props.children}
      </ScoreboardContext.Provider>
    )
  }
}

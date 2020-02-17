import React, { Component } from 'react'
import Header from './Header'
import Player from './Player'

export default function App({ initialPlayers }) {
  return (
    <div className="scoreboard">
      <Header
        title="Scoreboard"
        totalPlayers={ initialPlayers.length }
      />
      {initialPlayers.map((player, idx) =>
        <Player
          name={ player.name }
          score={ player.score }
          key={ idx }
        />
      )}
    </div>
  )
}

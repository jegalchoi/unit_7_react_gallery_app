import React, { Component } from 'react'
import { Consumer } from './Context'
import Player from './Player'

export const PlayerList = () => {
  return (
    <Consumer>
      { ({ players, highScore }) => (
        <React.Fragment>
          {
            players.map((player, idx) =>
              <Player
                idx={idx}
                key={player.id.toString()}

                highScore={player.score === highScore()}
              />
            )
          }
        </React.Fragment>
      )}
    </Consumer>
  )
}

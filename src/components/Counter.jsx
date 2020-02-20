import React, { Component } from 'react'
import { Consumer } from './Context'

export default function Counter({ idx }) {
  return (
    <Consumer>
      { ({ scoreChange, players }) => (
        <div className="counter">
          <button className="counter-action decrement" onClick={() => scoreChange(idx, -1)}> - </button>
          <span className='counter-score'>{ players[idx].score }</span>
          <button className="counter-action increment" onClick={() => scoreChange(idx, +1)}> + </button>
        </div>
      )}
    </Consumer>
  )
}
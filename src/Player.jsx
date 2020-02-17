import React from 'react'
import Counter from './Counter'

export default function Player({ name, score }) {
  return (
    <div className="player">
      <span className="player-name">
        { name }
      </span>
      <Counter score={ score } />
    </div>
  )
}

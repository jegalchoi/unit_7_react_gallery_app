import React from 'react'

import Counter from './Counter'

export default function Player({ name, id, idx, score, removePlayer, ScoreChange }) {
  return (
    <div className="player">
      <span className="player-name">
        <button className='remove-player' onClick={ () => removePlayer(id) }>✖</button>
        { name }
      </span>
      <Counter
        score={score}
        idx={idx}
        ScoreChange={ScoreChange}
      />
    </div>
  )
}

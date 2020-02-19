import React, { PureComponent } from 'react'

import Counter from './Counter'

export default class Player extends PureComponent {
  render() {
    const { name, id, idx, score, removePlayer, ScoreChange } = this.props
    return (
      <div className="player">
        <span className="player-name">
          <button className='remove-player' onClick={() => removePlayer(id)}>✖</button>
          {name}
        </span>
        <Counter
          score={score}
          idx={idx}
          ScoreChange={ScoreChange}
        />
      </div>
    )
  }
}
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Counter from './Counter'

export default class Player extends PureComponent {
  static propTypes = {
    ScoreChange: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    idx: PropTypes.number.isRequired
  }
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
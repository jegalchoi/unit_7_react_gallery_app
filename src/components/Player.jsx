import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Consumer } from './Context'

import Counter from './Counter'
import Crown from './Crown'

export default class Player extends PureComponent {
  static propTypes = {
    idx: PropTypes.number.isRequired,
    highScore: PropTypes.bool.isRequired,
  }
  render() {
    const { idx, highScore } = this.props
    return (
      <div className="player">
        <Consumer>
          {({ removePlayer, players }) => (
            <span className="player-name">
              <button className='remove-player' onClick={() => removePlayer(players[idx].id)}>✖</button>
              <Crown highScore={highScore} />
              { players[idx].name }
            </span>
          )}
        </Consumer>
        <Counter idx={idx} />
      </div >
    )
  }
}
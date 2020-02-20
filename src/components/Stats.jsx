import React from 'react'
import { Consumer } from './Context'

export const Stats = () => {
  return (
    <Consumer>
      { context => {
        const totalPlayers = context.players.length
        const totalPoints = context.players.reduce(
          (a, c) => a + c.score
          , 0
        )
        return (
          <table className='stats'>
            <tbody>
              <tr>
                <td>Players:</td>
                <td>{totalPlayers}</td>
              </tr>
              <tr>
                <td>Total Points:</td>
                <td>{totalPoints}</td>
              </tr>
            </tbody>
          </table>
        )
      }}
    </Consumer>
  )
}
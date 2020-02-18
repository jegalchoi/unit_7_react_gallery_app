import React, { Component } from 'react'

export default function Counter({ score, idx, ScoreChange }) {
  return (
    <div className="counter">
      <button className="counter-action decrement" onClick={() => ScoreChange(idx, -1)}> - </button>
      <span className='counter-score'>{score}</span>
      <button className="counter-action increment" onClick={() => ScoreChange(idx, +1)}> + </button>
    </div>
  )
}

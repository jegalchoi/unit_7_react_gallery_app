import React from 'react'

export default function Counter({ score }) {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className='counter-score'>{ score }</span>
      <button className="counter-action increment"> + </button>
    </div>
  )
}

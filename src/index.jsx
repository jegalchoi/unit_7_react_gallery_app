import React from 'react'
import ReactDOM from 'react-dom'
import style from './App.css'
import App from './App'

const players = [
  {
    name: 'a',
    score: 1
  },
  {
    name: 'b',
    score: 2
  },
  {
    name: 'c',
    score: 3
  },
  {
    name: 'd',
    score: 4
  }
]

ReactDOM.render(
  <App initialPlayers={ players } />,
  document.getElementById('root')
)

import React from 'react'

import { Stats } from './Stats'
import Stopwatch from './Stopwatch'

export default function Header() {
  return (
    <header>
      <Stats />
      <h1>Scoreboard</h1>
      <Stopwatch />
    </header>
  )
}

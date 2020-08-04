import React, { Component } from 'react';
import Game from './components/game/Game';
import './App.css';
import Raccoonpick from './components/assets/raccoon.png'
import Squirrelpick from './components/assets/squirrel.png'
import Bunnypic from './components/assets/bunny.png'
import Houndpic from './components/assets/hound.png'

function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: Raccoonpick
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: Squirrelpick
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: Bunnypic
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: Houndpic
  }

  return (
    <div className="App">
      <Game
        venue="Sheridan High School"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Burlington High School"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}


export default App;

import React, { Component } from 'react';
import CivilWar from './CivilWar';

class App extends Component {
  render() {
    var team1 = [
      "Andrea",
      "Mackenzie",
      "Mars",
      "Molly",
      "Renae"
    ];

    return (
      <div className="App">
        <CivilWar
            team1={team1}
            team2={["Mariya", "Sydney", "Maddie", "Stephanie", "Mitchie"]} />
      </div>
    );
  }
}

export default App;

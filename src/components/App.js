
import '../style/App.css';
import Apy from "./Apy"
import { isMobile } from 'react-device-detect';
import Landing from './Landing'
import TopBar from './TopBar.js'
import Stats from './Stats.js'
import ThreeThree from './ThreeThree.js'
import { useEffect, useState } from 'react';
import ElevatorPitch from './ElevatorPitch.js'
import River from './River.js'
import InvestmentProtection from "./InvestmentProtection.js"
import Liquidity from "./Liquidity.js"
function App() {

  return (
    <div className="App">
      <div className="landing">
        <TopBar />
        <Landing />
      </div>
      <div className="stats">
        <Stats />
      </div>
      <div className="apy">
        <Apy />
        <ThreeThree />
        <InvestmentProtection />
      </div>
      <div className="liquidity">
        <Liquidity />
      </div>
    </div>
  )
}

export default App;

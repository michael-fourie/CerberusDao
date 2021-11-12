
import '../style/App.css';
import Apy from "./Apy"
import { isMobile } from 'react-device-detect';
import Landing from './Landing'
import TopBar from './TopBar.js'
import Stats from './Stats.js'
import ThreeThree from './ThreeThree.js'
import { useEffect, useState } from 'react';
import InvestmentProtection from "./InvestmentProtection.js"
import Liquidity from "./Liquidity.js"
import Socials from "./Socials.js"
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
      <div className="socials">
        <Socials />
      </div>
    </div>
  )
}

export default App;

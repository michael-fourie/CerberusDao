import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { StaticJsonRpcProvider } from "@ethersproject/providers";

import '../style/App.css';
import Apy from "./Apy"
import Landing from './Landing'
import TopBar from './TopBar.jsx'
import Stats from './Stats.jsx'
import ThreeThree from './ThreeThree.jsx'
import InvestmentProtection from "./InvestmentProtection.jsx"
import Liquidity from "./Liquidity.jsx"
import Socials from "./Socials.jsx"
import { loadAppDetails } from "../slices/AppSlice";

function App() {
  const dispatch = useDispatch();
  const chainId = 1;
  const rpcUrl = 'https://eth-mainnet.alchemyapi.io/v2/2Y6oF6luXfRHgCUwdbJmDpkaqUdUtYoH';
  const provider = new StaticJsonRpcProvider(rpcUrl);

  useEffect(() => {
    // don't load ANY details until wallet is Checked
    dispatch(loadAppDetails({ networkID: chainId, provider: provider }));
  }, []);

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

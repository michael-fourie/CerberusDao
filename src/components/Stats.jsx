import { useSelector } from "react-redux";

import StatComponent from './StatComponent'
import { trim } from "../helpers";
import '../style/Stat.css'

function Stats() {

  const stakingAPY = useSelector(state => {
    return state.app.stakingAPY;
  });
  const stakingTVL = useSelector(state => {
    return state.app.stakingTVL;
  });
  const ohmStakedRate = useSelector(state => {
    return state.app.ohmStakedRate;
  });

  const treasuryMarketValue = useSelector(state => {
    return state.app.treasuryMarketValue;
  });
  return (
    <div className="stat-div">
      { ohmStakedRate ? (
        <StatComponent title="Total 3DOG Staked" text={`${new Intl.NumberFormat("en-US").format(Number(trim(ohmStakedRate * 100, 2)))}%`}/>
      ) : (
        <StatComponent title="Total 3DOG Staked" text=""/>
      ) }
      { treasuryMarketValue ? (
        <StatComponent title="Treasury Balance" text={
          new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          }).format(treasuryMarketValue)
        }/>
      ) : (
        <StatComponent title="Treasury Balance" text=""/>
      ) }
      { stakingTVL ? (
        <StatComponent title="Total Value Locked" text={
          new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
          }).format(stakingTVL)
        }/>
      ) : (
        <StatComponent title="Total Value Locked" text=""/>
      ) }
      { stakingAPY ? (
        <StatComponent title="Current APY" text={`${new Intl.NumberFormat("en-US").format(Number(trim(stakingAPY * 100, 1)))}%`}/>
      ) : (
        <StatComponent title="Current APY" text=""/>
      ) }
    </div>
  )
}

export default Stats

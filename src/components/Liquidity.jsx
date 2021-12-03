import { useSelector } from 'react-redux';

import '../style/Liquidity.css'
import StatComponent from './StatComponent';
import { trim } from '../helpers';
import { Skeleton } from '@material-ui/lab';

function Liquidity() {

  const treasuryOhmEthPOL = useSelector(state => {
    return state.app.treasuryOhmEthPOL;
  });
  const protocolOwnedLiquidity = useSelector(state => {
    return state.app.protocolOwnedLiquidity;
  });

  return (
    <div className="lp-div">
      <div className="lp-left">
        <p className="lp-title">Liquidity Protected</p>
        <p className="lp-bio">Cerberus LP is owned and protected by Cerberus itself.</p>
        <p className="lp-body">Cerberus owns almost all of its liquidity, which helps maintain price stability and
          treasury income. With a protocol-owned liquidity, Cerberus is protected from unpredictable and unfavorable
          market conditions due to longevity and efficiency.</p>
      </div>
      <div className="lp-right">
        { protocolOwnedLiquidity ? (
          <p className="lp-value">
            { new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
              minimumFractionDigits: 0,
            }).format(protocolOwnedLiquidity) }
          </p>
        ) : (
          <Skeleton width={ 150 } height={ 50 } data-testid="apy-loading"/>
        ) }
        <p className="lp-valuebody">Protocol Owned Liquidity</p>
        { treasuryOhmEthPOL ? (
          <p className="lp-percent">
            { new Intl.NumberFormat('en-US').format(Number(trim(treasuryOhmEthPOL, 1))) }%
          </p>
        ) : (
          <Skeleton width={ 150 } height={ 50 } data-testid="apy-loading"/>
        ) }
        <p className="lp-percentbody">of Total LP supply</p>
      </div>
    </div>
  )
}

export default Liquidity

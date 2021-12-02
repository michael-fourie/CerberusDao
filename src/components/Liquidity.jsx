import "../style/Liquidity.css"

function Liquidity(){
    return(
        <div className="lp-div">
            <div className="lp-left">
                <p className="lp-title">Liquidity Protected</p>
                <p className="lp-bio">Cerberus LP is owned and protected by Cerberus itself.</p>
                <p className="lp-body">Cerberus owns almost all of its liquidity, which helps maintain price stability and treasury income. With a protocol-owned liquidity, Cerberus is protected from unpredictable and unfavorable market conditions due to longevity and efficiency.</p>
            </div>
            <div className="lp-right">
                <p className="lp-value">Coming Soon</p>
                <p className="lp-valuebody">Protocol Owned Liquidity</p>
                <p className="lp-percent">Coming Soon</p>
                <p className="lp-percentbody">of Total LP supply</p>
            </div>
        </div>
    )
}

export default Liquidity
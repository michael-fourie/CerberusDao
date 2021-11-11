import "../style/Apy.css"
import { Button } from "@material-ui/core"

function Apy(){

    return(
        <div className="apy-content">
            <p className="sustainable">
                Sustainable Staking APY
            </p>
            <div className="apy-info">
                <div style={{
                    display: 'flex', 
                    flexDirection: 'column',
                    textAlign: 'center',
                    justifyContent: 'center',
                    width: '30%'
                }}>
                    <p className="apy-percent">
                        x%
                    </p>
                    <p className="apy-reward">
                        3DOG Staking Rewards
                    </p>
                    <Button style={{color: 'white', borderRadius: '140px', margin: 'auto', marginTop: '1%', marginLeft: '42%'}} className="launch-app">
                        Stake Now
                    </Button>
                </div>
                <div style={{width: '1px', height: '330px', backgroundColor: 'white', marginLeft: '1%', marginRight: '1%'}}>
                </div>
                <div style={{
                    display: 'flex', 
                    flexDirection: 'column',
                    textAlign: 'center',
                    justifyContent: 'center',
                    width: '30%',
                }}>
                    <p className="apy-regulated">
                        Treasury Regulated Apy
                    </p>
                    <p className="apy-title">
                        Treasury inflow will always outperform staking rewards.
                    </p>
                    <p className="apy-desc">
                        Cerberus is designed with long-term protocol health in mind. All 3DOG minted for staking rewards are backed with a reserve from the treasury.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Apy
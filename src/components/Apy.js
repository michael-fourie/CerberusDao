import "../style/Apy.css"
import { Button } from "@material-ui/core"
import { isMobile } from "react-device-detect"

function Apy(){

    return(
        <div className="apy-content">
            <p className="sustainable">
                Meme Driven Staking APY
            </p>
            <div className="apy-info">
                {isMobile ? 
                <div style={{
                    display: 'flex', 
                    flexDirection: 'column',
                    textAlign: 'center',
                    justifyContent: 'center',
                    width: '100%'
                }}>
                    <p className="apy-percent">
                        Coming Soon
                    </p>
                    <p className="apy-reward">
                        3DOG Staking Rewards
                    </p>
                    {isMobile ?
                        <Button style={{color: 'white', fontSize:"14px", borderRadius: '140px', margin: 'auto', marginTop: '1%', marginBottom: '5%'}} className="apy-btn">
                            Stake Now
                        </Button>
                    :
                        <Button style={{color: 'white', fontSize:"18px", borderRadius: '140px', margin: 'auto', marginTop: '1%'}} className="apy-btn">
                            Stake Now
                        </Button>
                    }
                </div>
                :
                <div style={{
                    display: 'flex', 
                    flexDirection: 'column',
                    textAlign: 'center',
                    justifyContent: 'center',
                    width: '30%'
                }}>
                    <p className="apy-percent">
                        Coming Soon
                    </p>
                    <p className="apy-reward">
                        3DOG Staking Rewards
                    </p>
                    {isMobile ?
                        <Button style={{color: 'white', fontSize:"14px", borderRadius: '140px', margin: 'auto', marginTop: '1%', marginLeft: '-20%'}} className="apy-btn">
                            Stake Now
                        </Button>
                    :
                        <Button style={{color: 'white', fontSize:"18px", borderRadius: '140px', margin: 'auto', marginTop: '1%'}} className="apy-btn">
                            Stake Now
                        </Button>
                    }
                </div>
                }
                {isMobile ?
                <div style={{width: '75%', height: '1px', backgroundColor: 'white', margin: 'auto'}}>
                </div>
                :
                <div style={{width: '1px', height: '330px', backgroundColor: 'white', marginLeft: '1%', marginRight: '1%'}}>
                </div>
                }
                {isMobile ? 
                <div style={{
                    display: 'flex', 
                    flexDirection: 'column',
                    textAlign: 'center',
                    justifyContent: 'center',
                    width: '100%',
                }}>
                    <p className="apy-regulated">
                        Treasury Regulated Apy
                    </p>
                    <p className="apy-title">
                        Treasury inflow will always outperform staking rewards.
                    </p>
                    <p className="apy-desc">
                        Cerberus is designed with long-term protocol health in mind. All 3DOG minted for staking rewards are backed with a reserve fueled by SHIB, ETH, and DAI. 
                    </p>
                </div>
                :
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
                        Cerberus is designed with long-term protocol health in mind. All 3DOG minted for staking rewards are backed with a reserve fueled by SHIB, ETH, and DAI. 
                    </p>
                </div>
                }
            </div>
        </div>
    )
}

export default Apy
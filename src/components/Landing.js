import '../style/Landing.css'
import dog from '../media/dog.png'
import { isMobile } from 'react-device-detect';


function Landing() {
   
    return(
        <div>
            <div className="info">
                <div className="vertical">
                    <h1 className="title">CerberusDAO</h1>
                    <h2 className="desc">A decentralized reserve currecny thriving from the powerful communities behind SHIB, the ultra sound value of ETH, and the stable value of DAI.</h2>
                </div>
                <div className="img">
                    <img src={dog} className="img"/>
                </div>
            </div>
        </div>
    )
}

export default Landing
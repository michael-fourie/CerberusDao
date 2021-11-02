import '../style/Landing.css'
import dog from '../media/dog.png'
import { isMobile } from 'react-device-detect';


function Landing() {
   
    return(
        <div>
            {isMobile &&
                 <img src={dog} style={{ width:'60%', marginBottom:'-22%', marginTop: '1%' }} />
            }
            <div className="info">
                <div className="vertical">
                    <h1 className="title">CerberusDAO</h1>
                    <h2 className="desc">A decentralized reserve currency that harnesses the power of memes.</h2>
                </div>
                <div className="img">
                    <img src={dog} className="img"/>
                </div>
            </div>
        </div>
    )
}

export default Landing
import '../style/Landing.css'
import dog from '../media/dog.png'
import { isMobile } from 'react-device-detect';
import { Button } from '@material-ui/core';

function Landing() {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }
   
    return(
        <div>
            <div className="info">
                <div className="vertical">
                    <h1 className="title">CerberusDAO</h1>
                    <h2 className="desc">A decentralized reserve currency powered by meme coins like SHIB, the ultra sound value of ETH, and the stable value of DAI.</h2>
                    {isMobile ? 
                    <Button onClick={() => openInNewTab('https://app.cerberusdao.finance')} style={{ margin: 'auto', color: 'white', marginTop: '5%', marginBottom: '2%', width: '55%', fontSize: '18px', borderRadius: '32px', marginTop: '2%'}} className="auction">Launch App</Button>
                    :
                    <Button onClick={() => openInNewTab('https://app.cerberusdao.finance')} style={{textTransform: 'none', margin: 'auto', color: 'white', width: '25%', fontSize: '18px', borderRadius: '32px', marginTop: '2%'}} className="auction">Launch App</Button>
                    }
                </div>
                <div className="img">
                    <img src={dog} className="img"/>
                </div>
            </div> 
        </div>
    )
}

export default Landing
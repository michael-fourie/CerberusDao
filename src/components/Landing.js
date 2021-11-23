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
                    <Button onClick={() => openInNewTab('https://copperlaunch.com/auctions/0x053f3c35d557a76e9cb6c13a4842d9cfcddac833')} style={{margin: 'auto', color: 'white', width: '50%', fontSize: '18px', borderRadius: '32px', marginTop: '2%'}} className="auction">3DOG Auction</Button>
                </div>
                <div className="img">
                    <img src={dog} className="img"/>
                </div>
            </div> 
        </div>
    )
}

export default Landing
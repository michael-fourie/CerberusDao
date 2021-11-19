
import discord from "../media/discord.png"
import medium from "../media/medium.png"
import gitbook from "../media/gitbook.png"
import twitter from "../media/twitter.png"
import { isMobile } from "react-device-detect"

function Socials() {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return(
        [(isMobile ?
            <div style={{
                display: 'flex', 
                flexDirection: 'row',
                textAlign: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '75px',
                background: 'black'
            }}>
                <img onClick = {() => openInNewTab('https://t.co/uIfdsWMzne?amp=1')}
                    alt="discord" src={discord} style={{ margin: 'auto', height: '45%' }} />
                <img  onClick = {() => openInNewTab('https://medium.com/@cerberusdao/')}
                    alt="medium" src={medium} style={{ margin: 'auto', height: '45%' }} />
                <img onClick = {() => openInNewTab('https://cerberus-dao.gitbook.io/cerberusdao/')}
                    alt="gitbook" src={gitbook} style={{ margin: 'auto',  height: '45%' }} />
                <img onClick = {() => openInNewTab('https://twitter.com/DaoCerberus')}
                    alt="twitter" src={twitter} style={{ margin: 'auto', height: '45%' }} />
            </div>
        :
        <div style={{
            display: 'flex', 
            flexDirection: 'row',
            textAlign: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '120px',
            background: 'black'
        }}>
            <img onClick = {() => openInNewTab('https://t.co/uIfdsWMzne?amp=1')}
                    alt="discord" src={discord} style={{ cursor: 'pointer', margin: 'auto', height: '45%' }} />
                <img  onClick = {() => openInNewTab('https://medium.com/@cerberusdao/')}
                    alt="medium" src={medium} style={{ cursor: 'pointer', margin: 'auto', height: '45%' }} />
                <img onClick = {() => openInNewTab('https://cerberus-dao.gitbook.io/cerberusdao/')}
                    alt="gitbook" src={gitbook} style={{ cursor: 'pointer', margin: 'auto',  height: '45%' }} />
                <img onClick = {() => openInNewTab('https://twitter.com/DaoCerberus')}
                    alt="twitter" src={twitter} style={{ cursor: 'pointer', margin: 'auto', height: '45%' }} />
        </div>
        )]
    )
}

export default Socials
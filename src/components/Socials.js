
import discord from "../media/discord.png"
import medium from "../media/medium.png"
import gitbook from "../media/gitbook.png"
import twitter from "../media/twitter.png"
import { isMobile } from "react-device-detect"

function Socials() {

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
                <img onClick = {(e) => {
                    e.preventDefault();
                    window.location.href='https://t.co/uIfdsWMzne?amp=1';
                    }}
                    alt="discord" src={discord} style={{ margin: 'auto', height: '45%' }} />
                <img  onClick = {(e) => {
                    e.preventDefault();
                    window.location.href='https://medium.com/@cerberusdao/welcome-to-cerberusdao-the-first-decentralized-reserve-currency-that-harnesses-the-power-of-e9c2a722e7f';
                    }}
                    alt="medium" src={medium} style={{ margin: 'auto', height: '45%' }} />
                <img onClick = {(e) => {
                      e.preventDefault();
                      window.location.href='https://cerberus-dao.gitbook.io/cerberusdao/';
                      }} 
                    alt="gitbook" src={gitbook} style={{ margin: 'auto',  height: '45%' }} />
                <img onClick = {(e) => {
                    e.preventDefault();
                    window.location.href='https://twitter.com/DaoCerberus';
                    }}
                    alt="twitter" src={twitter} style={{ margin: 'auto', height: '45%' }} />
            </div>
        :
        <div style={{
            display: 'flex', 
            flexDirection: 'row',
            textAlign: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '150px',
            background: 'black'
        }}>
            <img onClick = {(e) => {
                    e.preventDefault();
                    window.location.href='https://t.co/uIfdsWMzne?amp=1';
                    }}
                    alt="discord" src={discord} style={{ margin: 'auto', height: '45%' }} />
                <img  onClick = {(e) => {
                    e.preventDefault();
                    window.location.href='https://medium.com/@cerberusdao/welcome-to-cerberusdao-the-first-decentralized-reserve-currency-that-harnesses-the-power-of-e9c2a722e7f';
                    }}
                    alt="medium" src={medium} style={{ margin: 'auto', height: '45%' }} />
                <img onClick = {(e) => {
                      e.preventDefault();
                      window.location.href='https://cerberus-dao.gitbook.io/cerberusdao/';
                      }} 
                    alt="gitbook" src={gitbook} style={{ margin: 'auto',  height: '45%' }} />
                <img onClick = {(e) => {
                    e.preventDefault();
                    window.location.href='https://twitter.com/DaoCerberus';
                    }}
                    alt="twitter" src={twitter} style={{ margin: 'auto', height: '45%' }} />
        </div>
        )]
    )
}

export default Socials
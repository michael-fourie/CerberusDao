import { AppBar, Toolbar, makeStyles, Button, Box } from '@material-ui/core';
import '../style/Bar.css'
import { isMobile } from 'react-device-detect';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      background: 'transparent'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
function Bar() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar style={{background: 'rgba(0,0,0,0.35)'}}position="static">
            {isMobile ?
                <Toolbar>
                <Box display='flex' flexGrow={1}>   
                <p className="barTitle">Cerberus DAO</p>
                </Box> 
                  <Button onClick = {(e) => {
                      e.preventDefault();
                      window.location.href='https://cerberus-dao.gitbook.io/cerberusdao/';
                      }} 
                      style={{ marginLeft: '0.5%', marginRight: '2%', color:"#fff9a3", textTransform: 'none', fontSize: '14px' }} >GitBook</Button> 
                  <Button onClick = {(e) => {
                    e.preventDefault();
                    window.location.href='https://medium.com/@cerberusdao/welcome-to-cerberusdao-the-first-decentralized-reserve-currency-that-harnesses-the-power-of-e9c2a722e7f';
                    }} 
                    style={{ marginLeft: '0.5%', color:"#fff9a3", textTransform: 'none', fontSize: '14px' }} >Medium</Button>
                  <Button onClick = {(e) => {
                    e.preventDefault();
                    window.location.href='https://twitter.com/DaoCerberus';
                    }} 
                     style={{ marginRight: '0.5%', color:"#fff9a3",textTransform: 'none', fontSize: '14px' }} >Twitter</Button>
                  <Button  onClick = {(e) => {
                    e.preventDefault();
                    window.location.href='https://t.co/EP6ouOP5Tv?amp=1';
                    }} 
                     style={{color:"#fff9a3", textTransform: 'none',fontSize: '14px' }} >Discord</Button>
                </Toolbar>
            :
            <Toolbar>
                <Box display='flex' flexGrow={1}>   
                <p className="barTitle">CerberusDAO</p>
                </Box> 
                <Button onClick = {(e) => {
                      e.preventDefault();
                      window.location.href='https://cerberus-dao.gitbook.io/cerberusdao/';
                      }} 
                      style={{ marginRight: '3%', marginLeft: '3%', color:"#fff9a3", textTransform: 'none', fontSize: '32px' }} >GitBook</Button>
                   
                <Button onClick = {(e) => {
                    e.preventDefault();
                    window.location.href='https://medium.com/@cerberusdao/welcome-to-cerberusdao-the-first-decentralized-reserve-currency-that-harnesses-the-power-of-e9c2a722e7f';
                    }} 
                    style={{ marginRight: '3%', color:"#fff9a3", textTransform: 'none', fontSize: '32px' }} className="btn-grad">Medium</Button>
                  <Button onClick = {(e) => {
                    e.preventDefault();
                    window.location.href='https://twitter.com/DaoCerberus';
                    }} 
                     style={{ marginRight: '3%', color:"#fff9a3",textTransform: 'none', fontSize: '32px' }} className="btn-grad">Twitter</Button>
                  <Button  onClick = {(e) => {
                    e.preventDefault();
                    window.location.href='https://t.co/EP6ouOP5Tv?amp=1';
                    }} 
                     style={{ marginRight: '3%', color:"#fff9a3",textTransform: 'none', fontSize: '32px' }} className="btn-grad">Discord</Button>
                </Toolbar>  
}
            </AppBar>
        </div>
    )

}

export default Bar
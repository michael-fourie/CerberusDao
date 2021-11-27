import { AppBar, Toolbar, makeStyles, Button, Box } from '@material-ui/core';
import '../style/Bar.css'
import { isMobile } from 'react-device-detect';
import head from "../media/head.png"


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

    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
    return(
        <div className={classes.root}>
            <AppBar elevation={0} style={{background: 'transparent'}} position="static">
            {isMobile ?
                <Toolbar>
                <Box display='flex' flexGrow={1}>
                  <img alt="logo" src={head} width="50px" height="50px" /> 
                </Box> 
                  <Button onClick = {() => openInNewTab('https://cerberus-dao.gitbook.io/cerberusdao/')}
                      style={{ marginLeft: '0.5%', marginRight: '2%', color:"#FFFFFF", textTransform: 'none', fontSize: '14px' }} >GitBook</Button> 
                  <Button onClick = {() => openInNewTab('https://medium.com/@cerberusdao/')}
                    style={{ marginLeft: '0.5%', color:"#FFFFFF", textTransform: 'none', fontSize: '14px' }} >Medium</Button>
                  <Button onClick = {() => openInNewTab('https://twitter.com/DaoCerberus')}
                     style={{ marginRight: '0.5%', color:"#FFFFFF",textTransform: 'none', fontSize: '14px' }} >Twitter</Button>
                  <Button  onClick = {() => openInNewTab('https://t.co/uIfdsWMzne?amp=1')} 
                     style={{color:"#FFFFFF", textTransform: 'none',fontSize: '14px' }} >Discord</Button>
                </Toolbar>
            :
            <Toolbar>
                <Box display='flex' flexGrow={1}>   
                <img alt="logo" src={head} width="100px" height="100px" /> 
                </Box> 
                <Button onClick = {() => openInNewTab('https://cerberus-dao.gitbook.io/cerberusdao/')}
                      style={{ marginRight: '3%', marginLeft: '3%', color:"#FFFFFF", textTransform: 'none', fontSize: '18px' }} >GitBook</Button>
                   
                <Button onClick = {() => openInNewTab('https://medium.com/@cerberusdao/')}
                    style={{ marginRight: '3%', color:"#FFFFFF", textTransform: 'none', fontSize: '18px' }} className="btn-grad">Medium</Button>
                  <Button onClick = {() => openInNewTab('https://twitter.com/DaoCerberus')} 
                     style={{ marginRight: '3%', color:"#FFFFFF",textTransform: 'none', fontSize: '18px' }} className="btn-grad">Twitter</Button>
                  <Button  onClick = {() => openInNewTab('https://t.co/uIfdsWMzne?amp=1')} 
                     style={{ marginRight: '3%', color:"#FFFFFF",textTransform: 'none', fontSize: '18px' }} className="btn-grad">Discord</Button>
                  <Button onClick = {() => openInNewTab('https://app.cerberusdao.finance')} style={{textTransform: 'none', color: 'white', borderRadius: '140px'}} className="launch-app">Launch App</Button>
                </Toolbar>  
}
            </AppBar>
        </div>
    )

}

export default Bar
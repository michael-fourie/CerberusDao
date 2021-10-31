
import '../style/App.css';

import { isMobile } from 'react-device-detect';
import video from '../media/intro.mp4'
import mobileVideo from '../media/cropped-intro.mp4'
import Landing from './Landing'
import Bar from './Bar.js'
import { useEffect, useState } from 'react';
import ElevatorPitch from './ElevatorPitch.js'


function App() {

  const [ended, setEnded] = useState(false)

  useEffect(() => {
    if (isMobile){
      setEnded(true)
    }
  }, [])

  function handleEnd() { 
    setEnded(true)
  }

  return (
    <div className="App">
      {ended ? 
      <div className="landing">
        <Bar />
        <Landing />
      </div>
      :
      [(!isMobile && 
        <div style={{ overflow: 'hidden', height: '100vh', width: '100vw'}}>
          <video autoPlay muted onEnded={() => handleEnd()} height="115%">
            <source src={video} type="video/mp4" />
          </video>
        </div>
      )]}
      { ended &&
      <div className='content'>
        <ElevatorPitch />
        <div height="50px">
          <br></br>
        </div>
      </div>
      }
    </div>
  )
}

export default App;

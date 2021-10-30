
import '../style/App.css';
import ReactPlayer from 'react-player';
import video from '../media/intro.mp4'
import Landing from './Landing'
import Bar from './Bar.js'

function App() {
  return (
    <div className="App">
      <div className="landing">
        <Bar />
        <Landing />
        <p className="coming-soon">Coming Soon</p>
      </div>
    </div>
  );
}

export default App;

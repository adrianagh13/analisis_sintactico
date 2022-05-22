import './App.css';
import { Column } from './components';

function App() {
  return (
    <div className="App">

      <div className='header'>
        <Column color="rgb(235, 83, 83);opacity:0.90" height="100px"/>
        <Column color="rgb(249, 217, 35);opacity:0.90" height="100px"/>
        <Column color="rgb(54, 174, 124);opacity:0.90" height="100px"/>
        <Column color="rgb(24, 116, 152);opacity:0.90" height="100px"/>
        <Column color="rgb(118, 74, 241);opacity:0.90" height="100px"/>
      </div>

      <div className='body'>
        <Column color="rgb(235, 83, 83)"/>
        <Column color="rgb(249, 217, 35)"/>
        <Column color="rgb(54, 174, 124)"/>
        <Column color="rgb(24, 116, 152)"/>
        <Column color="rgb(118, 74, 241)"/>
      </div>
      
    </div>
  );
}

export default App;

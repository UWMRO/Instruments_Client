import logo from './logo.svg';
import './App.css';
import TemperatureControls from './TemperatureControls'
import ImageCaptureControls from './ImageCaptureControls'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          example text 
        </p>
        <TemperatureControls foo="bar" value={3} />
        <ImageCaptureControls />
      </header>
    </div>
  );
}

export default App;

import './App.css';
import { RandomNumber } from './components/restriction/RandomNumber';

function App() {
  return (
    <div className="App">
      <RandomNumber value={1987} isZero />
    </div>
  );
}

export default App;

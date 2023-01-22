import './App.css';
import { CustomComponent } from './components/customhtmlelements/CustomComponent';

function App() {
  return (
    <div className="App">
      <CustomComponent name={'viem'} isLoggedIn />
    </div>
  );
}

export default App;

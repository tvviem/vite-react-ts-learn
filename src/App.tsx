import './App.css';
import { UserContextProvider } from './components/context/UserContext';
import { User } from './components/context/User';

function App() {
  return (
    <div className="App">
      {/* Step 4: wrap User component inside context provider */}
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;

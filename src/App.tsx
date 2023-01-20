import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Step 3: Wrap ThemeContextProvider around Box */}
      <ThemeContextProvider>
        {/* As the children props */}
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;

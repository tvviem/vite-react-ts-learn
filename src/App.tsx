import './App.css';
import { Button } from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <Button
        handleClick={(event, id) => {
          console.log('Button Clicked ', event, id);
        }}
      />
      <Input
        value=""
        handleChange={(e) => {
          console.log('You have typed ' + e.target.value);
        }}
      />
    </div>
  );
}

export default App;

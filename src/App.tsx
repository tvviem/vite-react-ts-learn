import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import Oscar from './components/Oscar';
import { Status } from './components/Status';

function App() {
  return (
    <div className="App">
      <Status status={'success'} />
      <Heading>Children inside here</Heading>
      <Oscar>
        <Heading>Welcome react child node</Heading>
      </Oscar>
      <Greet name="Vĩnh Viêm" isLoggedIn={true} />
    </div>
  );
}

export default App;

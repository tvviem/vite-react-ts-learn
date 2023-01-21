import './App.css';
import { List } from './components/generics/List';

function App() {
  return (
    <div className="App">
      {/* <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      <List
        items={[
          { id: 1, fName: 'Viem', lName: 'Trieu' },
          { id: 2, fName: 'Loan', lName: 'P' },
          { id: 3, fName: 'Baby', lName: 'T' }
        ]}
        onClick={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;

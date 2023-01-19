import './App.css';
import { Person } from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const name = {
    fName: 'Viêm',
    lName: 'Triệu'
  };
  const listOfName = [
    {
      fName: 'Viêm',
      lName: 'Triệu'
    },
    {
      fName: 'Loan',
      lName: 'Phạm'
    },
    {
      fName: 'Baby',
      lName: 'Triệu'
    }
  ];
  return (
    <>
      <div className="App">
        <Person name={name} />
      </div>
      <h1>List of people</h1>
      <PersonList names={listOfName} />
    </>
  );
}

export default App;

import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName = {
    fName: 'Viêm',
    lName: 'Triệu'
  };

  const nameList = [
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
    <div className="App">
      <Greet name={'Vinh Viem'} messageCount={15} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;

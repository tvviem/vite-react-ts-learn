import './App.css';
import { CustomButton } from './components/customhtmlelements/Button';
import { CustomInput } from './components/customhtmlelements/Input';

function App() {
  return (
    <div className="App">
      <CustomButton
        variant="primary"
        style={{
          color: 'red',
          background: 'white',
          marginBottom: '2rem',
          display: 'block'
        }}
        onClick={() => console.log('Clicked')}
      >
        Primary Button
      </CustomButton>
      <CustomInput
        placeholder={'this is a customInput component'}
        style={{ width: '300px' }}
      />
    </div>
  );
}

export default App;

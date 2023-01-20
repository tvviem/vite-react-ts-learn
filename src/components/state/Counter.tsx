import { useReducer } from 'react';

type CounterState = {
  count: number;
};
// Type of Logic Actions so complex
type UpdateAction = {
  type: 'increment' | 'decrement';
  payload: number;
};
type ResetAction = {
  type: 'reset';
};
type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 1987 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div style={{ color: 'red', fontSize: '2rem', marginBottom: '1rem' }}>
        Count: {state.count}{' '}
      </div>
      <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  );
};

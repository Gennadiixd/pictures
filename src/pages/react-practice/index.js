import React, {useReducer} from 'react';
import SomeBlock from './some-block';
import Cmp from './cmp';

const initState = {count: 0};
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + 1};
    case 'DECREMENT':
      return {count: state.count - 1};
    case 'RESET':
      return {count: initState.count};
    default:
      return state;
  }
};

export default function Practice() {
  const [state, dispatch] = useReducer(reducer, initState);
  Practice.Context = React.createContext(state);

  const onInc = () => dispatch({type: 'INCREMENT'});
  const onDec = () => dispatch({type: 'DECREMENT'});
  const onReset = () => dispatch({type: 'RESET'});
  return (
    <Practice.Context.Provider value={state}>
      {/*<div>{state.count}</div>*/}
      <SomeBlock>
        <Cmp/>
        <Cmp/>
        <Cmp/>
      </SomeBlock>
      <button onClick={onInc}>Inc</button>
      <button onClick={onDec}>Dec</button>
      <button onClick={onReset}>Reset</button>
    </Practice.Context.Provider>
  );
}

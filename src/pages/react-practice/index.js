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
    case 'SET':
      return {count: action.payload};
    default:
      return state;
  }
};

const filterInt = function (value) {
  if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
};

export default function Practice() {
  const [state, dispatch] = useReducer(reducer, initState);
  Practice.Context = React.createContext(state);

  const onInc = () => dispatch({type: 'INCREMENT'});
  const onDec = () => dispatch({type: 'DECREMENT'});
  const onReset = () => dispatch({type: 'RESET'});
  const onSet = (payload) => {
    const value = filterInt(payload);
    if (!isNaN(value)) {
      dispatch({type: 'SET', payload: value});
    }
  };
  return (
    <Practice.Context.Provider value={state}>
      {/*<div>{state.count}</div>*/}
      <SomeBlock onChange={onSet}>
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

import React, {useContext, useRef} from 'react';
import Practice from './index';

export default ({children}) => {
  const practiceContext = useContext(Practice.Context);
  const itemRef = useRef();
  const items = React.Children.map(children, (child) => {
    return React.cloneElement(child, {count: practiceContext.count});
  });
  // items.push(1);
  // items = React.Children.toArray(children);
  return (
    <>
      <div>{items}</div>
      <input
        ref={itemRef}
        onChange={() => console.log(itemRef.current.value)}
      />
    </>
  );
}

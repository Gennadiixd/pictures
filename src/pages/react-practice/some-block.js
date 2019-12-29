import React, {useContext, useRef} from 'react';
import Practice from './index';

export default ({children, onChange}) => {
  const practiceContext = useContext(Practice.Context);
  const itemRef = useRef();
  const items = React.Children.map(children, (child) => {
    return React.cloneElement(child, {count: practiceContext.count});
  });

  for (let i = items.length - 1; i > 0; i--) {
    items.splice(i, 0, '/')
  }
  // items.push(1);
  // items = React.Children.toArray(children);
  return (
    <>
      <div>{items}</div>
      <input
        ref={itemRef}
        onChange={() => onChange(itemRef.current.value)}
      />
    </>
  );
}

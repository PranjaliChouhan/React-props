

import React from 'react';
import ChildComponent from './Child';

const ParentComponent = () => {
  const name = 'John Doe';
  const age = 25;
  
  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent name={name} age={age} />
    </div>
  );
};

export default ParentComponent;

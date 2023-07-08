import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, age }) => {
  return (
    <div>
        <h1>props-validation</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,  /*In this example, PropTypes.string specifies that the name prop should be a string, and PropTypes.number specifies that the age prop should be a number. The isRequired modifier indicates that these props are mandatory. */
  age: PropTypes.number.isRequired,
};

export default MyComponent;

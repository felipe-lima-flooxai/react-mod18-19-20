import React from 'react';

const ChildComponent = ({ name, age }) => {
  return (
    <div>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <hr />
    </div>
  );
};

export default ChildComponent;
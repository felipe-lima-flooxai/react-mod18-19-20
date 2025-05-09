import React from 'react';
import ChildComponent from './Filho';

const ParentComponent = () => {
  const people = [
    { name: 'João', age: 25 },
    { name: 'Maria', age: 30 },
    { name: 'Carlos', age: 22 },
  ];

  return (
    <div>
      <h1>Lista de Filhos</h1>
      {people.map((person, index) => (
        <ChildComponent key={index} name={person.name} age={person.age} />
      ))}
    </div>
  );
};

export default ParentComponent;
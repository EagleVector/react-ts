import React from 'react';
import Todo from './components/Todo';

const App: React.FC = () => {
  return (
    <div>
      <h1>Welcome to React with Typescript</h1>
      <Todo />
      <Todo />
      <Todo />
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import Todo from './components/Todo';
import Counter from './components/Counter';

const myTodoItems = [
  {
    id: 1,
    title: "complete react with typescript"
  },
  {
    id: 2,
    title: "build the BlogPost project with node express mongo and ejs bootstrap"
  },
  {
    id: 3,
    title: "Deploy the BlogPost project on AWS"
  },
];


const App: React.FC = () => {
  const [ state, setState ] = useState<boolean>(true);

  return (
    // Sending props in html
    // <div className='my-div-container' style={{border: "5px solid blue"}}>
    //   <h1>Welcome to React with Typescript</h1>
    //   <Todo />
    //   <Todo />
    //   <Todo />
    // </div>

    <div>
      <Todo items={myTodoItems} /> 
      <button onClick={(e) => setState(!state)}>Toggle</button>
      {state ? <Counter /> : ""}
    </div>
  );
};

export default App;
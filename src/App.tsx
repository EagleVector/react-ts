import React, { useEffect, useState } from 'react';
// import Todo from './components/Todo';
// import Counter from './components/Counter';

// const myTodoItems = [
//   {
//     id: 1,
//     title: "complete react with typescript"
//   },
//   {
//     id: 2,
//     title: "build the BlogPost project with node express mongo and ejs bootstrap"
//   },
//   {
//     id: 3,
//     title: "Deploy the BlogPost project on AWS"
//   },
// ];

interface TodoItem {
  completed: boolean;
  id: number;
  title: string;
  userId: number
}
function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response) => response)
    .then((e) => e.json())
    .then((e) => setTodos(e as TodoItem[]));
  }, []);

  // const [ state, setState ] = useState<boolean>(true);

  return (
    // Sending props in html
    // <div className='my-div-container' style={{border: "5px solid blue"}}>
    //   <h1>Welcome to React with Typescript</h1>
    //   <Todo />
    //   <Todo />
    //   <Todo />
    // </div>

    <div className="App">
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </div>
      

  //   <div>
  //     <Todo items={myTodoItems} /> 
  //     <button onClick={(e) => setState(!state)}>Toggle</button>
  //     {state ? <Counter /> : ""}
  //   </div>
  // );
)};

export default App;
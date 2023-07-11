import React from 'react';
import TodoItem from './TodoItem';
import "./style.css";

interface ITodoItem {
  id: number;
  title: string
}

interface TodoProps {
  items: ITodoItem[];
}

const Todo: React.FC<TodoProps> = (props) => {
  return ( 
    // One way of sending props. Valid in JS
    <div className='div-container'>
      <ol>
        {/* <TodoItem color="abc" description="this is the description" /> */}
        {/* <TodoItem title='Eat' />
        <TodoItem title='Sleep' />
        <TodoItem title='Code'/>
        <TodoItem title='Repeat'/> */}
        {
          props.items.map(item => <TodoItem key={item.id} title={item.title} />)
        }
      </ol>
    </div>
  );
};

export default Todo;


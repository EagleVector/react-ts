import React from "react";
import "./style.css"

interface TodoItemProps {
  title: string;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  console.log(props);
  return <li>{props.title}</li>;
};

export default TodoItem;
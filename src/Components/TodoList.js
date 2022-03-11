import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md"
import '../Styles/Todo.css';
import '../Styles/TodoList.css';

function TodoList(props) {
  const todos = props.todos.map((todo) =>
    <div className="card" key={todo.id}>
      <div className="title">{todo.title}</div>
      <div className="body">{todo.body}</div>
      <button type="button" onClick={() => props.removeTodo(todo.id)}><MdDeleteOutline /></button>
      <button type="button" onClick={() => props.showEditModal(todo)}><MdOutlineModeEdit /></button>
    </div>
  );

  return (
    <div className="todo-grid">
      {todos}
    </div>
  );
}

export default TodoList;
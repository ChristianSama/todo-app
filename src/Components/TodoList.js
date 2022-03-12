import React from "react";
import { MdDeleteOutline } from "react-icons/md";
import '../Styles/Todo.css';
import '../Styles/TodoList.css';

function TodoList(props) {

  const handleRemove = (e, id) => {
    e.stopPropagation();
    props.removeTodo(id);
  }

  const todos = props.todos.map((todo) =>
    <div className="card" key={todo.id} onClick={() => props.showEditModal(todo)}>
      <div className="title">{todo.title}</div>
      <div className="body">{todo.body}</div>
      <button type="button" onClick={(e) => handleRemove(e, todo.id)}><MdDeleteOutline /></button>
    </div>
  );

  return (
    <div className="todo-grid">
      {todos}
    </div>
  );
}

export default TodoList;
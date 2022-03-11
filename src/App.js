import './Styles/App.css';
import { useState } from "react";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "test", body: "test body" },
    { id: 2, title: "test2", body: "test body 2" },
    { id: 3, title: "test3", body: "test body 3" },
    { id: 4, title: "test4", body: "test body 4" },
    { id: 5, title: "test5", body: "test body 5" }
  ]);
  const [editingTodo, setEditingTodo] = useState();

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  const showEditModal = (todo) => {
    setEditingTodo(todo);
  }

  const editTodo = (newTodo) => {
    setTodos(prevTodos => prevTodos.map(todo => todo.id === newTodo.id ? newTodo : todo));
    setEditingTodo(null);
  }

  return (
    <div className="App">
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} showEditModal={showEditModal} />
      {editingTodo &&
        <TodoForm onSubmit={editTodo} todo={editingTodo} className="edit-form" />
      }
    </div>
  );
}

export default App;

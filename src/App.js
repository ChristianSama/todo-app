// import './App.css';
import { useState } from "react";
import EditModal from "./Components/EditModal";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "test", body: "test body" },
    { id: 2, title: "test2", body: "test body 2" }
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
    // setTodos(prevTodos => prevTodos.map());
  }

  return (
    <div className="App">
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} showEditModal={showEditModal} />
      {editingTodo &&
        <div className="edit-bg">
          <TodoForm onSubmit={editTodo} todo={editingTodo}/>
        </div>
      }
    </div>
  );
}

export default App;

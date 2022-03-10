import { useState, useRef } from "react";
import React from "react";
import uniqid from "uniqid";
import "../Styles/TodoForm.css"

function TodoForm(props) {
  const [title, setTitle] = useState(props.todo ? props.todo.title : "");
  const [body, setBody] = useState(props.todo ? props.todo.body : "");

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    if (name === "title") {
      setTitle(value);
    }
    if (name === "body") {
      setBody(value);
    }
  }

  const handleCreate = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: uniqid(),
      title: title,
      body: body
    });

    if (!props.edit) {
      setTitle('');
      setBody('');
    }
  }

  const handleEdit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: props.todo.id,
      title: title,
      body: body
    })
  }

  return (
    <form className="todo-form" onSubmit={props.todo ? handleEdit : handleCreate}>
      <div className="top-bar">
        <input type="text" placeholder="Title" value={title} name="title" onChange={handleChange} />
        <button type="button">Pin</button>
      </div>
      <input type="text" placeholder="Take a note..." value={body} name="body" onChange={handleChange} />
      {/* <div contentEditable="true" onInput={handleChange} name="body" placeholder="Take a note...">{body}</div> */}
      <div className="bottom-bar">
        <div className="icons">
          {/* icons */}
        </div>
        {/* <button type="button">Close</button> */}
        <button>Save</button>
      </div>
    </form>
  );
}
export default TodoForm;
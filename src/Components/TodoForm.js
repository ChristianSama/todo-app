import { useState, useRef } from "react";
import React from "react";
import uniqid from "uniqid";
import "../Styles/TodoForm.css"

function TodoForm(props) {
  //TODO: review these 2 lines. Are they correct?
  const [title, setTitle] = useState(props.todo ? props.todo.title : "");
  const [body, setBody] = useState(props.todo ? props.todo.body : "");

  const handleChange = (e) => {
    const target = e.target;
    const value = formatText(target.innerHTML);
    const name = target.getAttribute("name");

    if (name === "title") {
      setTitle(value);
    }
    if (name === "body") {
      setBody(value);
    }
  }

  function formatText(text) {
    const formatedText = text.replace(/<div>/g, "\n")
                             .replace(/<\/div>/g, "")
                             .replace(/&lt;/, "<")
                             .replace(/&gt;/, ">")
                             .replace(/<br>/g, "\n");
    return formatedText;
  }

  const handleCreate = (e) => {
    e.preventDefault();
    if (title === "" && body === "") {
      return;
    }
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
    if (e.target.id === "edit-bg" || e.target.id === "save-btn") {
      props.onSubmit({
        id: props.todo.id,
        title: title,
        body: body
      })
    }
  }

  return (
    <div id={props.todo && "edit-bg"} onClick={props.todo && handleEdit}>
      <form className={`todo-form ${props.className}`} onSubmit={props.todo ? handleEdit : handleCreate}>
        <div className="top-bar">
          <div className="editable" contentEditable="true" onBlur={handleChange} name="title" data-placeholder="Title">{title}</div>
          <button type="button">Pin</button>
        </div>
        <div className="editable" contentEditable="true" onBlur={handleChange} name="body" data-placeholder="Take a note...">{body}</div>
        <div className="bottom-bar">
          <div className="icons">
            {/* icons */}
          </div>
          <button id="save-btn">Save</button>
        </div>
      </form>
    </div>
  );
}
export default TodoForm;
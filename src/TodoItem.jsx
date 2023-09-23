import React from "react";

const TodoItem = ({
    indx,
  title,
  isCompleted,
  handleChangeComplete,
  handleRemoveTodo,
}) => {
  return (
    <div className="todo-item">
      <p>{title}</p>
      <button className="btn" onClick={() => handleChangeComplete(indx)}>
        {isCompleted ? "undo" : "complete"}
      </button>
      <button className="btn" onClick={() => handleRemoveTodo(indx)}>Remove</button>
    </div>
  );
};

export default TodoItem;

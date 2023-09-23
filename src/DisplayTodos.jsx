import React from "react";
import TodoItem from "./TodoItem";

const DisplayTodos = ({ allTodos, handleChangeComplete, handleRemoveTodo }) => {
  const renderedTodos = allTodos.map((todo, indx) => (
    <TodoItem
      indx={indx}
      title={todo.title}
      isCompleted={todo.isCompleted}
      handleChangeComplete={handleChangeComplete}
      handleRemoveTodo={handleRemoveTodo}
    />
  ));
  return <div className="todo-list"> {renderedTodos}</div>;
};

export default DisplayTodos;

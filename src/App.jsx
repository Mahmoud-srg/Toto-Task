import { useState } from "react";
import AddForm from "./AddForm";
import "./App.css";
import DisplayTodos from "./DisplayTodos";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [allTodos, setAllTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleInputChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    setTodo("");
    const newTodo = {
      title: todo,
      isCompleted: false,
    };
    setAllTodos([...allTodos, newTodo]);
  };

  const handleChangeComplete = (indx) => {
    let newTodos = [...allTodos];
    newTodos[indx].isCompleted = !newTodos[indx].isCompleted;
    setAllTodos(newTodos);
  };

  const handleRemoveTodo = (indx) => {
    const itemToRemove = allTodos[indx];
    const filteredTodos = allTodos.filter((item) => item !== itemToRemove);
    setAllTodos(filteredTodos);
  };

  return (
    <>
      <div className="add-todo">
        <h1>TODO APP </h1>
        <AddForm
          handleInputChange={handleInputChange}
          value={todo}
          handleAddTodo={handleAddTodo}
        />
      </div>
      <DisplayTodos
        handleChangeComplete={handleChangeComplete}
        allTodos={allTodos}
        handleRemoveTodo={handleRemoveTodo}
      />
    </>
  );
}

export default App;

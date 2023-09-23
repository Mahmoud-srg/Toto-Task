import React from "react";

const AddForm = ({handleAddTodo , value , handleInputChange}) => {
  return <div>
    
    <input value={value} onChange={handleInputChange}/>
    <button onClick={handleAddTodo} >Add todo</button>
  </div>;
};

export default AddForm;

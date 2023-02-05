import React from "react";
import css from "../App.css";

function TodoItem({ item, handleDel }) {
  return (
    <>
      <div className="todo-item">
        {item.todo}
        <button className="todo-delete" onClick={() => handleDel(item.id)}>
          삭제
        </button>
      </div>
    </>
  );
}

export default TodoItem;

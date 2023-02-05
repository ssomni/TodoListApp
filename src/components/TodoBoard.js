import React from "react";
import TodoItem from "./TodoItem";

//컴포넌트 만들때 항상 <> 감싸줘야함~
function TodoBoard({ todoList, handleDel }) {
  return (
    <>
      <h1>Todo List</h1>

      {todoList.map((item) => (
        <TodoItem key={item.id} item={item} handleDel={handleDel} />
      ))}
    </>
  );
}

//만들었으니 수출 시켜 !
export default TodoBoard;

import React from "react";
import styled from "styled-components";
import useFetch from "../hooks/useFetch";
import TodoItem from "./TodoItem";

//컴포넌트 만들때 항상 <> 감싸줘야함~
export default function TodoBoard({ handleDel, isChecked, handleChecked }) {
  const data = useFetch("http://localhost:3001/todo");
  const List = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    h1 {
      margin-top: 50px;
      margin-bottom: 50px;
    }
  `;

  return (
    <List>
      <h1>Todo List</h1>

      {data.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          handleDel={handleDel}
          isChecked={isChecked}
          handleChecked={handleChecked}
        />
      ))}
    </List>
  );
}

import React from "react";
import styled from "styled-components";
import "../App.css";

const Itemcss = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* margin: 20px 0px; */
  padding: 15px 30px;
  width: 400px;
  height: 40px;
  /* border: 0.01px solid #d9d9d9; */
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
  background-color: white;
  font-size: 1.1em;

  button {
    width: 50px;
    height: 25px;
    /* background-color: #e5e5e5; */
    border-radius: 5px;
    border: none;
  }
`;

function TodoItem({ item, handleDel }) {
  const itemId = item.id;
  return (
    <>
      <Itemcss className="todo-item">
        {item.todoConent}
        <button className="todo-delete" onClick={() => handleDel(itemId)}>
          ❌
        </button>
      </Itemcss>
    </>
  );
}

export default TodoItem;

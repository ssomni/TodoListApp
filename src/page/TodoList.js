import { useState, useEffect, useRef } from "react";
import TodoBoard from "../components/TodoBoard";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 100%;
  padding: 100px 0px;
  background-color: #f3f3f3;
  form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    width: 760px;
    height: 64px;
    padding: 0px 20px;
    input {
      width: 700px;
      height: 25px;
    }
  }
`;

export default function TodoList() {
  // ? 초기값에 비어있는거랑 '' 이랑 다른가?
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const nextId = useRef(0);

  useEffect(() => {
    fetch("http://localhost:3001/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: nextId.current,
        todo: inputValue,
      }),
    });
  });

  const submit = (e) => {
    e.preventDefault();
    addItem(inputValue);
  };

  const addItem = (inputValue) => {
    //아이템 추가 할것
    //기존의 아이템에 새로 추가할거야
    const newList = {
      id: todoList.length + 1,
      todo: inputValue,
    };
    setTodoList([...todoList, newList]);
    setInputValue("");
  };

  const handleDel = (id) => {
    setTodoList((todoList) => todoList.filter((el) => el.id !== id));
  };

  return (
    <Main>
      <form onSubmit={submit}>
        <input
          value={inputValue}
          type="text"
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button>추가</button>
      </form>
      <TodoBoard handleDel={handleDel} todoList={todoList} />
    </Main>
  );
}

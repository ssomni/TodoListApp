import { useState } from "react";
import TodoBoard from "../components/TodoBoard";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 50px 0px;
  .todo-item {
    width: 300px;
    height: 50px;
    border: 1px solid skyblue;
  }

  .todo-delete {
    width: 50px;
    height: 25px;
    background-color: blue;
    color: aliceblue;
  }
`;

export default function TodoList() {
  // ? 초기값에 비어있는거랑 '' 이랑 다른가?
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      todo: "리액트만들기",
    },
    {
      id: 2,
      todo: "투두만들기",
    },
  ]);

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

import { useState, useRef } from "react";
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
    padding: 0px 25px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    input {
      border: none;
      outline: none;
      width: 700px;
      height: 25px;
      font-size: 1em;
    }
    button {
      border: none;
      width: 93px;
      height: 40px;
      background: #ffa000;
      border-radius: 10px;
      font-size: 1em;
      color: white;
    }
  }
`;

export default function TodoList() {
  // ? 초기값에 비어있는거랑 '' 이랑 다른가?
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const nextId = useRef(0);

  const submit = (e) => {
    e.preventDefault();
    addItem(inputValue);
  };

  const addItem = (inputValue) => {
    fetch("http://localhost:3001/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: nextId.current,
        todoConent: inputValue,
      }),
    })
      .then((data) => {
        setTodoList([data]);
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    setInputValue("");
  };

  const handleDel = (id) => {
    // setTodoList((data) => data.filter((el) => el.id !== id));
    fetch(`http://localhost:3001/todo/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        // alert("삭제되었습니다");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Main>
      <form onSubmit={submit}>
        <input
          required
          value={inputValue}
          type="text"
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <button>SUBMIT</button>
      </form>
      <TodoBoard handleDel={handleDel} todoList={todoList} />
    </Main>
  );
}

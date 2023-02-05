import React, { useState } from "react";
import "./App.css";
import TodoBoard from "./components/TodoBoard";
import TodoItem from "./components/TodoItem";

/* 1. 인풋창과 버튼 만들기
  => onChange 써서 값을 가져온다
  => useState 써서 input 값을 저장한다 , input 창에 초기값변수 설정(value 값) 
  => input 창에 변경된 값을 넣어줘야 한다.

2. 인풋창에 값 넣고 버튼 클릭하면 아이템이 추가
  => 버튼! 클릭하면! onClick!
  => 클릭할때마다 리스트에 추가되는 함수를 불러올거임 = addItem
  => 근데 리스트도 변하는 값이니 useState 작성! 리스트는 array 타입이 좋음
  => addItem 함수에 변한 값을 저장 !

  => todoBoard 안에 todoItem 컴포넌트 넣기 !
  => App 에서 들고있는 input 값을 Board 에서 보여줘야 하니 props 로 내려줘 !
  
3, 아이템 삭제 버튼을 누르면 리스트에서 아이템 삭제 
import extension */

function App() {
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
    <main>
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
    </main>
  );
}

export default App;

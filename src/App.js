import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Creator from "./page/Creator";
import Main from "./page/Main";
import TodoList from "./page/TodoList";
import TodayQoute from "./page/TodayQoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Acodian from "./components/Acodian";
import { useState } from "react";

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

export default function App() {
  const [aco, setAco] = useState(false);

  const openAco = () => {
    setAco(!aco);
  };

  return (
    <BrowserRouter>
      <Header openAco={openAco} />
      {aco === true ? <Acodian aco={aco} setAco={setAco} /> : null}
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/todolist" element={<TodoList />} />
        <Route path="/todayqoute" element={<TodayQoute />} />
        <Route path="/creator" element={<Creator />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

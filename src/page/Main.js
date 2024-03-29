import { useState } from "react";
import "../App.css";
import styled from "styled-components";
import Login from "../components/Login";

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
const MainLog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  background-color: #f3f3f3;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0px 50px 0px;
  }
  h1 {
    margin-top: 100px;
    padding-bottom: 50px;
    color: #ffa000;
  }
  button {
    border: none;
    width: 93px;
    height: 40px;
    background: #cfc6b6;
    border-radius: 10px;
    font-size: 1em;
    font-weight: 700;
    color: white;
    cursor: pointer;
  }
  button:hover {
    background: #ffa000;
  }
`;

function Main() {
  const [islogin, setIslogin] = useState(false);

  const sdf = () => {
    localStorage.removeItem("username");
    setIslogin(!islogin);
  };

  //localstorage.Value
  const USERNAME_VALUE = localStorage.getItem("username");

  return (
    <MainLog>
      {USERNAME_VALUE ? (
        <div>
          <h1>HI! &nbsp;&nbsp;{USERNAME_VALUE}</h1>
          <button type="submit" onClick={sdf}>
            LOGOUT
          </button>
        </div>
      ) : (
        <Login setIslogin={setIslogin} islogin={islogin} />
      )}
    </MainLog>
  );
}

export default Main;

import { useState } from "react";
import styled from "styled-components";

const Logincss = styled.div`
  display: flex;
  .loginForm {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    > div {
      margin: 0px 0px 20px 0px;
    }
    input {
      display: flex;
      text-align: center;
      padding: 10px 10px;
      margin-bottom: 20px;
      outline-width: 0;
      width: 300px;
    }
  }
`;

export default function Login({ setIslogin, islogin }) {
  const [idInput, setIdInput] = useState("");

  const submit = (e) => {
    e.preventDefault();
    localStorage.setItem("username", idInput);
    // paintGreetings(username);
    setIslogin(!islogin);
    setIdInput("");
  };

  return (
    <Logincss>
      <form onSubmit={submit} className="loginForm">
        <h1>LOGIN PLZ</h1>
        <input
          required
          type="text"
          maxLength="15"
          value={idInput}
          placeholder="What is your name?"
          onChange={(event) => {
            setIdInput(event.target.value);
          }}
        />
        <button>Log In</button>
      </form>
    </Logincss>
  );
}

import { useState } from "react";
import styled from "styled-components";

const Logincss = styled.div`
  display: flex;
  form {
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
      border: none;
      border-radius: 15px;
      outline: none;
      width: 700px;
      height: 25px;
      font-size: 1em;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
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
      <form onSubmit={submit}>
        <h1>LOGIN</h1>
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

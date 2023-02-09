import { useState } from "react";

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
    <div>
      <form onSubmit={submit}>
        <div>LOGIN PLZ</div>
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
        <input type="submit" value="Log In" />
      </form>
    </div>
  );
}

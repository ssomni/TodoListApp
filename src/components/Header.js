import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Headercss = styled.header`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px 0px 30px;
  height: 130px;
  width: 100%;
  border-bottom: 0.5px solid #e2e2e2;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    > button {
      all: unset;
      font-size: 2em;
      cursor: pointer;
    }
    > button:hover {
      color: #ffa000;
    }
    > a {
      color: black;
      text-decoration: none;
      font-size: 2em;
    }
    > a:hover {
      color: #ffa000;
    }
    .date {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .date-1 {
      font-size: 1em;
    }
    .date-2 {
      font-size: 2em;
    }
  }
`;

export default function Header({ openAco }) {
  const [clock, setClock] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setClock(new Date());
    }, 1000);
  }, []);

  return (
    <Headercss>
      <div>
        <Link to="/">
          <i className="fa-solid fa-house"></i>
        </Link>
        <div className="date">
          <div className="date-1">
            {String(clock.getFullYear())}/
            {String(clock.getMonth() + 1).padStart(2, "0")}/
            {String(clock.getDate()).padStart(2, "0")}
          </div>
          <div className="date-2">
            {String(clock.getHours()).padStart(2, "0")}:
            {String(clock.getMinutes()).padStart(2, "0")}:
            {String(clock.getSeconds()).padStart(2, "0")}
          </div>
        </div>
        <button onClick={openAco}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </Headercss>
  );
}

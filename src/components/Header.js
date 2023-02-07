import { Link } from "react-router-dom";
import styled from "styled-components";

const Headercss = styled.header`
  box-sizing: border-box;

  /* Auto layout */
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px 0px 30px;
  height: 130px;
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
  }
`;

export default function Header({ openAco }) {
  return (
    <Headercss>
      <div>
        <Link to="/">
          <i className="fa-solid fa-house"></i>
        </Link>
        <div>시간</div>
        <button onClick={openAco}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </Headercss>
  );
}

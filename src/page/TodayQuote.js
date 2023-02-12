import styled from "styled-components";
import DayQuotes from "../components/DayQuotes";

export default function TodayQuote() {
  const QuoteCss = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100%;

    background-color: #f3f3f3;
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: white;
      width: 760px;
      height: 158px;
    }
    h1 {
      margin-top: 100px;
      padding-bottom: 50px;
      color: #ffa000;
    }
  `;

  return (
    <QuoteCss>
      <h1> Today Quote</h1>
      <DayQuotes />
    </QuoteCss>
  );
}

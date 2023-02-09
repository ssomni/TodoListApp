import styled from "styled-components";

export default function TodayQoute() {
  const Qoute = styled.div`
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
    <Qoute>
      <h1> TodayQoute</h1>
      <div>
        이루어질 꿈도 이루어지지 않을 꿈만큼 불확실할 수 있다.
        <br />- 브렛 버틀러 -
      </div>
    </Qoute>
  );
}

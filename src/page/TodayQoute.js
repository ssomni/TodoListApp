import styled from "styled-components";

export default function TodayQoute() {
  const Qoute = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  `;

  return (
    <Qoute>
      <h1> TodayQoute</h1>
    </Qoute>
  );
}

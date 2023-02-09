import styled from "styled-components";

export default function Creator() {
  const Creator = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #f3f3f3;
    h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 300px;
      height: 100px;
      background-color: white;
    }
  `;
  return (
    <Creator>
      <h1> creator</h1>
    </Creator>
  );
}

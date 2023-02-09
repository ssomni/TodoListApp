import styled from "styled-components";

export default function Creator() {
  const Creator = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: #f3f3f3;
    h1 {
      display: flex;
      justify-content: center;
      align-items: start;
      margin-top: 100px;
      padding: 20px;
      width: 300px;
      height: 500px;
      background-color: white;
    }
  `;
  return (
    <Creator>
      <h1> creator</h1>
    </Creator>
  );
}

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
      margin-top: 100px;
      padding-bottom: 50px;
      color: #ffa000;
    }
    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      > img {
        width: 200px;
        height: 200px;
        border-radius: 100px;
        object-fit: cover;
      }
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      align-items: center;

      padding: 20px;
      width: 300px;
      height: 450px;
      background-color: white;
      border-radius: 20px;
      > h4 {
        margin: 5px;
      }
    }
  `;
  return (
    <Creator>
      <h1> Creator</h1>
      <div>
        <img src="3.jpg" />
        <h2>Song min Shin</h2>
        <h4>Github&nbsp;&nbsp; github.com/ssomni </h4>
        <h4>Mail&nbsp;&nbsp; ssn9991@gmail.com </h4>
        <h4>Instargram&nbsp;&nbsp; 11.song </h4>
      </div>
    </Creator>
  );
}

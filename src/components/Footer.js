import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 100px;
  width: 100%;
  font-size: 0.5em;
  color: #a5a5a5;
  position: relative;
  bottom: 0;
`;

export default function Footer() {
  return (
    <FooterDiv>
      <div>[ CREATE ] &nbsp;&nbsp;2023.02.01 - 2023.02.20</div>
    </FooterDiv>
  );
}

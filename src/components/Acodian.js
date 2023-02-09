import styled from "styled-components";
import Tab from "./Tab";

const TabCss = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100px;
  background: #ffffff;
  border-bottom: 0.5px solid #e2e2e2;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.05);
  position: absolute;

  z-index: 999;
`;

export default function Acodian() {
  return (
    <TabCss>
      <Tab />
    </TabCss>
  );
}

import styled from "styled-components";
import Tab from "./Tab";

const TabCss = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;

  /* padding: 0px 200px; */
  /* gap: 53px; */

  width: 100%;
  height: 100px;
  background: #ffffff;
  border-bottom: 0.5px solid #e2e2e2;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.05);
`;

export default function Acodian() {
  return (
    <div>
      <TabCss>
        <Tab />
      </TabCss>
    </div>
  );
}

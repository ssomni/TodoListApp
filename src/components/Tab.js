import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TabCdd = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin: 0px 200px;
  > a {
    color: black;
    text-decoration: none;
  }
  > a:hover {
    color: #ffa000;
  }
`;

export default function Tab() {
  return (
    <TabCdd>
      <Link to="/todolist">TodoList</Link>
      <Link to="/todayqoute">Todayqoute</Link>
      <Link to="/creator">Creator</Link>
    </TabCdd>
  );
}

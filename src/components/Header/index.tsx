import React from "react";
import styled from "styled-components";

export interface iHeader {}

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Header: React.FC<iHeader> = () => {
  return <HeaderWrapper>Data visualisation tool</HeaderWrapper>;
};

export default Header;

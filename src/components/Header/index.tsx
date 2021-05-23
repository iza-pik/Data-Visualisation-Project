import React from "react";
import styled from "styled-components";
import { iStockInfo } from "../../constants";

export interface iHeader {
  value: keyof iStockInfo;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

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

const valueOptions = ["open", "high", "low", "close"] as (keyof iStockInfo)[];

const Header: React.FC<iHeader> = ({ onChange, value }) => {
  return (
    <HeaderWrapper>
      <h2>Data visualisation tool</h2>
      <form>
        {valueOptions.map((currValue) => (
          <label htmlFor={currValue} key={currValue}>
            <input
              checked={currValue === value}
              id={currValue}
              onChange={onChange}
              type="radio"
              value={currValue}
            />
            {currValue}
          </label>
        ))}
      </form>
    </HeaderWrapper>
  );
};

export default Header;

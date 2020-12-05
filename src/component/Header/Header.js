import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavigationBar = styled.nav`
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
`;

const Logo = styled(Link)`
  color: #74bb34;
  font-size: 48px;
  font-weight: bold;
  text-shadow: 3px 3px #c2e0c2;
  text-decoration: none;
`;

const Options = styled.div`
  display: flex;
`;

const Option = styled(Link)`
  display: flex;
  width: 200px;
  height: 50px;
  justify-content: center;
  align-items: center;
  color: #74bb34;
  font-size: 36px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;

  & + & {
    margin-left: 20px;
  }

  &:hover {
    color: white;
    background: #74bb34;
  }
`;

export default function Header() {
  return (
      <NavigationBar>
        <Logo to="/">八六蔬食吧</Logo>
        <Options>
          <Option to="/menu">看菜單</Option>
          <Option to="/reserve">我要訂位</Option>
          <Option to="/login">會員登入</Option>
        </Options>
      </NavigationBar>
  );
}

import { React } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../constants/devices';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 30px;
  background: white;
  color: #333;
  box-shadow: 3px 3px 4px #ccc;

  @media ${device.mobileS} {
    border-radius: 0;
    padding: 0;
    width: 100%;
  }

  @media ${device.laptop} {
    border-radius: 10px;
    width: 1200px;
    padding: 20px;
  }
`;
const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  font-weight: bold;
  background: white;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 3px #ccc;
  color: #333;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    background: #eee;
  }

  @media ${device.mobileS} {
    width: 80px;
    font-size: 16px;
  }

  @media ${device.tablet} {
    width: 160px;
    font-size: 24px;
  }
`;

export default function AdminNav() {
  return (
    <Nav>
      <Button to="/admin/menu">菜單管理</Button>
      <Button to="/admin/reserve">訂位管理</Button>
    </Nav>
  );
}

import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../constants/devices';

const NavigationBar = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  border-bottom:1px solid #efefef;

  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: column;
    padding: 0 20px;
  }

  @media ${device.laptop} {
    padding: 0 40px;
  }

  @media ${device.laptopL} {
    flex-direction: row;
    padding: 30px 80px;
  }
`;

const Logo = styled(Link)`
  display: block;
  color: #74bb34;
  font-size: 48px;
  font-weight: bold;
  text-shadow: 3px 3px #c2e0c2;
  text-decoration: none;
`;

const Options = styled.div`
  display: flex;
  align-items: center;

  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    flex-direction: row;
  }
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

  &:hover {
    color: white;
    background: #74bb34;
  }

  @media ${device.mobileS} {
    & + & {
      margin-left: 0;
    }
  }

  @media ${device.tablet} {
    & + & {
      margin-left: 20;
    }
  }
`;

export default function Header() {
  return (
    <NavigationBar id="header">
      <Logo to="/">八六蔬食吧</Logo>
      <Options>
        <Option to="/menu">看菜單</Option>
        <Option to="/reserve">我要訂位</Option>
        <Option to="/login">會員登入</Option>
        <Option to="/admin/menu">admin</Option>
      </Options>
    </NavigationBar>
  );
}

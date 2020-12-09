import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../constants/devices';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
  background: #fefff8;
  padding-top: 20px;
`;

const Container = styled.div`
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
    width: 560px;
  }
`;

const ImputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;

const InputLabel = styled.label`
  font-weight: bold;
  margin-right: 30px;
  font-size: 24px;
`;

const Input = styled.input`
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  height: 50px;
  font-weight: bold;
  background: white;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 3px #ccc;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #eee;
  }

  & + & {
    margin-left: 30px;
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

export default function Login() {
  return (
    <Root>
      <Container>
        <form>
          <ImputContainer>
            <InputLabel>帳號</InputLabel>
            <Input required />
          </ImputContainer>
          <ImputContainer>
            <InputLabel>密碼</InputLabel>
            <Input type="password" required />
          </ImputContainer>
          <ImputContainer>
            <Button>登入</Button>
            <Button>註冊</Button>
          </ImputContainer>
        </form>
      </Container>
    </Root>
  );
}

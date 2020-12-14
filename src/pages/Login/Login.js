import { useState, useRef, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../constants/devices';
import { useHistory } from 'react-router-dom';
import { getMe, login } from '../../WebAPI';
import { setAuthToken } from '../../utils';
import { AuthContext } from '../../contexts';
import Preload from '../../components/Preload';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
  background: #fefff8;
  padding-top: 20px;
  animation: fade-in 0.5s ease-in-out;
`;

const Container = styled.div`
  position: relative;
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

const InputContainer = styled.div`
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

  @media ${device.mobileS} {
    width: 80px;
    font-size: 16px;
  }

  @media ${device.tablet} {
    width: 160px;
    font-size: 24px;
  }
`;

const SignUpButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin-left: 30px;
  font-weight: bold;
  background: white;
  border: none;
  border-radius: 10px;
  box-shadow: 2px 2px 3px #ccc;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

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

const ErrorMessage = styled.div`
  position: absolute;
  top: 56%;
  left: 42%;
  color: red;
`;

export default function Login() {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isSubmit = useRef(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    setErrorMessage('');
    e.preventDefault();
    if (isSubmit.current) return;
    isSubmit.current = true;
    setIsLoading(true);

    login(username, password).then((data) => {
      if (data.ok === 0) {
        setErrorMessage(data.message);
        isSubmit.current = false;
        return;
      }
      setAuthToken(data.token);
      getMe().then((response) => {
        if (response.ok !== 1) {
          setAuthToken('');
          return setErrorMessage('認證錯誤');
        }
        setUser(response.data);
        setIsLoading(false);
        history.push('/');
        isSubmit.current = false;
      });
    });
  };

  return (
    <Root>
      <Container>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <InputLabel>帳號</InputLabel>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <InputLabel>密碼</InputLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputContainer>
          {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          <InputContainer>
            <Button type="submit">登入</Button>
            <SignUpButton to="signup">註冊</SignUpButton>
          </InputContainer>
        </form>
      </Container>
      <Preload isShow={isLoading} message="登入中..." />
    </Root>
  );
}

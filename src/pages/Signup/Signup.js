import { React, useState, useContext, useRef } from 'react';
import styled from 'styled-components';
import { isPhoneValid, setAuthToken} from '../../utils';
import { signUp, getMe } from '../../WebAPI';
import { device } from '../../constants/devices';
import { AuthContext } from '../../contexts';
import { useHistory } from 'react-router-dom';
import Modal from '../../components/Modal';

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

const InputContainer = styled.div`
  position: relative;
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

const ErrorMessage = styled.div`
  position: absolute;
  top: 36px;
  color: red;
`;

export default function Signup() {
  const { setUser } = useContext(AuthContext);
  const [isShowModal, setIsShowModal] = useState(false);
  const [userName, setUserName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const isSubmit = useRef(false);
  const history = useHistory();

  const handleCheckPhone = () => {
    if (!isPhoneValid(phone)) return setErrorMessage('請輸入正確的電話號碼');
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmit.current) return;
    if (!isPhoneValid(phone)) return setErrorMessage('請輸入正確的電話號碼');
    setErrorMessage('');
    signUp({ userName, phone, password }).then((res) => {
      if (res.ok !== 1) return setErrorMessage('此帳號已被註冊');
      setAuthToken(res.token);
      getMe(res.token).then((response) => {
        if (response.ok !== 1) {
          setAuthToken('');
          return setErrorMessage(response.toString());
        }
        setUser(response.data);
        setIsShowModal(true);
        isSubmit.current = false;
      });
    });
  };

  const handleCloseModal = () => {
    history.push('/');
  };

  return (
    <Root>
      <Container>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <InputLabel>帳號</InputLabel>
            <Input
              required
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel>電話</InputLabel>
            <Input
              type="number"
              required
              onChange={(e) => setPhone(e.target.value)}
              onBlur={handleCheckPhone}
              value={phone}
            />
          </InputContainer>

          <InputContainer>
            <InputLabel>密碼</InputLabel>
            <Input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
          </InputContainer>

          <InputContainer>
            <Button>送出</Button>
          </InputContainer>
        </form>
      </Container>
      <Modal
        message="註冊成功"
        isShowModal={isShowModal}
        closeModal={handleCloseModal}
      />
    </Root>
  );
}

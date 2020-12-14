import { React, useState, useEffect } from 'react';
import styled from 'styled-components';
import { device } from '../../constants/devices';
import Calendar from 'react-calendar';
import { useHistory } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css';
import { addReserve, getReserve } from '../../WebAPI';
import Modal from '../../components/Modal';
import { useContext } from 'react';
import { AuthContext } from '../../contexts';
import {
  getToday,
  initAvailableTime,
  getAvailableTime,
  isPhoneValid,
} from '../../utils';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fefff8;
  padding-top: 20px;
  animation: fade-in 0.5s ease-in-out;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  background: white;

  color: #333;
  box-shadow: 3px 3px 4px #ccc;

  @media ${device.mobileS} {
    border-radius: 0;
    padding: 0;
    padding-bottom: 20px;
    width: 100%;
  }

  @media ${device.laptop} {
    border-radius: 10px;
    width: 1200px;
    padding: 20px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 46px 0;
`;

const InputLabel = styled.label`
  font-weight: bold;
  margin-right: 30px;
  font-size: 24px;

  @media ${device.mobileS} {
    font-size: 18px;
    margin-right: 10px;
  }
  @media ${device.laptop} {
    font-size: 24px;
    margin-right: 30px;
  }
`;

const Input = styled.input`
  &:focus {
    outline: none;
  }

  @media ${device.mobileS} {
    width: 150px;
  }
  @media ${device.laptop} {
    width: 300px;
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

const Topcontainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 50px;

  @media ${device.mobileS} {
    flex-direction: column;
    width: 100%;
    font-size: 16px;
  }

  @media ${device.laptop} {
    flex-direction: row;
    width: 80%;
    font-size: 16px;
  }
`;

const Bottomcontainer = styled.div`
  display: flex;
  align-items: center;

  @media ${device.mobileS} {
    flex-direction: column;
    width: 100%;
    font-size: 16px;
  }
`;

const ReserveTime = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  margin: 10px 10px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 50%;
  box-shadow: 2px 2px 3px #ccc;
  transition: all 0.2s ease-in-out;
  background: ${(props) => (props.$active ? '#74bb34' : 'white')};
  cursor: pointer;
  animation: fade-in-1 0.5s;

  &:hover {
    background: ${(props) => (props.$active ? '#74bb34' : '#eee')};
  }
`;

const TimeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const ErrorMessage = styled.span`
  margin-left: 20px;
  color: red;
`;

export default function Reserve() {
  const { user, setUser } = useContext(AuthContext);
  const [isShowModal, setIsShowModal] = useState(false);
  const [entryTime, setEntryTime] = useState('');
  const [availableTime, setAvailableTime] = useState(() => initAvailableTime());
  const [date, setDate] = useState(() => getToday());
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [value, onChange] = useState(new Date());

  const handleClickDay = (value) => {
    const dateArray = value.toDateString().split(' ');
    const date = `${dateArray[1]} ${dateArray[2]} ${dateArray[3]}`;
    setDate(date);
    setEntryTime('');
    getReserve(date).then((res) => {
      setAvailableTime(getAvailableTime(res));
    });
  };

  const handleClickTime = (timeIndex) => {
    setEntryTime(timeIndex);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isPhoneValid(phone)) return setErrorMessage('請輸入正確的電話號碼');
    if (entryTime==='') {
      setErrorMessage('還沒選擇時段喔！');
      return;
    }
    setIsShowModal(true);
    setErrorMessage('');
    addReserve({ date, entryTime, name, phone, amount, username: user }).then(
      () => {
        getReserve(date).then((res) => {
          setAvailableTime(getAvailableTime(res));
        });
      }
    );
  };

  useEffect(() => {
    getReserve(date).then((res) => {
      setAvailableTime(getAvailableTime(res));
    });
  }, []);

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  return (
    <Root>
      <Container>
        <Topcontainer>
          <form onSubmit={handleSubmit}>
            <InputContainer>
              <InputLabel>姓名</InputLabel>
              <Input onChange={(e) => setName(e.target.value)} required />
            </InputContainer>
            <InputContainer>
              <InputLabel>電話</InputLabel>
              <Input
                type="number"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>人數</InputLabel>
              <Input
                type="number"
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </InputContainer>
            <InputContainer>
              <Button>送出</Button>
              {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
            </InputContainer>
          </form>
          <Calendar
            onChange={onChange}
            showNeighboringMonth={false}
            value={value}
            onClickDay={handleClickDay}
          />
        </Topcontainer>

        <Bottomcontainer>
          <InputLabel>選擇預約時段：</InputLabel>
          <TimeContainer>
            {availableTime.map(
              (data, index) =>
                data.isAvailable && (
                  <ReserveTime
                    $active={data.index === entryTime}
                    onClick={() => handleClickTime(data.index)}
                    key={index}
                  >
                    {data.time}
                  </ReserveTime>
                )
            )}
          </TimeContainer>
        </Bottomcontainer>
      </Container>
      <Modal
        message="訂位成功"
        isShowModal={isShowModal}
        closeModal={handleCloseModal}
      />
    </Root>
  );
}

import { React, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { device } from '../../constants/devices';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fefff8;
  padding-top: 20px;
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

const Topcontainer = styled.div`
  width: 60%;
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
    width: 75%;
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
  cursor: pointer;

  &:hover {
    background: #eee;
  }
`;

const TimeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export default function Reserve() {
  const [value, onChange] = useState(new Date());

  return (
    <Root>
      <Container>
        <Topcontainer>
          <div>
            <InputContainer>
              <InputLabel>姓名</InputLabel>
              <Input required />
            </InputContainer>
            <InputContainer>
              <InputLabel>電話</InputLabel>
              <Input required />
            </InputContainer>
            <InputContainer>
              <InputLabel>人數</InputLabel>
              <Input required />
            </InputContainer>
          </div>
          <Calendar
            onChange={onChange}
            showNeighboringMonth={false}
            value={value}
            onClickDay={(value, event) => console.log(value.toDateString())}
          />
        </Topcontainer>

        <Bottomcontainer>
          <InputLabel>可預約時段：</InputLabel>
          <TimeContainer>
            <ReserveTime>13:00</ReserveTime>
            <ReserveTime>13:00</ReserveTime>
            <ReserveTime>13:00</ReserveTime>
            <ReserveTime>13:00</ReserveTime>
            <ReserveTime>13:00</ReserveTime>
            <ReserveTime>13:00</ReserveTime>
            <ReserveTime>13:00</ReserveTime>
            <ReserveTime>13:00</ReserveTime>
            <ReserveTime>13:00</ReserveTime>
            <ReserveTime>13:00</ReserveTime>
          </TimeContainer>
        </Bottomcontainer>
      </Container>
    </Root>
  );
}
